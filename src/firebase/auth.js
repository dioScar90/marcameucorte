import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updatePassword } from 'firebase/auth'
import { auth } from './firebase'

export const doCreateWithEmailAndPassword = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password)

export const doSignInWithEmailAndPassword = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password)

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  return await signInWithPopup(auth, provider)
}

export const doSignOut = async () => {
  console.log('saindo...')
  auth.signOut()
}

// export const doPasswordReset = (email) => {
//   return sendPasswordResetEmail(auth, email)
// }

// export const doPasswordChange = (password) => {
//   return updatePassword(auth.currentUser, password)
// }

// export const doSendEmailVerification = () => {
//   return sendEmailVerification(auth.currentUser, {
//     url: `${location.origin}/home`
//   })
// }
