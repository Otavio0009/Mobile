import { Pressable, Text, StyleSheet } from "react-native";

export const BUTTON_PRIMARY = "primary";
export const BUTTON_SECONDARY = "secondary";
export const BUTTON_DANGER = "danger";
export const BUTTON_SUCCESS = "success";

export function Button({ type = BUTTON_PRIMARY, text, onClick }) {
  const buttonStyles = {
    [BUTTON_PRIMARY]: styles.buttonPrimary,
    [BUTTON_SECONDARY]: styles.buttonSecondary,
    [BUTTON_DANGER]: styles.buttonDanger,
    [BUTTON_SUCCESS]: styles.buttonSuccess,
  };

  return (
    <Pressable style={[styles.button, buttonStyles[type]]} onPress={onClick}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },

  buttonPrimary: {
    backgroundColor: "#0099ff",
  },

  buttonSecondary: {
    backgroundColor: "#3a3e3e",
  },

  buttonDanger: {
    backgroundColor: "#b20e0e",
  },

  buttonSuccess: {
    backgroundColor: "#0c8739",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});