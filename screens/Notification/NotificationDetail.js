import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import BackBtn from "../../components/ui/Btn/BackBtn";
import PhotoBtn from "../../components/ui/Btn/PhotoBtn";

import { useRoute } from "@react-navigation/native";

import { useNavigation } from "@react-navigation/native";

import NotificationDetail_selectPhoto from "./NotificationDetail_selectPhoto";

const NotificationDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { btnName } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.backBtnStyle}>
          <BackBtn />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTopText}>{btnName}</Text>
        </View>
        <View style={styles.backBtnStyle}></View>
      </View>

      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.SelectGrid}>
          <PhotoBtn
            btnName={"@jamong__w.s."}
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() =>
              navigation.navigate("NotificationDetail_selectPhoto", {
                btnName: "@jamong__w.s.",
              })
            }
          />
          <PhotoBtn
            btnName={"@min.nicha"}
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() =>
              navigation.navigate("NotificationDetail_selectPhoto", {
                btnName: "@min.nicha",
              })
            }
          />
          <PhotoBtn
            btnName={"@noodle.zip"}
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() =>
              navigation.navigate("NotificationDetail_selectPhoto", {
                btnName: "@noodle.zip",
              })
            }
          />
          <PhotoBtn
            btnName={"단체 사진"}
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() =>
              navigation.navigate("NotificationDetail_selectPhoto", {
                btnName: "단체 사진",
              })
            }
          />
          <PhotoBtn
            btnName={"풍경"}
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() =>
              navigation.navigate("NotificationDetail_selectPhoto", {
                btnName: "풍경",
              })
            }
          />
          <PhotoBtn
            btnName={"스크린 샷"}
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() =>
              navigation.navigate("NotificationDetail_selectPhoto", {
                btnName: "스크린 샷",
              })
            }
          />
          <PhotoBtn
            btnName={"동물"}
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() =>
              navigation.navigate("NotificationDetail_selectPhoto", {
                btnName: "동물",
              })
            }
          />
          <PhotoBtn
            btnName={"음식"}
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() =>
              navigation.navigate("NotificationDetail_selectPhoto", {
                btnName: "음식",
              })
            }
          />
          <PhotoBtn
            btnName={"전체보기"}
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() =>
              navigation.navigate("NotificationDetail_selectPhoto", {
                btnName: "전체보기",
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  scrollViewContainer: {
    //
    height: "100%",
  },
  headerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backBtnStyle: {
    width: 48,
    height: 48,
  },

  headerTopText: {
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 24,
    padding: 16,
  },
  SelectGrid: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 7,
  },
  scrollViewContainer: {
    //
    height: "100%",
  },
  SelectGrid: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 7,
  },
});

export default NotificationDetail;
