import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";
import Headers from "../components/Headers";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-date-ranges";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Button } from "react-native";

export default function HomeScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const customButton = (onConfirm) => {
    return (
      <Pressable
        onPress={onConfirm}
        style={{
          backgroundColor: "#06DAFF",
          width: "60",
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            color: "white",
            padding: 15,
            fontWeight: "800",
          }}
        >
          Sumbit
        </Text>
      </Pressable>
    );
  };

  const searchPlaces = (place) => {
    if (!route.params || !selectedDates) {
      Alert.alert(
        "Invalid Details",
        "Please enter all the details",
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

    if (route.params && selectedDates) {
      navigation.navigate("Place", {
        rooms: rooms,
        adults: adults,
        children: children,
        selectedDates: selectedDates,
        place: place,
      });
    }
  };
  return (
    <>
      <SafeAreaView>
        <Headers />
        <View style={styles.mainContainer}>
          <ScrollView>
            <View style={{ gap: 20 }}>
              {/* Destination */}
              <Pressable
                onPress={() => navigation.navigate("Search")}
                style={styles.destination}
              >
                <Octicons name="search" size={24} color="black" />
                <TextInput
                  style={{ fontSize: 20 }}
                  placeholderTextColor="black"
                  placeholder={
                    route?.params ? route.params.input : "Find Your Place"
                  }
                />
              </Pressable>
              {/* Date Selected */}
              <Pressable style={styles.destination}>
                <Entypo name="calendar" size={24} color="black" />
                <DatePicker
                  style={{
                    width: 350,
                    height: 30,
                    borderRadius: 0,
                    borderWidth: 0,
                    borderColor: "transparent",
                  }}
                  customStyles={{
                    placeholderText: {
                      fontSize: 15,
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: "auto",
                      color: "black",
                      fontSize: 20,
                    },
                    headerStyle: {
                      backgroundColor: "#06DAFF",
                    },
                    contentText: {
                      fontSize: 15,
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: "auto",
                    },
                  }}
                  selectedBgColor="#06DAFF"
                  customButton={(onConfirm) => customButton(onConfirm)}
                  onConfirm={(startDate, endDate) =>
                    setSelectedDates(startDate, endDate)
                  }
                  allowFontScaling={false}
                  placeholder={"Your arrival?"}
                  mode={"range"}
                />
              </Pressable>
              {/* Date Selected */}
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.destination}
              >
                <MaterialCommunityIcons
                  name="account-outline"
                  size={24}
                  color="black"
                />
                <TextInput
                  style={{ fontSize: 18 }}
                  placeholderTextColor="#06DAFF"
                  placeholder={` ${rooms} room • ${adults} adults • ${children} Children`}
                />
              </Pressable>
              {/* Search Button */}
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Pressable
                  style={styles.searchButton}
                  onPress={() => searchPlaces(route?.params.input)}
                >
                  <Text style={{ fontSize: 26, fontWeight: "700" }}>
                    Search
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      <Text style={{ marginLeft: 20, fontWeight: "bold", fontSize: 35 }}>
        For You
      </Text>

      <ScrollView horizontal={true} style={{backgroundColor:"#E7F3F5"}}>
        <View style={{ padding: 20 }}>
          <Image
            style={{ height: 220, width: 220, borderRadius: 10 }}
            source={{
              uri: "https://www.tripsavvy.com/thmb/RezWjRg36RaF309_sn20psv3brA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-520870128-1c1f8305c37949ab967d13de38ddf9eb.jpg",
            }}
          />
          <View style={{ display: "flex", marginLeft: 80 }}>
            <Text style={{ fontWeight: "bold", fontSize: 23 }}>Galle</Text>
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <Image
            style={{ height: 220, width: 220, borderRadius: 10 }}
            source={{
              uri: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/24/61/13.jpg",
            }}
          />
          <View style={{ display: "flex", marginLeft: 80 }}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>Jaffna</Text>
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <Image
            style={{ height: 220, width: 220, borderRadius: 10 }}
            source={{
              uri: "https://www.tripsavvy.com/thmb/RezWjRg36RaF309_sn20psv3brA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-520870128-1c1f8305c37949ab967d13de38ddf9eb.jpg",
            }}
          />
          <View style={{ display: "flex", marginLeft: 80 }}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>Mathara</Text>
          </View>
        </View>
      </ScrollView>

      {/* {Modal start} */}
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#06DAFF",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent
          style={{
            width: "100%",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "70%", gap: 10 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 25 }}>Rooms</Text>
              <View style={{ flexDirection: "row", gap: 20 }}>
                <Pressable onPress={() => setRooms((c) => c + 1)}>
                  <MaterialCommunityIcons
                    name="plus-circle-outline"
                    size={35}
                    color="black"
                  />
                </Pressable>
                <Text style={{ fontSize: 25 }}>{rooms}</Text>
                <Pressable onPress={() => setRooms(Math.max(1, rooms - 1))}>
                  <SimpleLineIcons name="minus" size={30} color="black" />
                </Pressable>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 25 }}>Adults</Text>
              <View style={{ flexDirection: "row", gap: 20 }}>
                <Pressable onPress={() => setAdults((c) => c + 1)}>
                  <MaterialCommunityIcons
                    name="plus-circle-outline"
                    size={35}
                    color="black"
                  />
                </Pressable>
                <Text style={{ fontSize: 25 }}>{adults}</Text>
                <Pressable onPress={() => setAdults(Math.max(1, adults - 1))}>
                  <SimpleLineIcons name="minus" size={30} color="black" />
                </Pressable>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 25 }}>Children </Text>
              <View style={{ flexDirection: "row", gap: 20 }}>
                <Pressable onPress={() => setChildren((c) => c + 1)}>
                  <MaterialCommunityIcons
                    name="plus-circle-outline"
                    size={35}
                    color="black"
                  />
                </Pressable>
                <Text style={{ fontSize: 25 }}>{children}</Text>
                <Pressable
                  onPress={() => setChildren(Math.max(0, children - 1))}
                >
                  <SimpleLineIcons name="minus" size={30} color="black" />
                </Pressable>
              </View>
            </View>
          </View>
        </ModalContent>
      </BottomModal>
      {/* {Modal end} */}
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
    paddingVertical: 30,
  },

  destination: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingHorizontal: 15,
    borderColor: "#4E4C4C",
    borderWidth: 2,
    paddingVertical: 15,
    borderRadius: 30,
  },
  searchButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#06DAFF",
    width: 196,
    height: 53,
    borderRadius: 30,
  },
});
