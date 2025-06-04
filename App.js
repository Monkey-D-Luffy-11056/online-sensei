import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import AccueilScreen from "./screens/AccueilScreen"
import BlogScreen from "./screens/BlogScreen"
import EmploisScreen from "./screens/EmploisScreen"
import FormationsScreen from "./screens/FormationsScreen"
import ProfilScreen from "./screens/ProfilScreen"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === "Accueil") {
              iconName = focused ? "home" : "home-outline"
            } else if (route.name === "Blog") {
              iconName = focused ? "newspaper" : "newspaper-outline"
            } else if (route.name === "Emplois") {
              iconName = focused ? "briefcase" : "briefcase-outline"
            } else if (route.name === "Formations") {
              iconName = focused ? "school" : "school-outline"
            } else if (route.name === "Profil") {
              iconName = focused ? "person" : "person-outline"
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "#667eea",
          tabBarInactiveTintColor: "#999",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#e9ecef",
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Accueil" component={AccueilScreen} />
        <Tab.Screen name="Blog" component={BlogScreen} />
        <Tab.Screen name="Emplois" component={EmploisScreen} />
        <Tab.Screen name="Formations" component={FormationsScreen} />
        <Tab.Screen name="Profil" component={ProfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
