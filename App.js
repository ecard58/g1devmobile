import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Main />
    </View>
  );
}
