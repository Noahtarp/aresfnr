import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, User, FolderKanban, Mail, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Projects', href: '#projects', icon: FolderKanban },
  { label: 'Contact', href: '#contact', icon: Mail },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'top-2' : 'top-6'
      }`}
    >
      {/* Desktop navbar */}
      <div
        className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full border border-white/10"
        style={{
          background: 'rgba(10, 10, 30, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 0 30px rgba(124, 58, 237, 0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {navItems.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <Icon size={16} />
            {label}
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white"
        style={{
          background: 'rgba(10, 10, 30, 0.7)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className="md:hidden absolute top-16 right-0 w-48 rounded-2xl border border-white/10 overflow-hidden"
            style={{
              background: 'rgba(10, 10, 30, 0.9)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {navItems.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
