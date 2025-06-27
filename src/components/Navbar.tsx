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
          ? 'bg-crypto-dark-950/90 backdrop-blur-md shadow-xl border-b border-crypto-dark-800/50' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-r from-zippy-600 to-zippy-700 rounded-lg shadow-lg group-hover:shadow-zippy-500/25 transition-all">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-display font-bold gradient-text">ZippyCoin</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === item.href || 
                  (item.href.startsWith('#') && location.pathname === '/')
                    ? 'text-zippy-400' 
                    : 'text-crypto-dark-300 hover:text-white'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-zippy-400 to-quantum-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <a
              href="https://go.zippyfoundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm font-medium text-crypto-dark-300 hover:text-white transition-colors relative group"
            >
              <span>Foundation</span>
              <ExternalLink className="h-3 w-3" />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-zippy-400 to-quantum-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <motion.button
              className="btn-primary text-sm px-6 py-2.5"
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
              className="p-2 rounded-md text-crypto-dark-300 hover:text-white hover:bg-crypto-dark-800/50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-crypto-dark-950/95 backdrop-blur-md border-t border-crypto-dark-800/50"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-4 py-3 text-crypto-dark-300 hover:text-white hover:bg-crypto-dark-800/50 rounded-lg text-sm font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://go.zippyfoundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-3 text-crypto-dark-300 hover:text-white hover:bg-crypto-dark-800/50 rounded-lg text-sm font-medium transition-colors"
            >
              <span>Foundation</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <button className="w-full mt-4 btn-primary text-sm px-6 py-3">
              Get Wallet
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar