import { useState } from "react"
import Avatar from '../../assets/addAvatar.png'
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db, storage } from '../../config/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from "firebase/firestore"

const Register = () => {

  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]


    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
    
      //create a unique image 

      const date = new Date().getTime
      const storageRef = ref(storage, `${displayName + date}`)

      await uploadBytesResumable(storageRef, file).then(()=> {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
  
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
            //create user in firestore
            await setDoc(doc(db, "users", res.user.uid),{
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            })

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {})
            navigate('/')
          
          } catch (error) {
            
          }
  
        })

      })
    
    }catch(err){
      setErr(true)
      setLoading(false)
    }
  }
  return (
    <>
        <div className="formContainer">
            <div className="formWrapper">
            <span className="logo">Chat App</span>
            <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input required type="text" placeholder="username" />
                    <input required type="email" placeholder="email address"/>
                    <input required type="password" placeholder="enter password"/>
                    <input required type="file" style={{display: "none"}}  id="file" />
                    <label htmlFor="file">
                      <img src={Avatar}/>
                      <span>Add an avatar</span>
                    </label>
                    <button disabled={loading}>Sign up</button>
                    {loading && "Uploading and compressing the image please wait..."}
                    {err && <span>Something went wrong</span>}
                </form>

                <p>Do you have an account?  <Link to="/register">Login</Link></p>
            </div>
        </div>
    </>
  )
}

export default Register