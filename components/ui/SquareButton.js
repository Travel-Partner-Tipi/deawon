import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SquareButton({ children }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.buttonBox, pressed && styles.pressed]}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonBox: {
    borderRadius: 10,
    backgroundColor: "#5cc2d0",
    padding: 14,
    margin: 8,
    marginHorizontal: 22,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.9,
  },
});
