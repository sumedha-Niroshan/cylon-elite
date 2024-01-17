import { SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState ,useLayoutEffect } from "react";
import { Octicons } from "@expo/vector-icons";
import SearchResults from "../components/SearchResults";
import { useNavigation } from "@react-navigation/native";

export default function SearchScreen() {
  const navigation = useNavigation();
  const data = [
    {
      id: "0",
      place: "Kandy",
      placeImage:
        "https://media.istockphoto.com/id/1285881901/photo/temple-of-the-sacred-tooth-relic-at-kandy-sri-lanka.jpg?s=612x612&w=0&k=20&c=gqnoXgatwo1Ar_oCYnGnmE3Ts7sn9DvYKPK0n6Mhca8=",
      shortDescription:
        "Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest.",
      properties: [
        {
          id: "10",
          name: "Sevana City Hotel",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/square600/162908224.webp?k=b36f8730b47923ff35e36069bed053cb78934fc7510cee929fff52ff71d8e9a6&o=",
          rating: 3.6,
          address: "84, Peradeniya Road, Kandy, 20000 Kandy, Sri Lanka",
          price: 4600,
          review: 1980,
          latitude: "7.303164882910908",
          longitude: "80.63658522999788",
          photos: [
            {
              id: "101",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/162908224.jpg?k=739791105429e02fbbbf708dc273cb4802d9e38ae52ad5de19d2f91e7986b982&o=&hp=1",
            },
            {
              id: "102",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/162909742.jpg?k=606ce82a8a5ac662b3259e7f3ae6b70c22f7d9c2f6367553e78254af6b553e08&o=&hp=1",
            },
            {
              id: "103",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/157945954.jpg?k=cc0623b0272ce0d3d8810deb935936c5fa5bc935276f47b852de4b6eebbdfd75&o=&hp=1",
            },
            {
              id: "104",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/87688503.jpg?k=f94143a9a2f519b4941948799549a3cae496e5397858a67bb40572e687963849&o=&hp=1",
            },
          ],
        },
        {
          id: "11",
          name: "Eco Lodge in 611 Buwalikada",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/518764872.jpg?k=74e896f126c1ceb78b0df229eba5b23426b9c9ca4b343177be2fd993f44ebdf4&o=&hp=1",
          rating: 4.2,
          address: "Bodhiraja Mawatha Buwalikada,Kandy,",
          price: 8600,
          review: 750,
          latitude: "7.303164882910908",
          longitude: "80.63658522999788",
          photos: [
            {
              id: "105",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/162908224.jpg?k=739791105429e02fbbbf708dc273cb4802d9e38ae52ad5de19d2f91e7986b982&o=&hp=1",
            },
            {
              id: "106",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/162909742.jpg?k=606ce82a8a5ac662b3259e7f3ae6b70c22f7d9c2f6367553e78254af6b553e08&o=&hp=1",
            },
            {
              id: "107",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/157945954.jpg?k=cc0623b0272ce0d3d8810deb935936c5fa5bc935276f47b852de4b6eebbdfd75&o=&hp=1",
            },
            {
              id: "108",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/87688503.jpg?k=f94143a9a2f519b4941948799549a3cae496e5397858a67bb40572e687963849&o=&hp=1",
            },
          ],
        },
        {
          id: "12",
          name: "Mystique Hideout",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/505547834.jpg?k=adc593759c20dc2e2daddb9d8bc323c04d0850f972fc1f504c36839bfdf7b2ba&o=&hp=1",
          rating: 5.6,
          address: "Sri Dhammasiddi Mawatha, 20000 Kandy",
          price: 4600,
          review: 1300,
          latitude: "7.303164882910908",
          longitude: "80.63658522999788",
          photos: [
            {
              id: "109",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/162908224.jpg?k=739791105429e02fbbbf708dc273cb4802d9e38ae52ad5de19d2f91e7986b982&o=&hp=1",
            },
            {
              id: "110",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/162909742.jpg?k=606ce82a8a5ac662b3259e7f3ae6b70c22f7d9c2f6367553e78254af6b553e08&o=&hp=1",
            },
            {
              id: "111",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/157945954.jpg?k=cc0623b0272ce0d3d8810deb935936c5fa5bc935276f47b852de4b6eebbdfd75&o=&hp=1",
            },
            {
              id: "112",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/87688503.jpg?k=f94143a9a2f519b4941948799549a3cae496e5397858a67bb40572e687963849&o=&hp=1",
            },
          ],
        },
      ],
    },
    {
      id: "1",
      place: "Hikkaduwa",
      placeImage:
        "https://media.istockphoto.com/id/479625810/photo/hikkaduwa-coral-beach-sri-lanka.jpg?s=612x612&w=0&k=20&c=utXFsTv7u_HJw_9vmjI5ombwltf7p2dCK0mw72-G3f0=",
      shortDescription:
        "Hikkaduwa is one of the best surfing spots in Sri Lanka, offering a clear hot water base. The waves vary in size from 4 to 11 feet.",
      properties: [
        {
          id: "13",
          name: "Sapphire Seas Beachfront Hotel",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/237410810.jpg?k=939d78f0daeffcf5118b0f177361b4c33d1eae234b273a067e26e4d77ecfd6af&o=&hp=1",
          rating: 5.6,
          address: "Galle Road, Patuwatha, Dodanduwa,Hikkaduwa",
          review: 1300,
          price: 13312,
          latitude: "6.12462846527891",
          longitude: "80.11111429181229",
          photos: [
            {
              id: "113",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/238922859.jpg?k=5b4fc4ad021eb30b1f7085602b1b62fa539be4e08b77678679d97ce5c3e8ffe6&o=&hp=1",
            },
            {
              id: "114",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/240510032.jpg?k=6abcbf5749320b7464cf6e8a5497f910fe91926ea5b95f2d59908fd5238b5ca1&o=&hp=1",
            },
            {
              id: "115",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/237416156.jpg?k=eaa9c34a0cb210b079081e8fe60fe22b222d966ea0f32a717ece1c227f07f316&o=&hp=1",
            },
            {
              id: "116",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/57129407.jpg?k=3fcace2c2b6e90fc0e9843826519fe07939e87fb3c9f5a24f2a89607dc438730&o=&hp=1",
            },
          ],
        },
        {
          id: "14",
          name: "Villa Sureka",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845616.jpg?k=87bc315f35830189d9a1c935c3e167e648543c27f39ee4cafc5cf73ee24393b9&o=&hp=1",
          rating: 4.6,
          address: "No 176 Wawala, 80240 Hikkaduwa",
          price: 7600,
          review: 1100,
          latitude: "6.12462846527891",
          longitude: "80.11111429181229",
          photos: [
            {
              id: "117",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/159706087.jpg?k=d00f1da4740036de776b7188aee54cfd892b5a371b57b9055aa0e2a3f26d48fa&o=&hp=1",
            },
            {
              id: "118",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/159706083.jpg?k=b42b60e67ab98166f6850e88a299e8af0e5be23c57143308ce159d43a6fb9bdc&o=&hp=1",
            },
            {
              id: "119",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/159706108.jpg?k=613401a3535ea6ad1f8fc7501c01abade28dc8c1693b047c2cc0272a425850af&o=&hp=1",
            },
            {
              id: "120",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/159706095.jpg?k=6d168141f422d03da931b167ef49cc3f8449c7946b6ca9eea54d1be85a424ee1&o=&hp=1",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      place: "Nuwaraeliya",
      placeImage:
        "https://cf.bstatic.com/xdata/images/hotel/270x200/117997196.jpg?k=9c6ae857b5e6d9fbd293d72cf91e3e9a18c40f1bbdd0f84d7dbb7db8090a32b9&o=",
      shortDescription:
        "Nuwara Eliya is a city in the tea country hills of central Sri Lanka. The naturally landscaped Hakgala Botanical Gardens displays roses and tree ferns, and shelters monkeys and blue magpies. ",
      properties: [
        {
          id: "15",
          name: "Nuwara eliya mountain view homestay",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845616.jpg?k=87bc315f35830189d9a1c935c3e167e648543c27f39ee4cafc5cf73ee24393b9&o=&hp=1",
          rating: 7.6,
          address: "Nuwara eliya, 22200 Nuwara Eliya, Sri Lanka",
          price: 9600,
          review: 1890,
          latitude: "6.12462846527891",
          longitude: "80.11111429181229",
          photos: [
            {
              id: "121",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/332310906.jpg?k=c0c88172d9d3008aa997d1b48bfeaed3d326d6812f5c502a60ccb834e61ee04a&o=&hp=1",
            },
            {
              id: "122",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/363197991.jpg?k=cefdd8a640ae0011f67a68f92f7cdcc8cf5983827e074dea5adbf585d28f4ed8&o=&hp=1",
            },
            {
              id: "123",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/174946840.jpg?k=5fd32fdb0968b61ee4aa7810dae3099779ec2ef8acf1c11ad15acada5f89e390&o=&hp=1",
            },
            {
              id: "124",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/386459973.jpg?k=61586bb80eecd8e8562427c0244794418ebdc5346bdbded56d0e9a4dc4ab53ae&o=&hp=1",
            },
          ],
        },
      ],
    },
  ];

  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Search",
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
    <SafeAreaView style={{ padding: 20 }}>
      <View style={styles.searchContainer}>
        <Octicons name="search" size={24} color="black" />
        <TextInput
          style={{ fontSize: 20 }}
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="Find your place"
          placeholderTextColor="black"
        />
      </View>
      <SearchResults data={data} input={input} setInput={setInput} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingHorizontal: 15,
    borderColor: "#4E4C4C",
    borderWidth: 2,
    paddingVertical: 15,
    borderRadius: 30,
  },
});
