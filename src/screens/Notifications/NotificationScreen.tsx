import { StyleSheet, Text, View } from "react-native";
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
import Divider from "../../components/atoms/Divider";
import FastImage from "react-native-fast-image";
import { circleIcon } from "../../utils/icons";

const NotificationScreen = () => {
  return (
    <Container style={styles.container}>
      <View style={{ paddingTop: verticalScale(20) }}>
        <AppBackHeader title="Notifications" backButton={true} />
      </View>
      <Divider
        LineStyles={[styles.divider, { marginHorizontal: horizontalScale(20) }]}
      />
      <View style={[styles.borderStyling, styles.contentContainer]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: moderateScale(8),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <FastImage
              source={circleIcon}
              style={styles.circleIcon}
              resizeMode="contain"
            />
            <Text style={styles.headerStyle}>Reminder</Text>
          </View>
          <Text style={styles.subHeaderStyle}>9:00 am</Text>
        </View>
        <Divider LineStyles={styles.divider} />
        <View style={{ padding: moderateScale(10) }}>
          <Text style={styles.commonText}>Meeting with Atul</Text>
          <Text style={styles.linkText}>
            https://meet.google.com/mbx-jyek-deg
          </Text>
        </View>
      </View>
      <View style={[styles.borderStyling, styles.contentContainer]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: moderateScale(8),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <FastImage
              source={circleIcon}
              style={styles.circleIcon}
              resizeMode="contain"
            />
            <Text style={styles.headerStyle}>Reminder</Text>
          </View>
          <Text style={styles.subHeaderStyle}>9:00 am</Text>
        </View>
        <Divider LineStyles={styles.divider} />
        <View style={{ padding: moderateScale(10) }}>
          <Text style={styles.commonText}>Meeting with Atul</Text>
          <Text style={styles.commonText}>
            <Text style={{ color: colors.grey }}>In next 30 mins</Text> at 2:00
            PM
          </Text>
        </View>
      </View>
      <View style={[styles.borderStyling, styles.contentContainer]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: moderateScale(8),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <FastImage
              source={circleIcon}
              style={styles.circleIcon}
              resizeMode="contain"
            />
            <Text style={styles.headerStyle}>Reminder</Text>
          </View>
          <Text style={styles.subHeaderStyle}>9:00 am</Text>
        </View>
        <Divider LineStyles={styles.divider} />
        <View style={{ padding: moderateScale(10) }}>
          <Text style={styles.commonText}>Meeting with Atul</Text>
          <Text style={styles.linkText}>
            https://meet.google.com/mbx-jyek-deg
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  commonText: {
    color: colors.dark,
    fontFamily: fonts.poppinsRegular,
    fontSize: moderateScale(16),
  },
  divider: {
    height: 1,
    backgroundColor: "#F1F1F1",
    marginVertical: moderateScale(2),
  },
  borderStyling: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(5),
    borderColor: colors.borderGray,
  },
  contentContainer: {
    marginTop: moderateScale(20),
    marginHorizontal: horizontalScale(20),
  },
  headerStyle: {
    color: colors.dark,
    fontFamily: fonts.poppinsSemiBold,
    fontSize: moderateScale(18),
  },
  subHeaderStyle: {
    color: colors.grey,
    fontFamily: fonts.poppinsRegular,
    fontSize: moderateScale(16),
  },
  linkText: {
    color: colors.linkBlue,
    fontFamily: fonts.poppinsRegular,
    fontSize: moderateScale(16),
  },
  circleIcon: {
    width: moderateScale(10),
    height: moderateScale(10),
    marginTop: verticalScale(10),
    marginRight: horizontalScale(10),
  },
});
