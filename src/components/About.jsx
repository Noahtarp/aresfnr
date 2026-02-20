import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Code2, Gamepad2, Bot } from 'lucide-react'

const skills = [
  { icon: Code2, label: 'Python Development', desc: 'Automation & scripting' },
  { icon: Gamepad2, label: 'Lua / Roblox', desc: 'Immersive game systems' },
  { icon: Bot, label: 'Discord Bots', desc: 'Advanced bot integrations' },
  { icon: Sparkles, label: 'AI Systems', desc: 'Smart community tools' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-purple-400 mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Who I{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #22d3ee, #a855f7)' }}>
              Am
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Specializing in high-performance automation and immersive gaming experiences. 
            I craft elegant solutions that push the boundaries of what's possible with code.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-500 cursor-default"
              style={{
                background: 'rgba(10, 10, 30, 0.5)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 70%)',
                }}
              />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <skill.icon size={24} className="text-purple-400" />
                </div>
                <h3 className="font-semibold text-white mb-1">{skill.label}</h3>
                <p className="text-sm text-white/40">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
