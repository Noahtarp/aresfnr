import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MessageCircle, Copy, Check } from 'lucide-react'

const socials = [
  { icon: MessageCircle, label: 'Discord', value: 'aresfnr', action: 'copy', color: 'hover:text-indigo-400' },
  { icon: Mail, label: 'Email', href: 'mailto:aresfnrr@gmail.com', color: 'hover:text-cyan-400' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [copied, setCopied] = useState(false)

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-purple-400 mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let's{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #22d3ee, #a855f7)' }}>
              Connect
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg mb-10">
            Interested in working together or have a project in mind? 
            Feel free to reach out — I'm always open to new opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {socials.map((social) =>
              social.action === 'copy' ? (
                <motion.button
                  key={social.label}
                  onClick={() => handleCopy(social.value)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/50 ${social.color} transition-all duration-300 cursor-pointer`}
                  style={{
                    background: 'rgba(10, 10, 30, 0.5)',
                    backdropFilter: 'blur(10px)',
                  }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(124, 58, 237, 0.3)',
                    boxShadow: '0 0 20px rgba(124, 58, 237, 0.15)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <social.icon size={18} />
                  <span className="text-sm font-medium">{social.label}</span>
                  {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="opacity-40" />}
                </motion.button>
              ) : (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/50 ${social.color} transition-all duration-300`}
                  style={{
                    background: 'rgba(10, 10, 30, 0.5)',
                    backdropFilter: 'blur(10px)',
                  }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(124, 58, 237, 0.3)',
                    boxShadow: '0 0 20px rgba(124, 58, 237, 0.15)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <social.icon size={18} />
                  <span className="text-sm font-medium">{social.label}</span>
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
