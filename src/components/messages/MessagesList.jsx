import React from "react";
import Message from "./Message";

const MessagesList = ({ messages }) => {
  return (
    <div className="flex-grow overflow-y-auto p-4">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default MessagesList;
