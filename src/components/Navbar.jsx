import {signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <>
        <nav className="navbar">
            <span className="logo">Chat App</span>
            <section className="user">
                <img src={currentUser.photoURL}/>
                <span>{currentUser.displayName}</span>
                <button onClick={()=> signOut(auth)}>logout</button>
            </section>
        </nav>
    </>
  )
}

export default Navbar