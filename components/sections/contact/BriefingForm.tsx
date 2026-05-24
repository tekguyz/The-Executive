"use client";

import { Loader2, AlertCircle } from "lucide-react";

interface BriefingFormProps {
  register: any;
  handleSubmit: any;
  onSubmit: any;
  errors: any;
  submissionResult: any;
  isSubmitting: boolean;
}

export default function BriefingForm({
  register,
  handleSubmit,
  onSubmit,
  errors,
  submissionResult,
  isSubmitting,
}: BriefingFormProps) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
      
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
        <div className="flex flex-col gap-1.5 font-bold">
          <label htmlFor="name" className="text-[10px] font-accent text-[#8A8580] uppercase tracking-widest font-bold">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            {...register("name")}
            className={`bg-[#1a1a1a] text-xs sm:text-sm text-white rounded-lg px-4 py-3.5 outline-none border focus:border-[#C9A84C] transition-all placeholder-[#444] font-normal ${
              errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/[0.05]"
            }`}
          />
          {errors.name && (
            <span className="flex items-center gap-1 text-[10px] text-red-400 mt-1 font-normal">
              <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
              <span>{errors.name.message}</span>
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5 font-bold">
          <label htmlFor="phone" className="text-[10px] font-accent text-[#8A8580] uppercase tracking-widest font-bold">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(772) 000-0000"
            {...register("phone")}
            className={`bg-[#1a1a1a] text-xs sm:text-sm text-white rounded-lg px-4 py-3.5 outline-none border focus:border-[#C9A84C] transition-all placeholder-[#444] font-normal ${
              errors.phone ? "border-red-500/50 focus:border-red-500" : "border-white/[0.05]"
            }`}
          />
          {errors.phone && (
            <span className="flex items-center gap-1 text-[10px] text-red-400 mt-1 font-normal">
              <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
              <span>{errors.phone.message}</span>
            </span>
          )}
        </div>
      </div>

      {/* Field: Email */}
      <div className="flex flex-col gap-1.5 font-bold">
        <label htmlFor="email" className="text-[10px] font-accent text-[#8A8580] uppercase tracking-widest font-bold">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="e.g. pilot@domain.com"
          {...register("email")}
          className={`bg-[#1a1a1a] text-xs sm:text-sm text-white rounded-lg px-4 py-3.5 outline-none border focus:border-[#C9A84C] transition-all placeholder-[#444] font-normal ${
            errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/[0.05]"
          }`}
        />
        {errors.email && (
          <span className="flex items-center gap-1 text-[10px] text-red-400 mt-1 font-normal">
            <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
            <span>{errors.email.message}</span>
          </span>
        )}
      </div>

      {/* Field Group Row 2: Vehicle Classification & Service category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-bold">
        
        {/* Select Vehicle Type */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="vehicleType" className="text-[10px] font-accent text-[#8A8580] uppercase tracking-widest font-bold">
            Vehicle Type
          </label>
          <select
            id="vehicleType"
            {...register("vehicleType")}
            className={`bg-[#1a1a1a] text-xs sm:text-sm text-white rounded-lg px-4 py-3.5 outline-none border focus:border-[#C9A84C] transition-all font-normal ${
              errors.vehicleType ? "border-red-500/50" : "border-white/[0.05]"
            }`}
          >
            <option value="" disabled>Select Classification</option>
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
            <span className="flex items-center gap-1 text-[10px] text-red-400 mt-1 font-normal">
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
            className={`bg-[#1a1a1a] text-xs sm:text-sm text-white rounded-lg px-4 py-3.5 outline-none border focus:border-[#C9A84C] transition-all font-normal ${
              errors.serviceType ? "border-red-500/50" : "border-white/[0.05]"
            }`}
          >
            <option value="" disabled>Select Interest</option>
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
            <span className="flex items-center gap-1 text-[10px] text-red-400 mt-1 font-normal">
              <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
              <span>{errors.serviceType.message}</span>
            </span>
          )}
        </div>
      </div>

      {/* Field: Location */}
      <div className="flex flex-col gap-1.5 font-bold">
        <label htmlFor="location" className="text-[10px] font-accent text-[#8A8580] uppercase tracking-widest font-bold">
          Location / Address
        </label>
        <input
          id="location"
          type="text"
          placeholder="Where should we come to you? (City or marina)"
          {...register("location")}
          className={`bg-[#1a1a1a] text-xs sm:text-sm text-white rounded-lg px-4 py-3.5 outline-none border focus:border-[#C9A84C] transition-all placeholder-[#444] font-normal ${
            errors.location ? "border-red-500/50 focus:border-red-500" : "border-white/[0.05]"
          }`}
        />
        {errors.location && (
          <span className="flex items-center gap-1 text-[10px] text-red-400 mt-1 font-normal">
            <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
            <span>{errors.location.message}</span>
          </span>
        )}
      </div>

      {/* Field: Message Context */}
      <div className="flex flex-col gap-1.5 font-bold">
        <label htmlFor="message" className="text-[10px] font-accent text-[#8A8580] uppercase tracking-widest font-bold">
          Message (Optional)
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your vehicle or any specific concerns..."
          {...register("message")}
          className="bg-[#1a1a1a] text-xs sm:text-sm text-white rounded-lg px-4 py-3 outline-none border border-white/[0.05] focus:border-[#C9A84C] transition-all placeholder-[#444] resize-none font-normal"
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
            <span>TRANSMITTING BRIEFING...</span>
          </>
        ) : (
          <span>Request My Free Quote →</span>
        )}
      </button>

    </form>
  );
}
