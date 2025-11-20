import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, router } from "expo-router";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useChat } from "../context/ChatContext"; // <--- Importamos nosso contexto

// --- BANCO DE DADOS SIMULADO ---
// Usado para carregar conversas antigas de exemplo quando clica no histórico
const MOCK_DATABASE = {
  "1": [
    { id: 1, text: "Olá, gostaria de saber sobre o Vale Transporte.", sender: "user" },
    { id: 2, text: "Claro! O desconto é de 6% sobre o salário base.", sender: "bot" },
    { id: 3, text: "E quando cai o crédito?", sender: "user" },
  ],
  "2": [
    { id: 1, text: "Tive um erro ao tentar logar no sistema.", sender: "user" },
    { id: 2, text: "Poderia me enviar um print do erro?", sender: "bot" },
  ],
};

export default function ChatScreen() {
  const { chatId } = useLocalSearchParams();
  const { addNewChatToHistory } = useChat(); // Função global para salvar no menu

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  // Controla o ID localmente. Se começou null (novo chat), vai ganhar um ID na primeira msg.
  const [currentChatId, setCurrentChatId] = useState(chatId);

  const flatListRef = useRef(null);

  // --- EFEITO: Carregar ou Limpar Chat ---
  useEffect(() => {
    // Sincroniza o estado local com a URL sempre que mudar
    setCurrentChatId(chatId);

    if (chatId && MOCK_DATABASE[chatId]) {
      // Se tem ID e existe no banco, carrega
      setMessages(MOCK_DATABASE[chatId]);
    } else if (chatId) {
       // Se tem ID mas não tá no mock (foi criado agora), mantém o que já está na tela
       // (Não faz nada para não apagar a conversa atual)
    } else {
      // Se não tem ID (Novo Chat absoluto), limpa tudo
      setMessages([
        { id: 'welcome', text: "Olá! Como posso ajudar você hoje?", sender: "bot" }
      ]);
    }
  }, [chatId]);

  // --- LÓGICA DE ENVIAR MENSAGEM ---
  const sendMessage = () => {
    if (inputText.trim() === "") return;

    // 1. Lógica de Novo Chat: Se não tem ID ainda, cria agora!
    if (!currentChatId) {
      console.log("Criando novo chat no histórico...");
      const newId = addNewChatToHistory(inputText); // Salva no Contexto
      setCurrentChatId(newId); // Atualiza estado local

      // Atualiza a URL silenciosamente para o ID novo
      router.setParams({ chatId: newId });
    }

    // 2. Adiciona a mensagem do usuário na tela
    const newMsg = {
      id: Date.now(),
      text: inputText,
      sender: "user",
    };

    setMessages((prev) => [...prev, newMsg]);
    const userText = inputText; // Guarda o texto para mandar pra API (futuro)
    setInputText("");

    // 3. Simula Resposta do Bot (Aqui entra seu FastAPI depois)
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: `Recebi: "${userText}". (Aqui virá a resposta da IA)`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const renderMessage = ({ item }) => {
    const isUser = item.sender === "user";
    return (
      <View
        style={[
          styles.messageBubble,
          isUser ? styles.userBubble : styles.botBubble,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <LinearGradient colors={["#175476", "#213549"]} style={styles.container}>

      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua mensagem..."
            placeholderTextColor="#aaa"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={sendMessage} // Envia ao dar Enter no teclado
          />
          <Pressable style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={20} color="#fff" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 20,
    paddingBottom: 80,
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 15,
    marginBottom: 10,
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#007AFF",
    borderBottomRightRadius: 2,
  },
  botBubble: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderBottomLeftRadius: 2,
  },
  messageText: {
    color: "#fff",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.1)",
  },
  input: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});