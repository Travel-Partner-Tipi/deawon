import { ScrollView, StyleSheet, View } from "react-native";

import PhotoBtn from "../../components/ui/Btn/PhotoBtn";

const PhotosGallery = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.SelectGrid}>
          {/**포토버튼 onPress수정 */}
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

export default PhotosGallery;

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
