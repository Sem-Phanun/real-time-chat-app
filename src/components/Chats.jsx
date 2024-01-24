import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from '../config/firebase'
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext)

  useEffect(()=> {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
      })
      return ()=> {
        unsub()
      }
    }
    currentUser.uid && getChats()
    
  },[currentUser.uid])

  const hanldeSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  return (
    <>
      <section className="chats">
        {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat)=> (
          <figure className="userChat"
            key={chat[0]} onClick={()=> hanldeSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} />
          </figure>
        ))}
      </section>
    </>
  );
};

export default Chats;
