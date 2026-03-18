import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ name, desc, stack, github, live }) {
  return (
    <div style={{
      padding: '20px', background: '#111111',
      border: '1px solid #2a2a2a', borderRadius: '12px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#f0ece4' }}>{name}</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: '#888880' }}
            onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
            onMouseLeave={e => e.currentTarget.style.color = '#888880'}>
            <Github size={16} />
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer" style={{ color: '#888880' }}
            onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
            onMouseLeave={e => e.currentTarget.style.color = '#888880'}>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
      <p style={{ fontSize: '13px', color: '#888880', lineHeight: '1.6', marginBottom: '12px' }}>{desc}</p>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {stack.map((s, i) => (
          <span key={i} style={{
            padding: '3px 10px', background: '#c9a84c22', color: '#c9a84c',
            borderRadius: '20px', fontSize: '11px', fontWeight: '600'
          }}>{s}</span>
        ))}
      </div>
    </div>
  )
}