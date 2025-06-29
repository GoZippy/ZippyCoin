import { motion } from 'framer-motion'
import { Brain, Shield, Network, Calculator, TrendingUp, Users, CheckCircle, ArrowRight, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

const ZippyTrust = () => {
  const [simulatedScore, setSimulatedScore] = useState(87.3)
  const [isCalculating, setIsCalculating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedScore(prev => {
        const change = (Math.random() - 0.5) * 2
        return Math.max(50, Math.min(100, prev + change))
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const trustFactors = [
    {
      name: 'Transaction Success',
      value: 95.2,
      weight: 15,
      description: 'Successful transaction completion rate',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Network Participation',
      value: 88.7,
      weight: 20,
      description: 'Active engagement in network governance',
      icon: Users,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Validator Performance',
      value: 92.1,
      weight: 18,
      description: 'Uptime and validation accuracy',
      icon: Shield,
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'Community Trust',
      value: 84.5,
      weight: 12,
      description: 'Peer reviews and endorsements',
      icon: Network,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Stake Consistency',
      value: 91.8,
      weight: 15,
      description: 'Stable staking and delegation patterns',
      icon: TrendingUp,
      color: 'from-pink-500 to-rose-600'
    }
  ]

  const benefits = [
    {
      title: 'Higher Yields',
      multiplier: '2.0x',
      description: 'Earn up to 200% higher yields in DeFi protocols',
      color: 'from-green-500 to-emerald-600',
      icon: TrendingUp
    },
    {
      title: 'Lower Fees',
      multiplier: '75%',
      description: 'Reduced transaction and trading fees',
      color: 'from-blue-500 to-cyan-600',
      icon: Calculator
    },
    {
      title: 'Less Collateral',
      multiplier: '50%',
      description: 'Reduced collateral requirements for loans',
      color: 'from-purple-500 to-violet-600',
      icon: Shield
    },
    {
      title: 'Priority Access',
      multiplier: '1st',
      description: 'Early access to new features and services',
      color: 'from-orange-500 to-red-600',
      icon: Users
    }
  ]

  const calculateTrustScore = async () => {
    setIsCalculating(true)
    
    // Simulate calculation delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const newScore = Math.random() * 30 + 70 // Random score between 70-100
    setSimulatedScore(newScore)
    setIsCalculating(false)
  }

  return (
    <section id="zippytrust" className="py-20 bg-crypto-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-zippy-500/20 to-quantum-500/20 backdrop-blur-sm border border-zippy-400/30 text-zippy-300 text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Brain className="w-5 h-5 mr-2" />
            <span>ZippyTrust Engine</span>
          </motion.div>
          
          <h2 className="gradient-text mb-6">
            Trust-Based Everything
          </h2>
          <p className="text-xl text-crypto-dark-300 max-w-3xl mx-auto leading-relaxed">
            ZippyTrust revolutionizes how we measure reputation and trust in digital ecosystems,
            enabling fair, transparent, and mathematically verifiable trust scoring.
          </p>
        </motion.div>

        {/* Trust Score Calculator */}
        <motion.div
          className="bg-gradient-to-r from-crypto-dark-800 to-crypto-dark-900 rounded-3xl p-8 lg:p-12 border border-crypto-dark-700/50 shadow-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Trust Factors */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-8">Trust Factors</h3>
              <div className="space-y-6">
                {trustFactors.map((factor, index) => (
                  <motion.div
                    key={index}
                    className="bg-crypto-dark-800/40 rounded-xl p-6 border border-crypto-dark-700/30 hover:border-zippy-500/30 transition-all"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${factor.color}`}>
                          <factor.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{factor.name}</div>
                          <div className="text-xs text-crypto-dark-400">Weight: {factor.weight}%</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-zippy-400">{factor.value.toFixed(1)}%</div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-crypto-dark-700 rounded-full h-2 mb-2">
                      <motion.div
                        className={`bg-gradient-to-r ${factor.color} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${factor.value}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    
                    <p className="text-sm text-crypto-dark-300">{factor.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trust Score Display */}
            <div className="text-center">
              <motion.div
                className="bg-crypto-dark-800/60 rounded-3xl p-12 border border-crypto-dark-700/50 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                <Brain className="h-16 w-16 text-zippy-400 mx-auto mb-6" />
                
                <motion.div
                  className="text-6xl font-bold gradient-text mb-4"
                  key={simulatedScore}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {isCalculating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-zippy-400"></div>
                    </div>
                  ) : (
                    simulatedScore.toFixed(1)
                  )}
                </motion.div>
                
                <div className="text-xl text-white mb-6 font-semibold">ZippyTrust Score</div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-crypto-dark-300">Risk Level:</span>
                    <span className={`font-semibold ${simulatedScore > 85 ? 'text-green-400' : simulatedScore > 70 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {simulatedScore > 85 ? 'Low' : simulatedScore > 70 ? 'Medium' : 'High'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-crypto-dark-300">DeFi Access:</span>
                    <span className="text-zippy-400 font-semibold">Premium</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-crypto-dark-300">Yield Multiplier:</span>
                    <span className="text-green-400 font-semibold">{(simulatedScore / 50).toFixed(1)}x</span>
                  </div>
                </div>

                <motion.button
                  onClick={calculateTrustScore}
                  disabled={isCalculating}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isCalculating ? 1 : 1.05 }}
                  whileTap={{ scale: isCalculating ? 1 : 0.95 }}
                >
                  {isCalculating ? 'Calculating...' : 'Recalculate Trust Score'}
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Trust Benefits */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-4">
              Trust-Based Benefits
            </h3>
            <p className="text-crypto-dark-300 text-lg">
              Higher trust scores unlock better rates, lower fees, and premium access
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-crypto-dark-800/40 rounded-2xl p-6 border border-crypto-dark-700/30 hover:border-zippy-500/30 transition-all text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`p-4 rounded-xl bg-gradient-to-r ${benefit.color} w-fit mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-2`}>
                  {benefit.multiplier}
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-zippy-300 transition-colors">
                  {benefit.title}
                </h4>
                
                <p className="text-sm text-crypto-dark-300 group-hover:text-crypto-dark-200 transition-colors">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Integration */}
        <motion.div
          className="bg-gradient-to-r from-zippy-900/40 to-crypto-dark-900/60 rounded-3xl p-8 lg:p-12 border border-zippy-500/30 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Powering the <span className="text-zippy-400">ZippyCoin</span> Ecosystem
            </h3>
            <p className="text-crypto-dark-300 text-lg mb-8 leading-relaxed">
              ZippyTrust enables revolutionary trust-based economics in DeFi, allowing 
              better risk assessment, fair pricing, and reputation-based access control across our ecosystem.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { label: 'DeFi Protocols', value: '12+', icon: Zap },
                { label: 'Trust Calculations', value: '1M+', icon: Calculator },
                { label: 'Network Validators', value: '127', icon: Shield }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-crypto-dark-800/40 rounded-xl p-6 backdrop-blur-sm border border-crypto-dark-700/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="h-8 w-8 text-zippy-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-zippy-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-crypto-dark-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-2 bg-zippy-500 hover:bg-zippy-400 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore DeFi Protocols</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-2 btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn About Trust Engine</span>
                <Brain className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ZippyTrust