import { Pressable, StyleSheet, Text } from "react-native";

//설정한 색안에 글자가 들어있는 버튼입니다.
/*
<ColorBtn
children="업로드"
onPress={pressHandler}
nonPressColor="#5cc2d0"
pressColor="#00ff00"
textColor="#ffffff"
/> 이런식으로 사용합니다.
*/
const ColorBtn = ({
  children,
  onPress,
  nonPressColor,
  pressColor,
  textColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          //공통으로 공유하는 값
          width: 104,
          height: 40,
          padding: 12,
          borderRadius: 8,
          borderWidth: 0,
          alignItems: "center",
          //이벤트 발생시 변화하는 값
          backgroundColor: pressed ? pressColor : nonPressColor,
        },
      ]}
    >
      <Text style={[styles.textStyle, { color: textColor }]}>{children}</Text>
    </Pressable>
  );
};

export default ColorBtn;

const styles = StyleSheet.create({
  container: {},
  textStyle: {
    fontSize: 16,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "center",
  },
});
