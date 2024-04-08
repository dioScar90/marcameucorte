import { useContext } from "react"
import { Context } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"

export const Protected = ({ children }) => {
  const { user } = useContext(Context)

  if (!user) {
    return <Navigate to="/signin" replace />
  }

  return children
}
