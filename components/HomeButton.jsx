import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function HomeButton({ 
  text, 
  onPress,
  disabled = false
}) {
  return (
    <Pressable 
      style={[styles.button, disabled && styles.buttonDisabled]} 
      onPress={disabled ? null : onPress}
      disabled={disabled}
      > 
      <Text style={styles.text}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    width: "80%", 
    alignItems: "center",
    backgroundColor: "#FF7700",
    borderColor: "#FF770085",
    borderWidth: 1,
    borderRadius: 15,
  },
  buttonDisabled: {
    backgroundColor: "#999",
    borderColor: "#666",
    opacity: 0.6,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
