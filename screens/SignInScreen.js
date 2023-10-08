import { SafeAreaView, View, StyleSheet, Button } from "react-native";
import InputBox from "../components/ui/InputBox";
import SquareButton from "../components/ui/SquareButton";
import TextButton from "../components/ui/TextButton";
import LineDivider from "../components/ui/LineDivider";

// 노션 명령어 expo meterial icon
const hi?=

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <InputBox />
        <InputBox />
        <SquareButton>{"로그인"}</SquareButton>
        <SquareButton>{"Google 계정으로 로그인"}</SquareButton>
        {/* <Button style={{ fontSize: 16 }} color="#5CC2D0" title={"회원 가입"} /> */}
        <LineDivider />
        <TextButton>{"회원 가입"}</TextButton>
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
