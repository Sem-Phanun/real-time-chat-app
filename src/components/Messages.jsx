
import { useContext, useEffect, useState } from 'react'
import Message from './Message'
import { ChatContext } from '../context/ChatContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../config/firebase'

const Messages = () => {

  const [messages, setMessages] = useState([])
  const { data } = useContext(ChatContext)

  useEffect(()=> {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc)=> {
      doc.exists() && setMessages(doc.data().messages)
    })
    return () => {
      unSub()
    }
  },[data.chatId])
  return (
    <>
      <section className='messages'>
        {messages.map((list) => (
          <Message message={list} key={list.id}/>
        ))}

      </section>
    </>
  )
}

export default Messages