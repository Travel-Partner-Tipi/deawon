import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import TripsGallery from "./TripsGallery";
import PhotosGallery from "./PhotosGallery";

import PlusBtn from "../../components/ui/Btn/PlusBtn";
import PhotoBtn from "../../components/ui/Btn/PhotoBtn";
import IconBtn from "../../components/ui/Btn/IconBtn";
import ColorBtn from "../../components/ui/Btn/ColorBtn";

import TextButton from "../../components/ui/TextButton";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

const GalleryScreen = () => {
  const navigation = useNavigation();
  function pressHandler() {}

  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.backBtnStyle}></View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTopText}>나의 여행들</Text>
        </View>
        <View style={styles.backBtnStyle}>
          <PlusBtn onPress={() => navigation.navigate("GalleryNewTrip")} />
        </View>
      </View>

      {/**여행 업로드 관련 부분*/}
      <View style={styles.NowUploadContainer}>
        <PhotoBtn btnImgUrl={require("../../assets/icon.png")} />
        <View style={styles.NowUploadStatus}>
          <Text>업로드 중인 여행이 없습니다. </Text>
          <Text>여행을 떠나보세요</Text>
          <View style={styles.BtnContainer}>
            <ColorBtn
              children="업로드"
              onPress={pressHandler}
              nonPressColor="#5cc2d0"
              pressColor="#00ff00"
              textColor="#ffffff"
            />
            <ColorBtn
              children="넘기기"
              onPress={pressHandler}
              nonPressColor="#F27057"
              pressColor="#00ff00"
              textColor="#ffffff"
            />
          </View>
        </View>
      </View>

      {/**게시할 여행 및 사진 선택*/}
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen
            name="TripsGallery"
            component={TripsGallery}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ forcused, color }) => {
                return (
                  <MaterialIcons name="card-travel" size={24} color="#5cc2d0" />
                );
              },
            }}
          />
          <Tab.Screen
            name="PhotosGallery"
            component={PhotosGallery}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ forcused, color }) => {
                return (
                  <MaterialIcons name="grid-on" size={24} color="#5cc2d0" />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default GalleryScreen;

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
    alignItems: "center",
    paddingHorizontal: 8,
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
  backBtnStyle: { width: 48, height: 48 },

  /**게시할 여행 및 사진 선택*/
  SelPhotoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 2,
    borderBottomColor: "#5cc2d0",
  },
  selPhotoIcon: {},

  /**아래 표시되는 사진들 목록 */
  SelectGrid: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 7,
  },
  NowUploadContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  NowUploadStatus: {
    paddingHorizontal: 8,
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  BtnContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
