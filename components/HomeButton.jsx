import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function HomeButton({ 
  text, 
  onPress 
}) {
  return (
    <Pressable style={styles.button} 
      onPress={onPress}
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
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
