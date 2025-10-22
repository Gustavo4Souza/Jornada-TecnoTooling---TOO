import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";


function Header({ navigation }) {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <Image
          source={require("../assets/images/TecnoTooling/LogoGrandeEmBranco.png")}
          style={styles.HeaderImage}
        />
        <Pressable style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={24} color="white" />
        </Pressable>
      </View >
    </View >
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}>
        <Drawer.Screen
          name="index"
          options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        />
        <Drawer.Screen
          name="register"
          options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    height: 70,
  },
  Header: {},
  HeaderImage: {
    position: "absolute",
    width: "100%",
  },
  menuButton: {
    position: "absolute",
    top: 20,        // Ajustado de 70 para 20
    left: 20,
    zIndex: 1,      // Para ficar acima da imagem
  },

});