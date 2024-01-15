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
import { useRoute } from "@react-navigation/native";

export default function HomeScreen() {
  const route = useRoute();
  return (
    <>
      <SafeAreaView>
        <Headers />
        <View>
          <ScrollView>
            <View>
              {/* Destination */}
              <Pressable
              >
                <Octicons name="search" size={24} color="black" />
                <TextInput
                  placeholderTextColor="black"
                  placeholder={
                    route?.params
                      ? route.params.input
                      : "Enter Your Destination"
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

const styles = StyleSheet.create({});
