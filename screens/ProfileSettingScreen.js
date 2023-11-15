import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import InputBox from "../components/ui/InputBox";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

const ProfileSettingScreen = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveImage = async () => {
    if (image) {
      const fileName = image.split("/").pop();
      const newPath = FileSystem.documentDirectory + fileName;

      try {
        await FileSystem.moveAsync({
          from: image,
          to: newPath,
        });
        console.log("Image moved to", newPath);
      } catch (e) {
        console.log("Failed to move image with error", e);
      }
    }
  };

  return (
    <SafeAreaView>
      <View>
        <View style={styles.headerContainer}>
          <Text>X</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>프로필 설정</Text>
          <Text>></Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.userImageBox}>
            <Image
              style={styles.userImage}
              source={image || require("../assets/icon.png")}
            />
          </View>
        </View>
        <Button title="이미지 업로드" onPress={pickImage} />
        <Button
          style={{ backgroundColor: "black", margin: "20px" }}
          title="저장"
          onPress={saveImage}
        />
        <View style={{ padding: 18 }}>
          <Text style={{ fontWeight: "bold" }}>닉네임</Text>
          <InputBox />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileSettingScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    margin: 15,
    marginBottom: 10,
  },

  userImage: {
    width: "100%",
    height: "100%",
  },

  userImageBox: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    overflow: "hidden",
  },
});
