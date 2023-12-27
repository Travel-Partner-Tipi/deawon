import { Pressable, StyleSheet, Text } from "react-native";

import Colors from "../../constants/colors";

//텍스트가 버튼으로 동작하는 컴포넌트 입니다.

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
    color: Colors.main,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    margin: 20,
  },
  pressed: {
    opacity: 0.5,
  },
});
