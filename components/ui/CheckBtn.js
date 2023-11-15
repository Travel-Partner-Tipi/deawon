import { Pressable, View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const CheckBtn = ({ onPress }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => onPress()}>
      <View style={styles.container}>
        <MaterialIcons name="check" size={36} color="black" />
      </View>
    </Pressable>
  );
};

export default CheckBtn;

const styles = StyleSheet.create({
  container: {},
});
