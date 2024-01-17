import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

export default function PropertyInfoScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Info",
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
    <>
      <SafeAreaView>
        <ScrollView style={{ padding: 10 }}>
          <Pressable>
            <ScrollView horizontal={true} style={{ flexDirection: "row" }}>
              {route?.params.photos.slice(0, 5).map((photo, index) => (
                <View style={{ padding: 10 }}>
                  <Image
                    key={index}
                    source={{ uri: photo.image }}
                    style={{
                      width: 240,
                      height: 240,
                      borderRadius: 4,
                      padding: 10,
                    }}
                  />
                </View>
              ))}
            </ScrollView>
          </Pressable>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              {route.params.name}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 15, gap: 5 }}>
              <Octicons name="star-fill" size={24} color="yellow" />
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {route.params.rating}
              </Text>
            </View>
          </View>
          <View>
            <View style={{ backgroundColor: "#D9D9D9", padding: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ fontSize: 20 }}>Check in</Text>
                  <Text
                    style={{
                      fontSize: 23,
                      fontWeight: "bold",
                      color: "#06DAFF",
                    }}
                  >
                    {route.params.selectedDates.startDate}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 20 }}>Check out</Text>
                  <Text
                    style={{
                      fontSize: 23,
                      fontWeight: "bold",
                      color: "#06DAFF",
                    }}
                  >
                    {route.params.selectedDates.endDate}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 20 }}>Rooms and Geust</Text>
                <Text
                  style={{ fontSize: 23, fontWeight: "bold", color: "#06DAFF" }}
                >
                  {`${route.params.rooms} Rooms    ${route.params.adults} Adults   ${route.params.children} Children `}
                </Text>
              </View>
            </View>
            <View
              style={{ backgroundColor: "#D9D9D9", padding: 5, marginTop: 15 }}
            >
              <Text style={{ fontSize: 23 }}>Most popular facilitate </Text>
              <Amenities />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#D9D9D9",
              marginTop: 15,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#555555",
                fontSize: 25,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              {route.params.price} LKR
            </Text>
            <Pressable
              onPress={() =>
                navigation.navigate("User", {
                  rooms: route.params.rooms,
                  price: route.params.price,
                  name: route.params.name,
                  children: route.params.children,
                  adults: route.params.adults,
                  rating: route.params.rating,
                  startDate: route.params.selectedDates.startDate,
                  endDate: route.params.selectedDates.endDate,
                })
              }
              style={{
                backgroundColor: "#06DAFF",
                borderRadius: 30,
                width: 196,
                height: 53,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 26 }}>Reserve</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
