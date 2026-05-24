"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Zod Validation Schema for all requested fields
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email address"),
  vehicleType: z.string().min(1, "Please select your vehicle classification"),
  serviceType: z.string().min(1, "Please select the service of interest"),
  location: z.string().min(3, "Location or address is required"),
  message: z.string().optional(),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;

export function useContactForm() {
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

  return {
    isSubmitting,
    submissionResult,
    setSubmissionResult,
    register,
    handleSubmit: (onValid: any) => handleSubmit(onValid),
    onSubmit,
    errors,
    isValid,
  };
}
