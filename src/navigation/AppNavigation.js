import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import ChatDetailsScreen from "../screens/ChatDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Tap = createBottomTabNavigator();

export default function AppNavigation() {
  const HomeTaps = () => {
    return (
      <Tap.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Chat") {
              iconName = "chatbubbles-outline";
            } else if (route.name === "Profile") {
              iconName = "person-outline";
            }
            const customizesSize = 25;
            return (
              <Ionicons
                name={iconName}
                size={customizesSize}
                color={focused ? "#3882f6" : "gray"}
              />
            );
          },

          tabBarActiveTintColor: "#3b82f6",
          tabBarLabelStyle: {
            fontWeight: "bold",
          },
          tabBarInActiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "white",
          },
        })}
      >
        <Tap.Screen name="Home" component={HomeScreen} />
        <Tap.Screen name="Chat" component={ChatScreen} />
        <Tap.Screen name="Profile" component={ProfileScreen} />
      </Tap.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="ChatDetails"
          component={ChatDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="HomeTaps" component={HomeTaps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
