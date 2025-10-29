import { Resend } from "resend";
import formidable from "formidable";
import fs from "fs";

export const config = { api: { bodyParser: false } };

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const form = formidable({ multiples: false });
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => (err ? reject(err) : resolve([fields, files])));
    });

    const name = fields.name || fields?.name?.toString();
    const email = fields.email || fields?.email?.toString();
    const phone = fields.phone || fields?.phone?.toString();
    const position = fields.position || fields?.position?.toString();
    const message = fields.message || "";

    if (!name || !email || !phone || !position) {
      return res.status(400).json({ error: "Missing required fields (name, email, phone, position)." });
    }

    let attachments = [];
    if (files?.resume) {
      const resume = Array.isArray(files.resume) ? files.resume[0] : files.resume;
      const buffer = fs.readFileSync(resume.filepath);
      attachments.push({
        filename: resume.originalFilename || resume.newFilename || "resume",
        content: buffer.toString("base64"),
      });
    }

    const html = `
      <h2>New Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Position:</strong> ${position}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Application: ${position} — ${name}`,
      html,
      attachments,
    });

    return res.status(200).json({ ok: true, id: result?.id || null });
  } catch (err) {
    console.error("API /api/apply error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
}
