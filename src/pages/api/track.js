import { kv } from '@vercel/kv'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { linkName, url } = req.body

    if (!linkName || !url) {
      return res.status(400).json({ error: 'Faltam dados' })
    }

    // Incrementa o contador de cliques
    const count = await kv.incr(`clicks:${linkName}`)

    console.log(`Clique registrado: ${linkName} (total: ${count})`)

    res.status(200).json({ success: true, count })
  } catch (error) {
    console.error('Erro ao registrar clique:', error)
    res.status(500).json({ error: error.message })
  }
}