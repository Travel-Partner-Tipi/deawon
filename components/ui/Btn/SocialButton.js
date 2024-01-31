import { Pressable, Image, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SocialButton = ({ type, onPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log("press", type);
    // type이 'kakao'일 때와 'naver'일 때 각각 다른 동작을 수행하도록 설정
    if (type === 4) {
      //이유는 모르겠지만 type이 4로 잡힘
      // Kakao에 대한 동작 수행
      navigation.navigate("KaKaoLogin", { screen: "KaKaoLogin" });
      console.log("Kakao button pressed");
    } else if (type === 5) {
      //이유는 모르겠지만 type이 5로 잡힘
      // Naver에 대한 동작 수행
      navigation.navigate("NaverLogin", { screen: "NaverLogin" });
      console.log("Naver button pressed");
    }
    // 전달받은 onPress 함수가 있으면 실행
    if (onPress) {
      onPress();
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          handlePress();
        }}
      >
        <Image style={{ height: 50 }} source={type} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SocialButton;
