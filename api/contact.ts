import nodemailer from "nodemailer";
import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { fullName, companyName, email, phone, message } = req.body;

  // Create the email transporter using your Hostinger SMTP details
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Website Lead: ${fullName} from ${companyName || "N/A"}`,
text: `Name: ${fullName}
Company: ${companyName || "Not provided"}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}`,
    });

    return res
      .status(200)
      .json({ success: true, message: "Email sent perfectly" });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send email" });
  }
}
