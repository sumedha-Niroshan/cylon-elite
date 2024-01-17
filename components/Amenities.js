import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Amenities = () => {
  const services = [
    {
      id: "0",
      name: "room service",
    },
    {
      id: "2",
      name: "free wifi",
    },
    {
      id: "3",
      name: "Family rooms",
    },
    {
      id: "4",
      name: "Free Parking",
    },
    {
      id: "5",
      name: "swimming pool",
    },
    {
      id: "6",
      name: "Restaurant",
    },
    
  ];
  return (
    <View style={{ padding: 10 }}>
      <View
        style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}
      >
        {services.map((item, index) => (
          <View
            style={{
              margin: 10,
              backgroundColor: "#FFFF",
              paddingHorizontal: 11,
              paddingVertical: 5,
              borderRadius: 25,
              borderColor:"#06DAFF"
            }}
            key={index}
          >
            <Text style={{ textAlign: "center", fontWeight: "bold" , fontSize:15}}>
              {item.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Amenities;

const styles = StyleSheet.create({});
