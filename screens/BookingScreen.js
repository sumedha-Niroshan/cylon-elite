import { StyleSheet, Text, View } from 'react-native'
import React ,{useRoute} from 'react'

export default function BookingScreen() {
  const route = useRoute();
  console.log(route)
  return (
    <View>
      <Text>BookingScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})