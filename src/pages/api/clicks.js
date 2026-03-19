export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Aqui a gente vai chamar a Vercel KV API diretamente
    // Por enquanto retorna um objeto vazio enquanto testamos
    res.status(200).json({})
  } catch (error) {
    console.error('Erro ao buscar cliques:', error)
    res.status(500).json({ error: 'Erro ao buscar dados' })
  }
}