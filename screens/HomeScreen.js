import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import Headers from "../components/Headers";
import { Octicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView>
        <Headers />
        <View style={styles.mainContainer}>
          <ScrollView>
            <View>
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
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
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
});
