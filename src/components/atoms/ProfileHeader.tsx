import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FastImage from "react-native-fast-image";

import {
  fonts,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../theme";
import { profileImage } from "../../utils/images";
import { useTranslation } from "../hooks/useTranslation";
import { getSelectedTheme } from "../../helpers/commonTheme";
import CustomButton from "./customButton";
import { EditIcondark, EditIconlight } from "../../utils/icons";

const ProfileHeader = () => {
  const selectedTheme = getSelectedTheme();
  const styles = generateStyles(selectedTheme);
  const { t } = useTranslation();
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.imageContainer}>
        <FastImage
          source={profileImage}
          resizeMode="contain"
          style={styles.ImageStyle}
        />
      </View>
      <View style={styles.ContentContainer}>
        <Text style={styles.headingText}>{t("ProfileScreen.UserName")}</Text>
        <Text style={styles.headingSubText}>
          {t("ProfileScreen.UserEmail")}
        </Text>
      </View>
      <View style={styles.editProfileButton}>
        <CustomButton
          title="Edit Profile"
          onPress={() =>
            navigation.navigate("EditProfileScreen", {
              screen: "EditProfile",
            })
          }
          type="hollow"
          buttonStyle={styles.editContainer}
          titleStyle={styles.editTextStyle}
          leftImage={colorScheme === "light" ? EditIcondark : EditIconlight}
          IconPosition={true}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;

const generateStyles = (selectedTheme: any) =>
  StyleSheet.create({
    HeaderContainer: {
      paddingVertical: verticalScale(50),
      // backgroundColor: "red",
    },
    imageContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    ImageStyle: {
      width: moderateScale(100),
      height: moderateScale(100),
      borderRadius: moderateScale(50),
    },
    headingText: {
      color: selectedTheme.textColor,
      fontFamily: fonts.semiBold,
      fontSize: moderateScale(18),
    },
    ContentContainer: {
      justifyContent: "center",
      alignItems: "center",
      paddingTop: moderateScale(10),
    },
    headingSubText: {
      color: selectedTheme.darkGray,
      fontFamily: fonts.regular,
      fontSize: moderateScale(14),
    },
    editContainer: {
      borderRadius: moderateScale(5),
      borderWidth: moderateScale(0.2),
      marginTop: moderateScale(10),
    },
    editTextStyle: {
      color: selectedTheme.textColor,
      paddingRight: horizontalScale(8),
    },
    editProfileButton: {
      paddingHorizontal: horizontalScale(90),
    },
    IconStyle: {
      width: moderateScale(20),
      height: moderateScale(20),
    },
  });
