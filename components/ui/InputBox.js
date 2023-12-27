import { View, TextInput, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../constants/colors";

//아이콘이 포함되어있고, 사용자의 입력을 받는 컴포넌트 입니다.

const InputBox = ({ text, iconName }) => {
  return (
    <View style={styles.inputBox}>
      <Icon
        style={styles.icon}
        name={iconName}
        size={24}
        color={Colors.black}
      />
      <TextInput placeholder={text} />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
    marginTop: 0,
    padding: 4,
  },
  icon: {
    marginRight: 12,
  },
});
