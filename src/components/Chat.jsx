import Cam from '../assets/cam.png'
import Add from '../assets/add.png'
import More from '../assets/more.png'
import Messages from './Messages'
import Input from './Input'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
const Chat = () => {

  const { data } = useContext(ChatContext)
  return (
    <>
      <section className="chat">
        <div className="chatInfo">
          <span>{data.user?.displayName}</span>
          <div className="chatIcons">
            <img src={Cam}/>
            <img src={Add}/>
            <img src={More}/>
          </div>
        </div>
        <Messages/>
        <Input/>
      </section>
    </>
  )
}

export default Chat