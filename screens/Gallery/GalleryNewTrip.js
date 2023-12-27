import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import BackBtn from "../../components/ui/Btn/BackBtn";
import ColorBtn from "../../components/ui/Btn/ColorBtn";
import CheckBtn from "../../components/ui/Btn/CheckBtn";
import InputBox from "../../components/ui/InputBox";

import Colors from "../../constants/colors";

const GalleryNewTrip = () => {
  const navigation = useNavigation();

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
        <View style={styles.inputStyle}>
          <Text>여행 이름</Text>
          <InputBox
            text={"한줄평을 적어주세요"}
            iconName={"tooltip-edit-outline"}
          />
        </View>
        <View style={styles.inputStyle}>
          <Text>같이가는 친구</Text>
          <InputBox
            text={"한줄평을 적어주세요"}
            iconName={"account-multiple-plus"}
          />
        </View>
        <View style={styles.inputStyle}>
          <Text>여행 지역</Text>
          <InputBox
            text={"한줄평을 적어주세요"}
            iconName={"map-marker-outline"}
          />
        </View>
        <View style={styles.inputStyle}>
          <Text>여행시작 일</Text>
          <InputBox
            text={"한줄평을 적어주세요"}
            iconName={"calendar-month-outline"}
          />
        </View>
        <View style={styles.inputStyle}>
          <Text>여행종료 일</Text>
          <InputBox
            text={"한줄평을 적어주세요"}
            iconName={"calendar-month-outline"}
          />
        </View>
        <View style={styles.photoInputStyle}>
          <Text>대표사진 설정</Text>
          <ColorBtn
            children="사진 등록"
            onPress={pressHandler}
            nonPressColor={Colors.main}
            pressColor={Colors.main_dark}
            textColor={Colors.white}
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
    margin: 16,
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
  inputStyle: {
    marginVertical: 8,
  },
  photoInputStyle: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 8,
  },
});

export default GalleryNewTrip;
