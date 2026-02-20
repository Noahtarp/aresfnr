import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Shield, Server, BookOpen, BrainCircuit } from 'lucide-react'

const projects = [
  {
    title: 'NetFlare',
    description: 'Anti-raid bot for Discord & private ERLC servers. Protects communities with real-time threat detection and automated response systems.',
    icon: Shield,
    tags: ['Discord.py', 'Security', 'Anti-Raid'],
    gradient: 'from-red-500/20 to-purple-500/20',
    iconColor: 'text-red-400',
    borderHover: 'hover:border-red-500/30',
    glowColor: 'rgba(239, 68, 68, 0.1)',
  },
  {
    title: 'Project Manager',
    description: 'Roblox server alting system for streamlined management. Simplifies multi-account workflows with powerful automation.',
    icon: Server,
    tags: ['Lua', 'Roblox', 'Management'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/30',
    glowColor: 'rgba(59, 130, 246, 0.1)',
  },
  {
    title: 'LACOMM Directory',
    description: 'Full Discord Bot directory for Los Angeles City Roleplay. A comprehensive hub for managing roleplay operations.',
    icon: BookOpen,
    tags: ['Discord.py', 'Database', 'Directory'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/30',
    glowColor: 'rgba(16, 185, 129, 0.1)',
  },
  {
    title: 'AI Discord System',
    description: 'Advanced AI integration for community bots. Leverages machine learning for smart moderation and engagement.',
    icon: BrainCircuit,
    tags: ['AI/ML', 'Discord.py', 'NLP'],
    gradient: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/30',
    glowColor: 'rgba(245, 158, 11, 0.1)',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-purple-400 mb-3">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #22d3ee, #a855f7)' }}>
              Projects
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my skills in automation, gaming, and AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`group relative p-6 sm:p-8 rounded-2xl border border-white/5 ${project.borderHover} transition-all duration-500 cursor-default overflow-hidden`}
              style={{
                background: 'rgba(10, 10, 30, 0.5)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${project.glowColor} 0%, transparent 60%)`,
                }}
              />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <project.icon size={24} className={project.iconColor} />
                  </div>
                  <ExternalLink size={18} className="text-white/20 group-hover:text-white/60 transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium text-white/50 border border-white/10 bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
