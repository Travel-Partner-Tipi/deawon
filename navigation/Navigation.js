import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import MainScreen from "../screens/MainScreen";
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#5cc2d0",
        tabBarStyle: {
          height: 100,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          elevation: 5,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: "홈",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={SearchScreen}
        options={{
          title: "지도",
          tabBarIcon: ({ color, size }) => (
            <Icon name="map-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddPhoto"
        component={NotificationScreen}
        options={{
          title: "사진추가",
          tabBarIcon: ({ color, size }) => (
            <Icon name="camera-plus-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="gallery"
        component={MessageScreen}
        options={{
          title: "갤러리",
          tabBarIcon: ({ color, size }) => (
            <Icon name="image-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Person"
        component={Person}
        options={{
          title: "내정보",
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function SearchScreen() {
  return <Text>검색</Text>;
}

function NotificationScreen() {
  return <Text>사진 추가</Text>;
}

function MessageScreen() {
  return <Text>갤러리</Text>;
}

function Person() {
  return <Text>사람</Text>;
}

export default Navigation;
