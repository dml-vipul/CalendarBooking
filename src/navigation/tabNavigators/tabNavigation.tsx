import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text } from "react-native";
import FastImage from "react-native-fast-image";
import { eventIcon, homeIcon, profileIcon } from "../../utils/icons";
import {
  colors,
  fonts,
  moderateScale,
  typography,
  verticalScale,
} from "../../theme";
import { HomeScreen } from "../../screens";
import EventScreen from "../../screens/Event/EventScreen";
import ProfileScreen from "../../screens/Profile/ProfileScreen";
import ProfileStackNavigation from "../stackNavigators/ProfileStackNavigation";
import EventStackNavigation from "../stackNavigators/EventStackNavigation";

const TabStack = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <TabStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.light,
          height: verticalScale(60),
          paddingTop: verticalScale(10),
        },
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = homeIcon;
          } else if (route.name === "Event") {
            iconName = eventIcon;
          } else if (route.name === "Profile") {
            iconName = profileIcon;
          }
          return (
            <FastImage
              source={iconName}
              resizeMode="contain"
              tintColor={color}
              style={[styles.iconsStyle]}
            />
          );
        },
        tabBarLabel: ({ color }) => {
          return (
            <Text style={[styles.labelStyle, { color: color }]}>
              {route.name}
            </Text>
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.darkGray,
        tabBarHideOnKeyboard: true,
      })}
    >
      <TabStack.Screen name="Home" component={HomeScreen} />
      <TabStack.Screen name="Event" component={EventStackNavigation} />
      <TabStack.Screen name="Profile" component={ProfileStackNavigation} />
    </TabStack.Navigator>
  );
};

const styles = StyleSheet.create({
  iconsStyle: {
    width: moderateScale(23),
    height: moderateScale(23),
  },
  labelStyle: {
    fontSize: typography.font12Px,
    color: colors.textColor,
    paddingBottom: verticalScale(4),
    fontFamily: fonts.regular,
    fontWeight: "500",
  },
});

export default TabNavigation;
