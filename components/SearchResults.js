import { FlatList, Pressable, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function SearchResults({ data, input, setInput }) {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.place.toLowerCase().includes(input.toLowerCase())) {
            if (input === "") {
              return null;
            }
            return (
              <Pressable
                onPress={() => {
                  setInput(input.place);
                  navigation.navigate("Home", {
                    input: item.place,
                  });
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <View>
                  <Image
                    style={{ width: 70, height: 70 }}
                    source={{ uri: item.placeImage }}
                  />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: "500" }}>
                    {item.place}
                  </Text>
                  <Text style={{ marginVertical: 4 }}>
                    {item.shortDescription}
                  </Text>
                  <Text style={{ color: "gray", fontSize: 15 }}>
                    {item.properties.length} Hotels
                  </Text>
                </View>
              </Pressable>
            );
          }
        }}
      />
    </View>
  );
}
