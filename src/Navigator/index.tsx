import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { tabIcon } from "./tabIcon";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const theme = useTheme();
  return (
    // <Tab.Navigator
    //   screenOptions={({ route }: any) => ({
    //     tabBarIcon: ({ focused }) => {
    //       const icon = tabIcon(route.name);
    //       return (
    //         <MaterialIcons
    //           color={focused ? theme.colors.primary : theme.colors.text}
    //           name={icon}
    //           size={22}
    //         />
    //       );
    //     },
    // >
    //   <Tab.Screen name="Home" component={Home} />
    //   <Tab.Screen name="Profile" component={Home} />
    //   <Tab.Screen name="Settings" component={Home} />
    // </Tab.Navigator>
    <Home />
  );
};

export default RootNavigator;
