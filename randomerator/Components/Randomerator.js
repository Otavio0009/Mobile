import Slider from "@react-native-community/slider";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { Button, BUTTON_DANGER, BUTTON_SECONDARY, BUTTON_SUCCESS } from "./Button";

export function Randomerator() {
  const [value, setValue] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  function incrementar() {
    setValue((atual) => atual + 1);
  }

  function decrementar() {
    setValue((atual) => atual - 1);
  }

  function zerar() {
    setValue(0);
  }

  function randomizar() {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    setValue(numeroAleatorio);
  }

  function alterarMin(novoMin) {
    setMin(novoMin);
    if (novoMin > max) setMax(novoMin);
  }

  function alterarMax(novoMax) {
    setMax(novoMax);
    if (novoMax < min) setMin(novoMax);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Randomerator</Text>

      <View style={styles.content}>
        <Text style={styles.result}>{value}</Text>

        <Text style={styles.label}>Mínimo: {min}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={min}
          onValueChange={alterarMin}
          thumbTintColor="#3f75fc"
          maximumTrackTintColor="#33aaff"
          minimumTrackTintColor="#c7dceb"
        />

        <Text style={styles.label}>Máximo: {max}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={max}
          onValueChange={alterarMax}
          thumbTintColor="#3f75fc"
          maximumTrackTintColor="#33aaff"
          minimumTrackTintColor="#c7dceb"
        />

        <Button text="Incrementar" onClick={incrementar} />

        <Button type={BUTTON_SECONDARY} text="Decrementar" onClick={decrementar} />

        <Button type={BUTTON_DANGER} text="Zerar" onClick={zerar} />

        <Button type={BUTTON_SUCCESS} text="Randomizar" onClick={randomizar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5d5d5",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 32,
    gap: 32,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#565656",
  },

  content: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 16,
    borderRadius: 8,
  },

  result: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    color: "#6c6c6c",
  },

  label: {
    fontSize: 14,
    color: "#6c6c6c",
    marginTop: 12,
  },

  slider: {
    height: 30,
  },
});