import { Text, View, StyleSheet } from "react-native";

const TextBox = ({ children, text }) => {
  return (
    <View style={styles.textBox}>
      <Text style={styles.text}>{text}</Text>
      {children}
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  textBox: {
    justifyContent: "center",
  },
  text: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: "400",
  },
});
