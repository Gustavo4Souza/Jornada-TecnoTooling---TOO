import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import CustomInput from "../components/CustomInput";
import HomeButton from "../components/HomeButton";
import { API_URL } from "./config";

export default function RegisterScreen() {
  // Estado para armazenar o email digitado pelo usuário
  const [email, setEmail] = useState("");
  // Estado para armazenar a senha digitada pelo usuário
  const [password, setPassword] = useState("");

  // Função executada quando o usuário clica no botão de login
  const handleLogin = () => {
    // Aqui você pode implementar a lógica de autenticação
    // Por enquanto apenas mostra os dados no console
    console.log("Tentativa de login:", { email, password });

    // Aqui você poderia fazer uma chamada para uma API, por exemplo:
    // authenticateUser(email, password);
  };

  return (
    <LinearGradient colors={["#175476", "#213549"]} style={styles.container}>
      <Image
        source={require("../assets/images/TecnoTooling/LogoEmBranco.png")}
      />
      <View style={styles.Wrapper}>
        <CustomInput
          label="Email:"
          placeholder="Entre com o seu endereço de email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <CustomInput
          label="Senha:"
          placeholder="Entre com a sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <HomeButton
          text="Login"
          onPress={() => router.navigate("/chat")} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 170,
  },
  Wrapper: {
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
});

fetch(`${API_URL}/register`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, senha }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Erro ao conectar:", err));
