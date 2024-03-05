import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import FastImage from "react-native-fast-image";
import { dateArrowLeft, dateArrowRight } from "../../utils/icons";
import dayjs from "dayjs";
import { colors, fonts, horizontalScale, moderateScale } from "../../theme";

interface HeaderProps {
  currentMonth: dayjs.Dayjs;
  handleNextMonth: () => void;
  handlePrevMonth: () => void;
}

const CalendarHeader = ({
  currentMonth,
  handleNextMonth,
  handlePrevMonth,
}: HeaderProps) => {
  return (
    <View style={styles.calendarHeader}>
      <TouchableOpacity onPress={handlePrevMonth}>
        <FastImage
          source={dateArrowLeft}
          resizeMode="contain"
          style={styles.IconStyle}
        />
      </TouchableOpacity>
      <Text style={styles.subHeading}>
        {currentMonth.format("MMM")} {currentMonth.format("YYYY")}
      </Text>
      <TouchableOpacity onPress={handleNextMonth}>
        <FastImage
          source={dateArrowRight}
          resizeMode="contain"
          style={styles.IconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CalendarHeader;

const styles = StyleSheet.create({
  IconStyle: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  calendarHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: horizontalScale(10),
    marginTop: horizontalScale(25),
    backgroundColor: colors.highlightedGray,
  },
  subHeading: {
    fontSize: moderateScale(12),
    fontFamily: fonts.poppinsRegular,
    color: colors.dark,
  },
});
