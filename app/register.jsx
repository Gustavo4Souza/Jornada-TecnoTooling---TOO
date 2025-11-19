import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, View, Alert } from "react-native"; // Adicionei Alert
import CustomInput from "../components/CustomInput";
import HomeButton from "../components/HomeButton";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API_URL = "http://10.0.2.2:8000";

  const handleLogin = async () => {
    // 1. Validação básica antes de chamar o servidor
    if (!email || !password) {
      Alert.alert("Atenção", "Por favor, preencha e-mail e senha.");
      return;
    }

    try {
      // 2. Prepara os dados no formato de formulário (Exigência do FastAPI para Login)
      const formData = new URLSearchParams();
      formData.append('username', email); // O FastAPI chama de 'username', mas enviamos o email
      formData.append('password', password);

      console.log("Enviando dados para:", `${API_URL}/login`);

      // 3. Faz a chamada ao Backend
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      const data = await response.json();

      if (response.ok) {
        // SUCESSO!
        console.log("Login OK! Token:", data.access_token);

        // (Opcional) Por enquanto apenas navegamos.
        // No futuro, salvaremos esse token para lembrar que o usuário está logado.
        router.replace("/chat");
      } else {
        // ERRO (Senha errada ou usuário não existe)
        Alert.alert("Erro no Login", "E-mail ou senha incorretos.");
        console.log("Erro API:", data);
      }

    } catch (error) {
      console.error("Erro de conexão:", error);
      Alert.alert("Erro", "Não foi possível conectar ao servidor. Verifique se o backend está rodando.");
    }
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

        {/* Alterei para chamar a função handleLogin sem passar arrow function inline para ficar mais limpo */}
        <HomeButton
          text="Login"
          onPress={handleLogin}
        />
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