"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "motion/react";
import { Phone, MapPin, Clock, Facebook, Mail, Loader2, AlertCircle, ShieldCheck, CheckCircle } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";

// Zod Validation Schema for all requested fields
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email address"),
  vehicleType: z.string().min(1, "Please select your vehicle classification"),
  serviceType: z.string().min(1, "Please select the service of interest"),
  location: z.string().min(3, "Location or address is required"),
  message: z.string().optional(),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

interface SectionProps {
  id?: string;
}

export default function ContactForm({ id = "contact" }: SectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    nameSent?: string;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur", // inline validation triggered when element loses focus
    defaultValues: {
      vehicleType: "",
      serviceType: "",
      location: "",
      message: "",
    }
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resBody = await response.json();

      if (response.ok && resBody.success) {
        setSubmissionResult({
          success: true,
          nameSent: data.name,
          message: resBody.message || "Your quote request has been transmitted.",
        });
        reset();
      } else {
        setSubmissionResult({
          success: false,
          message: resBody.message || "Failed to submit. Please try again or reach out to Jason directly.",
        });
      }
    } catch (err: any) {
      console.error("Form transmission error:", err);
      setSubmissionResult({
        success: false,
        message: "An unexpected error occurred. Please contact Jason directly at (772) 631-1339.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id={id} 
      className="py-24 bg-[#0a0a0a] relative overflow-hidden text-left border-t border-[rgba(201,168,76,0.06)]"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmerGleam {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shine-sweep {
          background: linear-gradient(90deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%);
          background-size: 200% auto;
        }
        .shine-sweep:hover {
          animation: shimmerGleam 2.5s infinite linear;
        }
      `}} />

      {/* Decorative Halo Backlights */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-[#C9A84C]/2 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-10%] w-[450px] h-[450px] bg-[#C9A84C]/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dynamic Inner Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* ==============================================
              LEFT COLUMN - LUXURY INFO & URGENCY BRIEFING
             ============================================== */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
            
            <div className="flex flex-col gap-3">
              <span className="font-accent text-[#C9A84C] text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-bold">
                COMMISSION A DETAIL
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#F5F0E8] leading-tight tracking-tight">
                Ready For A Showroom Finish?
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm text-[#8A8580] leading-relaxed font-light">
              Call or text Jason directly, or fill out our priority briefing form and we&apos;ll get back to you same day with a complete quote breakdown. We bring everything to your driveway, dock, or hangar.
            </p>

            {/* Direct Contact Detail Cards */}
            <div className="flex flex-col gap-4 mt-4">
              
              {/* Phone Detail */}
              <div 
                id="contact_info_phone_card"
                className="bg-[#111111] p-5 rounded-xl border border-white/[0.03] flex items-start gap-4 hover:border-[#C9A84C]/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/5 border border-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-accent text-[9px] text-[#8A8580] uppercase tracking-widest block mb-0.5">DIRECT HOTLINE</span>
                  <a 
                    href={`tel:${SITE_INFO.phoneRaw}`} 
                    className="text-base sm:text-lg text-[#E8C97A] font-display font-semibold hover:underline block"
                  >
                    {SITE_INFO.phone}
                  </a>
                  <span className="text-[10px] text-[#8A8580] block mt-0.5">Call or Text Owner Jason Directly</span>
                </div>
              </div>

              {/* Facebook Detail */}
              <div 
                id="contact_info_facebook_card"
                className="bg-[#111111] p-5 rounded-xl border border-white/[0.03] flex items-start gap-4 hover:border-[#C9A84C]/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/5 border border-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] shrink-0">
                  <Facebook className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-accent text-[9px] text-[#8A8580] uppercase tracking-widest block mb-0.5 font-bold">FACEBOOK LINK</span>
                  <a 
                    href="https://facebook.com/Theexecutivedetailer/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-sans font-medium text-[#F5F0E8] hover:text-[#C9A84C] hover:underline block mt-0.5"
                  >
                    The Executive Image on Facebook
                  </a>
                </div>
              </div>

              {/* Service Areas */}
              <div 
                id="contact_info_locations_card"
                className="bg-[#111111] p-5 rounded-xl border border-white/[0.03] flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/5 border border-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-accent text-[9px] text-[#8A8580] uppercase tracking-widest block mb-0.5">SERVING COUNTIES</span>
                  <p className="text-xs text-[#F5F0E8] leading-relaxed font-light">
                    Stuart, Port St. Lucie, Jensen Beach, Palm City, Hobe Sound, Fort Pierce &amp; All Treasure Coast locations.
                  </p>
                </div>
              </div>

              {/* Clock responsiveness */}
              <div 
                id="contact_info_hours_card"
                className="bg-[#111111] p-4 rounded-xl border border-white/[0.02] flex items-center gap-4.5 text-xs text-[#8A8580]"
              >
                <Clock className="w-4 h-4 text-[#C9A84C] shrink-0" />
                <span className="font-light">
                  <strong className="text-white font-medium">Response Time:</strong> Same Day guaranteed. We bring power &amp; filtered water.
                </span>
              </div>

            </div>

            {/* Insurance banner info */}
            <div className="mt-2 p-5 rounded-xl bg-gradient-to-r from-[#C9A84C]/6 to-[#C9A84C]/1 border border-[#C9A84C]/15 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
              <div className="text-[11px] leading-relaxed text-[#8A8580] font-light">
                <span className="font-accent uppercase tracking-wider text-white font-bold block mb-1">COMPREHENSIVELY PROTECTED</span>
                Fully licensed, bonded, and backed by garagekeepers liability insurance covers to defend delicate supercars, watercraft, and aerospace investments.
              </div>
            </div>

          </div>

          {/* ==============================================
              RIGHT COLUMN - THE HIGH PERFORMANCE FORM BRIEFING
             ============================================== */}
          <div className="lg:col-span-7 relative">
            <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-[#C9A84C]/25 via-transparent to-[#C9A84C]/5">
              <div className="bg-[#111111] p-6 sm:p-10 rounded-2xl border border-white/[0.04] shadow-2xl relative">
                
                {/* Dynamically Slid Success Screen Block */}
                {submissionResult && submissionResult.success && (
                  <div className="absolute inset-0 bg-[#0c0c0c]/98 z-50 flex flex-col items-center justify-center p-6 sm:p-12 text-center rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] mb-6">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    
                    <h3 className="font-display font-medium text-2xl sm:text-3xl text-[#F5F0E8] tracking-tight">
                      Submission Confirmed
                    </h3>
                    
                    <p className="text-sm font-light text-[#8A8580] max-w-md mt-4 leading-relaxed">
                      🏆 Thanks, <strong className="text-white font-medium">{submissionResult.nameSent}</strong>! We&apos;ll text or call you within a few hours to prioritize your estimate specs.
                    </p>

                    <div className="mt-8 pt-6 border-t border-white/[0.05] w-full max-w-sm">
                      <p className="text-xs text-[#8A8580] mb-3">Need instant slot booking?</p>
                      <a 
                        href={`tel:${SITE_INFO.phoneRaw}`} 
                        className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#161616] border border-[#C9A84C]/35 hover:border-[#C9A84C] rounded-lg text-xs font-accent tracking-widest text-[#E8C97A] uppercase font-bold hover:bg-[#C9A84C]/10 transition-all"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#C9A84C]" />
                        <span>Call Jason: {SITE_INFO.phone}</span>
                      </a>
                    </div>

                    <button
                      onClick={() => setSubmissionResult(null)}
                      className="mt-6 text-[10px] font-accent text-[#8A8580] hover:text-white uppercase tracking-widest underline underline-offset-4"
                    >
                      Commission Another Vehicle Detail
                    </button>
                  </div>
                )}

                {/* Primary Form Tag */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Validation Error Banner */}
                  {submissionResult && !submissionResult.success && (
                    <div className="p-4 bg-red-950/20 border border-red-900/40 rounded-lg flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-red-200 leading-normal">
                        {submissionResult.message}
                      </p>
                    </div>
                  )}

                  {/* Field group Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] font-accent text-[#8A8580] uppercase tracking-widest font-bold">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        {...register("name")}
                        className={`bg-[#1a1a1a] text-xs sm:text-sm text-white rounded-lg px-4 py-3.5 outline-none border focus:border-[#C9A84C] transition-all placeholder-[#444] ${
                          errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/[0.05]"
                        }`}
                      />
                      {errors.name && (
                        <span className="flex items-center gap-1 text-[10px] text-red-400 mt-1">
                          <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
                          <span>{errors.name.message}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[10px] font-accent text-[#8A8580] uppercase tracking-widest font-bold">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(772) 000-0000"
                        {...register("phone")}
                        className={`bg-[#1a1a1a] text-xs sm:text-sm text-white rounded-lg px-4 py-3.5 outline-none border focus:border-[#C9A84C] transition-all placeholder-[#444] ${
                          errors.phone ? "border-red-500/50 focus:border-red-500" : "border-white/[0.05]"
                        }`}
                      />
                      {errors.phone && (
                        <span className="flex items-center gap-1 text-[10px] text-red-400 mt-1">
                          <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
                          <span>{errors.phone.message}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Field: Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-accent text-[#8A8580] uppercase tracking-widest font-bold">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. pilot@domain.com"
                      {...register("email")}
                      className={`bg-[#1a1a1a] text-xs sm:text-sm text-white rounded-lg px-4 py-3.5 outline-none border focus:border-[#C9A84C] transition-all placeholder-[#444] ${
                        errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/[0.05]"
                      }`}
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1 text-[10px] text-red-400 mt-1">
                        <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
                        <span>{errors.email.message}</span>
                      </span>
                    )}
                  </div>

                  {/* Field Group Row 2: Vehicle Classification & Service category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Select Vehicle Type */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="vehicleType" className="text-[10px] font-accent text-[#8A8580] uppercase tracking-widest font-bold">
                        Vehicle Type
                      </label>
                      <select
                        id="vehicleType"
                        {...register("vehicleType")}
                        className={`bg-[#1a1a1a] text-xs sm:text-sm text-white rounded-lg px-4 py-3.5 outline-none border focus:border-[#C9A84C] transition-all ${
                          errors.vehicleType ? "border-red-500/50" : "border-white/[0.05]"
                        }`}
                      >
                        <option value="" disabled className="text-gray-500">Select Classification</option>
                        <option value="Passenger Car / Sedan">Passenger Car / Sedan</option>
                        <option value="SUV / Truck / Van">SUV / Truck / Van</option>
                        <option value="Motorcycle / Trike">Motorcycle / Trike</option>
                        <option value="Exotic / Luxury Car">Exotic / Luxury Car</option>
                        <option value="Boat / Yacht">Boat / Yacht</option>
                        <option value="RV / Motorhome">RV / Motorhome</option>
                        <option value="Aircraft">Aircraft</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.vehicleType && (
                        <span className="flex items-center gap-1 text-[10px] text-red-400 mt-1">
                          <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
                          <span>{errors.vehicleType.message}</span>
                        </span>
                      )}
                    </div>

                    {/* Select Service Type */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="serviceType" className="text-[10px] font-accent text-[#8A8580] uppercase tracking-widest font-bold">
                        Service Interested In
                      </label>
                      <select
                        id="serviceType"
                        {...register("serviceType")}
                        className={`bg-[#1a1a1a] text-xs sm:text-sm text-white rounded-lg px-4 py-3.5 outline-none border focus:border-[#C9A84C] transition-all ${
                          errors.serviceType ? "border-red-500/50" : "border-white/[0.05]"
                        }`}
                      >
                        <option value="" disabled className="text-gray-500">Select Interest</option>
                        <option value="Ceramic Coating">Ceramic Coating</option>
                        <option value="Paint Correction">Paint Correction</option>
                        <option value="Full Detail (Interior + Exterior)">Full Detail (Interior + Exterior)</option>
                        <option value="Interior Detail Only">Interior Detail Only</option>
                        <option value="Exterior Detail Only">Exterior Detail Only</option>
                        <option value="Marine Detailing">Marine Detailing</option>
                        <option value="Aeronautical Detailing">Aeronautical Detailing</option>
                        <option value="Headlight Restoration">Headlight Restoration</option>
                        <option value="Not Sure — Need Advice">Not Sure — Need Advice</option>
                      </select>
                      {errors.serviceType && (
                        <span className="flex items-center gap-1 text-[10px] text-red-400 mt-1">
                          <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
                          <span>{errors.serviceType.message}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Field: Location */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="location" className="text-[10px] font-accent text-[#8A8580] uppercase tracking-widest font-bold">
                      Location / Address
                    </label>
                    <input
                      id="location"
                      type="text"
                      placeholder="Where should we come to you? (City or marina)"
                      {...register("location")}
                      className={`bg-[#1a1a1a] text-xs sm:text-sm text-white rounded-lg px-4 py-3.5 outline-none border focus:border-[#C9A84C] transition-all placeholder-[#444] ${
                        errors.location ? "border-red-500/50 focus:border-red-500" : "border-white/[0.05]"
                      }`}
                    />
                    {errors.location && (
                      <span className="flex items-center gap-1 text-[10px] text-red-400 mt-1">
                        <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
                        <span>{errors.location.message}</span>
                      </span>
                    )}
                  </div>

                  {/* Field: Message Context */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] font-accent text-[#8A8580] uppercase tracking-widest font-bold font-bold">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your vehicle or any specific concerns..."
                      {...register("message")}
                      className="bg-[#1a1a1a] text-xs sm:text-sm text-white rounded-lg px-4 py-3 outline-none border border-white/[0.05] focus:border-[#C9A84C] transition-all placeholder-[#444] resize-none"
                    />
                  </div>

                  {/* Submit Button Trigger with Shimmer Sweep */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative py-4 rounded-xl font-accent text-xs font-bold tracking-widest uppercase text-black shine-sweep shadow-[0_4px_20px_rgba(201,168,76,0.22)] overflow-hidden transition-all duration-300 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>TRANS mitting BRIEFING...</span>
                      </>
                    ) : (
                      <span>Request My Free Quote →</span>
                    )}
                  </button>

                </form>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
