import { NextRequest, NextResponse } from "next/server";

interface EnquiryBody {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: EnquiryBody = await req.json();

    // Validate required fields
    if (!body.name || !body.email || !body.company || !body.teamSize) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Simulate processing delay
    await new Promise((res) => setTimeout(res, 500));

    // In production: send to CRM, email service, etc.
    console.log("[Enquiry Received]", {
      ...body,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Our enterprise team will reach out within 24 hours.",
      referenceId: `ENQ-${Date.now()}`,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
