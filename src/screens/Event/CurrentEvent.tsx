import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Container from "../../components/atoms/container";
import {
  colors,
  fonts,
  horizontalScale,
  moderateScale,
  typography,
  verticalScale,
} from "../../theme";
import FastImage from "react-native-fast-image";
import {
  arrowBack,
  blueCircle,
  onlineIcon,
  orangeCircle,
} from "../../utils/icons";
import { useNavigation } from "@react-navigation/native";
import Divider from "../../components/atoms/Divider";

const CurrentEvent = () => {
  const navigation = useNavigation();
  return (
    <Container style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.goBack()}
      >
        <FastImage
          source={arrowBack}
          style={styles.iconContainer}
          resizeMode="contain"
        />
        <Text style={styles.textStyle}>07 Aug 23</Text>
      </TouchableOpacity>
      <Text style={[styles.titleText, styles.heading]}>4 TASK</Text>
      <View style={styles.meetingContainer}>
        <Text style={styles.titleText}>Meeting with Atul Goyal</Text>
        <Divider LineStyles={styles.divider} />
        <View
          style={[
            styles.flex,
            {
              gap: moderateScale(10),
            },
          ]}
        >
          <View style={[styles.flex]}>
            <FastImage
              source={blueCircle}
              style={styles.circleIcon}
              resizeMode="contain"
            />
            <Text style={styles.subTextStyle}>Friends</Text>
          </View>
          <View style={[styles.flex]}>
            <FastImage
              source={onlineIcon}
              style={styles.circleIcon}
              resizeMode="contain"
            />
            <Text style={styles.subTextStyle}>Online</Text>
          </View>
          <Text style={styles.subTextStyle}>9:00 am</Text>
        </View>
      </View>
      <View style={styles.meetingContainer}>
        <Text style={styles.titleText}>Meeting with Atul Goyal</Text>
        <Divider LineStyles={styles.divider} />
        <View
          style={[
            styles.flex,
            {
              gap: moderateScale(10),
            },
          ]}
        >
          <View style={[styles.flex]}>
            <FastImage
              source={orangeCircle}
              style={styles.circleIcon}
              resizeMode="contain"
            />
            <Text style={styles.subTextStyle}>Family</Text>
          </View>
          <View style={[styles.flex]}>
            <FastImage
              source={onlineIcon}
              style={styles.circleIcon}
              resizeMode="contain"
            />
            <Text style={styles.subTextStyle}>Online</Text>
          </View>
          <Text style={styles.subTextStyle}>9:00 am</Text>
        </View>
      </View>
    </Container>
  );
};

export default CurrentEvent;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: verticalScale(40),
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: moderateScale(50),
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGray,
    backgroundColor: colors.light,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(8),
  },
  iconContainer: {
    paddingLeft: horizontalScale(5),
    width: moderateScale(20),
    height: moderateScale(20),
  },
  textStyle: {
    flex: 1,
    color: colors.dark,
    paddingHorizontal: moderateScale(10),
    fontSize: moderateScale(18),
    fontFamily: fonts.semiBold,
  },
  meetingContainer: {
    borderWidth: moderateScale(1),
    borderColor: colors.borderGray,
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    marginTop: verticalScale(15),
  },
  titleText: {
    color: colors.grey,
    fontSize: moderateScale(16),
    fontFamily: fonts.poppinsRegular,
  },
  divider: {
    backgroundColor: colors.borderGray,
    marginVertical: moderateScale(4),
  },
  subTextStyle: {
    fontSize: moderateScale(14),
    fontFamily: fonts.poppinsRegular,
    color: colors.meetingLink,
  },
  circleIcon: {
    width: moderateScale(15),
    height: moderateScale(15),
    marginRight: horizontalScale(10),
  },
  heading: {
    color: colors.dark,
    fontFamily: fonts.poppinsBold,
    marginTop: moderateScale(10),
  },
});
