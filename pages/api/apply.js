import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
  const file = path.join(dataDir, 'applications.json')

  if (req.method === 'POST') {
    const { name, email, phone, services } = req.body
    if (!name || !email) return res.status(400).json({ error: 'name and email required' })
    const entry = { id: Date.now(), name, email, phone, services, createdAt: new Date().toISOString() }
    let arr = []
    try {
      if (fs.existsSync(file)) {
        const raw = fs.readFileSync(file, 'utf8') || '[]'
        arr = JSON.parse(raw)
      }
    } catch (e) {
      console.error('read error', e)
    }
    arr.unshift(entry)
    try {
      fs.writeFileSync(file, JSON.stringify(arr, null, 2))
      return res.json({ ok: true })
    } catch (e) {
      console.error('write error', e)
      return res.status(500).json({ error: 'failed to save' })
    }
  } else if (req.method === 'GET') {
    if (fs.existsSync(file)) {
      const raw = fs.readFileSync(file, 'utf8') || '[]'
      return res.json(JSON.parse(raw))
    }
    return res.json([])
  } else {
    res.status(405).end()
  }
}
