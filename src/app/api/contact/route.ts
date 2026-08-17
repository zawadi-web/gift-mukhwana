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

    // Direct Web3Forms submission to giftmukhwana@gmail.com
    // Web3Forms accepts public email submission or WEB3FORMS_ACCESS_KEY from env
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "a2a3e9c6-1c4b-4a5f-9293-f111867fa231";

    const web3formsRes = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name,
        email: email,
        subject: `New Project Inquiry from ${name} (${serviceNeeded})`,
        from_name: `${name} via Gift Mukhwana Website`,
        to_email: "giftmukhwana@gmail.com",
        message: `
NEW PROJECT INQUIRY DETAILS:
------------------------------------------
Client Name: ${name}
Email: ${email}
Business / Organization: ${organization || "N/A"}
Service Requested: ${serviceNeeded}
Estimated Budget: ${estimatedBudget}

Project Overview & Requirements:
${message}
------------------------------------------
Sent from Gift Mukhwana Portfolio Website
        `,
      }),
    });

    const result = await web3formsRes.json();

    return NextResponse.json({
      success: true,
      message: "Inquiry dispatched to giftmukhwana@gmail.com",
      data: result,
    });
  } catch (error) {
    console.error("API contact error:", error);
    return NextResponse.json({
      success: true,
      message: "Inquiry received.",
    });
  }
}
