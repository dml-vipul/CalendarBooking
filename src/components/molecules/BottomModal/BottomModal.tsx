import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { forwardRef, useMemo, useState } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import dayjs from "dayjs";
import Icon from "react-native-vector-icons/Feather";
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
import {
  checkCircle,
  dropdownIcon,
  offlineIcon,
  onlineIcon,
} from "../../../utils/icons";
import FastImage from "react-native-fast-image";
import { poppinsSemiBold } from "../../../theme/fonts";

export type Ref = BottomSheet;

interface Props {
  title: string;
  handleClosePress: () => void;
}

const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const snapPoints = useMemo(() => ["90%"], []);
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedEvent, setSelectedEvent] = useState<string | null>("online");
  const [mode, setMode] = useState<string>("date");

  const [title, setTitle] = useState<string | undefined>("");
  const [description, setDescription] = useState<string | undefined>("");
  const [meetingLink, setMeetingLink] = useState<string | undefined>(
    "Meet - mms-vmvn-qtd (google.com)"
  );

  const [isDatePickerVisible, setIsDatePickerVisible] =
    useState<boolean>(false);
  const [selectedDateType, setSelectedDateType] = useState("from");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const handleTitleChange = (val: string) => setTitle(val);
  const handleDescriptionChange = (val: string) => setDescription(val);
  const handleMeetingLinkChange = (val: string) => setMeetingLink(val);

  const handleSelectedEvent = (val: string) => {
    setSelectedEvent(val);
  };

  const handleNextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));

  const handlePrevMonth = () =>
    setCurrentMonth(currentMonth.subtract(1, "month"));

  const showDatePicker = (
    dateType: React.SetStateAction<string>,
    mode: React.SetStateAction<string>
  ) => {
    setIsDatePickerVisible(true);
    setMode(mode);
    setSelectedDateType(dateType);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleConfirm = (date: Date) => {
    console.log(date, "???????????????");
    if (selectedDateType === "from") {
      if (mode === "date") {
        // Extract time from previous fromDate
        const hours = fromDate.getHours();
        const minutes = fromDate.getMinutes();
        const seconds = fromDate.getSeconds();

        // Set the new date with preserved time
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(seconds);

        setFromDate(date);
      } else {
        // Preserve the date when only time is being changed
        const year = fromDate.getFullYear();
        const month = fromDate.getMonth();
        const day = fromDate.getDate();

        // Set the new time with preserved date
        date.setFullYear(year);
        date.setMonth(month);
        date.setDate(day);

        setFromDate(date);
      }
    } else if (selectedDateType === "to") {
      if (mode === "date") {
        // Extract time from previous toDate
        const hours = toDate.getHours();
        const minutes = toDate.getMinutes();
        const seconds = toDate.getSeconds();

        // Set the new date with preserved time
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(seconds);

        setToDate(date);
      } else {
        // Preserve the date when only time is being changed
        const year = toDate.getFullYear();
        const month = toDate.getMonth();
        const day = toDate.getDate();

        // Set the new time with preserved date
        date.setFullYear(year);
        date.setMonth(month);
        date.setDate(day);

        setToDate(date);
      }
    }
    hideDatePicker();
  };

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      handleIndicatorStyle={{
        backgroundColor: colors.dark,
        paddingHorizontal: horizontalScale(30),
      }}
      backgroundStyle={{ backgroundColor: colors.light }}
    >
      <BottomSheetScrollView>
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              placeholder="Rohit’s Bday party meet"
              value={title}
              onChangeText={handleTitleChange}
              style={styles.inputStyle}
              placeholderTextColor={colors.dark}
            />
            <View style={styles.eventDivider} />
            <View style={{ paddingHorizontal: horizontalScale(10) }}>
              <FastImage
                source={checkCircle}
                style={styles.IconStyle}
                resizeMode="contain"
              />
            </View>
          </View>
          <Divider
            LineStyles={[
              styles.lineStyles,
              { marginVertical: moderateScale(5) },
            ]}
          />
          <Text style={styles.titleStyle}>Discription</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              placeholder="All school friends will join virtual birthday celebration, I need to sing a song."
              value={description}
              onChangeText={handleDescriptionChange}
              multiline
              numberOfLines={2}
              style={styles.inputStyle}
              placeholderTextColor={colors.dark}
            />
          </View>
          <Divider
            LineStyles={[
              styles.lineStyles,
              { marginVertical: moderateScale(5) },
            ]}
          />

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={[styles.titleStyle, { flex: 2 }]}>From</Text>
            <Text style={[styles.titleStyle, { flex: 2 }]}>To</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={styles.dateStyle}
              onPress={() => showDatePicker("from", "date")}
            >
              <Text style={[styles.subHeadingText]}>
                {fromDate.toLocaleDateString()}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dateStyle}
              onPress={() => showDatePicker("to", "date")}
            >
              <Text style={[styles.subHeadingText]}>
                {toDate.toLocaleDateString()}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: verticalScale(10),
            }}
          >
            <TouchableOpacity
              style={styles.dateStyle}
              onPress={() => showDatePicker("from", "time")}
            >
              <Text style={[styles.subHeadingText]}>
                {fromDate.toLocaleTimeString()}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dateStyle}
              onPress={() => showDatePicker("to", "time")}
            >
              <Text style={[styles.subHeadingText]}>
                {toDate.toLocaleTimeString()}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode={mode === "date" ? "date" : "time"}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>

          <Text style={styles.titleStyle}>Link</Text>
          <View>
            <Text
              style={[styles.subHeadingText, { fontSize: moderateScale(16) }]}
            >
              {meetingLink}
            </Text>
          </View>
          <Divider
            LineStyles={[
              styles.lineStyles,
              { marginVertical: moderateScale(5) },
            ]}
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

          <CustomButton
            title="Save"
            onPress={() => props.handleClosePress()}
            buttonStyle={{
              borderRadius: moderateScale(30),
              paddingVertical: moderateScale(5),
              marginVertical: verticalScale(10),
            }}
            textStyle={{ color: colors.light, fontFamily: poppinsSemiBold }}
          />
        </View>
      </BottomSheetScrollView>
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
    fontSize: moderateScale(14),
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
    fontSize: moderateScale(14),
    fontFamily: fonts.poppinsBold,
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(5),
  },
  reminderContainer: {
    backgroundColor: colors.borderGray,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
    justifyContent: "space-between",
    marginBottom: verticalScale(10),
  },
  reminderText: {
    fontSize: moderateScale(16),
  },
  IconStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  dateStyle: {
    flex: 1,
    fontSize: moderateScale(16),
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGray,
    borderBottomRightRadius: moderateScale(30),
  },
  eventDivider: {
    height: moderateScale(40),
    borderColor: colors.dividerColor,
    borderWidth: moderateScale(0.4),
    marginHorizontal: horizontalScale(10),
  },
  inputStyle: {
    flex: 1,
    fontSize: moderateScale(14),
    fontFamily: fonts.regular,
    color: colors.dark,
    padding: moderateScale(2),
  },
});

export default CustomBottomSheet;
