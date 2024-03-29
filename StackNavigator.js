import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SavedScreen from "./screens/SavedScreen";
import HomeScreen from "./screens/HomeScreen";
import BookingScreen from "./screens/BookingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SearchScreen from "./screens/SearchScreen";
import PlaceScreen from "./screens/PlaceScreen";
import PropertyInfoScreen from "./screens/PropertyInfoScreen";
import UserScreen from "./screens/UserScreen";
import ConfirmationScreen from "./screens/ConfirmationScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HeroScreen from "./screens/HeroScreen";

export default function stackNavigator() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) =>
              focused ? (
                <MaterialIcons name="home" size={40} color="#06DAFF" />
              ) : (
                <MaterialIcons name="home" size={40} color="#555" />
              ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Fav",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons
                  name="favorite-border"
                  size={40}
                  color="#06DAFF"
                />
              ) : (
                <MaterialIcons name="favorite-border" size={40} color="#555" />
              ),
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            tabBarLabel: "Bookings",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="bells" size={35} color="#06DAFF" />
              ) : (
                <AntDesign name="bells" size={35} color="#555" />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="account"
                  size={40}
                  color="#06DAFF"
                />
              ) : (
                <MaterialCommunityIcons name="account" size={40} color="#555" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Hero" component={HeroScreen} options={{headerShown:false}} />
        
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="Signup" component={RegisterScreen} options={{headerShown:false}} />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen name="Place" component={PlaceScreen} />
        <Stack.Screen name="Info" component={PropertyInfoScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
