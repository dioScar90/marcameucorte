import { getAuth, onAuthStateChanged } from "firebase/auth"
import { createContext, useEffect, useState } from "react"

const Context = createContext()

const AuthContext = ({ children }) => {
  const auth = getAuth()
  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let unsubscribe
    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsLoading(false)
      if (currentUser) {
        setUser(currentUser)
      } else {
        setUser(null)
      }
    })

    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [])

  const values = {
    user, setUser,
  }

  return (
    <Context.Provider value={values}>
      {!isLoading && children}
    </Context.Provider>
  )
}

export { AuthContext, Context }

