import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useRoute } from "@react-navigation/native";

import BackBtn from "../../components/ui/Btn/BackBtn";
import PhotoBtn from "../../components/ui/Btn/PhotoBtn";
import CheckBtn from "../../components/ui/Btn/CheckBtn";

import { useNavigation } from "@react-navigation/native";

import InputBox from "../../components/ui/InputBox";

const NotificationDetail_writePosting = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.backBtnStyle}>
          <BackBtn />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTopText}>게시물 글쓰기</Text>
        </View>
        <View style={styles.backBtnStyle}>
          <CheckBtn onPress={() => navigation.navigate("Home")} />
        </View>
      </View>

      <View>
        <Text>나의 한줄평</Text>
        <InputBox
          text={"한줄평을 적어주세요"}
          iconName={"application-edit-outline"}
        />
        <View style={styles.SelectGrid}>
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            //앞선 Screen에서 선택한거 보여줘야함
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            //앞선 Screen에서 선택한거 보여줘야함
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            //앞선 Screen에서 선택한거 보여줘야함
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            //앞선 Screen에서 선택한거 보여줘야함
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            //앞선 Screen에서 선택한거 보여줘야함
          />
        </View>
      </View>
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
  SelectGrid: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 7,
  },
});

export default NotificationDetail_writePosting;
