import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import PhotoBtn from "../../components/ui/Btn/PhotoBtn";

const TripsGallery = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
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
    </ScrollView>
  );
};

export default TripsGallery;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  SelectGrid: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 7,
  },
});
