import { Link } from 'react-router-dom'
import { Zap, Github, Twitter, MessageSquare, ExternalLink, Mail } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    Technology: [
      { name: 'Architecture', href: '#technology', external: false },
      { name: 'Trust Engine', href: '#technology', external: false },
      { name: 'Security', href: '#technology', external: false },
      { name: 'Performance', href: '#technology', external: false }
    ],
    Ecosystem: [
      { name: 'Zippy.Bike', href: 'https://go.zippyfoundation.org', external: true },
      { name: 'DeFi Protocols', href: '#ecosystem', external: false },
      { name: 'Origin Wallets', href: '#ecosystem', external: false },
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

  return (
    <footer className="bg-crypto-dark-950 border-t border-crypto-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="p-2 bg-gradient-to-r from-zippy-600 to-zippy-700 rounded-lg shadow-lg group-hover:shadow-zippy-500/25 transition-all">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold gradient-text">ZippyCoin</span>
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

        {/* Foundation link */}
        <div className="border-t border-crypto-dark-800/50 pt-8 mb-8">
          <div className="gradient-bg-card border border-crypto-dark-700/30 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white font-display">Part of the Zippy Foundation Ecosystem</h4>
                <p className="text-crypto-dark-300 text-sm leading-relaxed">
                  Discover how ZippyCoin powers sustainable transportation through Zippy.Bike eco-courier services.
                </p>
              </div>
              <a
                href="https://go.zippyfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:mt-0 inline-flex items-center space-x-2 btn-outline group"
              >
                <span>Visit Foundation</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-crypto-dark-800/50 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="text-crypto-dark-400 text-sm mb-4 sm:mb-0">
            <p>&copy; 2024 ZippyFoundation. All rights reserved.</p>
            <p className="mt-1">
              Documentation and tools are MIT licensed. Core implementation is proprietary.
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-crypto-dark-400 hover:text-zippy-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-crypto-dark-400 hover:text-zippy-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-crypto-dark-400 hover:text-zippy-400 transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer