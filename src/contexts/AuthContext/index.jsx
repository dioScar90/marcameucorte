import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../../firebase/firebase";

const AuthContext = createContext()

// const useAuth = () => {
//   return useContext(AuthContext)
// }

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const initializeUser = async (currentUser) => {
    if (currentUser) {
      setUser({ ...currentUser })
      setIsAuthenticated(true)
    } else {
      setUser(null)
      setIsAuthenticated(false)
    }
    
    setIsLoading(false)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(user, initializeUser)
    return unsubscribe
  })
  
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading }}>
      {!isLoading && children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
