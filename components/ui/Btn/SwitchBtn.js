import { Pressable, View, StyleSheet, Switch, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import Colors from "../../../constants/colors";

const SwitchBtn = ({ onPress, text }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.textSt}>{text}</Text>
      <Switch
        trackColor={{ false: Colors.gray, true: Colors.main }}
        thumbColor={isEnabled ? Colors.white : Colors.white}
        ios_backgroundColor={Colors.gray}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItem: "center",
    marginVertical: 8,
  },
  textSt: {
    fontSize: 16,
  },
});
