import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const image = {
  uri: "https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&w=600",
};

export default function HeroScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View
          style={{ justifyContent: "flex-end", marginTop: 50, marginLeft: 20 }}
        >
          <Text style={styles.text}>Your</Text>
          <Text style={styles.text}>Journey</Text>
          <Text style={styles.text}>Start </Text>
          <Text style={styles.text}>Here!</Text>
        </View>
        <View style={{ marginLeft: 20 }}>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <View
              style={{
                backgroundColor: "#06DAFF",
                width: 233,
                height: 58,
                borderRadius: 30,
                marginTop: 190,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 30 }}>Login</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <View
              style={{
                backgroundColor: "#FFFF",
                width: 233,
                height: 58,
                borderRadius: 30,
                marginTop: 30,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#0000",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 30 }}>Register</Text>
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    color: "white",
    fontSize: 70,
    fontWeight: "bold",
    justifyContent: "flex-end",

    width: 400,
  },
});
