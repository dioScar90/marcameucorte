import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  linkWithPopup,
  onAuthStateChanged,
  // sendPasswordResetEmail,
  // updatePassword,
  // sendEmailVerification,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../../firebase/firebase'

export const useAuthProviderViewModel = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
  }
  
  const login = async (email, password) =>
    await signInWithEmailAndPassword(auth, email, password)

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    return await signInWithPopup(auth, provider)
  }

  const linkWithGoogle = async () => {
    if (!auth.currentUser) {
      return
    }

    try {
      const provider = new GoogleAuthProvider()
      const result = await linkWithPopup(auth.currentUser, provider)
      // Accounts successfully linked.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const linkedUser = result.user

      console.log('credential', credential)
      setUser({ ...linkedUser })
    } catch (err) {
      console.log(err)
    }
  }
  
  const logout = async () => {
    console.log('saindo...')
    auth.signOut()
  }

  // const resetPassword = (email) => {
  //   return sendPasswordResetEmail(auth, email)
  // }

  // const changePassword = (password) => {
  //   return updatePassword(auth.currentUser, password)
  // }

  // const verifyEmail = () => {
  //   return sendEmailVerification(auth.currentUser, {
  //     url: `${location.origin}/home`
  //   })
  // }

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

  return {
    user,
    isLoading,
    register,
    login,
    loginWithGoogle,
    logout,
    linkWithGoogle,
    // resetPassword,
    // changePassword,
    // verifyEmail,
  }
}