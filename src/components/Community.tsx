import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Github, Twitter, Users, BookOpen, Code, ExternalLink, ArrowRight } from 'lucide-react'

const Community = () => {
  const channels = [
    {
      icon: MessageSquare,
      name: 'Discord',
      description: 'Join our vibrant community for real-time discussions, support, and updates.',
      members: '10K+',
      link: 'https://discord.gg/zippycoin',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Github,
      name: 'GitHub',
      description: 'Contribute to documentation, examples, and community tools.',
      members: '500+',
      link: 'https://github.com/zippyfoundation/ZippyCoin_v2.0.0',
      color: 'from-gray-800 to-gray-900'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      description: 'Follow the latest news, updates, and announcements.',
      members: '25K+',
      link: 'https://twitter.com/zippyfoundation',
      color: 'from-sky-400 to-blue-500'
    }
  ]

  const contributions = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Help improve our technical documentation and guides',
      areas: ['API Documentation', 'Tutorials', 'Translations', 'Examples']
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Build tools and examples for the ZippyCoin ecosystem',
      areas: ['Community Tools', 'Code Examples', 'SDKs', 'Testing']
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Support other users and grow the ecosystem',
      areas: ['User Support', 'Content Creation', 'Events', 'Advocacy']
    }
  ]

  const stats = [
    { label: 'Community Members', value: '35K+' },
    { label: 'GitHub Stars', value: '1.2K+' },
    { label: 'Contributors', value: '150+' },
    { label: 'Countries', value: '50+' }
  ]

  return (
    <section id="community" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Be part of the revolution. Connect with developers, researchers, and enthusiasts
            building the future of cryptocurrency.
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Communication Channels */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {channels.map((channel, index) => (
            <motion.a
              key={index}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-zippy-200 block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 bg-gradient-to-r ${channel.color} rounded-2xl`}>
                  <channel.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-center space-x-2 text-slate-500 group-hover:text-zippy-600 transition-colors">
                  <span className="text-sm font-medium">{channel.members}</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-zippy-600 transition-colors">
                {channel.name}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {channel.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contribution Areas */}
        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-4">
              How to Contribute
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              There are many ways to contribute to the ZippyCoin ecosystem. 
              Find the area that matches your skills and interests.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {contributions.map((contribution, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-zippy-200 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-gradient-to-r from-zippy-500 to-quantum-500 rounded-xl w-fit mb-6">
                  <contribution.icon className="h-6 w-6 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {contribution.title}
                </h4>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {contribution.description}
                </p>
                
                <div className="space-y-2">
                  {contribution.areas.map((area, areaIndex) => (
                    <div key={areaIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-zippy-500 rounded-full"></div>
                      <span className="text-sm text-slate-700">{area}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/zippyfoundation/ZippyCoin_v2.0.0/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-zippy-500 to-quantum-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-zippy-600 hover:to-quantum-600 transition-all shadow-lg hover:shadow-xl"
            >
              <span>Read Contributing Guide</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-zippy-900 to-quantum-900 rounded-3xl p-8 lg:p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest news, updates, and exclusive insights delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-zippy-400"
            />
            <motion.button
              className="bg-white text-zippy-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Community