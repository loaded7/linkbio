import { createClient } from 'redis'

const redis = createClient({
  url: process.env.NEXT_PUBLIC_REDIS_URL
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    await redis.connect()
    
    const { linkName, url } = req.body
    const timestamp = new Date().toISOString()
    const key = `click:${linkName}:${timestamp}`
    
    // Salva o clique no Redis
    await redis.set(key, JSON.stringify({
      linkName,
      url,
      timestamp,
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }), { EX: 86400 * 30 }) // 30 dias
    
    // Incrementa contador total de cliques por link
    await redis.incr(`clicks:${linkName}`)
    
    await redis.disconnect()
    
    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Erro ao registrar clique:', error)
    res.status(500).json({ error: 'Erro ao registrar clique' })
  }
}