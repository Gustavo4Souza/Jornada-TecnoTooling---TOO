import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function IniciarButton() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>Iniciar</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 145,
    paddingVertical: 15,
    backgroundColor: "#FF7700",
    borderColor: "#FF770085",
    borderWidth: 1,
    borderRadius: 15,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
