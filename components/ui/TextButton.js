import { Pressable, StyleSheet, Text } from "react-native";

export default function TextButton({ children }) {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#5cc2d0",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    margin: 20,
  },
  pressed: {
    opacity: 0.5,
  },
});
