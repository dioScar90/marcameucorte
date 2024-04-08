import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext/index'
import { doSignOut } from '../../firebase/auth'
import { useContext } from 'react'

export const Header = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(AuthContext)
  
  return (
    <nav>
      {!!isAuthenticated ? (
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
