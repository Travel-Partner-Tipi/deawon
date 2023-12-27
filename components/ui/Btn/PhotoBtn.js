import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";

import Colors from "../../../constants/colors";

//이미지를 배경으로 하는 버튼입니다.

const PhotoBtn = ({ btnName, btnImgUrl, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed] && styles.container}
      onPress={() => onPress()}
    >
      <ImageBackground source={btnImgUrl} style={styles.imageBackground}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>{btnName}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default PhotoBtn;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    margin: 8,
    width: 110,
    height: 110,
    flexDirection: "column",
  },
  buttonContent: {
    flex: 0.2,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.black,
    fontSize: 16,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.9,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
