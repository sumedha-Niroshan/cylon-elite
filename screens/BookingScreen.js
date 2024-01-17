import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BookingScreen() {
  const bookings = useSelector((state) => state.booking.booking);
  console.log(bookings);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Bookings",
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

  return (
    <SafeAreaView>
      {bookings.length > 0 &&
        bookings.map((item, index) => (
          <Pressable
            key={index}
            style={{
              backgroundColor: "#D9D9D9",
              marginVertical: 10,
              marginHorizontal: 20,
              borderColor: "#E0E0E0",
              borderWidth: 1,
              padding: 14,
              borderRadius: 6,
            }}
          >
            <View>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                {item.name}
              </Text>

              <View>
                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="map-marker-outline"
                    size={24}
                    color="black"
                  />
                  <Text style={{ fontSize: 15 }}>{item.address}</Text>
                </View>
              </View>
              <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 7,
                }}
              >
                <Octicons name="star-fill" size={24} color="yellow" />
                <Text
                  style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}
                >
                  {item.rating}
                </Text>
              </View>
              <Text style={{fontSize:20}}>{item.price* item. adults} LKR</Text>

              </View>
             
            </View>
          </Pressable>
        ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
