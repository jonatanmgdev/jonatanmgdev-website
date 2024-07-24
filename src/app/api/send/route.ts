
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import ContactFormEmailTemplate from './templates/ContactFormEmailTemplate';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message, surnames } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Jonatan Montesdeoca <info@jonatanmg.dev>', 
        to: `jonatanmg94@gmail.com`,
      subject: `Jonatanmg.dev | ¡👋 ${name} ha enviado un mensaje!`,
      react: ContactFormEmailTemplate({ name, surnames, email, message }),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}