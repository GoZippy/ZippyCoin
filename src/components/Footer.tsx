import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Github, Twitter, MessageSquare, ExternalLink, Mail } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    Technology: [
      { name: 'Architecture', href: '#technology' },
      { name: 'Trust Engine', href: '#technology' },
      { name: 'Security', href: '#technology' },
      { name: 'Performance', href: '#technology' }
    ],
    Ecosystem: [
      { name: 'Zippy.Bike', href: 'https://go.zippyfoundation.org', external: true },
      { name: 'DeFi Protocols', href: '#ecosystem' },
      { name: 'Origin Wallets', href: '#ecosystem' },
      { name: 'Partnerships', href: '#ecosystem' }
    ],
    Developers: [
      { name: 'Documentation', href: '/developers' },
      { name: 'API Reference', href: '/developers' },
      { name: 'Code Examples', href: '/developers' },
      { name: 'GitHub', href: 'https://github.com/zippyfoundation/ZippyCoin_v2.0.0', external: true }
    ],
    Community: [
      { name: 'Discord', href: 'https://discord.gg/zippycoin', external: true },
      { name: 'Twitter', href: 'https://twitter.com/zippyfoundation', external: true },
      { name: 'Contributing', href: 'https://github.com/zippyfoundation/ZippyCoin_v2.0.0/blob/main/CONTRIBUTING.md', external: true },
      { name: 'Support', href: '#community' }
    ]
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/zippyfoundation/ZippyCoin_v2.0.0', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/zippyfoundation', label: 'Twitter' },
    { icon: MessageSquare, href: 'https://discord.gg/zippycoin', label: 'Discord' },
    { icon: Mail, href: 'mailto:community@zippyfoundation.org', label: 'Email' }
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-r from-zippy-500 to-quantum-500 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">ZippyCoin</span>
            </Link>
            <p className="text-slate-300 leading-relaxed mb-6">
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
                  className="p-2 bg-slate-800 rounded-lg hover:bg-zippy-600 transition-colors"
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
              <h3 className="text-lg font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-zippy-400 transition-colors flex items-center space-x-1"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-slate-300 hover:text-zippy-400 transition-colors"
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
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-lg font-semibold mb-2">Part of the Zippy Foundation Ecosystem</h4>
                <p className="text-slate-300 text-sm">
                  Discover how ZippyCoin powers sustainable transportation through Zippy.Bike eco-courier services.
                </p>
              </div>
              <a
                href="https://go.zippyfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:mt-0 inline-flex items-center space-x-2 bg-gradient-to-r from-zippy-500 to-quantum-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-zippy-600 hover:to-quantum-600 transition-all whitespace-nowrap"
              >
                <span>Visit Foundation</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="text-slate-400 text-sm mb-4 sm:mb-0">
            <p>&copy; 2024 ZippyFoundation. All rights reserved.</p>
            <p className="mt-1">
              Documentation and tools are MIT licensed. Core implementation is proprietary.
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-zippy-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-zippy-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-zippy-400 transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer