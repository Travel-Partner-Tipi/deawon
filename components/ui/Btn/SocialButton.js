import { Pressable, Image } from "react-native";

const SocialButton = ({ type, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Image style={{ height: 50 }} source={type} resizeMode="contain" />
    </Pressable>
  );
};

export default SocialButton;
