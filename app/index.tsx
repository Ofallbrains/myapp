import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";


export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: '#25292e', alignItems: 'center', justifyContent: 'center', }}>
      <Text style={{ color: '#fff' }}>HomeScreen</Text>
      <Link href='/about' style={{ fontSize: 20, textDecorationLine: 'underline', color: '#fff' }}>Go to About Screen</Link>
    </View>
  )
}


