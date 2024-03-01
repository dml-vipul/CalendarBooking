import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import React, { Fragment, memo } from "react";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/Feather";

import { fonts, moderateScale, verticalScale } from "../../../theme";
import { getSelectedTheme } from "../../../helpers/commonTheme";
import { useTranslation } from "../../hooks/useTranslation";
import {
  activeNotificationIcon,
  bookmarkIconDark,
  bookmarkIconlight,
  notificationIconDark,
  notificationIconlight,
} from "../../../utils/icons";
import { useNavigation } from "@react-navigation/native";

interface AppHeaderProps {
  title?: string;
}
const DashboardHeader: React.FC<AppHeaderProps> = ({ title }) => {
  const selectedTheme = getSelectedTheme();
  const colorScheme = useColorScheme();
  const styles = generateStyles(selectedTheme);
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <Fragment>
      <View style={styles.container}>
        <View>
          <Text style={styles.welcomeText}>
            {t("DashboardScreen.DashHeader")}
          </Text>
          <Text style={styles.profileNameText}>{title}</Text>
        </View>
        <View style={styles.rightIconContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("HomeStackScreen", {
                screen: "SavedWorkouts",
              })
            }
          >
            <FastImage
              source={
                colorScheme === "light" ? bookmarkIconDark : bookmarkIconlight
              }
              resizeMode="contain"
              style={styles.bookmarkIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("HomeStackScreen", {
                screen: "Notifications",
              })
            }
          >
            <FastImage
              source={
                colorScheme === "light"
                  ? notificationIconDark
                  : notificationIconlight
              }
              resizeMode="contain"
              style={styles.bookmarkIcon}
            />
            <FastImage
              source={activeNotificationIcon}
              resizeMode="contain"
              style={styles.activeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
};

export default memo(DashboardHeader);

const generateStyles = (selectedTheme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: verticalScale(60),
    },
    iconStyle: {
      width: moderateScale(128),
      height: moderateScale(45),
    },
    bookmarkIcon: {
      width: moderateScale(23),
      height: moderateScale(23),
    },
    rightIconContainer: {
      flexDirection: "row",
      gap: moderateScale(16),
    },
    welcomeText: {
      color: selectedTheme.textColor,
      fontFamily: fonts.regular,
      fontSize: moderateScale(14),
      fontWeight: "500",
    },
    profileNameText: {
      color: selectedTheme.textColor,
      fontFamily: fonts.regular,
      fontSize: moderateScale(24),
      fontWeight: "700",
    },
    activeIcon: {
      width: moderateScale(10),
      height: moderateScale(10),
      position: "absolute",
      right: 0,
    },
  });
