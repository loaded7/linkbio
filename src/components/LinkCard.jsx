import React from 'react'

export default function LinkCard({ icon, label, url, surface, border, text }) {
  const bg = surface || '#111111'
  const bd = border || '#2a2a2a'
  const tx = text || '#f0ece4'

  const handleClick = () => {
    // Registra o clique no localStorage
    const clicks = JSON.parse(localStorage.getItem('linkbio_clicks') || '{}')
    clicks[label] = (clicks[label] || 0) + 1
    localStorage.setItem('linkbio_clicks', JSON.stringify(clicks))
    
    // Abre o link
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      style={{ 
        display:'flex', alignItems:'center', gap:'12px', padding:'14px 18px', 
        background:bg, border:`1px solid ${bd}`, borderRadius:'10px', 
        color:tx, textDecoration:'none', fontSize:'14px', fontWeight:'500', 
        transition:'all 0.2s', cursor:'pointer', width:'100%'
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor='#c9a84c' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor=bd }}
    >
      <span style={{ color:'#c9a84c' }}>{icon}</span>
      {label}
      <span style={{ marginLeft:'auto', color:'#888880', fontSize:'12px' }}>↗</span>
    </button>
  )
}