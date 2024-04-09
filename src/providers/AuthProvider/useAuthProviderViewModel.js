import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  // sendPasswordResetEmail,
  // updatePassword,
  // sendEmailVerification
} from 'firebase/auth'

export const useAuthProviderViewModel = (auth) => {
  const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
  }
  
  const login = async (email, password) =>
    await signInWithEmailAndPassword(auth, email, password)

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    return await signInWithPopup(auth, provider)
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

  return {
    register,
    login,
    loginWithGoogle,
    logout,
    // resetPassword,
    // changePassword,
    // verifyEmail,
  }
}