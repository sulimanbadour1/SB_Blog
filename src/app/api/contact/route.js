import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  if (req.method !== "POST") {
    // res.status(405).json({ message: "Method Not Allowed" });
    return new NextResponse(
      JSON.stringify({ message: "Method Not Allowed" }, { status: 405 })
    );
  }
  const { name, email, message } = req.body;
  const user = process.env.GMAIL_USER;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: user,
      pass: process.env.GMAIL_PASS,
    },
  });
  try {
    const { name, email, message } = await req.json();
    const mail = await transporter.sendMail({
      from: user,
      replyTo: email,
      to: "suliman.badour1@gmail.com", // Change to your email
      subject: `New Message From ${name} on Your Blog Site`,
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>${message}</p>
      `,
    });
    console.log(name, email, message);
    console.log("Message sent:", mail.messageId);
    // res.status(200).json({ message: "Success" });
    return new NextResponse(
      JSON.stringify({ message: "Success" }, { status: 200 })
    );
  } catch (error) {
    console.error("There is an Error", error);
    // res.status(500).json({ message: "Something went wrong" });
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};

// Rename your function to POST and export it as such
