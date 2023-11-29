import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Colors from "../../../constants/colors";

const ColorBtn = ({
  children,
  onPress,
  nonPressColor,
  pressColor,
  textColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          //공통으로 공유하는 값
          width: 104,
          height: 40,
          padding: 12,
          borderRadius: 8,
          borderWidth: 0,
          alignItems: "center",
          //이벤트 발생시 변화하는 값
          backgroundColor: pressed ? pressColor : nonPressColor,
        },
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{children}</Text>
    </Pressable>
  );
};

export default ColorBtn;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 16,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "center",
  },
});
