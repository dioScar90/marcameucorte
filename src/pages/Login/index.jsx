import { useLoginViewModel } from './useLoginViewModel'

export const Login = () => {
  const { setEmail, setPassword, handleSignIn } = useLoginViewModel()

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
