import { useState, useEffect } from 'react'
import { Github, Linkedin, Music2 } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import LinkCard from '../components/LinkCard'

const links = [
  { icon: <Linkedin size={20} />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/thomasmodesto/' },
  { icon: <Github size={20} />, label: 'GitHub', url: 'https://github.com/loaded7' },
  { icon: <Music2 size={20} />, label: 'TikTok', url: 'https://www.tiktok.com/@astroaii_' },
]

const projects = [
  {
    name: 'BarberPro',
    desc: 'Sistema de gestão para barbearia com dashboard financeiro, agendamentos e relatórios.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/loaded7/barberpro',
    live: 'https://barberpro-production-5c08.up.railway.app'
  },
  {
    name: 'AstroPDF',
    desc: 'Resumo inteligente de documentos PDF com IA. Faça upload e converse com o documento.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Groq AI'],
    github: 'https://github.com/loaded7/resumo-doc',
    live: 'https://resumo-15rl9j0my-loaded7s-projects.vercel.app'
  },
  {
    name: 'Notifica API',
    desc: 'API de notificações multi-canal com processamento assíncrono via filas.',
    stack: ['Python', 'FastAPI', 'Celery', 'Redis'],
    github: 'https://github.com/loaded7/notifica',
    live: 'https://notifica-api.onrender.com/docs'
  },
  {
    name: 'LinkBio',
    desc: 'Portfólio pessoal com página pública de links e projetos. Desenvolvido em React.',
    stack: ['React', 'Vercel'],
    github: 'https://github.com/loaded7/linkbio',
    live: 'https://linkbio-kappa.vercel.app'
  }
]

export default function Home() {
  const [visible, setVisible] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  const bg = darkMode ? '#0a0a0a' : '#f5f3ef'
  const surface = darkMode ? '#111111' : '#ffffff'
  const border = darkMode ? '#2a2a2a' : '#e5e2db'
  const text = darkMode ? '#f0ece4' : '#1a1a1a'
  const textDim = darkMode ? '#888880' : '#666660'
  const gold = '#c9a84c'

  const copyLink = () => {
    navigator.clipboard.writeText('https://linkbio-kappa.vercel.app')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ minHeight: '100vh', background: bg, color: text, fontFamily: 'Inter, sans-serif', transition: 'all 0.3s' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '60px 24px',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease' }}>

        {/* TOPBAR */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '40px' }}>
          <button onClick={copyLink} style={{ background: surface, border: `1px solid ${border}`, borderRadius: '8px', padding: '6px 14px', color: textDim, cursor: 'pointer', fontSize: '12px', fontWeight: '600' }}>
            {copied ? '✓ Copiado!' : '🔗 Compartilhar'}
          </button>
          <button onClick={() => setDarkMode(!darkMode)} style={{ background: surface, border: `1px solid ${border}`, borderRadius: '8px', padding: '6px 14px', color: textDim, cursor: 'pointer', fontSize: '12px', fontWeight: '600' }}>
            {darkMode ? '☀️ Claro' : '🌙 Escuro'}
          </button>
        </div>

        {/* AVATAR */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
            <img src="./foto.png" alt="Thomas Modesto"
              style={{ width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover', border: `3px solid ${gold}` }} />
            <div style={{ position: 'absolute', bottom: '4px', right: '4px', background: '#22c55e', width: '14px', height: '14px', borderRadius: '50%', border: `2px solid ${bg}` }} />
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#22c55e22', border: '1px solid #22c55e44', borderRadius: '20px', padding: '3px 12px', marginBottom: '12px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: '11px', color: '#22c55e', fontWeight: '600' }}>Aberto a oportunidades</span>
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '8px', display: 'block' }}>Thomas Modesto</h1>
          <p style={{ color: textDim, fontSize: '15px', lineHeight: '1.6', marginBottom: '16px' }}>
            Estudante de Engenharia da Computação · Desenvolvedor Fullstack · Empreendedor
          </p>
          <p style={{ color: textDim, fontSize: '13.5px', lineHeight: '1.8', maxWidth: '480px', margin: '0 auto' }}>
            Apaixonado por construir produtos reais do zero. Já desenvolvi sistemas fullstack com Node.js, Python e React — sempre com deploy em produção e código no GitHub.
          </p>
        </div>

        {/* LINKS */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', color: textDim, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px', fontWeight: '600' }}>Links</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {links.map((link, i) => (
              <div key={i} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-20px)', transition: `all 0.5s ease ${i * 0.1}s` }}>
                <LinkCard {...link} surface={surface} border={border} text={text} />
              </div>
            ))}
          </div>
        </div>

        {/* PROJETOS */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', color: textDim, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px', fontWeight: '600' }}>Projetos</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {projects.map((p, i) => (
              <div key={i} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.5s ease ${i * 0.1 + 0.3}s` }}>
                <ProjectCard {...p} surface={surface} border={border} text={text} textDim={textDim} />
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ textAlign: 'center', color: textDim, fontSize: '12px', paddingTop: '20px', borderTop: `1px solid ${border}` }}>
          Feito com React · {new Date().getFullYear()}
        </div>

      </div>
    </div>
  )
}