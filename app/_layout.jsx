import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { Drawer } from "expo-router/drawer";
import { Image, Pressable, StyleSheet, TextInput, View, Text, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

function CustomDrawerContent(props) {
  return (
    <LinearGradient
      colors={["#175476", "#213549"]}
      style={styles.drawerGradient}>
      
      {/* Header com logo e busca */}
      <View style={styles.drawerHeader}>
        <Image
          source={require("../assets/images/TecnoTooling/icone branco.png")}
          style={styles.logoIcon}
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

      {/* Botão Novo Chat */}
      <Pressable style={styles.newChatButton}>
        <Ionicons name="create-outline" size={20} color="#fff" />
        <Text style={styles.newChatText}>Novo Chat</Text>
      </Pressable>

      {/* Área scrollável com histórico */}
      <DrawerContentScrollView 
        {...props} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        
        {/* Seção HISTÓRICO */}
        <View style={styles.historySection}>
          <View style={styles.historyHeader}>
            <Ionicons name="calendar-outline" size={16} color="#fff" />
            <Text style={styles.historyTitle}>HISTÓRICO</Text>
          </View>

          {/* Lista de Vale Transporte */}
          <View style={styles.historyList}>
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
            
            <Pressable style={styles.historyItem}>
              <Text style={styles.historyItemTitle}>Vale Transporte</Text>
              <Text style={styles.historyItemDate}>03/10/2025 • 18:28</Text>
            </Pressable>
          </View>
        </View>
      </DrawerContentScrollView>

      {/* Footer com perfil do usuário */}
      <View style={styles.userProfile}>
        <View style={styles.profileIcon}>
          <Ionicons name="person" size={20} color="#fff" />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Luis Gustavo de Souza Ferreira</Text>
          <Text style={styles.profileId}>ID: 40418950</Text>
        </View>
      </View>
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
    paddingTop: 20,
  },
  
  // Header com logo e busca
  drawerHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingBottom: 15,
    gap: 15,
  },
  logoIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  Search: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },

  // Botão Novo Chat
  newChatButton: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 8,
  },
  newChatText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "500",
  },

  // Área de scroll
  scrollContent: {
    flexGrow: 1,
  },

  // Seção Histórico
  historySection: {
    flex: 1,
    paddingHorizontal: 15,
  },
  historyHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 8,
  },
  historyTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  // Lista de histórico
  historyList: {
    gap: 8,
  },
  historyItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: "rgba(255,255,255,0.2)",
  },
  historyItemTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  historyItemDate: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
  },

  // Perfil do usuário
  userProfile: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.1)",
    gap: 12,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 2,
  },
  profileId: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
  },
});