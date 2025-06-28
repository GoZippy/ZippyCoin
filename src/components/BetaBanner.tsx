import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Info } from 'lucide-react'

const BetaBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const dismissed = localStorage.getItem('beta-banner-dismissed')
    if (dismissed === 'true') {
      setIsVisible(false)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem('beta-banner-dismissed', 'true')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 bg-crypto-dark-950/80 backdrop-blur-md border-b border-crypto-dark-700/30"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3 text-sm">
              <div className="flex items-center space-x-3">
                <div className="p-1.5 bg-zippy-500/20 rounded-full">
                  <Info className="h-3.5 w-3.5 text-zippy-400 flex-shrink-0" />
                </div>
                <span className="text-crypto-dark-200 font-medium">
                  <span className="text-zippy-300 font-semibold">Beta Preview:</span>
                  <span className="ml-2">This site contains placeholder data and is under active development.</span>
                  <span className="hidden lg:inline text-crypto-dark-300 ml-2">
                    All features and information are subject to change as we build toward mainnet launch.
                  </span>
                </span>
              </div>
              
              <button
                onClick={handleDismiss}
                className="ml-4 p-1.5 rounded-full hover:bg-crypto-dark-700/50 transition-colors flex-shrink-0 group"
                aria-label="Dismiss banner"
              >
                <X className="h-4 w-4 text-crypto-dark-400 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BetaBanner