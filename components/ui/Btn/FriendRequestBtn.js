import { Pressable, View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../../constants/colors";

//뒤로가기 버튼 입니다.
const FriendRequestBtn = ({ onPress }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.pop()}>
      <View style={styles.container}>
        <MaterialIcons name="person-add" size={24} color={Colors.main} />
        <Text style={styles.textSt1}>받은 친구요청</Text>
        <Text style={styles.textSt2}>요청을 승인하거나 무시합니다.</Text>
      </View>
    </Pressable>
  );
};

export default FriendRequestBtn;

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    marginHorizontal: 16,
  },
  textSt1: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  textSt2: {
    fontSize: 12,
    color: Colors.gray,
  },
});
