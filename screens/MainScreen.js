import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "../constants/colors";
import UserPost from "../components/ui/UserPost";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerLeftText}>친구들의 여행</Text>
          <Text style={styles.headerRightText}>좋아요 한 게시물</Text>
        </View>
        <ScrollView>
          <UserPost
            postImgUrl={"../../assets/splash.png"}
            profileImgUrl={"../assets/splash.png"}
            userId={"suwonthugger"}
            userText={"저는 포카칩이 좋아요"}
          />
          <UserPost
            postImgUrl={"../assets/icon.png"}
            profileImgUrl={"../assets/icon.png"}
            userId={"suwonthugger"}
            userText={"저는 포카칩이 좋아요"}
          />
          <UserPost
            postImgUrl={"../assets/icon.png"}
            profileImgUrl={"../assets/icon.png"}
            userId={"suwonthugger"}
            userText={"저는 포카칩이 좋아요"}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    margin: 15,
    marginBottom: 6,
  },
  headerLeftText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  headerRightText: {
    fontWeight: "500",
    fontSize: 17,
    color: Colors.main,
  },
});
