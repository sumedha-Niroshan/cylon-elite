import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
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

export default function HomeScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const [room, setRooms] = useState(1);
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
                  placeholderTextColor="#06DAFF"
                  placeholder={` ${room} room • ${adults} adults • ${children} Children`}
                />
              </Pressable>
              {/* Search Button */}
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Pressable style={styles.searchButton}>
                  <Text style={{fontSize:26 , fontWeight:"700"}}>Search</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
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
                <Text style={{ fontSize: 25 }}>{room}</Text>
                <Pressable onPress={() => setRooms(Math.max(1, room - 1))}>
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
    height:53,
    borderRadius:30
  },
});
