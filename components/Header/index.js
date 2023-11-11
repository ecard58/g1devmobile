import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Programa Saúde - 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e2e2",
    justifyContent: "center",
    paddingTop: 20,
  },
  texto: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
});
