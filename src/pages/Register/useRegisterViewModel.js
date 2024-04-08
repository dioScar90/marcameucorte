import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export const useRegisterViewModel = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth()

  const handleSignUp = async (e) => {
    e.preventDefault()

    console.log('email', email)
    console.log('password', password)

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log('user', user)
    } catch (err) {
      console.log('error', err)
    }
  }

  return { setEmail, setPassword, handleSignUp }
}
