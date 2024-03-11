import { SafeAreaView, StatusBar, View } from "react-native";
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
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.light }}>
      <StatusBar
        barStyle={"dark-content"}
        translucent={true}
        backgroundColor={"transparent"}
      />
      <RootNavigation />
    </SafeAreaView>
  );
};

export default AppLocal;
