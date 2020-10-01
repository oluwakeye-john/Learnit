import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Category from "./Category";
import Options from "./Options";
import Quiz from "./Quiz";
import { Button, Text, View } from "native-base";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ title: "Select category" }}
      />
      <Stack.Screen
        name="Options"
        component={Options}
        // options={{ title: "Choose options" }}
      />
      <Stack.Screen name="Quiz" component={Quiz} options={{ title: "Quiz" }} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
