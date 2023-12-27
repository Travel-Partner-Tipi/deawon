import { Text, View, StyleSheet, Image } from "react-native";

import Colors from "../../constants/colors";

//텍스트만 있는 버튼입니다.

const ProfilePhoto = ({ children, text }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icon.png")}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

export default ProfilePhoto;

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderColor: "black",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
