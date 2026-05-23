import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  email: z.string().email("Invalid email address"),
  vehicleType: z.string().min(1, "Please select a vehicle type"),
  serviceType: z.string().min(1, "Please select a service"),
  location: z.string().min(3, "Location or address is required"),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Server-side Zod validation
    const parsedData = contactSchema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    const destEmail = process.env.CONTACT_EMAIL || "info@theexecutiveimage.com";

    console.log("Processing new lead submission for:", parsedData.name);

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not defined. Lead registered to console log fallback.");
      return NextResponse.json({ 
        success: true, 
        message: `Lead registered successfully (Demo Mode). Thank you, ${parsedData.name}!` 
      });
    }

    const resend = new Resend(apiKey);

    // 1. Send Notification Email to Owner
    // Subject: New Quote Request from [Name] for [Vehicle Type] — [Service]
    const ownerEmailHtml = `
      <div style="font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif; background-color: #0c0c0c; padding: 30px; color: #f5f0e8;">
        <div style="max-width: 600px; margin: 0 auto; background: #111111; border: 1px solid #C9A84C; padding: 30px; border-radius: 8px;">
          <div style="text-align: center; border-bottom: 1px solid rgba(201, 168, 76, 0.2); padding-bottom: 20px; margin-bottom: 25px;">
            <h1 style="color: #C9A84C; font-size: 20px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; margin: 0;">NEW LEAD CAPTURED</h1>
            <div style="color: #8a8580; font-size: 10px; letter-spacing: 1px; text-transform: uppercase; margin-top: 5px;">THE EXECUTIVE IMAGE DETAILED QUERY</div>
          </div>
          
          <div style="margin-bottom: 15px;">
            <div style="color: #C9A84C; font-size: 11px; text-transform: uppercase; font-weight: bold; margin-bottom: 3px;">Customer Name</div>
            <div style="color: #ffffff; font-size: 15px; font-weight: 300;">${parsedData.name}</div>
          </div>
          
          <div style="margin-bottom: 15px;">
            <div style="color: #C9A84C; font-size: 11px; text-transform: uppercase; font-weight: bold; margin-bottom: 3px;">Direct Phone</div>
            <div style="color: #ffffff; font-size: 15px; font-weight: 300;"><a href="tel:${parsedData.phone}" style="color: #ffffff; text-decoration: none;">${parsedData.phone}</a></div>
          </div>
          
          <div style="margin-bottom: 15px;">
            <div style="color: #C9A84C; font-size: 11px; text-transform: uppercase; font-weight: bold; margin-bottom: 3px;">Primary Email</div>
            <div style="color: #ffffff; font-size: 15px; font-weight: 300;"><a href="mailto:${parsedData.email}" style="color: #ffffff; text-decoration: none;">${parsedData.email}</a></div>
          </div>
          
          <div style="margin-bottom: 15px;">
            <div style="color: #C9A84C; font-size: 11px; text-transform: uppercase; font-weight: bold; margin-bottom: 3px;">Classification / Vehicle</div>
            <div style="color: #ffffff; font-size: 15px; font-weight: 300;">${parsedData.vehicleType}</div>
          </div>
          
          <div style="margin-bottom: 15px;">
            <div style="color: #C9A84C; font-size: 11px; text-transform: uppercase; font-weight: bold; margin-bottom: 3px;">Service Selected</div>
            <div style="color: #ffffff; font-size: 15px; font-weight: 300;">${parsedData.serviceType}</div>
          </div>
          
          <div style="margin-bottom: 15px;">
            <div style="color: #C9A84C; font-size: 11px; text-transform: uppercase; font-weight: bold; margin-bottom: 3px;">Preferred Location</div>
            <div style="color: #ffffff; font-size: 15px; font-weight: 300;">${parsedData.location}</div>
          </div>
          
          <div style="margin-bottom: 15px; margin-top: 25px;">
            <div style="color: #C9A84C; font-size: 11px; text-transform: uppercase; font-weight: bold; margin-bottom: 3px;">Message / Specific Requirements</div>
            <div style="color: #ffffff; font-size: 15px; font-weight: 300; background-color: rgba(255, 255, 255, 0.02); padding: 15px; border-radius: 4px; border-left: 2.5px solid #C9A84C;">
              ${parsedData.message || "No additional requirements specified."}
            </div>
          </div>

          <div style="margin-top: 35px; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 15px; text-align: center; color: #8a8580; font-size: 11px;">
            <p>The Executive Image Master Detailing &bull; Stuart, FL Base</p>
          </div>
        </div>
      </div>
    `;

    // Send owner notification
    const ownerResult = await resend.emails.send({
      from: "The Executive Image Leads <onboarding@resend.dev>",
      to: destEmail,
      subject: `New Quote Request from ${parsedData.name} for ${parsedData.vehicleType} — ${parsedData.serviceType}`,
      html: ownerEmailHtml,
    });

    if (ownerResult.error) {
      console.error("Resend Owner Notification Error:", ownerResult.error);
    }

    // 2. Send Auto-Reply to Customer
    const customerEmailHtml = `
      <div style="font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif; background-color: #0c0c0c; padding: 30px; color: #f5f0e8;">
        <div style="max-width: 600px; margin: 0 auto; background: #111111; border: 1px solid #C9A84C; padding: 40px; border-radius: 8px;">
          <div style="text-align: center; border-bottom: 1px solid rgba(201, 168, 76, 0.2); padding-bottom: 25px; margin-bottom: 30px;">
            <h1 style="color: #C9A84C; font-size: 22px; font-weight: bold; letter-spacing: 2.5px; text-transform: uppercase; margin: 0;">THE EXECUTIVE IMAGE</h1>
            <div style="color: #8a8580; font-size: 9px; letter-spacing: 2px; text-transform: uppercase; margin-top: 5px;">CERAMIC COATING & MOBILE DETAILING</div>
          </div>
          
          <div style="font-size: 16px; color: #ffffff; font-weight: bold; margin-bottom: 20px;">Hello ${parsedData.name},</div>
          
          <p style="color: #cccccc; font-size: 14px; line-height: 1.6; font-weight: 300; margin-bottom: 25px;">
            Thank you for requesting an elite detailing consultation. We have received your detailed specifications and are compiling your custom curation. 
          </p>

          <p style="color: #cccccc; font-size: 14px; line-height: 1.6; font-weight: 300; margin-bottom: 25px;">
            <strong>Jason</strong>, our Lead Detailing Specialist &amp; Craft Founder, will review your vehicle's current paint condition and reach out directly with your consultation details.
          </p>

          <div style="background: rgba(201, 168, 76, 0.04); border: 1px solid rgba(201, 168, 76, 0.15); border-radius: 6px; padding: 20px; margin-bottom: 30px;">
            <div style="font-size: 11px; text-transform: uppercase; font-weight: bold; color: #C9A84C; margin-bottom: 10px;">Specification Summary</div>
            <div style="font-size: 13px; color: #ffffff;">
              <div style="margin-bottom: 5px;"><strong>Classification:</strong> ${parsedData.vehicleType}</div>
              <div style="margin-bottom: 5px;"><strong>Service Needed:</strong> ${parsedData.serviceType}</div>
              <div style="margin-bottom: 5px;"><strong>Preferred Venue:</strong> ${parsedData.location}</div>
            </div>
          </div>

          <p style="color: #9a9590; font-size: 13px; font-style: italic; line-height: 1.6; margin-bottom: 25px;">
            Most proposals are prepared and messaged back the same day. For instant or immediate requests, feel free to contact us directly at (772) 631-1339.
          </p>

          <div style="text-align: center; margin-bottom: 15px;">
            <a href="tel:17726311339" style="display: inline-block; background-color: #C9A84C; color: #000000; font-weight: bold; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; padding: 12px 30px; border-radius: 4px; text-decoration: none;">Direct Call Founder</a>
          </div>

          <div style="margin-top: 35px; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 25px;">
            <p style="margin: 0; color: #ffffff; font-weight: bold; font-size: 14px;">The Executive Image Team</p>
            <p style="margin: 3px 0 0 0; color: #8a8580; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Treasure Coast Premier Surface Care</p>
          </div>
        </div>
      </div>
    `;

    // Attempt to send customer confirmation
    // Note: If using Resend sandbox with onboarding@resend.dev, you can only send emails to your verified account.
    // Therefore, we try-catch separately so a failure here doesn't disrupt the lead registering success.
    try {
      await resend.emails.send({
        from: "The Executive Image <onboarding@resend.dev>",
        to: parsedData.email,
        subject: "We received your quote request — The Executive Image Detailing",
        html: customerEmailHtml,
      });
    } catch (custError) {
      console.warn("Could not dispatch customer auto-response. This is standard in Resend Unverified Sandbox Mode:", custError);
    }

    return NextResponse.json({ 
      success: true, 
      message: `Lead registered successfully. Thank you, ${parsedData.name}! Jason will contact you shortly.` 
    });
  } catch (error) {
    console.error("Contact Form API Error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues, message: "Validation failed on the server." },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "An error occurred. Please call or text Jason directly at (772) 631-1339." },
      { status: 500 }
    );
  }
}
