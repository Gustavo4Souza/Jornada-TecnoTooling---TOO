import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from "react-native";


// Props esperadas pelo componente CustomInput
export default function CustomInput({
  label,
  icon,
  ...textInputProps
}) {
  return (
    <KeyboardAvoidingView style={styles.Container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.Wrapper}>
          <Text style={styles.Rotulo}>
            {label}
          </Text>
          <View style={styles.Imput}>
            {icon && (
              <Ionicons 
                name={icon} 
                size={20} 
                color="#888" 
                style={styles.icon}
              />
            )}
            <TextInput 
              style={[styles.TextInput, icon && styles.TextInputWithIcon]}
              placeholderTextColor="#A9A9A9"
              {...textInputProps}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "80%",
  },
  Wrapper: {
    gap: 4,
  },
  Rotulo: {
    fontSize: 12,
    color: "#FFF",
  },
  Imput: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
  },
  icon: {
    marginRight: 8,
  },
  TextInput: {
    flex: 1,
    fontSize: 10,
  },
  TextInputWithIcon: {
    paddingLeft: 0,
  },
});
