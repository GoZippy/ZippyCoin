import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Zap, ExternalLink, User, LogOut, Wallet } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import AuthModal from './Auth/AuthModal'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(true)
  const location = useLocation()
  const { user, signOut } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const checkBannerVisibility = () => {
      const dismissed = localStorage.getItem('beta-banner-dismissed')
      setBannerVisible(dismissed !== 'true')
    }
    
    checkBannerVisibility()
    
    window.addEventListener('storage', checkBannerVisibility)
    return () => window.removeEventListener('storage', checkBannerVisibility)
  }, [])

  const navItems = [
    { name: 'Technology', href: '#technology' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Community', href: '#community' },
    { name: 'Developers', href: '/developers' },
    { name: 'Network', href: '/network' },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith('#')) {
      // Handle anchor links
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first
        window.location.href = '/' + href
      } else {
        // On home page, smooth scroll to section
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          bannerVisible ? 'top-[60px]' : 'top-0'
        } ${
          scrolled 
            ? 'bg-crypto-dark-950/95 backdrop-blur-md shadow-xl border-b border-crypto-dark-800/50' 
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
              <motion.div 
                className="p-2 bg-gradient-to-r from-zippy-600 to-zippy-700 rounded-lg shadow-lg group-hover:shadow-zippy-500/25 transition-all"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-xl font-display font-bold gradient-text">ZippyCoin</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-colors relative group ${
                    (location.pathname === item.href || 
                    (item.href.startsWith('#') && location.pathname === '/'))
                      ? 'text-zippy-400' 
                      : 'text-crypto-dark-300 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-zippy-400 to-quantum-400 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
              <motion.a
                href="https://go.zippyfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-sm font-medium text-crypto-dark-300 hover:text-white transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Foundation</span>
                <ExternalLink className="h-3 w-3" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-zippy-400 to-quantum-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              
              {user ? (
                <div className="relative">
                  <motion.button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 p-2 rounded-lg bg-crypto-dark-800/60 border border-crypto-dark-600/50 hover:border-zippy-500/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <User className="h-5 w-5 text-zippy-400" />
                    <span className="text-sm font-medium text-white">{user.email?.split('@')[0]}</span>
                  </motion.button>

                  {showUserMenu && (
                    <motion.div
                      className="absolute right-0 mt-2 w-48 bg-crypto-dark-900 rounded-lg shadow-xl border border-crypto-dark-700/50 py-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <Link
                        to="/wallet"
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-crypto-dark-200 hover:text-white hover:bg-crypto-dark-800/50 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <Wallet className="h-4 w-4" />
                        <span>My Wallet</span>
                      </Link>
                      <button
                        onClick={() => {
                          signOut()
                          setShowUserMenu(false)
                        }}
                        className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-crypto-dark-200 hover:text-white hover:bg-crypto-dark-800/50 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                      </button>
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.button
                  onClick={() => setShowAuthModal(true)}
                  className="btn-primary text-sm px-6 py-2.5 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Wallet className="h-4 w-4" />
                  <span>Get Wallet</span>
                </motion.button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-crypto-dark-300 hover:text-white hover:bg-crypto-dark-800/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
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
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-crypto-dark-300 hover:text-white hover:bg-crypto-dark-800/50 rounded-lg text-sm font-medium transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.a
                href="https://go.zippyfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-3 text-crypto-dark-300 hover:text-white hover:bg-crypto-dark-800/50 rounded-lg text-sm font-medium transition-colors"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Foundation</span>
                <ExternalLink className="h-3 w-3" />
              </motion.a>
              <motion.button 
                onClick={() => {
                  setIsOpen(false)
                  setShowAuthModal(true)
                }}
                className="w-full mt-4 btn-primary text-sm px-6 py-3 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Wallet className="h-4 w-4" />
                <span>{user ? 'My Wallet' : 'Get Wallet'}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  )
}

export default Navbar