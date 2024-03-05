import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import React, { forwardRef, useMemo, useState } from "react";
import BottomSheet, { useBottomSheet } from "@gorhom/bottom-sheet";
import dayjs from "dayjs";
import Icon from "react-native-vector-icons/Feather";
import Material from "react-native-vector-icons/AntDesign";

import {
  colors,
  fonts,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../theme";
import CalendarHeader from "../../atoms/CalendarHeader";
import Divider from "../../atoms/Divider";
import CustomButton from "../../atoms/customButton";
import { dropdownIcon, offlineIcon, onlineIcon } from "../../../utils/icons";
import FastImage from "react-native-fast-image";
export type Ref = BottomSheet;

interface Props {
  title: string;
}

const CloseBtn = () => {
  const { close } = useBottomSheet();

  return <Button title="Close" onPress={() => close()} />;
};

const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const snapPoints = useMemo(() => ["20%", "40%", "65%", "80%"], []);
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedEvent, setSelectedEvent] = useState<string | null>("online");

  const handleSelectedEvent = (val: string) => {
    setSelectedEvent(val);
  };

  const handleNextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));

  const handlePrevMonth = () =>
    setCurrentMonth(currentMonth.subtract(1, "month"));

  console.log(selectedEvent);

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ backgroundColor: colors.dark }}
      backgroundStyle={{ backgroundColor: colors.light }}
    >
      <View style={styles.contentContainer}>
        <View style={[styles.flex, styles.modalHeader]}>
          <Text style={styles.headingText}>New event</Text>
          <View style={[styles.flex]}>
            <Text style={styles.subHeadingText}>Divit123@gmail.com</Text>
            <Icon
              name="chevron-down"
              size={moderateScale(20)}
              color={colors.grey}
            />
          </View>
        </View>
        <Divider LineStyles={styles.lineStyles} />
        <CalendarHeader
          currentMonth={currentMonth}
          handleNextMonth={handleNextMonth}
          handlePrevMonth={handlePrevMonth}
        />
        <View style={styles.eventContainer}>
          <View
            style={{
              flexDirection: "row",
              gap: moderateScale(10),
            }}
          >
            <CustomButton
              title="Online event"
              onPress={() => handleSelectedEvent("online")}
              buttonStyle={[
                styles.eventButtonStyling,
                selectedEvent === "online" && {
                  borderColor: colors.primary,
                  backgroundColor: colors.lightBlue,
                },
              ]}
              image={onlineIcon}
            />
            <CustomButton
              title="offline event"
              onPress={() => handleSelectedEvent("offline")}
              buttonStyle={[
                styles.eventButtonStyling,
                selectedEvent === "offline" && {
                  borderColor: colors.primary,
                  backgroundColor: colors.lightBlue,
                },
              ]}
              image={offlineIcon}
            />
          </View>
        </View>
        <Divider
          LineStyles={{
            backgroundColor: colors.primary,
            height: moderateScale(0.5),
          }}
        />

        <Text style={styles.titleStyle}>Title</Text>
        <View>
          <Text
            style={[styles.subHeadingText, { fontSize: moderateScale(16) }]}
          >
            Rohit’s Bday party meet{" "}
          </Text>
        </View>
        <Divider
          LineStyles={[styles.lineStyles, { marginVertical: moderateScale(5) }]}
        />

        <Text style={styles.titleStyle}>Discription</Text>
        <View>
          <Text
            style={[styles.subHeadingText, { fontSize: moderateScale(16) }]}
          >
            All school friends will join virtual birthday celebration, I need to
            sing a song.
          </Text>
        </View>
        <Divider
          LineStyles={[styles.lineStyles, { marginVertical: moderateScale(5) }]}
        />

        <Text style={styles.titleStyle}>Link</Text>
        <View>
          <Text
            style={[styles.subHeadingText, { fontSize: moderateScale(16) }]}
          >
            Meet - mms-vmvn-qtd (google.com)
          </Text>
        </View>
        <Divider
          LineStyles={[styles.lineStyles, { marginVertical: moderateScale(5) }]}
        />

        <Text style={styles.titleStyle}>Reminder</Text>
        <View style={[styles.flex, styles.reminderContainer]}>
          <Text style={[styles.subHeadingText, styles.reminderText]}>
            On the time of event
          </Text>
          <TouchableOpacity>
            <FastImage
              source={dropdownIcon}
              resizeMode="contain"
              style={styles.IconStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
      <CloseBtn />
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginHorizontal: horizontalScale(20),
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20,
    color: colors.dark,
  },
  modalHeader: {
    justifyContent: "space-between",
    paddingTop: verticalScale(10),
  },
  headingText: {
    fontSize: moderateScale(20),
    fontFamily: fonts.poppinsSemiBold,
    color: colors.dark,
  },
  subHeadingText: {
    fontSize: moderateScale(12),
    fontFamily: fonts.poppinsRegular,
    color: colors.dark,
  },
  eventContainer: {
    marginTop: moderateScale(20),
    alignItems: "center",
    justifyContent: "center",
  },
  eventButtonStyling: {
    backgroundColor: colors.highlightedGray,
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(0.8),
    borderColor: colors.borderGray,
  },
  lineStyles: {
    marginVertical: verticalScale(0),
    backgroundColor: colors.borderGray,
  },
  titleStyle: {
    color: colors.textColor,
    fontSize: moderateScale(12),
    fontFamily: fonts.poppinsBold,
  },
  reminderContainer: {
    backgroundColor: colors.borderGray,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
    justifyContent: "space-between",
  },
  reminderText: {
    fontSize: moderateScale(16),
  },
  IconStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
});

export default CustomBottomSheet;
