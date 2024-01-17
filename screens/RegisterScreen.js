import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: "#ffff",
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 100,
        }}
      >
        <Text style={{ color: "#06DAFF", fontSize: 40, fontWeight: "bold" }}>
          Register
        </Text>
        <Text style={{ color: "#4E4C4C", fontSize: 23, fontWeight: "500" }}>
          Create a new account
        </Text>

        <View style={{ marginTop: 70 }}>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            placeholderTextColor={"#4E4C4C"}
            style={{
              fontSize: 23,
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              marginVertical: 10,
              width: 300,
            }}
          />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={"#4E4C4C"}
            style={{
              fontSize: 23,
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              marginVertical: 10,
              width: 300,
              marginTop: 40,
            }}
          />
          <TextInput
            value={phoneNumber}
            onChangeText={(num) => setPhoneNumber(num)}
            placeholder="Phone Number"
            placeholderTextColor={"#4E4C4C"}
            style={{
              fontSize: 23,
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              marginVertical: 10,
              width: 300,
              marginTop: 40,
            }}
          />
        </View>
        <Pressable>
          <View
            style={{
              backgroundColor: "#06DAFF",
              width: 233,
              height: 58,
              borderRadius: 30,
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>Register</Text>
          </View>
        </Pressable>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontSize: 20 }}>Already have an account ? </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{ fontSize: 20, color: "#06DAFF", fontWeight: "bold" }}
            >
              Sign in
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
