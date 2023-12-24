import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
const nodemailer = require("nodemailer");
const bodyValidation = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  subject: z.string(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, message, name, subject } = bodyValidation.parse(body);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_EMAIL_PASSWORD,
      },
      secure: true,
    });

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_TARGET_EMAIL,
      replyTo: email,
      subject: `Contact via Portfolio - ${subject}`,
      html: `<p>${message}</p>
      <p>Regards,</p>
      <p>${name}</p>
      <p>${email}</p>`,
    };

    const autoReplyEmail = {
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      replyTo: process.env.NODEMAILER_TARGET_EMAIL,
      subject: `Thank you for contacting me - Yash Srivastava`,
      html: `<p>Thank you for contacting me, I will get back to you as soon as possible.</p>
      <p>Regards,</p>
      <p>Yash Srivastava</p>

      <h3>${subject}</h3>
      <p>${message}</p>`,
    };
    transporter.sendMail(mailOptions);
    transporter.sendMail(autoReplyEmail);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("error: Sending Email, ", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
