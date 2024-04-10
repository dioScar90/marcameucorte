import { useContext } from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

export const DefaultLayout = () => {

  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}
