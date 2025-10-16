import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { Drawer } from "expo-router/drawer";
import { Image, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Componente customizado para o conteúdo do drawer
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContentContainer}>
      <LinearGradient colors={["#175476", "#213549"]} style={styles.gradientContainer}>
        {/* Container da imagem */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/TecnoTooling/icone branco.png")}
            style={styles.drawerImage}
            resizeMode="contain"
          />
        </View>
        {/* Lista de itens do drawer */}
        <DrawerItemList {...props} />
      </LinearGradient>
    </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: "#175476" },
          headerTintColor: "#fff",
          drawerStyle: { backgroundColor: "transparent" },
          drawerLabelStyle: { color: "#fff" },
        }}>  
        <Drawer.Screen
          name="index"
          options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        />
        <Drawer.Screen
          name="register"
          options={{ 
            drawerLabel: "Login",
            title: "Login"
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  drawerContentContainer: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
    paddingTop: 20,
  },
  drawerContainer: {
    backgroundColor: "#175476",
  },
  imageContainer: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#213549",
    marginBottom: 10,
  },
  drawerImage: {
    width: 120,
    height: 80,
  },
});