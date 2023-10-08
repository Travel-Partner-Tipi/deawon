import { SafeAreaView, View, StyleSheet, Button, Text } from "react-native";
import InputBox from "../components/ui/InputBox";
import SquareButton from "../components/ui/SquareButton";
import TextButton from "../components/ui/TextButton";
import LineDivider from "../components/ui/LineDivider";
import TextBox from "../components/ui/TextBox";

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextBox text={"EMAIL"}>
          <InputBox />
        </TextBox>
        <TextBox text={"PASSWORD"}>
          <InputBox />
        </TextBox>
        <TextBox text={"PASSWORD CONFIRM"}>
          <InputBox />
        </TextBox>
        <SquareButton>{"NEXT"}</SquareButton>
        <LineDivider />
        <TextButton>{"로그인"}</TextButton>
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
