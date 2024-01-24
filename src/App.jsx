import { Route, Routes } from "react-router-dom"
import Register from "./views/register/Register"
import Login from './views/login/Login'
import Home from "./views/home/Home"


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/"
      
      element={<Home/>}
      />

      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>

    </>
  )
}

export default App