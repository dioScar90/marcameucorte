import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext/index'
import { doSignOut } from '../../firebase/auth'

export const Header = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  return (
    <nav>
      {isAuthenticated ? (
        <button onClick={() => doSignOut().then(() => navigate('/login'))}>Logout</button>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register new account</NavLink>
        </>
      )}
    </nav>
  )
}
