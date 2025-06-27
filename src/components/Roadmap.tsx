import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Circle, Clock, Rocket, Users, Globe } from 'lucide-react'

const Roadmap = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      period: 'Q1-Q2 2025',
      status: 'upcoming',
      icon: Rocket,
      description: 'Core infrastructure and initial ecosystem launch',
      milestones: [
        { task: 'Mainnet Launch', completed: false, critical: true },
        { task: 'Mobile Wallet Applications', completed: false, critical: true },
        { task: 'Origin Wallet Deployment', completed: false, critical: true },
        { task: 'Basic DeFi Protocols', completed: false, critical: false },
        { task: 'Community Documentation', completed: true, critical: false }
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Expansion',
      period: 'Q3-Q4 2025',
      status: 'planned',
      icon: Users,
      description: 'Scale operations and expand ecosystem integrations',
      milestones: [
        { task: 'Layer 2 Scaling Solution', completed: false, critical: true },
        { task: 'Advanced DeFi Features', completed: false, critical: true },
        { task: 'Enterprise Integrations', completed: false, critical: false },
        { task: 'Cross-Chain Bridges', completed: false, critical: false },
        { task: 'Zippy.Bike Integration', completed: false, critical: true }
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Global Scale',
      period: 'Q1-Q2 2026',
      status: 'future',
      icon: Globe,
      description: 'Achieve global adoption and ecosystem maturity',
      milestones: [
        { task: '100M+ Users', completed: false, critical: true },
        { task: '$25B+ TVL', completed: false, critical: true },
        { task: '100+ Countries', completed: false, critical: false },
        { task: 'Quantum Resistance 2.0', completed: false, critical: true },
        { task: 'Full Ecosystem Maturity', completed: false, critical: false }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'from-zippy-500 to-zippy-600'
      case 'planned': return 'from-quantum-500 to-quantum-600'
      case 'future': return 'from-crypto-dark-600 to-crypto-dark-700'
      default: return 'from-crypto-dark-600 to-crypto-dark-700'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming': return 'In Progress'
      case 'planned': return 'Planned'
      case 'future': return 'Future'
      default: return 'Unknown'
    }
  }

  return (
    <section id="roadmap" className="py-20 bg-crypto-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text mb-6">
            Development Roadmap
          </h2>
          <p className="text-xl text-crypto-dark-300 max-w-3xl mx-auto leading-relaxed">
            Our strategic plan to revolutionize cryptocurrency through trust-based economics
            and quantum-resistant technology.
          </p>
        </motion.div>

        <div className="space-y-12">
          {phases.map((phase, phaseIndex) => (
            <motion.div
              key={phaseIndex}
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: phaseIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline connector */}
              {phaseIndex < phases.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-crypto-dark-600 to-transparent"></div>
              )}

              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Phase header */}
                <div className="lg:w-80 flex-shrink-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${getStatusColor(phase.status)} shadow-lg`}>
                      <phase.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${getStatusColor(phase.status)}`}>
                          {getStatusText(phase.status)}
                        </span>
                      </div>
                      <p className="text-crypto-dark-300 font-medium">{phase.period}</p>
                    </div>
                  </div>
                  <p className="text-crypto-dark-300 leading-relaxed">{phase.description}</p>
                </div>

                {/* Milestones */}
                <div className="flex-1">
                  <div className="gradient-bg-card border border-crypto-dark-700/50 rounded-2xl p-6 shadow-xl">
                    <h4 className="text-lg font-semibold text-white mb-6">Key Milestones</h4>
                    <div className="space-y-4">
                      {phase.milestones.map((milestone, milestoneIndex) => (
                        <motion.div
                          key={milestoneIndex}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: milestoneIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {milestone.completed ? (
                            <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                          ) : phase.status === 'upcoming' ? (
                            <Clock className="h-6 w-6 text-zippy-400 flex-shrink-0" />
                          ) : (
                            <Circle className="h-6 w-6 text-crypto-dark-500 flex-shrink-0" />
                          )}
                          <span className={`font-medium ${
                            milestone.completed 
                              ? 'text-green-300' 
                              : phase.status === 'upcoming' 
                                ? 'text-white' 
                                : 'text-crypto-dark-400'
                          }`}>
                            {milestone.task}
                            {milestone.critical && (
                              <span className="ml-2 px-2 py-0.5 bg-quantum-500/20 text-quantum-300 text-xs rounded-full border border-quantum-500/30">
                                Critical
                              </span>
                            )}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Metrics */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-crypto-dark-800 to-crypto-dark-900 rounded-3xl p-8 lg:p-12 border border-crypto-dark-700/50 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-4">Target Metrics</h3>
            <p className="text-crypto-dark-300 text-lg">
              Our ambitious goals for the ZippyCoin ecosystem by 2026
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Users', value: '100M+', icon: Users },
              { label: 'TVL', value: '$25B+', icon: Rocket },
              { label: 'Countries', value: '100+', icon: Globe },
              { label: 'TPS', value: '1M+', icon: CheckCircle }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-4 bg-crypto-dark-800/60 rounded-2xl w-fit mx-auto mb-4 backdrop-blur-sm border border-crypto-dark-700/30 group-hover:border-zippy-500/30 transition-all">
                  <metric.icon className="h-8 w-8 text-zippy-400 group-hover:text-zippy-300 transition-colors" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2 font-display">
                  {metric.value}
                </div>
                <div className="text-crypto-dark-300 font-medium group-hover:text-crypto-dark-200 transition-colors">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Roadmap