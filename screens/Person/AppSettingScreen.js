import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import SettingBtn from "../../components/ui/Btn/SettingBtn";
import SearchBox from "../../components/ui/SearchBox";
import Colors from "../../constants/colors";

import ProfilePhoto from "../../components/ui/ProfilePhoto";
import FriendRequestBtn from "../../components/ui/Btn/FriendRequestBtn";
import BackBtn from "../../components/ui/Btn/BackBtn";
import SwitchBtn from "../../components/ui/Btn/SwitchBtn";

const AppSettingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <BackBtn />
        </View>
      </View>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.textSt}>푸시 알림</Text>
        </View>

        <SwitchBtn text={"모든 알림"} />
        <SwitchBtn text={"모든 알림"} />
        <SwitchBtn text={"모든 알림"} />
        <SwitchBtn text={"모든 알림"} />
        <View style={styles.textContainer}>
          <Text style={styles.textSt}>로그인</Text>
        </View>

        <Text>로그인 정보</Text>
        <Text>로그아웃</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
    marginHorizontal: 16,
  },
  headerContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    paddingVertical: 8,
  },
  textSt: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AppSettingScreen;
