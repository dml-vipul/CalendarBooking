import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStartedScreen from "../../screens/GetStarted/GetStartedScreen";
import LoginScreen from "../../screens/auth/LoginScreen";
import PasswordScreen from "../../screens/auth/PasswordScreen";

const AuthStack = createStackNavigator();
const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="GetStarted" component={GetStartedScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigation;
