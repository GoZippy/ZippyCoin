import { motion } from 'framer-motion'
import { Code, BookOpen, Download, ExternalLink, Github, Terminal } from 'lucide-react'

const DeveloperPortal = () => {
  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      items: ['API Reference', 'Integration Guides', 'Technical Specs', 'Best Practices'],
      link: 'https://github.com/zippyfoundation/ZippyCoin_v2.0.0/tree/main/docs',
      status: 'Available'
    },
    {
      icon: Code,
      title: 'Code Examples',
      description: 'Ready-to-use code samples and tutorials',
      items: ['Trust Calculator', 'Wallet Integration', 'DeFi Examples', 'API Examples'],
      link: 'https://github.com/zippyfoundation/ZippyCoin_v2.0.0/tree/main/examples',
      status: 'Available'
    },
    {
      icon: Terminal,
      title: 'SDKs & Libraries',
      description: 'Official SDKs for multiple programming languages',
      items: ['JavaScript SDK', 'Python SDK', 'Rust SDK', 'Go SDK'],
      link: '#',
      status: 'Coming Soon'
    },
    {
      icon: Download,
      title: 'Tools & Utilities',
      description: 'Development tools and testing utilities',
      items: ['Network Analyzer', 'Trust Calculator', 'API Tester', 'Performance Tools'],
      link: 'https://github.com/zippyfoundation/ZippyCoin_v2.0.0/tree/main/tools',
      status: 'In Development'
    }
  ]

  const quickStart = [
    {
      step: '1',
      title: 'Set up Development Environment',
      description: 'Clone the repository and explore the documentation',
      code: `git clone https://github.com/zippyfoundation/ZippyCoin_v2.0.0.git
cd ZippyCoin_v2.0.0
npm install`
    },
    {
      step: '2',
      title: 'Explore Examples',
      description: 'Run the trust calculator example to understand the core concepts',
      code: `cd examples
node trust-calculator.js`
    },
    {
      step: '3',
      title: 'Build Your Application',
      description: 'Use our APIs and tools to integrate ZippyCoin into your project',
      code: `// Example: Calculate trust score
const calculator = new TrustCalculator();
const trustScore = calculator.calculateTrustScore(wallet, delegators);`
    }
  ]

  const codeExamples = [
    {
      title: 'Trust Score Calculation',
      language: 'JavaScript',
      code: `import { TrustCalculator } from 'zippycoin-sdk';

const calculator = new TrustCalculator();
const wallet = {
  id: 'wallet-1',
  delegationDepth: 1,
  stakeAmount: 2000,
  reputationMetrics: {
    transactionSuccess: 95,
    validatorUptime: 98,
    // ... other metrics
  }
};

const trustScore = calculator.calculateTrustScore(wallet, delegators);
console.log(\`Trust Score: \${trustScore}\`);`
    },
    {
      title: 'API Integration',
      language: 'TypeScript',
      code: `interface ZippyCoinAPI {
  getTrustScore(walletId: string): Promise<number>;
  getNetworkStats(): Promise<NetworkStats>;
  validateTransaction(tx: Transaction): Promise<boolean>;
}

const api: ZippyCoinAPI = new ZippyCoinClient({
  apiKey: 'your-api-key',
  network: 'mainnet'
});

const trustScore = await api.getTrustScore('wallet-address');`
    }
  ]

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
            Developer Portal
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Build secure, scalable applications with ZippyCoin's quantum-resistant infrastructure
            and trust-based protocols.
          </p>
        </motion.div>

        {/* Quick Start */}
        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-16"
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
                  <div className="w-12 h-12 bg-gradient-to-r from-zippy-500 to-quantum-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{item.code}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-zippy-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-gradient-to-r from-zippy-500 to-quantum-500 rounded-xl">
                  <resource.icon className="h-8 w-8 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  resource.status === 'Available' 
                    ? 'bg-green-100 text-green-700'
                    : resource.status === 'In Development'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {resource.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">{resource.title}</h3>
              <p className="text-slate-600 mb-6">{resource.description}</p>
              
              <div className="space-y-2 mb-6">
                {resource.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-zippy-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-zippy-600 hover:text-zippy-700 font-medium transition-colors"
              >
                <span>Explore</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Code Examples */}
        <motion.div
          className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
            Code Examples
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={index}
                className="bg-black/20 rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">{example.title}</h3>
                  <span className="px-3 py-1 bg-zippy-500 rounded-full text-sm font-medium">
                    {example.language}
                  </span>
                </div>
                <div className="bg-black/30 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community & Support */}
        <motion.div
          className="bg-gradient-to-r from-zippy-500 to-quantum-500 rounded-3xl p-8 lg:p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Need Help? Join Our Developer Community
          </h2>
          <p className="text-zippy-100 text-lg mb-8 max-w-2xl mx-auto">
            Connect with other developers, get support, and share your ZippyCoin projects
            with our growing community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/zippycoin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-zippy-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
            >
              <span>Join Discord</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/zippyfoundation/ZippyCoin_v2.0.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-black/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-black/30 transition-colors border border-white/20"
            >
              <Github className="h-5 w-5" />
              <span>View on GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DeveloperPortal