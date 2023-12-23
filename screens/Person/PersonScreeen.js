import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import SettingBtn from "../../components/ui/Btn/SettingBtn";
import SearchBox from "../../components/ui/SearchBox";
import Colors from "../../constants/colors";

import ProfilePhoto from "../../components/ui/ProfilePhoto";
import FriendRequestBtn from "../../components/ui/Btn/FriendRequestBtn";
import BackBtn from "../../components/ui/Btn/BackBtn";

const PersonScreeen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <SettingBtn onPress={() => navigation.navigate("AppSettingScreen")} />
        </View>
      </View>
      <View>
        <View style={styles.profileContainer}>
          <ProfilePhoto style={styles.profilePhoto} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileId}>Jamong__w.s</Text>
            <Text>10명</Text>
          </View>
        </View>
        <View style={styles.searchBoxSt}>
          <SearchBox />
        </View>
        <View>
          <FriendRequestBtn />
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
  headerContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTopText: {
    fontWeight: "bold",
    fontSize: 24,
    padding: 16,
  },
  profileContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
  },
  profilePhoto: { flex: 1 },
  profileInfo: { flex: 1, justifyContent: "center", alignItems: "center" },
  profileId: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  searchBoxSt: {
    margin: 16,
  },
});

export default PersonScreeen;
