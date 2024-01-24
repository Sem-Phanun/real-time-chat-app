import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <>
      <section
        ref={ref}
        className={`message ${message.senderId === currentUser.uid && "owner"}`}
      >
        <figure className="messageInfo">
          <img
            src={
              message.senderI === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            }
          />
          <span>just now</span>
        </figure>
        <article className="messageContent">
          <p>{message.text}</p>
          {message.img && <img src={message.img}/>}
        </article>
      </section>
    </>
  );
};

export default Message;
