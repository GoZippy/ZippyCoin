import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Lock, User, Loader2 } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultMode?: 'signin' | 'signup'
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, defaultMode = 'signin' }) => {
  const [mode, setMode] = useState<'signin' | 'signup' | 'reset'>(defaultMode)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  
  const { signIn, signUp, resetPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      if (mode === 'signin') {
        const { error } = await signIn(email, password)
        if (error) throw error
        setMessage('Signed in successfully!')
        onClose()
      } else if (mode === 'signup') {
        const { error } = await signUp(email, password, { fullName })
        if (error) throw error
        setMessage('Check your email for the confirmation link!')
      } else if (mode === 'reset') {
        const { error } = await resetPassword(email)
        if (error) throw error
        setMessage('Password reset email sent!')
      }
    } catch (error: any) {
      setMessage(error.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setFullName('')
    setMessage('')
    setLoading(false)
  }

  const switchMode = (newMode: typeof mode) => {
    setMode(newMode)
    resetForm()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-crypto-dark-950/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md bg-crypto-dark-900 rounded-2xl shadow-2xl border border-crypto-dark-700/50"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-crypto-dark-700/50">
              <h2 className="text-xl font-bold gradient-text">
                {mode === 'signin' && 'Sign In'}
                {mode === 'signup' && 'Create Account'}
                {mode === 'reset' && 'Reset Password'}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-crypto-dark-800/50 transition-colors"
              >
                <X className="h-5 w-5 text-crypto-dark-400" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-crypto-dark-200 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-crypto-dark-400" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-crypto-dark-800/60 border border-crypto-dark-600/50 rounded-lg text-white placeholder-crypto-dark-400 focus:outline-none focus:ring-2 focus:ring-zippy-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-crypto-dark-200 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-crypto-dark-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-crypto-dark-800/60 border border-crypto-dark-600/50 rounded-lg text-white placeholder-crypto-dark-400 focus:outline-none focus:ring-2 focus:ring-zippy-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {mode !== 'reset' && (
                <div>
                  <label className="block text-sm font-medium text-crypto-dark-200 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-crypto-dark-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-crypto-dark-800/60 border border-crypto-dark-600/50 rounded-lg text-white placeholder-crypto-dark-400 focus:outline-none focus:ring-2 focus:ring-zippy-500 focus:border-transparent transition-all"
                      placeholder="Enter your password"
                      required
                      minLength={6}
                    />
                  </div>
                </div>
              )}

              {message && (
                <div className={`p-3 rounded-lg text-sm ${
                  message.includes('error') || message.includes('Error')
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                    : 'bg-green-500/20 text-green-300 border border-green-500/30'
                }`}>
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    {mode === 'signin' && 'Sign In'}
                    {mode === 'signup' && 'Create Account'}
                    {mode === 'reset' && 'Send Reset Email'}
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="p-6 border-t border-crypto-dark-700/50 text-center space-y-2">
              {mode === 'signin' && (
                <>
                  <p className="text-sm text-crypto-dark-300">
                    Don't have an account?{' '}
                    <button
                      onClick={() => switchMode('signup')}
                      className="text-zippy-400 hover:text-zippy-300 font-medium transition-colors"
                    >
                      Sign up
                    </button>
                  </p>
                  <p className="text-sm text-crypto-dark-300">
                    Forgot your password?{' '}
                    <button
                      onClick={() => switchMode('reset')}
                      className="text-zippy-400 hover:text-zippy-300 font-medium transition-colors"
                    >
                      Reset it
                    </button>
                  </p>
                </>
              )}

              {mode === 'signup' && (
                <p className="text-sm text-crypto-dark-300">
                  Already have an account?{' '}
                  <button
                    onClick={() => switchMode('signin')}
                    className="text-zippy-400 hover:text-zippy-300 font-medium transition-colors"
                  >
                    Sign in
                  </button>
                </p>
              )}

              {mode === 'reset' && (
                <p className="text-sm text-crypto-dark-300">
                  Remember your password?{' '}
                  <button
                    onClick={() => switchMode('signin')}
                    className="text-zippy-400 hover:text-zippy-300 font-medium transition-colors"
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AuthModal