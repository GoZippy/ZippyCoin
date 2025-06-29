import { motion } from 'framer-motion'
import { Bike, Coins, TrendingUp, Shield, Users, ExternalLink, Zap, Globe, Calculator } from 'lucide-react'
import { useState } from 'react'

const Ecosystem = () => {
  const [activeProtocol, setActiveProtocol] = useState(0)

  const integrations = [
    {
      icon: Bike,
      title: 'Zippy.Bike Rewards',
      description: 'Earn ZippyCoin through eco-friendly courier services. Real-world utility driving adoption.',
      features: ['Carbon-Neutral Delivery', 'Instant Rewards', 'Global Network'],
      status: 'Live',
      link: 'https://go.zippyfoundation.org',
      statusColor: 'bg-green-500/20 text-green-300 border-green-500/30',
      metrics: { users: '50K+', deliveries: '2M+', co2Saved: '500 tons' }
    },
    {
      icon: TrendingUp,
      title: 'Trust-Weighted DeFi',
      description: 'Revolutionary DeFi protocols where your trust score determines benefits and access.',
      features: ['2.0x Yield Multipliers', 'Reduced Collateral', 'Dynamic Fees'],
      status: 'Q2 2025',
      statusColor: 'bg-zippy-500/20 text-zippy-300 border-zippy-500/30',
      metrics: { protocols: '12', tvl: '$25M', apy: '15.7%' }
    },
    {
      icon: Shield,
      title: 'Origin Wallets',
      description: 'Government-backed trust anchors providing the foundation for the global trust network.',
      features: ['Government Verified', 'Maximum Trust', 'Network Foundation'],
      status: 'Q1 2025',
      statusColor: 'bg-quantum-500/20 text-quantum-300 border-quantum-500/30',
      metrics: { countries: '12', wallets: '47', trustScore: '100%' }
    }
  ]

  const defiProtocols = [
    {
      name: 'Trust Yield Farming',
      description: 'Higher trust scores unlock higher yields',
      multiplier: '2.0x',
      color: 'from-green-500 to-emerald-600',
      apy: '24.5%',
      tvl: '$8.2M',
      users: '1.2K'
    },
    {
      name: 'Reputation Lending',
      description: 'Lower collateral requirements for trusted users',
      multiplier: '0.5x',
      color: 'from-blue-500 to-cyan-600',
      apy: '12.8%',
      tvl: '$15.7M',
      users: '890'
    },
    {
      name: 'Dynamic Fee AMM',
      description: 'Trading fees decrease with trust score',
      multiplier: '0.15%',
      color: 'from-purple-500 to-violet-600',
      apy: '18.2%',
      tvl: '$22.1M',
      users: '3.4K'
    }
  ]

  const ecosystemStats = [
    { label: 'Total Value Locked', value: '$46.0M', change: '+12.3%', positive: true },
    { label: 'Active Users', value: '8.7K', change: '+28.5%', positive: true },
    { label: 'Transactions', value: '2.1M', change: '+45.2%', positive: true },
    { label: 'Trust Score Avg', value: '87.3', change: '+2.1%', positive: true }
  ]

  return (
    <section id="ecosystem" className="py-20 bg-crypto-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text mb-6">
            Ecosystem & Integrations
          </h2>
          <p className="text-xl text-crypto-dark-300 max-w-3xl mx-auto leading-relaxed">
            ZippyCoin powers real-world applications and revolutionary financial protocols
            through the trusted Zippy Foundation ecosystem.
          </p>
        </motion.div>

        {/* Ecosystem Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {ecosystemStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-crypto-dark-800/40 backdrop-blur-sm rounded-xl p-6 border border-crypto-dark-700/30 hover:border-zippy-500/30 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-crypto-dark-300 mb-2">{stat.label}</div>
              <div className={`text-xs font-medium ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Integrations */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              className="card card-glow group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-gradient-to-r from-zippy-600 to-zippy-700 rounded-xl shadow-lg shadow-zippy-600/25 group-hover:shadow-zippy-500/40 transition-all">
                  <integration.icon className="h-8 w-8 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${integration.statusColor}`}>
                  {integration.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zippy-300 transition-colors">
                {integration.title}
              </h3>
              
              <p className="text-crypto-dark-300 mb-6 leading-relaxed">
                {integration.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {integration.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-zippy-400 to-quantum-400 rounded-full"></div>
                    <span className="text-sm text-crypto-dark-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              {integration.metrics && (
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {Object.entries(integration.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center p-2 bg-crypto-dark-800/40 rounded-lg">
                      <div className="text-sm font-bold text-zippy-400">{value}</div>
                      <div className="text-xs text-crypto-dark-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              )}

              {integration.link && (
                <motion.a
                  href={integration.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-zippy-400 hover:text-zippy-300 font-medium transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Interactive DeFi Protocols */}
        <motion.div
          className="gradient-bg-card border border-crypto-dark-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-4">
              Trust-Weighted DeFi Protocols
            </h3>
            <p className="text-crypto-dark-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Revolutionary DeFi where your reputation and trust score unlock better rates, 
              lower fees, and enhanced benefits.
            </p>
          </div>

          {/* Protocol Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {defiProtocols.map((protocol, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveProtocol(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeProtocol === index
                    ? 'bg-gradient-to-r from-zippy-500 to-quantum-500 text-white shadow-lg'
                    : 'bg-crypto-dark-800/60 text-crypto-dark-300 hover:text-white border border-crypto-dark-700/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {protocol.name}
              </motion.button>
            ))}
          </div>

          {/* Active Protocol Display */}
          <motion.div
            key={activeProtocol}
            className="bg-crypto-dark-800/40 rounded-2xl p-8 border border-crypto-dark-700/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className={`inline-block px-6 py-3 rounded-xl bg-gradient-to-r ${defiProtocols[activeProtocol].color} text-white font-bold text-2xl mb-6 shadow-lg`}>
                  {defiProtocols[activeProtocol].multiplier}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4">
                  {defiProtocols[activeProtocol].name}
                </h4>
                
                <p className="text-crypto-dark-300 text-lg mb-6 leading-relaxed">
                  {defiProtocols[activeProtocol].description}
                </p>

                <div className="flex space-x-4">
                  <motion.button
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Earning
                  </motion.button>
                  <motion.button
                    className="btn-outline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'APY', value: defiProtocols[activeProtocol].apy, icon: TrendingUp },
                  { label: 'TVL', value: defiProtocols[activeProtocol].tvl, icon: Coins },
                  { label: 'Users', value: defiProtocols[activeProtocol].users, icon: Users }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-crypto-dark-900/50 rounded-xl border border-crypto-dark-700/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <metric.icon className="h-6 w-6 text-zippy-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">{metric.value}</div>
                    <div className="text-xs text-crypto-dark-400">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Calculator Demo */}
        <motion.div
          className="bg-gradient-to-r from-crypto-dark-800 to-crypto-dark-900 rounded-3xl p-8 lg:p-12 border border-crypto-dark-700/50 shadow-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-4">
                Trust Score Calculator
              </h3>
              <p className="text-crypto-dark-300 text-lg">
                See how trust scoring affects your DeFi benefits and access
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">Trust Factors</h4>
                {[
                  { name: 'Transaction Success', value: 95, weight: '15%' },
                  { name: 'Network Participation', value: 88, weight: '20%' },
                  { name: 'Community Voting', value: 92, weight: '10%' },
                  { name: 'Stake Consistency', value: 87, weight: '15%' }
                ].map((factor, index) => (
                  <div key={index} className="bg-crypto-dark-800/40 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white">{factor.name}</span>
                      <span className="text-xs text-crypto-dark-400">Weight: {factor.weight}</span>
                    </div>
                    <div className="w-full bg-crypto-dark-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-zippy-400 to-quantum-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${factor.value}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                    <div className="text-right text-sm text-zippy-400 mt-1">{factor.value}%</div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="bg-crypto-dark-800/40 rounded-2xl p-8">
                  <Calculator className="h-12 w-12 text-zippy-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold gradient-text mb-2">89.3</div>
                  <div className="text-lg text-white mb-4">Trust Score</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-crypto-dark-300">Yield Multiplier:</span>
                      <span className="text-green-400 font-semibold">1.8x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-crypto-dark-300">Collateral Reduction:</span>
                      <span className="text-blue-400 font-semibold">30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-crypto-dark-300">Trading Fee Discount:</span>
                      <span className="text-purple-400 font-semibold">25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Foundation Integration */}
        <motion.div
          className="bg-gradient-to-r from-crypto-dark-800 to-crypto-dark-900 rounded-3xl p-8 lg:p-12 border border-crypto-dark-700/50 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="p-4 bg-gradient-to-r from-zippy-600 to-zippy-700 rounded-2xl w-fit mx-auto mb-6 shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <Zap className="h-12 w-12 text-white" />
            </motion.div>
            
            <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-6">
              Powered by Zippy Foundation
            </h3>
            <p className="text-crypto-dark-300 text-lg mb-8 leading-relaxed">
              ZippyCoin is the backbone of the Zippy Foundation ecosystem, providing secure, 
              sustainable rewards for eco-friendly services and driving adoption through real-world utility.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Bike, label: 'Eco-Courier Services', desc: 'Carbon-neutral delivery network', stat: '2M+ deliveries' },
                { icon: Coins, label: 'Instant Rewards', desc: 'Real-time ZippyCoin earnings', stat: '500K+ earned' },
                { icon: Globe, label: 'Global Community', desc: 'Sustainable ecosystem growth', stat: '50+ countries' }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-crypto-dark-800/30 rounded-xl p-6 backdrop-blur-sm border border-crypto-dark-700/30 hover:border-zippy-500/30 transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <item.icon className="h-8 w-8 text-zippy-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">{item.label}</h4>
                  <p className="text-sm text-crypto-dark-300 mb-2">{item.desc}</p>
                  <div className="text-xs text-zippy-400 font-semibold">{item.stat}</div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://go.zippyfoundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 btn-outline group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Visit Zippy Foundation</span>
              <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Ecosystem