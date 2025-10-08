import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

// Define as propriedades que o componente aceita.
// label: texto do rótulo do campo.
// icon: ícone opcional exibido ao lado do campo.
// ...textInputProps: todas as outras props do TextInput.
interface CustomInputProps extends TextInputProps {
  label: string;
  icon?: string;
}

// Componente funcional que renderiza um campo de entrada customizado.
export default function CustomInput({
  label,
  icon,
  ...textInputProps
}: CustomInputProps) {
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
