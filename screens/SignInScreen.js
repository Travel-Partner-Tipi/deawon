import { SafeAreaView, View, StyleSheet, Button } from "react-native";
import InputBox from "../components/ui/InputBox";
import SquareButton from "../components/ui/SquareButton";
import TextButton from "../components/ui/TextButton";
import LineDivider from "../components/ui/LineDivider";
import * as WebBrowser from "expo-web-browser";
import { Linking } from "react-native";

const SignInScreen = ({ navigation }) => {
  function pressHandler() {
    navigation.navigate("SignUpScreen");
  }

  const handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync(
      "https://kauth.kakao.com/oauth/authorize?client_id=682741f5d12d607fd2c7730bf0fa96bb&redirect_uri=http://localhost:19006/kakao/callback&response_type=code"
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <InputBox text={"your@email.com"} iconName={"email-outline"} />
        <InputBox text={"your password"} iconName={"lock-outline"} />
        <SquareButton>{"로그인"}</SquareButton>
        <SquareButton onPress={handleOpenWithWebBrowser}>
          {"Kakao 계정으로 로그인"}
        </SquareButton>
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
