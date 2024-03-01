import { StatusBar, View, useColorScheme } from "react-native";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import RootNavigation from "./navigation/rootNavigation";
import { colors } from "./theme";

const AppLocal = () => {
  useEffect(() => {
    setTimeout(() => {
      if (SplashScreen) {
        SplashScreen.hide();
      }
    }, 1000);
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: colors.light }}>
      <StatusBar
        barStyle={"dark-content"}
        translucent={true}
        backgroundColor={"transparent"}
      />
      <RootNavigation />
    </View>
  );
};

export default AppLocal;
