import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import OrbitalRing from './OrbitalRing'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex items-center justify-center px-4 sm:px-6"
      style={{ minHeight: '100vh' }}
    >
      {/* Black hole glow behind content */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 pointer-events-none">
        <div
          className="w-[400px] h-[400px] rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0.1) 35%, transparent 65%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center lg:text-left"
        >
          <motion.p
            className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-purple-400 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Software Engineer
          </motion.p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5">
            Aresfnr's{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #22d3ee, #a855f7, #7c3aed)',
              }}
            >
              Portfolio
            </span>
          </h1>

          <motion.p
            className="text-base sm:text-lg text-white/60 max-w-md mx-auto lg:mx-0 mb-7 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Get a glimpse of my work in Python and Lua. I build Discord Bots,
            Roblox Systems, and much more.
          </motion.p>

          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-300 group"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #4c1d95)',
              boxShadow: '0 0 30px rgba(124, 58, 237, 0.4), 0 0 60px rgba(124, 58, 237, 0.2)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(124, 58, 237, 0.6), 0 0 80px rgba(124, 58, 237, 0.3)',
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Explore now!
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Right: Orbital ring system */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:flex justify-center"
        >
          <OrbitalRing />
        </motion.div>
      </div>
    </section>
  )
}
