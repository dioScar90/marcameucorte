import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export const Header = () => {
  const { user, logout } = useContext(AuthContext)
  
  return (
    <nav>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register new account</NavLink>
        </>
      )}
    </nav>
  )
}
