import IniciarButton from "@/components/IniciarButton";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, StyleSheet } from "react-native";

export default function StartScreen() {
  return (
    <LinearGradient colors={["#175476", "#213549"]} style={styles.container}>
      <Image
        source={require("../assets/images/TecnoTooling/LogoEmBranco.png")}
      />
      <IniciarButton 
      title="Login"
      onPress={() => router.replace("/register")} 
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 300,
  },
});
