import { useAuth } from '../../contexts/AuthContext'
import { useHomeViewModel } from './useHomeViewModel'

export const Home = () => {
  const {  } = useHomeViewModel()
  const { user } = useAuth()

  return (
    <div>
      Hello, {user.displayName ?? user.email}, you are logged in.
    </div>
  )
}
