import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Saudacao: React.FC = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [mensagem, setMensagem] = useState("");

  const saudar = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/controller/bomdia?nome=${nome}`
      );
      const text = await response.text();
      setMensagem(`${text} Você tem ${idade} anos`);
    } catch (error) {
      setMensagem("Erro ao conectar com o servidor.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🌸 Bom dia! 🌸</Text>
        <Text style={styles.subtitle}>Preencha seus dados abaixo:</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua idade"
          value={idade}
          onChangeText={setIdade}
          keyboardType="numeric"
        />

        <Button title="Enviar" onPress={saudar} color="#ff69b4" />

        <Text style={styles.result}>{mensagem}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe4f0", // fundo suave
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    width: "85%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff69b4",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    width: "100%",
    textAlign: "center",
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    color: "#4b0082",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Saudacao;
