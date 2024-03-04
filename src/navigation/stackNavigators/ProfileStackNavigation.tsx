import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../screens/Profile/ProfileScreen";
import NotificationScreen from "../../screens/Notifications/NotificationScreen";

const ProfileStack = createStackNavigator();
const ProfileStackNavigation = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen
        name="Notifications"
        component={NotificationScreen}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigation;
