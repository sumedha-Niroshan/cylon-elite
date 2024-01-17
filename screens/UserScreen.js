import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function UserScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Conform",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#06DAFF",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const finalStep = () => {
    if (!firstName || !lastName || !email || !phoneNo) {
      Alert.alert(
        "Invalide Details",
        "Please ente all the fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    if (firstName && lastName && email && phoneNo) {
      navigation.navigate("Confirmation", {
        rooms: route.params.rooms,
        price: route.params.price,
        name: route.params.name,
        children: route.params.children,
        adults: route.params.adults,
        rating: route.params.rating,
        startDate: route.params.startDate,
        endDate: route.params.endDate,
      });
    }
  };
  return (
    <View>
      <Text>UserScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
