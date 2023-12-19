import { Text, View, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

//텍스트만 있는 버튼입니다.

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
    color: Colors.black,
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: "400",
  },
});
