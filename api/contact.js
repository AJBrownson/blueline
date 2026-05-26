import nodemailer from "nodemailer";

export default async function handler(req, res) {
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
      user: process.env.EMAIL_USER, // Your Hostinger email address
      pass: process.env.EMAIL_PASS, // Your Hostinger email password
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Must be sent from your authenticated Hostinger email
      to: process.env.EMAIL_USER, // You are sending this to yourself to read
      replyTo: email, // If you hit "reply" in your inbox, it goes to the customer
      subject: `New Website Lead: ${fullName} from ${companyName || "N/A"}`,
      text: `
        Name: ${fullName}
        Company: ${companyName || "Not provided"}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        
        Message:
        ${message}
      `,
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
