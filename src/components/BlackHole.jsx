import { motion } from 'framer-motion'

export default function BlackHole() {
  return (
    <div className="relative flex items-center justify-center w-full h-[320px] overflow-hidden">
      {/* Outer glow rings */}
      {[300, 240, 180, 120].map((size, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            background: `radial-gradient(circle, transparent 40%, rgba(124, 58, 237, ${0.08 - i * 0.015}) 70%, transparent 100%)`,
            border: `1px solid rgba(124, 58, 237, ${0.15 - i * 0.03})`,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Core singularity */}
      <motion.div
        className="absolute w-16 h-16 rounded-full"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, #4c1d95 40%, transparent 70%)',
          boxShadow: '0 0 60px 20px rgba(124, 58, 237, 0.4), 0 0 120px 40px rgba(124, 58, 237, 0.2), 0 0 200px 80px rgba(124, 58, 237, 0.1)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 60px 20px rgba(124, 58, 237, 0.4), 0 0 120px 40px rgba(124, 58, 237, 0.2), 0 0 200px 80px rgba(124, 58, 237, 0.1)',
            '0 0 80px 30px rgba(124, 58, 237, 0.5), 0 0 150px 50px rgba(124, 58, 237, 0.3), 0 0 250px 100px rgba(124, 58, 237, 0.15)',
            '0 0 60px 20px rgba(124, 58, 237, 0.4), 0 0 120px 40px rgba(124, 58, 237, 0.2), 0 0 200px 80px rgba(124, 58, 237, 0.1)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Accretion disk */}
      <motion.div
        className="absolute w-[200px] h-[60px] rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.3), rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.3), transparent)',
          filter: 'blur(4px)',
          transform: 'rotateX(70deg)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
