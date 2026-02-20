export default function Footer() {
  return (
    <footer className="relative z-10 py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm">
          &copy; {new Date().getFullYear()} Aresfnr. All rights reserved.
        </p>
        <p className="text-white/20 text-xs">
          Built with React, Tailwind CSS &amp; Framer Motion
        </p>
      </div>
    </footer>
  )
}
