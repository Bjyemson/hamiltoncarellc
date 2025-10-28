import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const dataFile = path.join(process.cwd(), "data", "messages.json");

    try {
      // Ensure /data directory exists
      const dir = path.dirname(dataFile);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

      const newMessage = {
        ...req.body,
        timestamp: new Date().toISOString(),
      };

      let messages = [];
      if (fs.existsSync(dataFile)) {
        messages = JSON.parse(fs.readFileSync(dataFile, "utf8"));
      }

      messages.push(newMessage);
      fs.writeFileSync(dataFile, JSON.stringify(messages, null, 2));

      res.status(200).json({ success: true });
    } catch (err) {
      console.error("Error saving message:", err);
      res.status(500).json({ success: false, error: err.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
