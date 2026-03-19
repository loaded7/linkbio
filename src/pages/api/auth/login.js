export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { password } = req.body
    const correctPassword = process.env.DASHBOARD_PASSWORD

    if (!password || password !== correctPassword) {
      return res.status(401).json({ success: false })
    }

    res.status(200).json({ success: true })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}