import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { AuthContext } from './contexts/AuthContext'
import { Protected } from './pages/Protected'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Protected><Home /></Protected>
    },
    {
      path: '/home',
      element: <Protected><Home /></Protected>
    },
    {
      path: '/signin',
      element: <SignIn />
    },
    {
      path: 'signup',
      element: <SignUp />
    }
  ])

  return (
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  )
}

export default App
