export default function LinkCard({ icon, label, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        padding: '14px 18px', background: '#111111',
        border: '1px solid #2a2a2a', borderRadius: '10px',
        color: '#f0ece4', textDecoration: 'none',
        fontSize: '14px', fontWeight: '500'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#1a1a1a'
        e.currentTarget.style.borderColor = '#c9a84c'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#111111'
        e.currentTarget.style.borderColor = '#2a2a2a'
      }}
    >
      <span style={{ color: '#c9a84c' }}>{icon}</span>
      {label}
      <span style={{ marginLeft: 'auto', color: '#444440', fontSize: '12px' }}>↗</span>
    </a>
  )
}