import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/Navigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { theme } from "./src/theme";
import { ThemeProvider } from "styled-components/native";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Root } from "native-base";

const App = () => {
  const [isReady, setIsReady] = React.useState(false);
  const initState = useCallback(async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    setIsReady(true);
  }, [Font]);

  useEffect(() => {
    initState();
  }, [initState]);

  if (!isReady) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Root>
          <StatusBar barStyle="light-content" translucent />
          <NavigationContainer theme={theme}>
            <RootNavigator />
          </NavigationContainer>
        </Root>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
