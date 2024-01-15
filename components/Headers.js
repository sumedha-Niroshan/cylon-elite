import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Headers() {
  return (
    <View style={styles.headers}>
      <Text style={styles.content}>Ceylon Elite </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headers: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 90,
    backgroundColor: "#06DAFF",
  },
  content: {
    fontSize: 35,
    color: "#ffff",
    fontWeight: "800",
  },
});
