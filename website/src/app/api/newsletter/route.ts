import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email address required.' }, { status: 400 });
    }

    // Stub for wiring to email service provider (e.g. Resend, Mailchimp, ConvertKit)
    console.log(`[REVIA Newsletter] New subscription: ${email}`);

    return NextResponse.json({ success: true, message: 'Successfully subscribed to REVIA newsletter.' });
  } catch {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
