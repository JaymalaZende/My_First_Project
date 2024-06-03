import React, { useState } from 'react';

function LiveChatButton() {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    // Send the message to the live chat service
    console.log('Message sent:', message);
    // You can replace the console.log with actual code to send the message to your live chat service
    setMessage('');
  };

  return (
    <div>
      {!showChat && (
        <button onClick={toggleChat} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full fixed bottom-4 right-4 z-10">
          Live Chat
        </button>
      )}
      {showChat && (
        <div className="fixed bottom-4 right-4 z-10">
          <iframe src="https://your-live-chat-url.com" title="Live Chat" width="300" height="400" className="bg-white border border-gray-300 rounded-lg shadow-md"></iframe>
          <div className="flex mt-2">
            <input type="text" value={message} onChange={handleMessageChange} placeholder="Type your message..." className="border border-gray-300 rounded-l-lg p-2 flex-grow" />
            <button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">Send</button>
          </div>
          <button onClick={toggleChat} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-2">
            Close Chat
          </button>
        </div>
      )}
    </div>
  );
}

export default LiveChatButton;
