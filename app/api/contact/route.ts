import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { validateEnquiryForm } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate form fields on the server
    const validation = validateEnquiryForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    const {
      fullName,
      phone,
      email,
      projectType,
      location,
      service,
      budget,
      startDate,
      description,
      preferredContact,
    } = body;

    // 2. Configure Nodemailer Transporter using Environment Variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Construct Branded HTML Email Template
    const mailOptions = {
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email || undefined,
      subject: `New Project Enquiry: ${fullName} [${service}]`,
      text: `
NEW PROJECT ENQUIRY — SUPER SHELTER CONSTRUCTION LTD

Client Name: ${fullName}
Phone Number: ${phone}
Email Address: ${email || 'Not Provided'}
Preferred Contact Method: ${preferredContact || 'Phone'}

Project Information:
- Project Type: ${projectType}
- Service Required: ${service}
- Location: ${location}
- Estimated Budget: ${budget || 'Not Specified'}
- Target Start Date: ${startDate || 'Not Specified'}

Project Brief:
${description}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <!-- Header -->
          <div style="background-color: #111827; padding: 24px; text-align: center; border-bottom: 3px solid #DC2626;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;">
              SUPER SHELTER CONSTRUCTION LTD
            </h1>
            <p style="color: #DC2626; margin: 4px 0 0 0; font-size: 12px; font-weight: bold; letter-spacing: 1px;">
              NEW PROJECT ENQUIRY
            </p>
          </div>

          <!-- Content Body -->
          <div style="padding: 28px; color: #1f2937;">
            <h2 style="font-size: 16px; color: #111827; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-top: 0;">
              Client Information
            </h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
              <tr>
                <td style="padding: 6px 0; font-weight: bold; width: 140px; color: #4b5563;">Full Name:</td>
                <td style="padding: 6px 0; color: #111827;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #4b5563;">Phone Number:</td>
                <td style="padding: 6px 0; color: #111827; font-weight: bold;">
                  <a href="tel:${phone}" style="color: #DC2626; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #4b5563;">Email:</td>
                <td style="padding: 6px 0; color: #111827;">${email ? `<a href="mailto:${email}">${email}</a>` : 'Not Provided'}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #4b5563;">Preferred Contact:</td>
                <td style="padding: 6px 0; color: #111827; text-transform: capitalize;">${preferredContact || 'Phone'}</td>
              </tr>
            </table>

            <h2 style="font-size: 16px; color: #111827; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">
              Project Scope & Location
            </h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
              <tr>
                <td style="padding: 6px 0; font-weight: bold; width: 140px; color: #4b5563;">Project Location:</td>
                <td style="padding: 6px 0; color: #111827;">${location}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #4b5563;">Service Required:</td>
                <td style="padding: 6px 0; color: #111827; font-weight: bold;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #4b5563;">Project Type:</td>
                <td style="padding: 6px 0; color: #111827; text-transform: capitalize;">${projectType}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #4b5563;">Estimated Budget:</td>
                <td style="padding: 6px 0; color: #111827;">${budget || 'Not Specified'}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #4b5563;">Target Start Date:</td>
                <td style="padding: 6px 0; color: #111827;">${startDate || 'Not Specified'}</td>
              </tr>
            </table>

            <h2 style="font-size: 16px; color: #111827; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">
              Project Description / Brief
            </h2>
            <div style="background-color: #ffffff; padding: 16px; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #374151; white-space: pre-wrap;">${description}</div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f3f4f6; padding: 16px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb;">
            Automated notification from Super Shelter Construction Ltd Website
          </div>
        </div>
      `,
    };

    // 4. Send Email via Nodemailer
    await transporter.sendMail(mailOptions);

    console.log('[SUPERSHELTER_ENQUIRY_SENT]:', {
      fullName,
      phone,
      service,
      location,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your enquiry. Our team will contact you shortly.',
    });
  } catch (error) {
    console.error('Nodemailer transmission error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error processing request. Please try again or call us directly at 0703 118 4321.',
      },
      { status: 500 }
    );
  }
}