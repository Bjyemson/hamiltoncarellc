import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "data", "messages.json");

  try {
    if (!fs.existsSync(filePath)) {
      return res.status(200).json([]);
    }

    const fileData = fs.readFileSync(filePath, "utf8");
    const messages = JSON.parse(fileData);
    return res.status(200).json(messages);
  } catch (error) {
    console.error("Error reading messages:", error);
    return res.status(500).json({ error: "Failed to read messages" });
  }
}
