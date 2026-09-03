import { Tabs } from "expo-router";
import { Image } from "react-native";

const homeIcon = require("../assets/images/tabIcons/home.png");
const devicesIcon = require("../assets/images/tabIcons/explore.png");

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#777777",
        tabBarStyle: {
          borderTopColor: "#000000",
          borderTopWidth: 2,
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={homeIcon}
              style={{ width: 22, height: 22, opacity: focused ? 1 : 0.45 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="devices"
        options={{
          title: "Devices",
          tabBarIcon: ({ focused }) => (
            <Image
              source={devicesIcon}
              style={{ width: 22, height: 22, opacity: focused ? 1 : 0.45 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarAccessibilityLabel: "Settings tab",
        }}
      />
    </Tabs>
  );
}
