import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import "../styles/ChatBot.css";

const responses = {
  ayuda: "Utiliza los siguientes comandos: help",
  help: "Use the following commands: help",
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleToggleChat = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const userInput = e.target.userInput.value.trim().toLowerCase();

    if (userInput !== "") {
      const userMessage = {
        sender: "user",
        message: userInput,
      };

      setMessages((prevMessages) => [...prevMessages, userMessage]);

      const botMessage = {
        sender: "bot",
        message: generateBotResponse(userInput),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }

    e.target.userInput.value = "";
  };

  const generateBotResponse = (userInput) => {
    const response = responses[userInput];
    if (response) {
      return response;
    }

    return "Error! Utiliza los comandos help o ayuda para obtener más información.";
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div className={`ChatBot ${isOpen ? "open" : ""}`}>
      {!isOpen && (
        <div className="chat-icon" onClick={handleToggleChat}>
          <FaWhatsapp size={26} />
        </div>
      )}

      {isOpen && (
        <div className="chat-content">
          <div className="chat-header">
            <h1 className="chat-title">ChatBot</h1>
            <p>Ayuda / Help</p>
            <div className="chat-close" onClick={handleToggleChat}>
              <FaTimes size={26} />
            </div>
          </div>

          <div className="chat-container">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.sender === "bot" ? (
                  <p dangerouslySetInnerHTML={{ __html: message.message }} />
                ) : (
                  <p>{message.message}</p>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              name="userInput"
              placeholder="Escribe tu mensaje aquí..."
              autoComplete="off"
            />
            <div className="button-container">
              <button type="submit">Enviar</button>
              <button className="clear-button" onClick={handleClearChat}>
                Limpiar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
