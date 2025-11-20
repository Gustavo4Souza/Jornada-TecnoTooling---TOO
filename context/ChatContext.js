import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export function ChatProvider({ children }) {
  // Dados iniciais (Mock)
  const [history, setHistory] = useState([
    { id: '1', title: "Vale Transporte", date: "03/10/2025 • 18:28" },
    { id: '2', title: "Erro no Login", date: "02/10/2025 • 14:10" },
  ]);

  // Função para adicionar novo chat ao histórico
  const addNewChatToHistory = (firstMessage) => {
    const newId = Date.now().toString(); // Gera ID único
    const newChat = {
      id: newId,
      title: firstMessage.length > 20 ? firstMessage.substring(0, 20) + "..." : firstMessage, // Título é o começo da msg
      date: new Date().toLocaleDateString('pt-BR') + " • " + new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})
    };

    // Adiciona no começo da lista
    setHistory(prevHistory => [newChat, ...prevHistory]);
    return newId;
  };

  return (
    <ChatContext.Provider value={{ history, addNewChatToHistory }}>
      {children}
    </ChatContext.Provider>
  );
}

// Hook personalizado para facilitar o uso
export function useChat() {
  return useContext(ChatContext);
}