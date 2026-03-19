import { kv } from '@vercel/kv'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Busca todas as chaves de cliques
    const keys = await kv.keys('clicks:*')
    
    const clicks = {}
    for (const key of keys) {
      const linkName = key.replace('clicks:', '')
      const count = await kv.get(key)
      clicks[linkName] = parseInt(count) || 0
    }

    res.status(200).json(clicks)
  } catch (error) {
    console.error('Erro ao buscar cliques:', error)
    res.status(500).json({ error: error.message })
  }
}