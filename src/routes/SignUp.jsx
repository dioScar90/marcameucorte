import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export const SignUp = () => {
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

  return (
    <div>
      <h1>This is the sign up page</h1>
      <form>
        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  )
}
