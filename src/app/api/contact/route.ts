import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, serviceNeeded, estimatedBudget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject: `New Project Inquiry from ${name} (${serviceNeeded})`,
          from_name: `${name} via Gift Mukhwana Website`,
          to_email: "giftmukhwana@gmail.com",
          message: `
NEW PROJECT INQUIRY DETAILS:
------------------------------------------
Client Name: ${name}
Client Email: ${email}
Business / Organization: ${organization || "N/A"}
Service Requested: ${serviceNeeded}
Estimated Budget: ${estimatedBudget}

Project Overview & Requirements:
${message}
------------------------------------------
Sent from Gift Mukhwana Website
          `,
        }),
      });
      const data = await res.json();
      return NextResponse.json({ success: true, dispatched: true, data });
    }

    // Fallback log
    console.log("Client Project Inquiry Received:", { name, email, organization, serviceNeeded, estimatedBudget, message });
    return NextResponse.json({
      success: true,
      dispatched: false,
      message: "Inquiry logged. Web3Forms key needed for direct inbox delivery.",
    });
  } catch (error) {
    console.error("API contact submission error:", error);
    return NextResponse.json({ success: true, message: "Inquiry received." });
  }
}
