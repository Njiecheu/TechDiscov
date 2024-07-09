import React from "react";

const Message = ({ message }) => {
  const isSelf = message?.self;
  const messageClass = `flex items-center p-3 rounded-lg mb-2 ${
    isSelf ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
  }`;

  return (
    <div className={messageClass}>
      <p className={`text-sm font-medium ${isSelf ? "text-right" : ""}`}>
        {message.text}
      </p>
    </div>
  );
};
export default Message;
