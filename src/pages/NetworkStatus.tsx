import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity, Shield, Zap, Users, TrendingUp, Clock, CheckCircle, Globe, ArrowUp, ArrowDown, Minus } from 'lucide-react'

const NetworkStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [liveMetrics, setLiveMetrics] = useState({
    tps: 9847,
    blockHeight: 2847329,
    activeValidators: 127,
    totalStaked: 42.7,
    averageBlockTime: 0.98,
    networkHealth: 99.7
  })

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Simulate live data updates
  useEffect(() => {
    const updateMetrics = () => {
      setLiveMetrics(prev => ({
        ...prev,
        tps: prev.tps + Math.floor(Math.random() * 200) - 100,
        blockHeight: prev.blockHeight + 1,
        averageBlockTime: prev.averageBlockTime + (Math.random() - 0.5) * 0.1
      }))
    }

    const interval = setInterval(updateMetrics, 3000)
    return () => clearInterval(interval)
  }, [])

  const recentBlocks = [
    { height: liveMetrics.blockHeight, hash: '0x8f2e...a4b7', time: '2s ago', txCount: 142, validator: 'ZippyValidator-01', size: '2.1 KB' },
    { height: liveMetrics.blockHeight - 1, hash: '0x7d1c...e5a9', time: '5s ago', txCount: 156, validator: 'QuantumNode-07', size: '2.3 KB' },
    { height: liveMetrics.blockHeight - 2, hash: '0x9a4f...c2d8', time: '8s ago', txCount: 134, validator: 'SecureStake-15', size: '1.9 KB' },
    { height: liveMetrics.blockHeight - 3, hash: '0x6b8e...f7a1', time: '11s ago', txCount: 189, validator: 'TrustGuard-23', size: '2.5 KB' },
    { height: liveMetrics.blockHeight - 4, hash: '0x3c5a...b9e2', time: '14s ago', txCount: 167, validator: 'CryptoShield-31', size: '2.2 KB' }
  ]

  const validators = [
    { name: 'ZippyValidator-01', trustScore: 98.5, uptime: 99.9, stake: '2.1M ZPC', status: 'active', commission: '5%', change: 'up' },
    { name: 'QuantumNode-07', trustScore: 97.8, uptime: 99.7, stake: '1.8M ZPC', status: 'active', commission: '7%', change: 'up' },
    { name: 'SecureStake-15', trustScore: 96.9, uptime: 99.8, stake: '1.6M ZPC', status: 'active', commission: '6%', change: 'stable' },
    { name: 'TrustGuard-23', trustScore: 95.2, uptime: 99.6, stake: '1.4M ZPC', status: 'active', commission: '8%', change: 'down' },
    { name: 'CryptoShield-31', trustScore: 94.7, uptime: 99.5, stake: '1.3M ZPC', status: 'active', commission: '9%', change: 'up' }
  ]

  const performanceMetrics = [
    { 
      label: 'Current TPS', 
      value: liveMetrics.tps.toLocaleString(), 
      icon: Zap, 
      change: '+2.3%', 
      positive: true,
      description: 'Transactions per second'
    },
    { 
      label: 'Block Height', 
      value: liveMetrics.blockHeight.toLocaleString(), 
      icon: Activity, 
      change: 'Live', 
      positive: true,
      description: 'Current blockchain height'
    },
    { 
      label: 'Active Validators', 
      value: liveMetrics.activeValidators, 
      icon: Users, 
      change: '+1', 
      positive: true,
      description: 'Currently validating nodes'
    },
    { 
      label: 'Total Staked', 
      value: liveMetrics.totalStaked.toFixed(1) + 'M ZPC', 
      icon: Shield, 
      change: '+0.8%', 
      positive: true,
      description: 'Total staked ZippyCoin'
    },
    { 
      label: 'Avg Block Time', 
      value: liveMetrics.averageBlockTime.toFixed(2) + 's', 
      icon: Clock, 
      change: '-0.02s', 
      positive: true,
      description: 'Average block creation time'
    },
    { 
      label: 'Network Health', 
      value: liveMetrics.networkHealth.toFixed(1) + '%', 
      icon: CheckCircle, 
      change: '+0.1%', 
      positive: true,
      description: 'Overall network health score'
    }
  ]

  const getChangeIcon = (change: string) => {
    if (change === 'up') return <ArrowUp className="h-3 w-3 text-green-500" />
    if (change === 'down') return <ArrowDown className="h-3 w-3 text-red-500" />
    return <Minus className="h-3 w-3 text-yellow-500" />
  }

  return (
    <div className="min-h-screen bg-crypto-dark-950 pt-32">
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
          <p className="text-xl text-crypto-dark-300 max-w-3xl mx-auto mb-6">
            Real-time monitoring of the ZippyCoin network performance, security, and validator activity.
          </p>
          <motion.div 
            className="inline-flex items-center space-x-3 bg-green-500/20 text-green-300 px-6 py-3 rounded-full border border-green-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <CheckCircle className="w-5 h-5" />
            </div>
            <span className="font-semibold">Network Operational</span>
            <span className="text-sm opacity-80">({currentTime.toLocaleTimeString()})</span>
          </motion.div>
        </motion.div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-16">
          {performanceMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-crypto-dark-800/40 backdrop-blur-sm rounded-2xl p-6 border border-crypto-dark-700/50 hover:border-zippy-500/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gradient-to-r from-zippy-500 to-quantum-500 rounded-lg">
                  <metric.icon className="h-5 w-5 text-white" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  metric.positive ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-1 group-hover:text-zippy-300 transition-colors">
                {metric.value}
              </div>
              <div className="text-sm text-crypto-dark-300 font-medium mb-1">{metric.label}</div>
              <div className="text-xs text-crypto-dark-400">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Recent Blocks & Validators */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Recent Blocks */}
          <motion.div
            className="bg-crypto-dark-800/40 backdrop-blur-sm rounded-2xl p-8 border border-crypto-dark-700/50"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold gradient-text">Recent Blocks</h3>
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live</span>
              </div>
            </div>
            <div className="space-y-4">
              {recentBlocks.map((block, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center justify-between p-4 bg-crypto-dark-900/50 rounded-lg border border-crypto-dark-700/30 hover:border-zippy-500/30 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <div className="font-mono text-sm text-white font-medium">#{block.height}</div>
                      <div className="text-xs text-crypto-dark-400">{block.size}</div>
                    </div>
                    <div className="font-mono text-xs text-crypto-dark-500 mb-1">{block.hash}</div>
                    <div className="text-xs text-crypto-dark-400">{block.validator}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-white mb-1">{block.txCount} txs</div>
                    <div className="text-xs text-crypto-dark-400">{block.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Top Validators */}
          <motion.div
            className="bg-crypto-dark-800/40 backdrop-blur-sm rounded-2xl p-8 border border-crypto-dark-700/50"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold gradient-text">Top Validators</h3>
              <div className="text-sm text-crypto-dark-400">Trust Score Ranking</div>
            </div>
            <div className="space-y-4">
              {validators.map((validator, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center justify-between p-4 bg-crypto-dark-900/50 rounded-lg border border-crypto-dark-700/30 hover:border-zippy-500/30 transition-all"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: -5 }}
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="font-medium text-white">{validator.name}</div>
                      {getChangeIcon(validator.change)}
                    </div>
                    <div className="text-sm text-crypto-dark-400 mb-1">
                      Trust: {validator.trustScore}% • Uptime: {validator.uptime}%
                    </div>
                    <div className="text-xs text-crypto-dark-500">
                      Commission: {validator.commission}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-white mb-1">{validator.stake}</div>
                    <div className="flex items-center justify-end space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-400 font-medium">Active</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Network Health Dashboard */}
        <motion.div
          className="bg-gradient-to-r from-crypto-dark-800 via-crypto-dark-900 to-crypto-dark-800 rounded-3xl p-8 lg:p-12 border border-crypto-dark-700/50 shadow-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold gradient-text mb-4">Network Health Overview</h2>
            <p className="text-crypto-dark-300 text-lg">
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
                color: 'from-green-500 to-emerald-600',
                details: ['CRYSTALS-Dilithium signatures', 'Kyber key exchange', 'Zero known vulnerabilities']
              },
              {
                title: 'Decentralization',
                value: '95.2%',
                description: 'Nakamoto coefficient: 47',
                icon: Globe,
                color: 'from-blue-500 to-cyan-600',
                details: ['127 active validators', 'Geographic distribution', 'No single point of failure']
              },
              {
                title: 'Performance',
                value: '99.7%',
                description: 'Network efficiency score',
                icon: TrendingUp,
                color: 'from-purple-500 to-violet-600',
                details: ['Sub-second finality', 'High throughput maintained', 'Low latency consensus']
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`p-4 rounded-xl bg-gradient-to-r ${metric.color} w-fit mb-6 shadow-lg`}>
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{metric.title}</div>
                <div className="text-crypto-dark-300 text-sm mb-4">{metric.description}</div>
                <div className="space-y-1">
                  {metric.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-zippy-400 rounded-full"></div>
                      <span className="text-xs text-crypto-dark-400">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Explorer */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-crypto-dark-800/40 backdrop-blur-sm rounded-2xl p-8 border border-crypto-dark-700/50">
            <h3 className="text-xl font-bold gradient-text mb-4">
              Explore the Blockchain
            </h3>
            <p className="text-crypto-dark-300 mb-6">
              Access the full block explorer for detailed transaction history, wallet analysis, and network statistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Launch Block Explorer
              </motion.button>
              <motion.button 
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                API Documentation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NetworkStatus