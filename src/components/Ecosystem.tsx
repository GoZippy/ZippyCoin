import React from 'react'
import { motion } from 'framer-motion'
import { Bike, Coins, TrendingUp, Shield, Users, Zap, ExternalLink } from 'lucide-react'

const Ecosystem = () => {
  const integrations = [
    {
      icon: Bike,
      title: 'Zippy.Bike Rewards',
      description: 'Earn ZippyCoin through eco-friendly courier services. Real-world utility driving adoption.',
      features: ['Carbon-Neutral Delivery', 'Instant Rewards', 'Global Network'],
      status: 'Coming Soon',
      link: 'https://go.zippyfoundation.org'
    },
    {
      icon: TrendingUp,
      title: 'Trust-Weighted DeFi',
      description: 'Revolutionary DeFi protocols where your trust score determines benefits and access.',
      features: ['2.0x Yield Multipliers', 'Reduced Collateral', 'Dynamic Fees'],
      status: 'Q2 2025'
    },
    {
      icon: Shield,
      title: 'Origin Wallets',
      description: 'Government-backed trust anchors providing the foundation for the global trust network.',
      features: ['Government Verified', 'Maximum Trust', 'Network Foundation'],
      status: 'Q1 2025'
    }
  ]

  const defiProtocols = [
    {
      name: 'Trust Yield Farming',
      description: 'Higher trust scores unlock higher yields',
      multiplier: '2.0x',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Reputation Lending',
      description: 'Lower collateral requirements for trusted users',
      multiplier: '0.5x',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Dynamic Fee AMM',
      description: 'Trading fees decrease with trust score',
      multiplier: '0.15%',
      color: 'from-purple-500 to-violet-600'
    }
  ]

  return (
    <section id="ecosystem" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
            Ecosystem & Integrations
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ZippyCoin powers real-world applications and revolutionary financial protocols
            through the trusted Zippy Foundation ecosystem.
          </p>
        </motion.div>

        {/* Main Integrations */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-zippy-200 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-gradient-to-r from-zippy-500 to-quantum-500 rounded-xl">
                  <integration.icon className="h-8 w-8 text-white" />
                </div>
                <span className="px-3 py-1 bg-zippy-100 text-zippy-700 rounded-full text-sm font-medium">
                  {integration.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-zippy-600 transition-colors">
                {integration.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {integration.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {integration.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-zippy-500 rounded-full"></div>
                    <span className="text-sm text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {integration.link && (
                <a
                  href={integration.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-zippy-600 hover:text-zippy-700 font-medium transition-colors"
                >
                  <span>Learn More</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* DeFi Protocols */}
        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-4">
              Trust-Weighted DeFi Protocols
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Revolutionary DeFi where your reputation and trust score unlock better rates, 
              lower fees, and enhanced benefits.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {defiProtocols.map((protocol, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-slate-50 to-white border border-slate-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${protocol.color} opacity-10 rounded-bl-3xl`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${protocol.color} text-white font-bold text-lg mb-4`}>
                    {protocol.multiplier}
                  </div>
                  
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    {protocol.name}
                  </h4>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {protocol.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="bg-gradient-to-r from-zippy-500 to-quantum-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-zippy-600 hover:to-quantum-600 transition-all shadow-lg hover:shadow-xl">
              Explore DeFi Protocols
            </button>
          </motion.div>
        </motion.div>

        {/* Foundation Integration */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-zippy-900 to-quantum-900 rounded-3xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Powered by Zippy Foundation
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              ZippyCoin is the backbone of the Zippy Foundation ecosystem, providing secure, 
              sustainable rewards for eco-friendly services and driving adoption through real-world utility.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Bike, label: 'Eco-Courier Services', desc: 'Carbon-neutral delivery network' },
                { icon: Coins, label: 'Instant Rewards', desc: 'Real-time ZippyCoin earnings' },
                { icon: Users, label: 'Global Community', desc: 'Sustainable ecosystem growth' }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                  <item.icon className="h-8 w-8 text-zippy-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{item.label}</h4>
                  <p className="text-sm text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="https://go.zippyfoundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-zippy-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
            >
              <span>Visit Zippy Foundation</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Ecosystem