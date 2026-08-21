import { NextResponse } from 'next/server';

const responseHeaders = { 'Cache-Control': 'no-store' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';

    if (!email || email.length > 254 || !emailPattern.test(email)) {
      return NextResponse.json(
        { error: 'Valid email address required.' },
        { status: 400, headers: responseHeaders },
      );
    }

    // Stub for wiring to an email service provider (e.g. Resend, Mailchimp, ConvertKit).
    // Do not log the submitted email address because it is personally identifiable information.
    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to NIRVAN newsletter.' },
      { headers: responseHeaders },
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500, headers: responseHeaders },
    );
  }
}
