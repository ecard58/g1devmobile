import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function Main() {
  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [textoBotao, setTextoBotao] = useState("Calcular");

  const calcular = () => {
    if (peso && altura) {
      const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
      setResultado("Seu IMC é " + imc.toFixed(2));
      setAltura(null);
      setPeso(null);
      setTextoBotao("Novo Cálculo");
    } else {
      setResultado("Preencha peso e altura corretamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Altura:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Digite sua altura"
        keyboardType="numeric"
      ></TextInput>
      <Text style={styles.texto}>Peso:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Digite seu peso"
        keyboardType="numeric"
      ></TextInput>
      <Text style={[styles.texto, { textAlign: "center" }]}>
        Preencha peso e altura
      </Text>
      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text style={styles.textoBotao}> {textoBotao}</Text>
      </TouchableOpacity>
      <Text style={styles.texto}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    borderRadius: 20,
    padding: 30,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
  },
  botao: {
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    margin: 20,
    borderRadius: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 15,
    borderRadius: 20,
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
