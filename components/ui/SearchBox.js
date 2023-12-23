import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constants/colors";

//아이콘이 포함되어있고, 사용자의 입력을 받는 컴포넌트 입니다.

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="닉네임 검색"
        autoFocus //포커스 자동 잡기
      />
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.5 }]}
      >
        <MaterialIcons name={"cancel"} size={20} color={"#9e9e9e"} />
      </Pressable>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.light_gray,
    padding: 8,
  },
  icon: {
    marginRight: 12,
  },
  textInput: {},
  button: {
    marginLeft: 8,
  },
});
