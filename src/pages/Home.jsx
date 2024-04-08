import { getAuth, signOut } from "firebase/auth"

export const Home = () => {
  const auth = getAuth()

  const handleSingOut = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.log('error', err)
    }
  }

  return (
    <div>
      <h1>This is the home page</h1>
      <button onClick={handleSingOut}>Sign Out</button>
    </div>
  )
}
