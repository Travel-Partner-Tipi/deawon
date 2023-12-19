import { View, Text, Image, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

const UserPost = ({ userId, userText, postImgUrl, profileImgUrl }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../assets/icon.png")} />
      </View>
      <View style={styles.userContainer}>
        <View style={styles.userImageContainer}>
          <Image
            style={styles.userImage}
            source={require("../../assets/icon.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.userId}>@{userId}</Text>
          <Text style={styles.userText}>{userText}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;

const styles = StyleSheet.create({
  postContainer: {
    marginHorizontal: 25,
    marginBottom: 20,
    color: Colors.black,
  },
  imageContainer: {
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 8,
  },

  image: {
    width: "100%",
    height: 270,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImageContainer: {
    borderRadius: 50,
    overflow: "hidden",
  },
  userImage: {
    width: 60,
    height: 60,
  },
  textContainer: {
    margin: 3,
  },
  userId: {
    marginBottom: 6,
    fontSize: 16,
  },
  userText: {
    fontSize: 13,
  },
});
