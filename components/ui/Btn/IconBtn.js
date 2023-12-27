import { Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Colors from "../../../constants/colors";

//아이콘으로만 이루어진 버튼입니다.

const IconBtn = ({ iconName, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <MaterialIcons
        style={styles.icon}
        name={iconName}
        size={24}
        color={Colors.black}
      />
    </Pressable>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  container: {},
  icon: {},
});
