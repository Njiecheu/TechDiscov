import React, { useRef } from 'react';

const InputForm = ({ sendMessage }) => {
  const messageInputRef = useRef(null);

  const handleSendMessage = (event) => {
    const message = messageInputRef.current.value.trim();
    if (message) {
      sendMessage(message);
      messageInputRef.current.value = '';
    }
  };

  return (
    <div className="flex p-4 border-t border-gray-200">
      <input
        ref={messageInputRef}
        type="text"
        placeholder="Type your message..."
        className="flex-grow rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onKeyPress={(event) => event.key === 'Enter' && handleSendMessage(event)}
      />
      <button
        className="ml-2 py-2 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default InputForm;
