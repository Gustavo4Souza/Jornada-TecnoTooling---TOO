// Falta ADD o icone no TextImput

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatScreen() {
  return (
    <LinearGradient
      colors={["#175476", "#213549"]}
      style={styles.container}
    >
      <SafeAreaView/>
      <Text style={styles.Text}>
        Como posso ajudar{'\n'}
        sobre TecnoTooling ?
      </Text>
      <View style={styles.TextImput}>
        <TextInput
          placeholder="Pergunte alguma coisa"
          placeholderTextColor="#A9A9A9"
        ></TextInput>
      </View>
      <SafeAreaView />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  Text: {
    marginBottom: 350,
    color: "#fff",
    opacity: 0.5,
    fontSize: 24,
  },
  TextImput: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: "80%",
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 30,
  },
});
