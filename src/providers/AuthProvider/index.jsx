import PropTypes from 'prop-types'
import { AuthContext } from "../../contexts/AuthContext"
import { useEffect, useState } from 'react'
import { auth } from '../../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthProviderViewModel } from './useAuthProviderViewModel'

export const AuthProvider = ({ children }) => {
  const { register, login, loginWithGoogle, logout, } = useAuthProviderViewModel(auth)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const initializeUser = async (currentUser) => {
    if (currentUser) {
      setUser({ ...currentUser })
    } else {
      setUser(null)
    }
    
    setIsLoading(false)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser)
    return () => unsubscribe()
  }, [])
  
  return (
    <AuthContext.Provider value={{ user, isLoading, register, login, loginWithGoogle, logout }}>
      {!isLoading && children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}