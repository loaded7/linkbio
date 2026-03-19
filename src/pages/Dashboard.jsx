import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function Dashboard() {
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [clicks, setClicks] = useState({})

  const correctPassword = 'thomas2026'

  const handleLogin = async () => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    })
    
    const data = await response.json()
    
    if (data.success) {
      setAuthenticated(true)
      loadClicks()
    } else {
      alert('Senha incorreta!')
      setPassword('')
    }
  } catch (error) {
    console.error('Erro:', error)
    alert('Erro ao autenticar')
  }
}
    
    const data = await response.json()
    
    if (data.success) {
      setAuthenticated(true)
      loadClicks()
    } else {
      alert('Senha incorreta!')
      setPassword('')
    }
  } catch (error) {
    alert('Erro ao autenticar')
  }
}

  const loadClicks = () => {
    // Busca os cliques do localStorage
    const storedClicks = localStorage.getItem('linkbio_clicks')
    if (storedClicks) {
      try {
        setClicks(JSON.parse(storedClicks))
      } catch (e) {
        setClicks({})
      }
    }
  }

  useEffect(() => {
    if (authenticated) {
      loadClicks()
      const interval = setInterval(loadClicks, 2000)
      return () => clearInterval(interval)
    }
  }, [authenticated])

  const chartData = Object.entries(clicks).map(([linkName, count]) => ({
    name: linkName.length > 15 ? linkName.substring(0, 15) + '...' : linkName,
    cliques: count
  }))

  const totalClicks = Object.values(clicks).reduce((a, b) => a + b, 0)

  if (!authenticated) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#0a0a0a',
        fontFamily: 'Inter, sans-serif'
      }}>
        <div style={{ 
          background: '#111111', 
          padding: '40px', 
          borderRadius: '12px',
          border: '1px solid #2a2a2a',
          textAlign: 'center',
          maxWidth: '400px'
        }}>
          <h1 style={{ color: '#f0ece4', marginBottom: '20px', fontSize: '24px' }}>Dashboard Privado</h1>
          <p style={{ color: '#888880', marginBottom: '20px', fontSize: '14px' }}>Digite sua senha pra ver os analytics</p>
          
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            placeholder="Senha"
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '16px',
              background: '#0a0a0a',
              border: '1px solid #2a2a2a',
              borderRadius: '8px',
              color: '#f0ece4',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />
          
          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '12px',
              background: '#c9a84c',
              color: '#0a0a0a',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Entrar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a0a0a', 
      color: '#f0ece4',
      fontFamily: 'Inter, sans-serif',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700' }}>Analytics 📊</h1>
          <button
            onClick={() => setAuthenticated(false)}
            style={{
              padding: '8px 16px',
              background: '#111111',
              border: '1px solid #2a2a2a',
              borderRadius: '8px',
              color: '#888880',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            Sair
          </button>
        </div>

        <div style={{
          background: '#111111',
          border: '1px solid #2a2a2a',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#888880', fontSize: '14px', marginBottom: '8px' }}>Total de Cliques</p>
          <h2 style={{ fontSize: '48px', fontWeight: '700', color: '#c9a84c', margin: '0' }}>
            {totalClicks}
          </h2>
        </div>

        {chartData.length > 0 ? (
          <div style={{
            background: '#111111',
            border: '1px solid #2a2a2a',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px'
          }}>
            <h3 style={{ marginTop: '0', marginBottom: '16px' }}>Cliques por Link</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                <XAxis dataKey="name" stroke="#888880" />
                <YAxis stroke="#888880" />
                <Tooltip 
                  contentStyle={{ background: '#111111', border: '1px solid #2a2a2a', borderRadius: '8px' }}
                  labelStyle={{ color: '#f0ece4' }}
                />
                <Bar dataKey="cliques" fill="#c9a84c" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p style={{ color: '#888880', textAlign: 'center' }}>Clique nos links pra ver os dados aqui!</p>
        )}

        <div style={{
          background: '#111111',
          border: '1px solid #2a2a2a',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <h3 style={{ marginTop: '0', marginBottom: '16px' }}>Detalhes por Link</h3>
          {Object.entries(clicks).length > 0 ? (
            Object.entries(clicks).map(([linkName, count]) => (
              <div key={linkName} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                borderBottom: '1px solid #2a2a2a'
              }}>
                <span style={{ color: '#f0ece4' }}>{linkName}</span>
                <span style={{ 
                  background: '#c9a84c22', 
                  color: '#c9a84c',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontWeight: '600',
                  fontSize: '14px'
                }}>
                  {count} cliques
                </span>
              </div>
            ))
          ) : (
            <p style={{ color: '#888880' }}>Nenhum clique registrado ainda</p>
          )}
        </div>

      </div>
    </div>
  )
}