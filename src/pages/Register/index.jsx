import { useRegisterViewModel } from './useRegisterViewModel'

export const Register = () => {
  const { setEmail, setPassword, handleSignUp } = useRegisterViewModel()

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
