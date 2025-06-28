import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import BetaBanner from './components/BetaBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technology from './components/Technology'
import Ecosystem from './components/Ecosystem'
import Roadmap from './components/Roadmap'
import Community from './components/Community'
import Footer from './components/Footer'
import DeveloperPortal from './pages/DeveloperPortal'
import NetworkStatus from './pages/NetworkStatus'

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Technology />
      <Ecosystem />
      <Roadmap />
      <Community />
    </motion.div>
  )
}

function App() {
  const [bannerVisible, setBannerVisible] = React.useState(true)

  React.useEffect(() => {
    const checkBannerVisibility = () => {
      const dismissed = localStorage.getItem('beta-banner-dismissed')
      setBannerVisible(dismissed !== 'true')
    }
    
    checkBannerVisibility()
    
    // Listen for storage changes to update banner visibility
    window.addEventListener('storage', checkBannerVisibility)
    return () => window.removeEventListener('storage', checkBannerVisibility)
  }, [])

  return (
    <div className="min-h-screen bg-crypto-dark-950">
      <BetaBanner />
      <Navbar />
      <div className={bannerVisible ? "pt-[124px]" : "pt-16"}> {/* 60px banner + 64px navbar OR just 64px navbar */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/developers" element={<DeveloperPortal />} />
            <Route path="/network" element={<NetworkStatus />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App