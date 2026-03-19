import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ name, desc, stack, github, live, surface, border, text, textDim }) {
  const bg = surface || '#111111'
  const bd = border || '#2a2a2a'
  const tx = text || '#f0ece4'
  const td = textDim || '#888880'

  const handleLinkClick = async (linkName, url) => {
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          linkName: `${name} - ${linkName}`,
          url: url
        })
      })
    } catch (error) {
      console.error('Erro ao registrar clique:', error)
    }
  }

  return (
    <div style={{ padding:'20px', background:bg, border:`1px solid ${bd}`, borderRadius:'12px', transition:'all 0.2s' }}
      onMouseEnter={e => e.currentTarget.style.borderColor='#c9a84c'}
      onMouseLeave={e => e.currentTarget.style.borderColor=bd}
    >
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'8px' }}>
        <h3 style={{ fontSize:'15px', fontWeight:'700', color:tx }}>{name}</h3>
        <div style={{ display:'flex', gap:'10px' }}>
          <a href={github} target="_blank" rel="noopener noreferrer" 
            onClick={() => handleLinkClick('GitHub', github)}
            style={{ color:'#888880', cursor:'pointer' }}
            onMouseEnter={e => e.currentTarget.style.color='#c9a84c'}
            onMouseLeave={e => e.currentTarget.style.color='#888880'}>
            <Github size={16} />
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer"
            onClick={() => handleLinkClick('Live', live)}
            style={{ color:'#888880', cursor:'pointer' }}
            onMouseEnter={e => e.currentTarget.style.color='#c9a84c'}
            onMouseLeave={e => e.currentTarget.style.color='#888880'}>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
      <p style={{ fontSize:'13px', color:td, lineHeight:'1.6', marginBottom:'12px' }}>{desc}</p>
      <div style={{ display:'flex', gap:'6px', flexWrap:'wrap' }}>
        {stack.map((s, i) => (
          <span key={i} style={{ padding:'3px 10px', background:'#c9a84c22', color:'#c9a84c', borderRadius:'20px', fontSize:'11px', fontWeight:'600' }}>{s}</span>
        ))}
      </div>
    </div>
  )
}