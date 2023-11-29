//우측상단 체크모양 버튼 동작의 완료될 시 누름

import { Pressable, View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const PlusBtn = ({ onPress }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => onPress()}>
      <View style={styles.container}>
        <MaterialIcons name="add" size={36} color="black" />
      </View>
    </Pressable>
  );
};

export default PlusBtn;

const styles = StyleSheet.create({
  container: {},
});
