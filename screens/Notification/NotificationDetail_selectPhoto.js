import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import BackBtn from "../../components/ui/Btn/BackBtn";
import CheckBtn from "../../components/ui/Btn/CheckBtn";
import PhotoBtn from "../../components/ui/Btn/PhotoBtn";

import NotificationDetail_writePosting from "./NotificationDetail_writePosting";

const NotificationDetail_selectPhoto = () => {
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
        <View style={styles.backBtnStyle}>
          <CheckBtn
            onPress={() =>
              navigation.navigate("NotificationDetail_writePosting")
            }
          />
        </View>
      </View>

      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.SelectGrid}>
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
          />
          <PhotoBtn
            btnImgUrl={require("../../assets/icon.png")}
            onPress={() => {
              CheckPhoto; //만들어야함
            }}
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

export default NotificationDetail_selectPhoto;
