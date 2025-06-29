import { motion } from 'framer-motion'
import { Shield, Cpu, Network, Code, Database, Lock } from 'lucide-react'
import { useState } from 'react'

const Technology = () => {
  const [activeTab, setActiveTab] = useState(0)

  const technologies = [
    {
      icon: Shield,
      title: 'Post-Quantum Security',
      description: 'CRYSTALS-Dilithium, Kyber, and SPHINCS+ algorithms providing 128-bit post-quantum security.',
      features: ['NIST Standardized', 'Future-Proof', 'Quantum-Safe'],
      details: 'Our cryptographic suite ensures your assets remain secure even against quantum computers, using algorithms standardized by NIST for maximum reliability.'
    },
    {
      icon: Network,
      title: 'Trust Engine',
      description: 'Mathematical trust scoring with anti-gaming mechanisms and Byzantine fault tolerance.',
      features: ['Sybil Resistant', 'Collusion Prevention', '33% Fault Tolerance'],
      details: 'Revolutionary trust propagation system that enables secure transactions without traditional mining, reducing energy consumption by 99.9%.'
    },
    {
      icon: Cpu,
      title: 'Dual-Layer Architecture',
      description: 'ZippyCore L1 for security and ZippyEdge L2 for scalability, delivering 100K+ TPS.',
      features: ['10K TPS L1', '100K+ TPS L2', '250ms Finality'],
      details: 'Innovative dual-layer design separates security from scalability, allowing for institutional-grade security with consumer-friendly performance.'
    }
  ]

  const architectureLayers = [
    {
      name: 'ZippyEdge L2',
      description: 'High-throughput payment channels and state management',
      features: ['100K+ TPS', 'Instant Settlement', 'Privacy Optional'],
      color: 'from-zippy-500 to-zippy-600'
    },
    {
      name: 'ZippyCore L1',
      description: 'Trust engine, consensus, and governance layer',
      features: ['Trust Scoring', 'Governance DAO', 'Security First'],
      color: 'from-quantum-500 to-quantum-600'
    }
  ]

  const trustFormula = {
    main: 'T(w) = min(T(p₁), T(p₂), ..., T(pₙ))',
    factors: [
      { symbol: 'δᵈ', name: 'Delegation Decay', description: 'Reduces trust with delegation depth', formula: '0.9^d' },
      { symbol: 'ρ(w)', name: 'Reputation Factor', description: 'Multi-dimensional reputation metrics', formula: 'Σ(mᵢ × wᵢ)' },
      { symbol: 'η(w)', name: 'Network Effect', description: 'Increases with delegation count', formula: '0.5 + 0.05n' },
      { symbol: 'σ(w)', name: 'Stake Factor', description: 'Logarithmic stake weighting', formula: '0.7 + 0.1ln(s)' }
    ]
  }

  const securityFeatures = [
    { icon: Lock, title: 'Digital Signatures', detail: 'CRYSTALS-Dilithium' },
    { icon: Database, title: 'Key Exchange', detail: 'CRYSTALS-Kyber' },
    { icon: Code, title: 'Hash Functions', detail: 'SHA3-256, BLAKE3' },
    { icon: Shield, title: 'Encryption', detail: 'AES-256-GCM' }
  ]

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
              className="card card-glow group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => setActiveTab(index)}
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
              <div className="space-y-3 mb-6">
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-zippy-400 to-quantum-400 rounded-full"></div>
                    <span className="text-sm text-crypto-dark-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-crypto-dark-400 group-hover:text-crypto-dark-300 transition-colors">
                {tech.details}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Visualization */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-4">
              Dual-Layer Architecture
            </h3>
            <p className="text-crypto-dark-300 text-lg">
              Separating security from scalability for optimal performance
            </p>
          </div>

          <div className="space-y-6">
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={index}
                className={`relative overflow-hidden rounded-2xl p-8 bg-gradient-to-r ${layer.color}`}
                initial={{ opacity: 0, x: index === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-4">{layer.name}</h4>
                  <p className="text-white/90 text-lg mb-6">{layer.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {layer.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl transform translate-x-16 -translate-y-16"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Formula Section */}
        <motion.div
          className="gradient-bg-card border border-crypto-dark-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl mb-20"
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
                  <div className="text-xs text-crypto-dark-400 mb-2 leading-relaxed">{factor.description}</div>
                  <div className="text-xs font-mono text-zippy-400">{factor.formula}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div
          className="grid lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-crypto-dark-800/40 rounded-xl p-6 border border-crypto-dark-700/30 backdrop-blur-sm hover:border-zippy-500/30 transition-all text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <feature.icon className="h-8 w-8 text-zippy-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-crypto-dark-300">{feature.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Performance Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Transaction Speed', value: '100K+', unit: 'TPS', change: '+15%' },
            { label: 'Finality Time', value: '250', unit: 'ms', change: '-50ms' },
            { label: 'Security Level', value: '128', unit: 'bit', change: '100%' },
            { label: 'Fault Tolerance', value: '33', unit: '%', change: 'Standard' }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="stats-card group hover:border-zippy-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2 font-display">
                {stat.value}<span className="text-lg text-crypto-dark-400">{stat.unit}</span>
              </div>
              <div className="text-crypto-dark-300 font-medium group-hover:text-crypto-dark-200 transition-colors mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-zippy-400 font-medium">{stat.change}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Technology