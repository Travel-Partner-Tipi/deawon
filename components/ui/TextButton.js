import { Pressable, StyleSheet, Text } from "react-native";

const TextButton = ({ children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default TextButton;

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
