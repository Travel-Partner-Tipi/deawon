import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Navigation from "./navigation/Navigation";

//Notification 관련
import NotificationDetail from "./screens/Notification/NotificationDetail";
import NotificationDetail_selectPhoto from "./screens/Notification/NotificationDetail_selectPhoto";
import NotificationDetail_writePosting from "./screens/Notification/NotificationDetail_writePosting";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="NavigationScreen"
            component={Navigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
