import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom"

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth()
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault()

    console.log('email', email)
    console.log('password', password)

    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      console.log('user', user)
      setTimeout(() => navigate('/home'), 1000)
    } catch (err) {
      console.log('error', err)
    }
  }

  return (
    <div>
      <h1>This is the sign in page</h1>
      <form>
        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
        <button onClick={handleSignIn}>Sign Up</button>
      </form>
    </div>
  )
}
