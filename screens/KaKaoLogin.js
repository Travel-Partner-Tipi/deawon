import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";

const REST_API_KEY = "ca2235afbfde35af42da3255c2fef3d1";
const REDIRECT_URI =
  "http://tipibackend-env.eba-nvgyp2tx.ap-northeast-2.elasticbeanstalk.com/kakao/callback";
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KaKaoLogin = () => {
  const navigate = useNavigation();

  function KakaoLoginWebView(redirectUri) {
    console.log(redirectUri);
    console.log("로그인인가");
    //navigate.navigate("SignInScreen", { screen: "SignInScreen" });
  }

  return (
    <View style={Styles.container}>
      <WebView
        style={{ flex: 1 }}
        originWhitelist={["*"]}
        scalesPageToFit={false}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={(event) => {
          const redirectUri = event.nativeEvent.url;
          console.log("리다이렉트 URI:", redirectUri);
          KakaoLoginWebView(redirectUri);
        }}
      />
    </View>
  );
};

export default KaKaoLogin;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: "#fff",
  },
});
