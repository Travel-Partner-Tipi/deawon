import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const InputBox = ({ text, iconName }) => {
  return (
    <View style={styles.inputBox}>
      <Icon style={styles.icon} name={iconName} size={24} color="black" />
      <TextInput placeholder={text} />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    margin: 16,
    marginHorizontal: 20,
    marginTop: 0,
    padding: 4,
  },
  icon: {
    marginRight: 12,
  },
});
