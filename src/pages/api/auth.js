export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { password } = req.body
  const correctPassword = process.env.DASHBOARD_PASSWORD // Guardado no .env!

  if (password === correctPassword) {
    res.status(200).json({ success: true })
  } else {
    res.status(401).json({ success: false })
  }
}