import { Link } from 'react-router-dom'
import { Zap, Github, Twitter, MessageSquare, ExternalLink, Mail, Brain, Globe, Shield } from 'lucide-react'

const Footer = () => {
  const ecosystemLinks = {
    'ZippyCoin Ecosystem': [
      { name: 'ZippyTrust Engine', href: '#zippytrust', external: false, icon: Brain },
      { name: 'DeFi Protocols', href: '#ecosystem', external: false, icon: Zap },
      { name: 'Developer Portal', href: '/developers', external: false, icon: Globe },
      { name: 'Network Status', href: '/network', external: false, icon: Shield }
    ]
  }

  const footerLinks = {
    Technology: [
      { name: 'ZippyTrust Engine', href: '#zippytrust', external: false },
      { name: 'Architecture', href: '#technology', external: false },
      { name: 'Security', href: '#technology', external: false },
      { name: 'Performance', href: '#technology', external: false }
    ],
    Ecosystem: [
      { name: 'DeFi Protocols', href: '#ecosystem', external: false },
      { name: 'Origin Wallets', href: '#ecosystem', external: false },
      { name: 'Trust Benefits', href: '#zippytrust', external: false },
      { name: 'Partnerships', href: '#ecosystem', external: false }
    ],
    Developers: [
      { name: 'Documentation', href: '/developers', external: false },
      { name: 'API Reference', href: '/developers', external: false },
      { name: 'Code Examples', href: '/developers', external: false },
      { name: 'GitHub', href: 'https://github.com/zippyfoundation/ZippyCoin_v2.0.0', external: true }
    ],
    Community: [
      { name: 'Discord', href: 'https://discord.gg/zippycoin', external: true },
      { name: 'Twitter', href: 'https://twitter.com/zippyfoundation', external: true },
      { name: 'Contributing', href: 'https://github.com/zippyfoundation/ZippyCoin_v2.0.0/blob/main/CONTRIBUTING.md', external: true },
      { name: 'Support', href: '#community', external: false }
    ]
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/zippyfoundation/ZippyCoin_v2.0.0', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/zippyfoundation', label: 'Twitter' },
    { icon: MessageSquare, href: 'https://discord.gg/zippycoin', label: 'Discord' },
    { icon: Mail, href: 'mailto:community@zippyfoundation.org', label: 'Email' }
  ]

  const stats = [
    { label: 'Daily Transactions', value: '100K+' },
    { label: 'ZPC Circulating', value: '50M' },
    { label: 'Network Validators', value: '127' },
    { label: 'Countries', value: '25+' }
  ]

  return (
    <footer className="bg-crypto-dark-950 border-t border-crypto-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Network Stats Header */}
        <div className="border-b border-crypto-dark-800/50 pb-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">ZippyCoin Network Statistics</h3>
            <p className="text-crypto-dark-300">Real-time metrics from our quantum-resistant blockchain</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-crypto-dark-800/30 rounded-xl border border-crypto-dark-700/30">
                <div className="text-2xl font-bold text-zippy-400 mb-1">{stat.value}</div>
                <div className="text-sm text-crypto-dark-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="p-2 bg-gradient-to-r from-zippy-600 to-zippy-700 rounded-lg shadow-lg group-hover:shadow-zippy-500/25 transition-all">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold gradient-text">ZippyCoin</span>
                <span className="text-xs text-crypto-dark-400 font-medium">Quantum-Resistant Cryptocurrency</span>
              </div>
            </Link>
            <p className="text-crypto-dark-300 leading-relaxed mb-6">
              The world's first production-ready quantum-resistant trust-based cryptocurrency ecosystem.
              Built for security, scalability, and real-world adoption.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-crypto-dark-800/60 rounded-lg hover:bg-zippy-600 transition-colors backdrop-blur-sm border border-crypto-dark-700/30 hover:border-zippy-500/50"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white font-display flex items-center space-x-2">
              <Globe className="h-5 w-5 text-zippy-400" />
              <span>Ecosystem</span>
            </h3>
            <ul className="space-y-3">
              {ecosystemLinks['ZippyCoin Ecosystem'].map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-crypto-dark-300 hover:text-zippy-400 transition-colors flex items-center space-x-2 group"
                    >
                      <link.icon className="h-4 w-4" />
                      <span>{link.name}</span>
                      <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-crypto-dark-300 hover:text-zippy-400 transition-colors flex items-center space-x-2"
                    >
                      <link.icon className="h-4 w-4" />
                      <span>{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-white font-display">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-crypto-dark-300 hover:text-zippy-400 transition-colors flex items-center space-x-1 group"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-crypto-dark-300 hover:text-zippy-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enhanced Technology Section */}
        <div className="border-t border-crypto-dark-800/50 pt-8 mb-8">
          <div className="bg-gradient-to-r from-zippy-900/20 to-crypto-dark-800/40 border border-zippy-500/20 rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <Brain className="h-8 w-8 text-zippy-400" />
                  <div>
                    <h4 className="text-xl font-semibold text-white font-display">ZippyCoin Technology</h4>
                    <p className="text-zippy-400 text-sm font-medium">Quantum-resistant, trust-based cryptocurrency</p>
                  </div>
                </div>
                <p className="text-crypto-dark-300 text-sm leading-relaxed mb-4">
                  ZippyCoin combines post-quantum cryptography with mathematical trust scoring to create
                  the most secure and scalable cryptocurrency ecosystem. Experience true innovation in digital finance.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-zippy-400">
                    <div className="w-2 h-2 bg-zippy-400 rounded-full"></div>
                    <span>100K+ TPS Performance</span>
                  </div>
                  <div className="flex items-center space-x-2 text-quantum-400">
                    <div className="w-2 h-2 bg-quantum-400 rounded-full"></div>
                    <span>Post-Quantum Security</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Trust-Based DeFi</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="#zippytrust"
                  className="inline-flex items-center space-x-2 bg-zippy-500 hover:bg-zippy-400 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
                >
                  <Brain className="h-5 w-5" />
                  <span>Explore ZippyTrust</span>
                </Link>
                <Link
                  to="/developers"
                  className="inline-flex items-center space-x-2 btn-outline"
                >
                  <Globe className="h-5 w-5" />
                  <span>Developer Portal</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-crypto-dark-800/50 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="text-crypto-dark-400 text-sm mb-4 sm:mb-0">
            <p>&copy; 2024 ZippyFoundation. All rights reserved.</p>
            <p className="mt-1">
              ZippyCoin documentation and tools are MIT licensed. Core implementation is proprietary.
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <button 
              onClick={() => alert('Privacy Policy coming soon')}
              className="text-crypto-dark-400 hover:text-zippy-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => alert('Terms of Service coming soon')}
              className="text-crypto-dark-400 hover:text-zippy-400 transition-colors"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => alert('Security documentation coming soon')}
              className="text-crypto-dark-400 hover:text-zippy-400 transition-colors"
            >
              Security
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer