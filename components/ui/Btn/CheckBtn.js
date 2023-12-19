import { Pressable, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../../constants/colors";

//우측상단 체크모양 버튼 동작의 완료될 시 누릅니다.
const CheckBtn = ({ onPress }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => onPress()}>
      <View style={styles.container}>
        <MaterialIcons name="check" size={36} color={Colors.black} />
      </View>
    </Pressable>
  );
};

export default CheckBtn;

const styles = StyleSheet.create({
  container: {},
});
