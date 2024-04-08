import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import './App.css'
// import { Home } from './pages/Home'
// import { SignIn } from './pages/SignIn'
// import { SignUp } from './pages/SignUp'
// import { AuthContext } from './contexts/AuthContext'
import { DefaultLayout } from './components/DefaultLayout'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { AuthProvider } from './contexts/AuthContext'
// import { Protected } from './pages/Protected'

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Protected><Home /></Protected>
//     },
//     {
//       path: '/home',
//       element: <Protected><Home /></Protected>
//     },
//     {
//       path: '/signin',
//       element: <SignIn />
//     },
//     {
//       path: 'signup',
//       element: <SignUp />
//     }
//   ])

//   return (
//     <AuthContext>
//       <RouterProvider router={router}></RouterProvider>
//     </AuthContext>
//   )
// }

// const CustomRoute = ({ isProtected, ...rest }) => {
//   const { user } = useContext(Context)

//   if (!user) {
//     return <Navigate to="/login" replace />
//   }

//   return <Route { ...rest } />
// }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
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