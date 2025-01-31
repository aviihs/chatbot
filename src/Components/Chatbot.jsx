import React, { useState } from "react";
import ChatMessage from "./ChatMessage";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      const botReply = { text: "Hello! How can I help you?", sender: "bot" };
      setMessages([...newMessages, botReply]);
    }, 1000);
  };

  return (
    <div className="w-[80%] mx-auto mt-5 p-6 bg-white shadow-lg rounded-lg">
    <div className="h-[500px] overflow-y-auto border-b p-4">
        {messages.map((msg, index) => (
          <ChatMessage key={index} text={msg.text} sender={msg.sender} />
        ))}
    </div>
        <div className="flex mt-4">
        <input
          type="text"
          className="flex-1 border rounded-l p-3"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 rounded-r text-lg">
          🚀
        </button>
      </div>
    </div>
  );
};

export default Chatbot;