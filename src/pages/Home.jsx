import { Github, Linkedin, Music2, ExternalLink } from 'lucide-react'
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
  }
]

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f0ece4', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '60px 24px' }}>

        {/* AVATAR E BIO */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            width: '88px', height: '88px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #c9a84c, #e4c06e)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px', fontSize: '32px', fontWeight: '700', color: '#0a0a0a'
          }}>TM</div>
          <h1 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '8px' }}>Thomas Modesto</h1>
          <p style={{ color: '#888880', fontSize: '15px', lineHeight: '1.6' }}>
            Estudante de Engenharia da Computação · Desenvolvedor Fullstack · Empreendedor
          </p>
        </div>

        {/* LINKS */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '11px', color: '#444440', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px', fontWeight: '600' }}>Links</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {links.map((link, i) => <LinkCard key={i} {...link} />)}
          </div>
        </div>

        {/* PROJETOS */}
        <div>
          <p style={{ fontSize: '11px', color: '#444440', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px', fontWeight: '600' }}>Projetos</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
          </div>
        </div>

      </div>
    </div>
  )
}