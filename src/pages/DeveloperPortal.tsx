import { motion } from 'framer-motion'
import { Code, BookOpen, Download, ExternalLink, Github, Terminal, Cpu, Shield, Zap } from 'lucide-react'
import { useState } from 'react'

const DeveloperPortal = () => {
  const [activeExample, setActiveExample] = useState(0)

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      items: ['API Reference', 'Integration Guides', 'Technical Specs', 'Best Practices'],
      link: 'https://github.com/zippyfoundation/ZippyCoin_v2.0.0/tree/main/docs',
      status: 'Available',
      statusColor: 'bg-green-500/20 text-green-300 border-green-500/30'
    },
    {
      icon: Code,
      title: 'Code Examples',
      description: 'Ready-to-use code samples and tutorials',
      items: ['Trust Calculator', 'Wallet Integration', 'DeFi Examples', 'API Examples'],
      link: 'https://github.com/zippyfoundation/ZippyCoin_v2.0.0/tree/main/examples',
      status: 'Available',
      statusColor: 'bg-green-500/20 text-green-300 border-green-500/30'
    },
    {
      icon: Terminal,
      title: 'SDKs & Libraries',
      description: 'Official SDKs for multiple programming languages',
      items: ['JavaScript SDK', 'Python SDK', 'Rust SDK', 'Go SDK'],
      link: '#',
      status: 'Coming Soon',
      statusColor: 'bg-quantum-500/20 text-quantum-300 border-quantum-500/30'
    },
    {
      icon: Download,
      title: 'Tools & Utilities',
      description: 'Development tools and testing utilities',
      items: ['Network Analyzer', 'Trust Calculator', 'API Tester', 'Performance Tools'],
      link: 'https://github.com/zippyfoundation/ZippyCoin_v2.0.0/tree/main/tools',
      status: 'In Development',
      statusColor: 'bg-zippy-500/20 text-zippy-300 border-zippy-500/30'
    }
  ]

  const quickStart = [
    {
      step: '1',
      title: 'Set up Development Environment',
      description: 'Clone the repository and explore the documentation',
      code: `git clone https://github.com/zippyfoundation/ZippyCoin_v2.0.0.git
cd ZippyCoin_v2.0.0
npm install`,
      language: 'bash'
    },
    {
      step: '2',
      title: 'Explore Examples',
      description: 'Run the trust calculator example to understand the core concepts',
      code: `cd examples
node trust-calculator.js`,
      language: 'bash'
    },
    {
      step: '3',
      title: 'Build Your Application',
      description: 'Use our APIs and tools to integrate ZippyCoin into your project',
      code: `// Example: Calculate trust score
const calculator = new TrustCalculator();
const trustScore = calculator.calculateTrustScore(wallet, delegators);
console.log(\`Trust Score: \${trustScore}\`);`,
      language: 'javascript'
    }
  ]

  const codeExamples = [
    {
      title: 'Trust Score Calculation',
      language: 'JavaScript',
      category: 'Core Features',
      code: `import { TrustCalculator } from 'zippycoin-sdk';

const calculator = new TrustCalculator();
const wallet = {
  id: 'wallet-1',
  delegationDepth: 1,
  stakeAmount: 2000,
  reputationMetrics: {
    transactionSuccess: 95,
    validatorUptime: 98,
    communityVoting: 85,
    securityCompliance: 90
  }
};

// Calculate trust score with delegators
const trustScore = calculator.calculateTrustScore(wallet, delegators);
console.log(\`Trust Score: \${trustScore.toFixed(2)}\`);

// Get reputation breakdown
const breakdown = calculator.getReputationBreakdown(wallet);
console.log('Reputation factors:', breakdown);`
    },
    {
      title: 'Wallet Integration',
      language: 'TypeScript',
      category: 'Integration',
      code: `interface ZippyCoinWallet {
  address: string;
  balance: bigint;
  trustScore: number;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  sendTransaction(to: string, amount: bigint): Promise<string>;
}

class ZippyWallet implements ZippyCoinWallet {
  private provider: any;
  
  async connect(): Promise<void> {
    this.provider = new ZippyCoinProvider({
      network: 'mainnet',
      rpcUrl: 'https://rpc.zippycoin.io'
    });
    
    await this.provider.connect();
    console.log('Wallet connected:', this.address);
  }
  
  async sendTransaction(to: string, amount: bigint): Promise<string> {
    const tx = await this.provider.sendTransaction({
      to,
      value: amount,
      gasLimit: 21000
    });
    
    return tx.hash;
  }
}`
    },
    {
      title: 'DeFi Protocol Integration',
      language: 'Solidity',
      category: 'Smart Contracts',
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./ITrustEngine.sol";

contract TrustWeightedYield {
    ITrustEngine public trustEngine;
    
    mapping(address => uint256) public deposits;
    mapping(address => uint256) public lastUpdate;
    
    function deposit(uint256 amount) external {
        uint256 trustScore = trustEngine.getTrustScore(msg.sender);
        require(trustScore >= 50, "Insufficient trust score");
        
        // Update rewards before new deposit
        updateRewards(msg.sender);
        
        deposits[msg.sender] += amount;
        lastUpdate[msg.sender] = block.timestamp;
        
        // Transfer tokens
        IERC20(zippyCoin).transferFrom(msg.sender, address(this), amount);
    }
    
    function getYieldMultiplier(address user) public view returns (uint256) {
        uint256 trustScore = trustEngine.getTrustScore(user);
        
        // Trust score 90+ gets 2x multiplier
        if (trustScore >= 90) return 200;
        // Trust score 70+ gets 1.5x multiplier  
        if (trustScore >= 70) return 150;
        // Base multiplier for trust score 50+
        return 100;
    }
}`
    }
  ]

  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/trust/{address}',
      description: 'Get trust score for a wallet address',
      response: '{ "trustScore": 95.5, "factors": {...} }'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/network/stats',
      description: 'Get current network statistics',
      response: '{ "tps": 9847, "blockHeight": 2847329, ... }'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/delegate',
      description: 'Create a trust delegation',
      response: '{ "delegationId": "0x...", "txHash": "0x..." }'
    }
  ]

  return (
    <div className="min-h-screen bg-crypto-dark-950 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            Developer Portal
          </h1>
          <p className="text-xl text-crypto-dark-300 max-w-3xl mx-auto mb-8">
            Build secure, scalable applications with ZippyCoin's quantum-resistant infrastructure
            and trust-based protocols.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Shield, text: 'Quantum-Resistant' },
              { icon: Zap, text: '100K+ TPS' },
              { icon: Cpu, text: 'Trust Engine' }
            ].map((feature, index) => (
              <div key={index} className="feature-badge">
                <feature.icon className="h-4 w-4 text-zippy-400 mr-2" />
                <span className="text-sm font-medium text-crypto-dark-200">{feature.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Start Guide */}
        <motion.div
          className="bg-crypto-dark-800/40 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-crypto-dark-700/50 shadow-xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold gradient-text mb-8 text-center">
            Quick Start Guide
          </h2>
          
          <div className="space-y-8">
            {quickStart.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col lg:flex-row lg:items-start gap-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-zippy-500 to-quantum-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.step}
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-crypto-dark-300 mb-4">{item.description}</p>
                  <div className="bg-crypto-dark-900/60 rounded-lg p-4 overflow-x-auto border border-crypto-dark-700/30">
                    <pre className="text-green-400 text-sm">
                      <code>{item.code}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="bg-crypto-dark-800/40 backdrop-blur-sm rounded-2xl p-8 border border-crypto-dark-700/50 hover:border-zippy-500/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-gradient-to-r from-zippy-500 to-quantum-500 rounded-xl shadow-lg">
                  <resource.icon className="h-8 w-8 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${resource.statusColor}`}>
                  {resource.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zippy-300 transition-colors">
                {resource.title}
              </h3>
              <p className="text-crypto-dark-300 mb-6">{resource.description}</p>
              
              <div className="space-y-2 mb-6">
                {resource.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-zippy-500 rounded-full"></div>
                    <span className="text-sm text-crypto-dark-200">{item}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-zippy-400 hover:text-zippy-300 font-medium transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>Explore</span>
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Interactive Code Examples */}
        <motion.div
          className="bg-crypto-dark-900/60 rounded-3xl p-8 lg:p-12 border border-crypto-dark-700/50 shadow-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold gradient-text mb-8 text-center">
            Interactive Code Examples
          </h2>
          
          {/* Example Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {codeExamples.map((example, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveExample(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeExample === index
                    ? 'bg-zippy-500 text-white shadow-lg shadow-zippy-500/25'
                    : 'bg-crypto-dark-800/60 text-crypto-dark-300 hover:text-white border border-crypto-dark-700/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {example.title}
              </motion.button>
            ))}
          </div>

          {/* Active Example */}
          <motion.div
            key={activeExample}
            className="bg-black/20 rounded-2xl p-6 border border-crypto-dark-700/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">{codeExamples[activeExample].title}</h3>
                <span className="text-sm text-crypto-dark-400">{codeExamples[activeExample].category}</span>
              </div>
              <span className="px-3 py-1 bg-zippy-500/20 text-zippy-300 rounded-full text-sm font-medium border border-zippy-500/30">
                {codeExamples[activeExample].language}
              </span>
            </div>
            <div className="bg-black/30 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                <code>{codeExamples[activeExample].code}</code>
              </pre>
            </div>
          </motion.div>
        </motion.div>

        {/* API Reference */}
        <motion.div
          className="bg-crypto-dark-800/40 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-crypto-dark-700/50 shadow-xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold gradient-text mb-8 text-center">
            API Reference
          </h2>
          
          <div className="space-y-4">
            {apiEndpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                className="bg-crypto-dark-900/50 rounded-lg p-6 border border-crypto-dark-700/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded text-xs font-mono font-bold ${
                      endpoint.method === 'GET' 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-zippy-400 font-mono">{endpoint.endpoint}</code>
                  </div>
                  <div className="text-sm text-crypto-dark-300">{endpoint.description}</div>
                </div>
                <div className="mt-3 text-xs text-crypto-dark-400 font-mono bg-black/20 rounded p-2">
                  {endpoint.response}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community & Support */}
        <motion.div
          className="bg-gradient-to-r from-zippy-500 to-quantum-500 rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Need Help? Join Our Developer Community
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Connect with other developers, get support, and share your ZippyCoin projects
            with our growing community of builders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://discord.gg/zippycoin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-zippy-900 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join Discord</span>
              <ExternalLink className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://github.com/zippyfoundation/ZippyCoin_v2.0.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-black/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-black/30 transition-colors border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-5 w-5" />
              <span>View on GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DeveloperPortal