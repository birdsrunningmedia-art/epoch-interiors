"use server";
import { leadSchema } from "@/schema/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function sendLeadMessage(unsafeData: z.infer<typeof leadSchema>) {
  const parsed = leadSchema.safeParse(unsafeData);
  if (!parsed.success) {
    return { data: null, message: "Invalid message format", success: false };
  }

  const { name, email, message } = parsed.data;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, // must be an App Password
    },
  });

  const adminMail = {
    from: `"Epoch Website" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email, // user’s email
    subject: `Message from ${name}`,
    text: `Email: ${email}\n\n${message}`,
  };

  const autoReply = {
    from: `"Epoch Interiors" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "We got your message!",
    text: `Hi ${name},\n\nThanks for reaching out. We'll be with you soon.\n\nBest,\nEpoch Interiors`,
  };

  try {
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(autoReply),
    ]);

    return {
      success: true,
      message: "Request completed successfully",
      data: parsed.data,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Error sending message",
      error: {
        details: error instanceof Error ? error.message : String(error),
      },
    };
  }
}
