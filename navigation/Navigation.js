import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Colors from "../constants/colors";

import MainScreen from "../screens/MainScreen";
import NotificationScreen from "../screens/Notification/NotificationScreen";
import GalleryScreen from "../screens/Gallery/GalleryScreen";
import PersonScreeen from "../screens/PersonScreeen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.main,
        tabBarStyle: {
          height: 100,
          shadowColor: Colors.black,
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
        component={GalleryScreen}
        options={{
          title: "갤러리",
          tabBarIcon: ({ color, size }) => (
            <Icon name="image-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Person"
        component={PersonScreeen}
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

function MessageScreen() {
  return <Text>갤러리</Text>;
}

export default Navigation;
