import { Link } from "rasengan";
import logo from "@assets/logo.svg";
import Image from "@rasenganjs/image";
import Landing from "@/components/landing/Landing";
import MessagesList from "@components/messages/MessagesList";
import InputForm from "@components/messages/Message";
import { useState } from "react";
const Message = () => {
  const [messages, setMessages] = useState([{ text: "Hello", self: true }]);

  const sendMessage = (message) => {
    setMessages([...messages, { text: message, self: true }]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <MessagesList messages={messages} />
      <InputForm sendMessage={sendMessage} />
    </div>
  );
};

Message.path = "/messages";
Message.metadata = {
  title: "Message",
  description: "Message page",
};

export default Message;
