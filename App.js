import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Navigation from "./navigation/Navigation";
import ProfileSettingScreen from "./screens/ProfileSettingScreen";
import { store } from "./store";

//Notification 관련
import NotificationDetail from "./screens/Notification/NotificationDetail";
import NotificationDetail_selectPhoto from "./screens/Notification/NotificationDetail_selectPhoto";
import NotificationDetail_writePosting from "./screens/Notification/NotificationDetail_writePosting";

//Gallery 관련
import GalleryNewTrip from "./screens/Gallery/GalleryNewTrip";

//personScreen 관련
import AppSettingScreen from "./screens/Person/AppSettingScreen";

//kakao 로그인 관련
import KaKaoLogin from "./screens/KaKaoLogin";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: { backgroundColor: "white" },
              headerShown: false,
            }}
          >
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="KaKaoLogin" component={KaKaoLogin} />

            <Stack.Screen
              name="NavigationScreen"
              component={Navigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileSettingScreen"
              component={ProfileSettingScreen}
            />

            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

            <Stack.Screen
              name="NotificationDetail"
              component={NotificationDetail}
            />
            <Stack.Screen
              name="NotificationDetail_selectPhoto"
              component={NotificationDetail_selectPhoto}
            />
            <Stack.Screen
              name="NotificationDetail_writePosting"
              component={NotificationDetail_writePosting}
            />

            <Stack.Screen name="GalleryNewTrip" component={GalleryNewTrip} />

            <Stack.Screen
              name="AppSettingScreen"
              component={AppSettingScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
