import { SafeAreaView, View, StyleSheet, Button, Text } from "react-native";
import InputBox from "../components/ui/InputBox";
import SquareButton from "../components/ui/SquareButton";
import TextButton from "../components/ui/TextButton";
import LineDivider from "../components/ui/LineDivider";
import TextBox from "../components/ui/TextBox";

const SignUpScreen = ({ navigation }) => {
  function pressHandler() {
    navigation.navigate("SignInScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextBox text={"EMAIL"}>
          <InputBox text={"your@email.com"} iconName={"email-outline"} />
        </TextBox>
        <TextBox text={"PASSWORD"}>
          <InputBox text={"password"} iconName={"lock-outline"} />
        </TextBox>
        <TextBox text={"PASSWORD CONFIRM"}>
          <InputBox text={"recheck password"} iconName={"lock-outline"} />
        </TextBox>
        <SquareButton>{"NEXT"}</SquareButton>
        <LineDivider />
        <TextButton onPress={pressHandler}>{"로그인"}</TextButton>
      </View>
    </SafeAreaView>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  textBox: {
    justifyContent: "center",
  },
  text: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: "400",
  },
});
