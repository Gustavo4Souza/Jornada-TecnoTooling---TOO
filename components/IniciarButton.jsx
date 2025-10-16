import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function IniciarButton({ 
  title = "Iniciar", 
  onPress 
}) {
  return (
    <Pressable style={styles.button} 
      onPress={onPress}
      >
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 144,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "#FF7700",
    borderColor: "#FF770085",
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
