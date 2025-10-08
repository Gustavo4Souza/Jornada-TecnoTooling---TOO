import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { iconArrow, iconMenu } from "../components/icons/index";

export default function ChatScreen() {
  return (
    <LinearGradient colors={["#175476", "#213549"]} style={styles.container}>
      <Image
        source={require("../assets/images/TecnoTooling/LogoGrandeEmBrancoFigma.png")}
      />
      <View style={styles.line} />
      <Pressable style={styles.Menu}>{iconMenu()}</Pressable>
      <View>
        <Text style={styles.textCenter}>Como posso ajudar</Text>
        <Text style={styles.textCenter}>sobre TecnoTooling ?</Text>
        <View>
          <View style={styles.containerImputChat}>
            <TextInput
              placeholder="Pergunte alguma coisa"
              placeholderTextColor="#A9A9A9"
            ></TextInput>
            <Pressable>{iconArrow()}</Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    width: 350,
    height: 1,
    backgroundColor: "#FFFFFF85",
  },
  Menu: {
    width: 350,
    marginBottom: 250,
    alignItems: "left",
  },
  textCenter: {
    color: "#fff",
    opacity: 0.5,
    textAlign: "center",
    fontSize: 24,
  },
  containerImputChat: {
    flexDirection: "row",
    width: 333,
    marginTop: 292,
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: "#FFF",
    borderColor: "#00000020",
    borderRadius: 30,
    borderWidth: 1,
    marginBottom: 30,
    gap: 120,
  },
});
