import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, AlertTriangle } from 'lucide-react'

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
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-quantum-600 to-quantum-700 text-white shadow-lg"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2.5 text-sm">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-4 w-4 text-quantum-200 flex-shrink-0" />
                <span className="font-medium">
                  <span className="hidden sm:inline">Beta Version: </span>
                  This site is under active development and may contain placeholder data.
                  <span className="hidden md:inline ml-2">
                    Features and information are subject to change.
                  </span>
                </span>
              </div>
              
              <button
                onClick={handleDismiss}
                className="ml-4 p-1 rounded-full hover:bg-quantum-500/30 transition-colors flex-shrink-0"
                aria-label="Dismiss banner"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BetaBanner