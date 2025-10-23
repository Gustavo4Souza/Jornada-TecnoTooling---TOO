import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { Drawer } from "expo-router/drawer";
import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

function CustomDrawerContent(props) {
  return (
    <LinearGradient
      colors={["#175476", "#213549"]}
      style={styles.drawerGradient}>
      <DrawerContentScrollView {...props}
        contentContainerStyle={styles.drawerScrollView}>

        <View style={styles.drawerHeader}>
          <Image
            source={require("../assets/images/TecnoTooling/icone branco.png")}
          />
          <View style={styles.Search}>
            <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar"
              placeholderTextColor="#888"
            />
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </LinearGradient>
  );
}

function Header({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Header}>
        <Image
          source={require("../assets/images/TecnoTooling/LogoGrandeEmBrancoFigma.png")}
        />
        <Pressable style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons
            name="menu"
            size={24}
            color="white" />
        </Pressable>
      </View >
    </SafeAreaView >
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          header: ({ navigation }) => <Header navigation={navigation} />,
          drawerInactiveTintColor: "#fff",
          drawerActiveTintColor: "#fff",

          drawerStyle: {
            backgroundColor: "transparent",
            width: 322,
          },

          drawerLabelStyle: {
            color: "#fff",
            fontSize: 16,
          },

          drawerItemStyle: {
            borderRadius: 8,
          },
        }}>
        <Drawer.Screen
          name="index"
          options={{
            headerShown: false,
            drawerItemStyle: { display: "none" }
          }}
        />
        <Drawer.Screen
          name="chat"
          options={{
            drawerLabel: "Novo Chat",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="create-outline" size={size} color={color} />
            ),
          }}
        />
        {/* <Drawer.Screen
          name="register"
          options={{
            headerShown: false,
            drawerLabel: "Logout",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="log-in" size={size} color={color} />
            ),
          }}
        /> */}
        <Drawer.Screen
          name="register"
          options={{
            headerShown: false,
            drawerLabel: " "
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#175476",
    height: 70,
  },
  Header: {
    alignItems: "center"
  },
  menuButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },



  // Estilos do Drawer Customizado
  drawerGradient: {
    flex: 1,
  },
  drawerScrollView: {
    paddingTop: 20,
    gap: 20,
  },
  drawerHeader: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 15,
  },
  Search: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  newChatButton: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
  },
  newChatText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});