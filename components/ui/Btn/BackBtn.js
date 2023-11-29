import { Pressable, View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const BackBtn = ({ onPress }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.pop()}>
      <View style={styles.container}>
        <MaterialIcons name="navigate-before" size={48} color="black" />
      </View>
    </Pressable>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  container: {},
});
