import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import mongoose from "mongoose";
import Contact from "../../../models/contactModel";

// Mongoose Connection
const uri = process.env.MONGODB_URI;
async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
}

async function sendEmail({ name, email, message }) {
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "utkarshhdixit@outlook.com",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: "utkarshhdixit@outlook.com",
    to: email,
    subject: "Welcome to my Portfolio!",
    text: `Hi ${name}, thank you for reaching out to me! I'll get back to you soon. 
    Here is a copy of your message: "${message}"`,
  };

  await transporter.sendMail(mailOptions);
}

export async function POST(request) {
  const { name, email, message } = await request.json();

  try {
    await connectToDatabase();

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    await sendEmail({ name, email, message });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
