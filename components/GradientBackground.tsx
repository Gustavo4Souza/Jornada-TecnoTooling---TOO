import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Image } from "react-native";
import IniciarButton from "./IniciarButton";
import React from "react";

export default function GradientBackground() {
  return (
    <LinearGradient
      colors={["#175476", "#213549"]}
      style={styles.container}
    >
      <Image
        source={require("../assets/images/TecnoTooling/LogoEmBranco.png")} />
      <IniciarButton />
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
