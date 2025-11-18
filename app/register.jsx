import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomInput from "../components/CustomInput";
import HomeButton from "../components/HomeButton";
import { API_URL } from "./config";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    // Validação básica
    if (!email || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        router.replace("/chat");
      } else {
        setError(data.message || "Erro ao registrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro no registro:", error);
      setError("Erro de conexão. Verifique sua internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={["#175476", "#213549"]} style={styles.container}>
      <Image
        source={require("../assets/images/TecnoTooling/LogoEmBranco.png")}
      />
      <View style={styles.Wrapper}>
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}
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
          text={loading ? "Registrando..." : "Registrar"}
          onPress={handleRegister}
          disabled={loading}
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
  errorContainer: {
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#ff4444",
    width: "80%",
  },
  errorText: {
    color: "#ff4444",
    fontSize: 14,
    textAlign: "center",
  },
});
