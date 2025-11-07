// Falta ADD o icone no TextImput

import React, { useState } from "react";
import { StyleSheet,Text,TextInput,View,TouchableOpacity,ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function ChatScreen() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: input },
    ]);

    setInput("");
  };

  return (
    <LinearGradient colors={["#175476", "#213549"]} style={styles.container}>
      <SafeAreaView/>

      <Text style={styles.headerText}>
        Como posso ajudar{"\n"}sobre TecnoTooling?
      </Text>

      <ScrollView
        style={styles.chatContainer}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((msg) => (
          <View key={msg.id} style={styles.messageBubble}>
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Pergunte alguma coisa"
          placeholderTextColor="#A9A9A9"
          value={input}
          onChangeText={setInput}
          onSubmitEditing={handleSend}
          returnKeyType="send"
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSend}
          activeOpacity={0.7}
        >
          <Ionicons name="send" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      <SafeAreaView />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerText: {
    marginTop: 40,
    textAlign: "center",
    color: "#fff",
    opacity: 0.8,
    fontSize: 22,
    marginBottom: 20,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 20,
  },
  messageBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#185777",
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    maxWidth: "80%",
  },
  messageText: {
    color: "#fff",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  textInput: {
    flex: 1,
    color: "#000",
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: "#175476",
    borderRadius: 50,
    padding: 10,
    marginLeft: 10,
  },
});
