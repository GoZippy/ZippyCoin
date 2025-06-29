import { motion } from 'framer-motion'
import { Shield, Zap, Globe, ArrowRight, Play, CheckCircle, ExternalLink, Bike, Users } from 'lucide-react'
import { useState } from 'react'

const Hero = () => {
  const [videoPlaying, setVideoPlaying] = useState(false)

  const features = [
    { icon: Shield, text: 'Quantum-Resistant Security' },
    { icon: Zap, text: '100,000+ TPS Performance' },
    { icon: Globe, text: 'Global Trust Network' },
  ]

  const ecosystemStats = [
    { value: '50K+', label: 'Active Users', source: 'Zippy.Bike' },
    { value: '2M+', label: 'Deliveries', source: 'Ecosystem' },
    { value: '500+', label: 'Tons CO₂ Saved', source: 'Impact' },
    { value: '12+', label: 'Countries', source: 'Global' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Foundation Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-crypto-dark-950 via-crypto-dark-900 to-crypto-dark-950">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        {/* Enhanced gradient orbs with Foundation branding */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zippy-500/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zippy-400/4 rounded-full blur-2xl animate-pulse-slow"></div>
        
        {/* Foundation-themed floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-green-500/10 to-zippy-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-l from-zippy-500/8 to-green-500/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Foundation Ecosystem Badge */}
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-zippy-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 text-sm font-medium mb-6 shadow-lg hover:border-green-400/50 transition-all cursor-pointer group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => window.open('https://go.zippyfoundation.org', '_blank')}
          >
            <div className="flex items-center mr-3">
              <Bike className="w-4 h-4 text-green-400 mr-2" />
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            </div>
            <span className="font-semibold">Powered by Zippy Foundation Ecosystem</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.div>

          {/* Enhanced Status Badge */}
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-crypto-dark-800/60 backdrop-blur-sm border border-zippy-500/20 text-zippy-300 text-sm font-medium mb-8 shadow-lg hover:border-zippy-400/30 transition-all cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center mr-3">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <CheckCircle className="w-4 h-4 text-green-400" />
            </div>
            Mainnet Q3 2025 • ZippyTrust Engine Active • Developer Preview Live
          </motion.div>

          {/* Enhanced Main heading */}
          <motion.h1
            className="text-white mb-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Powering the
            <span className="block gradient-text mt-2">
              Zippy Foundation
            </span>
            <span className="block text-white mt-2">Ecosystem</span>
          </motion.h1>

          <motion.p
            className="text-xl text-crypto-dark-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-green-400 font-semibold">ZippyCoin</span> combines <span className="text-zippy-400 font-semibold">post-quantum cryptography</span> with{' '}
            <span className="text-quantum-400 font-semibold">ZippyTrust</span> scoring to power real-world eco-friendly services
            and create the most secure cryptocurrency ecosystem.
          </motion.p>

          {/* Live Ecosystem Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {ecosystemStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-crypto-dark-800/40 backdrop-blur-sm border border-crypto-dark-700/50 rounded-xl p-4 hover:border-green-500/30 transition-all group"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-2xl font-bold text-green-400 mb-1 group-hover:text-green-300 transition-colors">{stat.value}</div>
                <div className="text-sm text-crypto-dark-300 font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-crypto-dark-400">{stat.source}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-badge group hover:border-zippy-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <feature.icon className="h-4 w-4 text-zippy-400 mr-2 group-hover:text-zippy-300 transition-colors" />
                <span className="text-sm font-medium text-crypto-dark-200 group-hover:text-white transition-colors">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.a
              href="#zippytrust"
              className="btn-primary group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center">
                Explore ZippyTrust
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="https://go.zippyfoundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 text-crypto-dark-200 hover:text-white transition-colors px-6 py-3 bg-green-500/10 rounded-xl border border-green-500/30 hover:border-green-400/50 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-2 rounded-full border border-green-500/30 group-hover:border-green-400/50 transition-colors backdrop-blur-sm">
                <Bike className="h-4 w-4 group-hover:text-green-400 transition-colors" />
              </div>
              <span className="font-medium">Discover Zippy.Bike</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Foundation ecosystem highlight */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <p className="text-crypto-dark-400 text-sm mb-4">Real-World Impact Through Crypto Innovation</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <motion.a
                href="https://go.zippyfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors group bg-crypto-dark-800/30 px-4 py-2 rounded-lg border border-crypto-dark-700/30 hover:border-green-500/30 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="h-4 w-4" />
                <span className="font-medium">50K+ Eco-Couriers</span>
                <ExternalLink className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.div
                className="inline-flex items-center space-x-2 text-zippy-400 bg-crypto-dark-800/30 px-4 py-2 rounded-lg border border-crypto-dark-700/30 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="h-4 w-4" />
                <span className="font-medium">Instant ZPC Rewards</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-crypto-dark-600/50 rounded-full flex justify-center cursor-pointer hover:border-zippy-400/50 transition-colors"
          whileHover={{ scale: 1.1 }}
          onClick={() => document.getElementById('zippytrust')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            className="w-1 h-3 bg-zippy-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero