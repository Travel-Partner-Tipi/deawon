import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
//import Colors from "../../../constants/colors";
//import UserPost from "../../../components/ui/UserPost";

import PhotoBtn from "../../components/ui/Btn/PhotoBtn";
import { useNavigation } from "@react-navigation/native";

const NotificationScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTopText}>게시물 작성</Text>
          <Text style={styles.headerBottomText}>
            업로드하고 싶은여행을 선택하세요.
          </Text>
        </View>

        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.SelectGrid}>
            <PhotoBtn
              btnName={"대환장카파파티"}
              btnImgUrl={require("../../assets/icon.png")}
              onPress={() =>
                navigation.navigate("NotificationDetail", {
                  btnName: "대환장카파파티",
                })
              }
            />
            <PhotoBtn
              btnName={"대원이의파티"}
              btnImgUrl={require("../../assets/icon.png")}
              onPress={() =>
                navigation.navigate("NotificationDetail", {
                  btnName: "대원이의파티",
                })
              }
            />
            <PhotoBtn
              btnName={"램보르귀니투어"}
              btnImgUrl={require("../../assets/icon.png")}
              onPress={() =>
                navigation.navigate("NotificationDetail", {
                  btnName: "램보르귀니투어",
                })
              }
            />
            <PhotoBtn
              btnName={"먹죽파티"}
              btnImgUrl={require("../../assets/icon.png")}
              onPress={() =>
                navigation.navigate("NotificationDetail", {
                  btnName: "먹죽파티",
                })
              }
            />
            <PhotoBtn
              btnName={"건대 갬성"}
              btnImgUrl={require("../../assets/icon.png")}
              onPress={() =>
                navigation.navigate("NotificationDetail", {
                  btnName: "건대 갬성",
                })
              }
            />
            <PhotoBtn
              btnName={"앱솔루트팝업"}
              btnImgUrl={require("../../assets/icon.png")}
              onPress={() =>
                navigation.navigate("NotificationDetail", {
                  btnName: "앱솔루트팝업",
                })
              }
            />
            <PhotoBtn
              btnName={"먹거리투어"}
              btnImgUrl={require("../../assets/icon.png")}
              onPress={() =>
                navigation.navigate("NotificationDetail", {
                  btnName: "먹거리투어",
                })
              }
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;

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
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTopText: {
    fontWeight: "bold",
    fontSize: 24,
    padding: 16,
  },
  headerBottomText: {
    fontWeight: "500",
    fontSize: 16,
  },
  SelectGrid: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 7,
  },
});
