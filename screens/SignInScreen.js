import { SafeAreaView, View, StyleSheet } from "react-native";
import InputBox from "../components/ui/InputBox";
import SquareButton from "../components/ui/SquareButton";
import TextButton from "../components/ui/TextButton";
import LineDivider from "../components/ui/LineDivider";
import * as WebBrowser from "expo-web-browser";
import { Linking } from "react-native";
import Kakao from "../assets/snsIcon/kakao_login_large_wide.png";
import Naver from "../assets/snsIcon/btnW_완성형.png";
import SocialButton from "../components/ui/Btn/SocialButton";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SignInScreen = ({ navigation }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  function pressHandler() {
    navigation.navigate("SignUpScreen");
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate("NavigationScreen");
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <InputBox text={"your@email.com"} iconName={"email-outline"} />
        <InputBox text={"your password"} iconName={"lock-outline"} />
        <SquareButton>{"로그인"}</SquareButton>
        <SocialButton type={Kakao} />
        <SocialButton type={Naver} />
        {/* <Button style={{ fontSize: 16 }} color="#5CC2D0" title={"회원 가입"} /> */}
        <LineDivider />
        <TextButton onPress={pressHandler}>{"회원 가입"}</TextButton>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
