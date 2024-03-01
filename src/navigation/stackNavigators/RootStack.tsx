import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "../tabNavigators/tabNavigation";

const RootStack = createStackNavigator();
const RootStackNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="TabNavigation" component={TabNavigation} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
