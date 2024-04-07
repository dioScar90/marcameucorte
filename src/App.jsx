import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from './routes/Home'
import { SignIn } from './routes/SignIn'
import { SignUp } from './routes/SignUp'
import { AuthContext } from './contexts/AuthContext'
import { Protected } from './routes/Protected'

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
