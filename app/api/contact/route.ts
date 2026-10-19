import { NextResponse } from 'next/server';
import { validateEnquiryForm } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateEnquiryForm(body);

    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    // Server-side boundary integration point:
    // Insert email delivery (e.g., Nodemailer, Resend) or CRM forwarding here.
    // Console log safely for server logs without exposing secret credentials
    console.log('[SUPERSHELTER_ENQUIRY_RECEIVED]:', {
      name: body.fullName,
      phone: body.phone,
      service: body.service,
      location: body.location,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your enquiry. Our team will contact you shortly.',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error processing request. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}