import { Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/colors";

//배경과 텍스트가 있는 네모 버튼입니다.

const SquareButton = ({ children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.buttonBox, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default SquareButton;

const styles = StyleSheet.create({
  buttonBox: {
    borderRadius: 10,
    backgroundColor: Colors.main,
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
