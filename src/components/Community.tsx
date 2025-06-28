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
      color: 'from-crypto-dark-700 to-crypto-dark-800'
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
    <section id="community" className="py-20 bg-crypto-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-crypto-dark-300 max-w-3xl mx-auto leading-relaxed">
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
              className="stats-card group hover:border-zippy-500/30 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl font-bold gradient-text mb-2 font-display">{stat.value}</div>
              <div className="text-crypto-dark-300 font-medium group-hover:text-crypto-dark-200 transition-colors">{stat.label}</div>
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
              className="card card-glow group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 bg-gradient-to-r ${channel.color} rounded-2xl shadow-lg`}>
                  <channel.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-center space-x-2 text-crypto-dark-400 group-hover:text-zippy-400 transition-colors">
                  <span className="text-sm font-medium">{channel.members}</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zippy-300 transition-colors">
                {channel.name}
              </h3>
              
              <p className="text-crypto-dark-300 leading-relaxed group-hover:text-crypto-dark-200 transition-colors">
                {channel.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contribution Areas */}
        <motion.div
          className="gradient-bg-card border border-crypto-dark-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-4">
              How to Contribute
            </h3>
            <p className="text-crypto-dark-300 text-lg max-w-2xl mx-auto leading-relaxed">
              There are many ways to contribute to the ZippyCoin ecosystem. 
              Find the area that matches your skills and interests.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {contributions.map((contribution, index) => (
              <motion.div
                key={index}
                className="bg-crypto-dark-800/40 rounded-2xl p-6 border border-crypto-dark-700/30 hover:border-zippy-500/30 transition-all backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-gradient-to-r from-zippy-600 to-zippy-700 rounded-xl w-fit mb-6 shadow-lg shadow-zippy-600/25">
                  <contribution.icon className="h-6 w-6 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-3">
                  {contribution.title}
                </h4>
                
                <p className="text-crypto-dark-300 mb-4 leading-relaxed">
                  {contribution.description}
                </p>
                
                <div className="space-y-2">
                  {contribution.areas.map((area, areaIndex) => (
                    <div key={areaIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-zippy-400 rounded-full"></div>
                      <span className="text-sm text-crypto-dark-200">{area}</span>
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
              className="inline-flex items-center space-x-2 btn-primary group"
            >
              <span>Read Contributing Guide</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-crypto-dark-800 to-crypto-dark-900 rounded-3xl p-8 lg:p-12 border border-crypto-dark-700/50 text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-4">Stay Updated</h3>
          <p className="text-crypto-dark-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Get the latest news, updates, and exclusive insights delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-crypto-dark-800/60 backdrop-blur-sm border border-crypto-dark-600/50 text-white placeholder-crypto-dark-400 focus:outline-none focus:ring-2 focus:ring-zippy-500 focus:border-transparent transition-all"
            />
            <motion.button
              className="btn-primary px-6 py-3"
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