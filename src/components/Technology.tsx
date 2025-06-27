import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Cpu, Network, Lock, Zap, Users } from 'lucide-react'

const Technology = () => {
  const technologies = [
    {
      icon: Shield,
      title: 'Post-Quantum Security',
      description: 'CRYSTALS-Dilithium, Kyber, and SPHINCS+ algorithms providing 128-bit post-quantum security.',
      features: ['NIST Standardized', 'Future-Proof', 'Quantum-Safe']
    },
    {
      icon: Network,
      title: 'Trust Engine',
      description: 'Mathematical trust scoring with anti-gaming mechanisms and Byzantine fault tolerance.',
      features: ['Sybil Resistant', 'Collusion Prevention', '33% Fault Tolerance']
    },
    {
      icon: Cpu,
      title: 'Dual-Layer Architecture',
      description: 'ZippyCore L1 for security and ZippyEdge L2 for scalability, delivering 100K+ TPS.',
      features: ['10K TPS L1', '100K+ TPS L2', '250ms Finality']
    }
  ]

  const trustFormula = {
    main: 'T(w) = min(T(p₁), T(p₂), ..., T(pₙ))',
    factors: [
      { symbol: 'δᵈ', name: 'Delegation Decay', description: 'Reduces trust with delegation depth' },
      { symbol: 'ρ(w)', name: 'Reputation Factor', description: 'Multi-dimensional reputation metrics' },
      { symbol: 'η(w)', name: 'Network Effect', description: 'Increases with delegation count' },
      { symbol: 'σ(w)', name: 'Stake Factor', description: 'Logarithmic stake weighting' }
    ]
  }

  return (
    <section id="technology" className="py-20 bg-crypto-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text mb-6">
            Revolutionary Technology
          </h2>
          <p className="text-xl text-crypto-dark-300 max-w-3xl mx-auto leading-relaxed">
            Built from the ground up with cutting-edge cryptography and mathematical rigor
            to solve the fundamental challenges facing modern cryptocurrencies.
          </p>
        </motion.div>

        {/* Technology Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="card card-glow group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="p-4 bg-gradient-to-r from-zippy-600 to-zippy-700 rounded-xl w-fit mb-6 shadow-lg shadow-zippy-600/25 group-hover:shadow-zippy-500/40 transition-all">
                <tech.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zippy-300 transition-colors">
                {tech.title}
              </h3>
              <p className="text-crypto-dark-300 mb-6 leading-relaxed">
                {tech.description}
              </p>
              <div className="space-y-3">
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-zippy-400 to-quantum-400 rounded-full"></div>
                    <span className="text-sm text-crypto-dark-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Formula Section */}
        <motion.div
          className="gradient-bg-card border border-crypto-dark-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-6">
              Mathematical Trust Model
            </h3>
            <p className="text-crypto-dark-300 mb-8 text-lg leading-relaxed">
              Our trust calculation ensures security while preventing gaming and manipulation
            </p>
            
            {/* Main Formula */}
            <div className="bg-crypto-dark-900/60 rounded-2xl p-6 mb-8 border border-crypto-dark-700/30 backdrop-blur-sm">
              <div className="text-2xl lg:text-3xl font-mono mb-4 gradient-text font-bold">
                {trustFormula.main}
              </div>
              <div className="text-lg font-mono text-crypto-dark-300">
                × δᵈ × ρ(w) × η(w) × σ(w)
              </div>
            </div>

            {/* Factors */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {trustFormula.factors.map((factor, index) => (
                <motion.div
                  key={index}
                  className="bg-crypto-dark-800/40 rounded-xl p-4 border border-crypto-dark-700/30 backdrop-blur-sm hover:border-zippy-500/30 transition-all"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-xl font-mono gradient-text-secondary mb-2 font-bold">
                    {factor.symbol}
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">{factor.name}</div>
                  <div className="text-xs text-crypto-dark-400 leading-relaxed">{factor.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Performance Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Transaction Speed', value: '100K+', unit: 'TPS' },
            { label: 'Finality Time', value: '250', unit: 'ms' },
            { label: 'Security Level', value: '128', unit: 'bit' },
            { label: 'Fault Tolerance', value: '33', unit: '%' }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="stats-card group hover:border-zippy-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2 font-display">
                {stat.value}<span className="text-lg text-crypto-dark-400">{stat.unit}</span>
              </div>
              <div className="text-crypto-dark-300 font-medium group-hover:text-crypto-dark-200 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Technology