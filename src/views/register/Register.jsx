import { Link } from "react-router-dom"
import Avatar from '../../assets/addAvatar.png'
const Register = () => {
  return (
    <>
        <div className="formContainer">
            <div className="formWrapper">
            <span className="logo">Chat App</span>
            <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="enter name" />
                    <input type="email" placeholder="enter email"/>
                    <input type="password" placeholder="enter password"/>
                    <input style={{display: "none"}} type="file" id="file" />
                    <label htmlFor="fileImage">
                      <img src={Avatar}/>
                      <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>

                <p>Do you have an account?  <Link to="/register">Login</Link></p>
            </div>
        </div>
    </>
  )
}

export default Register