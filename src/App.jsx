import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import './App.css'
import { DefaultLayout } from './components/DefaultLayout'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { AuthProvider } from './providers/AuthProvider'
import { Dashboard } from './pages/Dashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" isProtected element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
