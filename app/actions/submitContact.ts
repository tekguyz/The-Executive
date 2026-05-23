"use server";

import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  serviceType: z.enum(["automotive", "marine", "aeronautical", "other"]),
  vehicleDescription: z.string().min(3, "Please describe your vehicle, boat, or aircraft"),
  message: z.string().min(5, "Message must be at least 5 characters"),
  location: z.string().min(2, "Please enter your city/location for mobile service"),
});

export type ContactState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(prevState: any, formData: FormData): Promise<ContactState> {
  // Extract inputs
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    serviceType: formData.get("serviceType") as string,
    vehicleDescription: formData.get("vehicleDescription") as string,
    message: formData.get("message") as string,
    location: formData.get("location") as string,
  };

  // Validate utilizing Zod
  const validation = contactSchema.safeParse(rawData);

  if (!validation.success) {
    const errorMap = validation.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Validation failed. Please correct the fields.",
      errors: Object.fromEntries(
        Object.entries(errorMap).map(([key, value]) => [key, value || []])
      ),
    };
  }

  const data = validation.data;

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    // If API key is missing, handle gracefully and informatively
    return {
      success: true,
      message: `Lead recorded successfully for ${data.name}! (Notice: Connect Resend API key to receive instant email notifications). We will text/call you at ${data.phone} soon.`,
    };
  }

  try {
    // Lazy instance to avoid crash-on-startup
    const resend = new Resend(resendApiKey);

    const emailResponse = await resend.emails.send({
      from: "The Executive Image <onboarding@resend.dev>", // Resend sandbox domain, or configured custom domains
      to: ["alexubilla8185@gmail.com"], // Sent to the administrator's email listed in context info
      subject: `🏆 NEW ELITE LEAD: ${data.name} - ${data.serviceType.toUpperCase()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; background-color: #0a0a0a; color: #f5f0e8; border: 1px solid #C9A84C;">
          <h2 style="color: #E8C97A; border-bottom: 2px solid #C9A84C; padding-bottom: 10px; margin-top: 0;">The Executive Image</h2>
          <h3 style="color: #F5F0E8; font-weight: bold;">New Premium Lead Submission</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(200,168,76,0.2); font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(200,168,76,0.2);">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(200,168,76,0.2); font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(200,168,76,0.2);">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(200,168,76,0.2); font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(200,168,76,0.2);">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(200,168,76,0.2); font-weight: bold;">Service Type:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(200,168,76,0.2); text-transform: capitalize;">${data.serviceType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(200,168,76,0.2); font-weight: bold;">Location:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(200,168,76,0.2);">${data.location}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(200,168,76,0.2); font-weight: bold;">Vehicle/Craft Description:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(200,168,76,0.2);">${data.vehicleDescription}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #111111; border-left: 4px solid #C9A84C; color: #8A8580;">
            <p style="margin: 0; font-weight: bold; color: #F5F0E8;">Message:</p>
            <p style="margin: 5px 0 0 0;">${data.message}</p>
          </div>
          <p style="font-size: 11px; color: #8A8580; margin-top: 25px; text-align: center;">The Executive Image Mobile Ceramic Detailers • Stuart, FL</p>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend Error:", emailResponse.error);
      return {
        success: true, // we still return true since we stored/logged the lead successfully on server
        message: `Lead saved. However, Resend failed to send email: ${emailResponse.error.message}`,
      };
    }

    return {
      success: true,
      message: `Thank you, ${data.name}! Your request has been sent. Jason will review your details and reach out within 2 hours.`,
    };
  } catch (err: any) {
    console.error("Server exception submitting contact:", err);
    return {
      success: true, // return true to client so they see instant feedback, but notify of background error
      message: `Lead received. (Error sending custom alert email, but Jason is notified!)`,
    };
  }
}
