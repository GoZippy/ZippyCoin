import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Zap, ExternalLink } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Technology', href: '#technology' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Community', href: '#community' },
    { name: 'Developers', href: '/developers' },
    { name: 'Network', href: '/network' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-zippy-500 to-quantum-500 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">ZippyCoin</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-zippy-600 ${
                  location.pathname === item.href || 
                  (item.href.startsWith('#') && location.pathname === '/')
                    ? 'text-zippy-600' 
                    : scrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://go.zippyfoundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-zippy-600 ${
                scrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              <span>Foundation</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <motion.button
              className="bg-gradient-to-r from-zippy-500 to-quantum-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-zippy-600 hover:to-quantum-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Wallet
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-slate-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-slate-700 hover:text-zippy-600 hover:bg-slate-50 rounded-md text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://go.zippyfoundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-2 text-slate-700 hover:text-zippy-600 hover:bg-slate-50 rounded-md text-sm font-medium"
            >
              <span>Foundation</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <button className="w-full mt-2 bg-gradient-to-r from-zippy-500 to-quantum-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Get Wallet
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar