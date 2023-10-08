import { View, TextInput, StyleSheet } from "react-native";

export default function InputBox() {
  return (
    <View style={styles.inputBox}>
      <TextInput placeholder="your@email.com" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    margin: 16,
    marginHorizontal: 20,
    marginTop: 0,
    padding: 8,
  },
});
