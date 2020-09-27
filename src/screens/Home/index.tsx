import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Category from "./Category";
import Options from "./Options";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Options" component={Options} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
