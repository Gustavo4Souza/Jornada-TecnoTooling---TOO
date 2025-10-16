import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
// Props esperadas pelo componente CustomInput
export default function CustomInput({
  label,
  icon,
  ...textInputProps
}) {
  return (
    <View style={styles.containerImput}>
      <View style={styles.containerRotuloeInput}>
        <Text style={styles.rotulo}>{label}</Text>
        <View style={styles.campoImput}>
          <TextInput
            style={styles.textInput}
            placeholderTextColor="#A9A9A9" // Cor do placeholder
            {...textInputProps}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerImput: {
    gap: 5,
  },
  containerRotuloeInput: {
    gap: 4,
  },
  rotulo: {
    fontSize: 12,
    color: "#FFF",
  },
  campoImput: {
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
  },
  textInput: {
    paddingHorizontal: 10,
    fontSize: 10,
  },
});
