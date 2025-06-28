import { useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

export interface AuthState {
  user: User | null
  session: Session | null
  loading: boolean
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    session: null,
    loading: true
  })

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession()
      
      if (error) {
        console.error('Error getting session:', error)
      }

      setAuthState({
        user: session?.user ?? null,
        session: session,
        loading: false
      })
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email)
        
        setAuthState({
          user: session?.user ?? null,
          session: session,
          loading: false
        })

        // Sync user data to foundation_users table
        if (session?.user && event === 'SIGNED_IN') {
          await syncUserData(session.user)
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const syncUserData = async (user: User) => {
    try {
      const { error } = await supabase
        .from('foundation_users')
        .upsert({
          id: user.id,
          email: user.email!,
          full_name: user.user_metadata?.full_name || null,
          avatar_url: user.user_metadata?.avatar_url || null,
          user_type: 'zcoin',
          verified: user.email_confirmed_at ? true : false
        }, {
          onConflict: 'id'
        })

      if (error) {
        console.error('Error syncing user data:', error)
      }
    } catch (error) {
      console.error('Error syncing user data:', error)
    }
  }

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  }

  const signUp = async (email: string, password: string, metadata?: any) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: metadata?.fullName || '',
          user_type: 'zcoin'
        }
      }
    })
    return { data, error }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  }

  const resetPassword = async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    })
    return { data, error }
  }

  return {
    ...authState,
    signIn,
    signUp,
    signOut,
    resetPassword
  }
}