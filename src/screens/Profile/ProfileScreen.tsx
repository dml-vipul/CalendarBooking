import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Container from "../../components/atoms/container";
import AppBackHeader from "../../components/organisms/appHeader/AppBackHeader";
import {
  colors,
  fonts,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../theme";
import FastImage from "react-native-fast-image";
import { profilebackground } from "../../utils/images";
import { cameraIcon, editIcon } from "../../utils/icons";
import { useNavigation } from "@react-navigation/native";
import Divider from "../../components/atoms/Divider";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <Container style={styles.container}>
      <View style={{ paddingTop: verticalScale(30) }}>
        <AppBackHeader title="Profile" backButton={true} />
      </View>
      <Divider
        LineStyles={[styles.divider, { marginHorizontal: horizontalScale(20) }]}
      />

      <View style={styles.profileContainer}>
        <FastImage
          source={profilebackground}
          resizeMode="contain"
          style={styles.profileImage}
        />
        <View style={styles.cameraIcon}>
          <FastImage
            source={cameraIcon}
            resizeMode="contain"
            style={styles.IconStyle}
          />
        </View>
      </View>

      <View style={styles.editName}>
        <Text style={styles.headingText}>Divit Sood</Text>
        <FastImage
          source={editIcon}
          resizeMode="contain"
          style={{
            width: moderateScale(15),
            height: moderateScale(15),
          }}
        />
      </View>
      <View style={styles.ContentContainer}>
        <Text style={styles.headingSubText}>Delhi</Text>
      </View>

      <Divider LineStyles={styles.divider} />

      <TouchableOpacity
        style={styles.notification}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Text style={styles.commonText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.notification}>
        <Text style={styles.commonText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.notification}>
        <Text style={[styles.commonText, { color: colors.lightRed }]}>
          Log out
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  commonText: {
    color: colors.dark,
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(16),
  },
  divider: {
    height: 1,
    backgroundColor: "#F1F1F1",
    marginVertical: moderateScale(2),
  },
  profileImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    position: "relative",
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(20),
  },
  IconStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  cameraIcon: {
    position: "absolute",
    backgroundColor: colors.primary,
    borderRadius: moderateScale(100),
    padding: moderateScale(10),
    top: moderateScale(70),
    right: moderateScale(140),
  },
  headingText: {
    color: colors.dark,
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(18),
  },
  ContentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: verticalScale(20),
  },
  headingSubText: {
    color: colors.dark,
    fontFamily: fonts.regular,
    fontSize: moderateScale(14),
  },
  editName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(5),
    paddingTop: verticalScale(20),
  },
  notification: {
    padding: moderateScale(12),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(5),
    borderColor: colors.borderGray,
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(20),
  },
});
