"use client";

import { useContactForm } from "@/hooks/useContactForm";
import ContactInfo from "./contact/ContactInfo";
import ContactSuccess from "./contact/ContactSuccess";
import BriefingForm from "./contact/BriefingForm";

interface SectionProps {
  id?: string;
}

export default function ContactForm({ id = "contact" }: SectionProps) {
  const {
    isSubmitting,
    submissionResult,
    setSubmissionResult,
    register,
    handleSubmit,
    onSubmit,
    errors,
  } = useContactForm();

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
          
          {/* LEFT COLUMN - LUXURY INFO & URGENCY BRIEFING */}
          <ContactInfo />

          {/* RIGHT COLUMN - THE HIGH PERFORMANCE FORM BRIEFING */}
          <div className="lg:col-span-7 relative">
            <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-[#C9A84C]/25 via-transparent to-[#C9A84C]/5">
              <div className="bg-[#111111] p-6 sm:p-10 rounded-2xl border border-white/[0.04] shadow-2xl relative">
                
                {/* Dynamically Slid Success Screen Block */}
                {submissionResult && submissionResult.success && (
                  <ContactSuccess
                    nameSent={submissionResult.nameSent}
                    onReset={() => setSubmissionResult(null)}
                  />
                )}

                {/* Primary Form Tag */}
                <BriefingForm
                  register={register}
                  handleSubmit={handleSubmit}
                  onSubmit={onSubmit}
                  errors={errors}
                  submissionResult={submissionResult}
                  isSubmitting={isSubmitting}
                />

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
