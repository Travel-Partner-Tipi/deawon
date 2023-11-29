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
import ColorBtn from "../../components/ui/Btn/ColorBtn";
import CheckBtn from "../../components/ui/Btn/CheckBtn";

import { useNavigation } from "@react-navigation/native";

import InputBox from "../../components/ui/InputBox";

const GalleryNewTrip = () => {
  const navigation = useNavigation();
  const route = useRoute();

  function pressHandler() {}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.backBtnStyle}>
          <BackBtn />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTopText}>새 여행 설정</Text>
        </View>
        <View style={styles.backBtnStyle}>
          <CheckBtn onPress={() => navigation.navigate("Home")} />
        </View>
      </View>

      <View>
        <Text>여행 이름</Text>
        <InputBox
          text={"한줄평을 적어주세요"}
          iconName={"tooltip-edit-outline"}
        />
        <Text>같이가는 친구</Text>
        <InputBox
          text={"한줄평을 적어주세요"}
          iconName={"account-multiple-plus"}
        />
        <Text>여행 지역</Text>
        <InputBox
          text={"한줄평을 적어주세요"}
          iconName={"map-marker-outline"}
        />
        <Text>여행시작 일</Text>
        <InputBox
          text={"한줄평을 적어주세요"}
          iconName={"calendar-month-outline"}
        />
        <Text>여행종료 일</Text>
        <InputBox
          text={"한줄평을 적어주세요"}
          iconName={"calendar-month-outline"}
        />
        <Text>대표사진 설정</Text>
        <ColorBtn
          children="사진 등록"
          onPress={pressHandler}
          nonPressColor="#F27057"
          pressColor="#00ff00"
          textColor="#ffffff"
        />
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

export default GalleryNewTrip;
