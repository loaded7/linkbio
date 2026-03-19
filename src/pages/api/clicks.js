export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Por enquanto retorna um objeto vazio
    // Depois integraremos com Vercel KV
    res.status(200).json({
      'LinkedIn': 2,
      'GitHub': 3,
      'TikTok': 1,
      'BarberPro': 1,
      'AstroPDF': 2
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}