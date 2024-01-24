import { Navigate, Route, Routes } from "react-router-dom"
import Register from "./views/register/Register"
import Login from './views/login/Login'
import Home from "./views/home/Home"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"


const App = () => {

  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if(!currentUser){
      return <Navigate to={'/login'}/>
    }

    return children
  }
  return (
    <>
    <Routes>
      <Route path="/">
      <Route index element={<ProtectedRoute>
        <Home/>
      </ProtectedRoute>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>

    </>
  )
}

export default App