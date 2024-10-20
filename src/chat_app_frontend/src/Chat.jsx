import React, { useState, useEffect } from 'react';
import { createActor } from 'dfx-generated/chat_app';

const chatActor = createActor(canisterId, { agentOptions: { host: "http://127.0.0.1:8000" } });

const Chat = () => {
  console.log("Rendering Chat component");
  const [messages, setMessages] = useState([]);
  const [sender, setSender] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    console.log("Fetching messages from chatActor");
    chatActor.getMessages().then(setMessages);
  }, []);

  const handlePostMessage = async () => {
    console.log("Posting message:", sender, content);
    await chatActor.postMessage(sender, content);
    chatActor.getMessages().then(setMessages);
    setSender('');
    setContent('');
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        <input
          type="text"
          placeholder="Sender"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <input
          type="text"
          placeholder="Message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handlePostMessage}>Send</button>
      </div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.sender}: </strong>{message.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
