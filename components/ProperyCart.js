import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const PropertyCard = ({ rooms, children, property, adults, selectedDates }) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Info", {
            name: property.name,
            rating: property.rating,
            price: property.price,
            photos: property.photos,
            adults: adults,
            children: children,
            rooms: rooms,
            selectedDates: selectedDates,
            address:property.address
          })
        }
        style={{
          margin: 15,
          flexDirection: "row",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <View>
          <Image
            style={{ height: height / 5, width: width - 280 }}
            source={{ uri: property.image }}
          />
        </View>

        <View style={{ padding: 10, width: 250, gap: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            {property.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
             
            }}
          >
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={24}
              color="black"
            />
            <Text style={{ fontSize:12 }}>{property.address}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 35 }}>
            <View
              style={{
                flexDirection: "row",
                
              }}
            >
              <Octicons name="star-fill" size={24} color="yellow" />
              <Text>{property.rating}</Text>
            </View>
            <Text>{property.review} Review</Text>
           
          </View>
          <Text
              style={{ color: "#06DAFF", fontSize: 20, fontWeight: "bold" }}
            >
              LKR {property.price}
            </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
