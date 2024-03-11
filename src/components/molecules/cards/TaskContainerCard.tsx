import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  colors,
  fonts,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../theme";
import FastImage from "react-native-fast-image";
import {
  blueCircle,
  offlineIcon,
  onlineIcon,
  orangeCircle,
  plusIcon,
} from "../../../utils/icons";
import Divider from "../../atoms/Divider";
import { useNavigation } from "@react-navigation/native";

const TaskContainerCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.borderStyling, styles.contentContainer]}
      onPress={() => navigation.navigate("CurrentEvent")}
    >
      <View style={styles.taskContainerHeader}>
        <View>
          <Text style={styles.headerStyle}>04 Aug. Sat</Text>
        </View>
        <View style={styles.addTaskContainer}>
          <Text
            style={[
              styles.commonText,
              {
                borderRightWidth: moderateScale(1),
                padding: moderateScale(3),
                borderRightColor: colors.darkGray,
              },
            ]}
          >
            {" "}
            02 Task{" "}
          </Text>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              paddingVertical: moderateScale(3),
              paddingHorizontal: moderateScale(5),
            }}
          >
            <FastImage
              source={plusIcon}
              style={styles.plusIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.flex, styles.meetingHeader]}>
        <FastImage
          source={blueCircle}
          style={styles.circleIcon}
          resizeMode="contain"
        />
        <Text style={styles.commonText}>Meeting with Atul Goyal</Text>
      </View>
      <View
        style={[
          styles.flex,
          {
            paddingHorizontal: moderateScale(10),
          },
        ]}
      >
        <FastImage
          source={onlineIcon}
          style={styles.circleIcon}
          resizeMode="contain"
        />
        <Text style={styles.meetingTime}>9:00 am</Text>
      </View>
      <Divider LineStyles={styles.divider} />
      <View style={[styles.flex, styles.meetingHeader]}>
        <FastImage
          source={orangeCircle}
          style={styles.circleIcon}
          resizeMode="contain"
        />
        <Text style={styles.commonText}>Parents teacher meeting</Text>
      </View>
      <View
        style={[
          styles.flex,
          {
            paddingHorizontal: moderateScale(10),
            paddingBottom: verticalScale(10),
          },
        ]}
      >
        <FastImage
          source={offlineIcon}
          style={styles.circleIcon}
          resizeMode="contain"
        />
        <Text style={styles.meetingTime}>9:00 am</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskContainerCard;

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskContainerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.highlightedGray,
    borderBottomWidth: moderateScale(1),
    borderBottomColor: colors.borderGray,
    padding: moderateScale(6),
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
    fontSize: moderateScale(12),
  },
  subHeaderStyle: {
    color: colors.grey,
    fontFamily: fonts.poppinsRegular,
    fontSize: moderateScale(12),
  },
  circleIcon: {
    width: moderateScale(15),
    height: moderateScale(15),
    marginRight: horizontalScale(10),
  },
  commonText: {
    color: colors.grey,
    fontFamily: fonts.poppinsRegular,
    fontSize: moderateScale(14),
  },
  addTaskContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: moderateScale(1),
    borderColor: colors.darkGray,
    borderRadius: moderateScale(5),
  },
  plusIcon: {
    width: moderateScale(15),
    height: moderateScale(15),
  },
  meetingHeader: {
    padding: moderateScale(10),
  },
  meetingTime: {
    fontSize: moderateScale(12),
    fontFamily: fonts.poppinsRegular,
    color: colors.meetingLink,
  },
  divider: {
    marginHorizontal: horizontalScale(10),
    backgroundColor: colors.borderGray,
    marginVertical: moderateScale(0),
  },
});
