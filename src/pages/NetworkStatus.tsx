import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity, Shield, Zap, Users, TrendingUp, Clock, CheckCircle, Globe } from 'lucide-react'

const NetworkStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Mock data - in real implementation, this would come from APIs
  const networkStats = {
    tps: 9847,
    blockHeight: 2847329,
    activeValidators: 127,
    totalStaked: '42.7M',
    averageBlockTime: 0.98,
    networkHealth: 99.7
  }

  const recentBlocks = [
    { height: 2847329, hash: '0x8f2e...a4b7', time: '2s ago', txCount: 142, validator: 'Validator-A1' },
    { height: 2847328, hash: '0x7d1c...e5a9', time: '5s ago', txCount: 156, validator: 'Validator-B2' },
    { height: 2847327, hash: '0x9a4f...c2d8', time: '8s ago', txCount: 134, validator: 'Validator-C3' },
    { height: 2847326, hash: '0x6b8e...f7a1', time: '11s ago', txCount: 189, validator: 'Validator-D4' },
    { height: 2847325, hash: '0x3c5a...b9e2', time: '14s ago', txCount: 167, validator: 'Validator-E5' }
  ]

  const validators = [
    { name: 'ZippyValidator-01', trustScore: 98.5, uptime: 99.9, stake: '2.1M ZPC', status: 'active' },
    { name: 'QuantumNode-07', trustScore: 97.8, uptime: 99.7, stake: '1.8M ZPC', status: 'active' },
    { name: 'SecureStake-15', trustScore: 96.9, uptime: 99.8, stake: '1.6M ZPC', status: 'active' },
    { name: 'TrustGuard-23', trustScore: 95.2, uptime: 99.6, stake: '1.4M ZPC', status: 'active' },
    { name: 'CryptoShield-31', trustScore: 94.7, uptime: 99.5, stake: '1.3M ZPC', status: 'active' }
  ]

  const performanceMetrics = [
    { label: 'Current TPS', value: networkStats.tps.toLocaleString(), icon: Zap, change: '+2.3%', positive: true },
    { label: 'Block Height', value: networkStats.blockHeight.toLocaleString(), icon: Activity, change: 'Live', positive: true },
    { label: 'Active Validators', value: networkStats.activeValidators, icon: Users, change: '+1', positive: true },
    { label: 'Total Staked', value: networkStats.totalStaked + ' ZPC', icon: Shield, change: '+0.8%', positive: true },
    { label: 'Avg Block Time', value: networkStats.averageBlockTime + 's', icon: Clock, change: '-0.02s', positive: true },
    { label: 'Network Health', value: networkStats.networkHealth + '%', icon: CheckCircle, change: '+0.1%', positive: true }
  ]

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            Network Status
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
            Real-time monitoring of the ZippyCoin network performance, security, and validator activity.
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Network Operational</span>
            <span className="text-sm">({currentTime.toLocaleTimeString()})</span>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-16">
          {performanceMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gradient-to-r from-zippy-500 to-quantum-500 rounded-lg">
                  <metric.icon className="h-5 w-5 text-white" />
                </div>
                <span className={`text-xs font-medium ${
                  metric.positive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</div>
              <div className="text-sm text-slate-600 font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Recent Blocks & Validators */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Recent Blocks */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold gradient-text mb-6">Recent Blocks</h3>
            <div className="space-y-4">
              {recentBlocks.map((block, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div>
                    <div className="font-mono text-sm text-slate-900 font-medium">#{block.height}</div>
                    <div className="font-mono text-xs text-slate-500">{block.hash}</div>
                    <div className="text-xs text-slate-600 mt-1">{block.validator}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-slate-900">{block.txCount} txs</div>
                    <div className="text-xs text-slate-500">{block.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Top Validators */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold gradient-text mb-6">Top Validators</h3>
            <div className="space-y-4">
              {validators.map((validator, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">{validator.name}</div>
                    <div className="text-sm text-slate-600 mt-1">
                      Trust: {validator.trustScore}% • Uptime: {validator.uptime}%
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-slate-900">{validator.stake}</div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600 font-medium">Active</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Network Health */}
        <motion.div
          className="bg-gradient-to-r from-zippy-900 via-slate-900 to-quantum-900 rounded-3xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Network Health Overview</h2>
            <p className="text-slate-300 text-lg">
              Comprehensive monitoring of ZippyCoin's security, performance, and decentralization metrics
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Security Status',
                value: '100%',
                description: 'Post-quantum cryptography active',
                icon: Shield,
                color: 'from-green-500 to-emerald-600'
              },
              {
                title: 'Decentralization',
                value: '95.2%',
                description: 'Nakamoto coefficient: 47',
                icon: Globe,
                color: 'from-blue-500 to-cyan-600'
              },
              {
                title: 'Performance',
                value: '99.7%',
                description: 'Network efficiency score',
                icon: TrendingUp,
                color: 'from-purple-500 to-violet-600'
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`p-4 rounded-xl bg-gradient-to-r ${metric.color} w-fit mb-4`}>
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-lg font-semibold mb-2">{metric.title}</div>
                <div className="text-slate-300 text-sm">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Explorer Link */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold gradient-text mb-4">
              Explore the Blockchain
            </h3>
            <p className="text-slate-600 mb-6">
              Access the full block explorer for detailed transaction history, wallet analysis, and network statistics.
            </p>
            <button className="bg-gradient-to-r from-zippy-500 to-quantum-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-zippy-600 hover:to-quantum-600 transition-all shadow-lg hover:shadow-xl">
              Launch Block Explorer
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NetworkStatus