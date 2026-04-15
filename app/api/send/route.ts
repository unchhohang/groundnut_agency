
// import { EmailTemplate } from '@/components/email-template';
import { stat } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  about: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const reqData = await req.json() as ContactFormData;

  const { data, error } = await resend.emails.send({
    from: 'unchhohang@groundnutagency.com',
    to: 'unchhohang@gmail.com',
    subject: 'Potential client',
    html: `
      <div>
        <p>Name: ${reqData.firstName} ${reqData.lastName}</p>
        <p>Email: ${reqData.email}</p>
        <p>About: ${reqData.about}</p>
      </div>
    `
  });

  if (error) {
    return NextResponse.json({ error });
  }



  // return Response.json(data);
  return NextResponse.json(
    { message: 'success::' },
    { status: 200 }
  );
}
