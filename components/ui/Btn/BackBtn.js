import { Pressable, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../../constants/colors";

//뒤로가기 버튼 입니다.
const BackBtn = ({ onPress }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.pop()}>
      <View style={styles.container}>
        <MaterialIcons name="navigate-before" size={48} color={Colors.black} />
      </View>
    </Pressable>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  container: {},
});
