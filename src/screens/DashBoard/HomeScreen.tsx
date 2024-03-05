import React, { ReactNode, useEffect, useRef, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import dayjs from "dayjs";

import AppHeader from "../../components/organisms/appHeader/AppHeader";
import Container from "../../components/atoms/container";
import { profileImage } from "../../utils/images";
import {
  colors,
  fonts,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../theme";
import CustomButton from "../../components/atoms/customButton";
import FastImage from "react-native-fast-image";
import { addEvent, dateArrowLeft, dateArrowRight } from "../../utils/icons";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import CustomBottomSheet from "../../components/molecules/BottomModal/BottomModal";
import CalendarHeader from "../../components/atoms/CalendarHeader";

interface Week {
  [x: string]: ReactNode;
  start: string;
  end: string;
  dates: number[];
  dayNames: string[];
}

const HomeScreen = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<null | Week>(null);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const [title, setTitle] = useState("Passing my data 🔥");

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();

  const handleNextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));

  const handlePrevMonth = () =>
    setCurrentMonth(currentMonth.subtract(1, "month"));

  const handleCustomSelection = (item: Week, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
  };

  useEffect(() => {
    handleCustomSelection(weeks[selectedIndex], selectedIndex);
  }, [weeks]);

  function GetWeeksInMonth(
    year: number,
    month: number
  ): { start: string; end: string; dates: number[]; dayNames: string[] }[] {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weeks = [];
    const firstDate = new Date(year, month - 1, 1);
    const lastDate = new Date(year, month, 0);
    const numDays = lastDate.getDate();

    console.log(numDays);

    const monthName = new Intl.DateTimeFormat("en", { month: "short" })
      .format(firstDate)
      .toLowerCase();

    let dayOfWeekCounter = firstDate.getDay();
    let currentWeek = [];
    let currentWeekDayNames = [];
    let weekStart = 1;

    for (let date = 1; date <= numDays; date++) {
      currentWeek.push(date);
      currentWeekDayNames.push(daysOfWeek[(dayOfWeekCounter + date - 1) % 7]);

      if (currentWeek.length === 7 || date === numDays) {
        const weekEnd = date;
        weeks.push({
          start: `${weekStart} ${monthName}`,
          end: `${weekEnd} ${monthName}`,
          dates: currentWeek,
          dayNames: currentWeekDayNames,
          monthName: monthName,
        });
        currentWeek = [];
        currentWeekDayNames = [];
        weekStart = date + 1;
      }
    }

    return weeks;
  }

  useEffect(() => {
    console.log(currentMonth.format("MM"));
    const weeksInMonth = GetWeeksInMonth(
      parseInt(currentMonth.format("YYYY")),
      parseInt(currentMonth.format("MM"))
    );
    setWeeks(weeksInMonth);
  }, [currentMonth]);

  const renderWeekItem = ({ item, index }: { item: Week; index: number }) => (
    <TouchableOpacity
      style={styles.scrollHeader}
      onPress={() => handleCustomSelection(item, index)}
    >
      <Text style={styles.scrollDates}>
        {item?.dates?.length > 1 && `${item.start} -`} {item.end}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Container style={styles.mainContainer}>
      <View style={styles.appHeaderContainer}>
        <AppHeader
          title="Hi, Divit !"
          profileSource={profileImage}
          showNotification={true}
        />
      </View>
      <View style={styles.subHeaderContainer}>
        <View style={styles.subTextContainer}>
          <View style={styles.meetingIndicator} />
          <View>
            <Text style={styles.heading}>Meetings</Text>
            <Text style={styles.subHeading}>
              Meeting at 12 pm with @Atul Goyal!{" "}
            </Text>
          </View>
          <View style={styles.divider} />
        </View>
        <View style={{ flex: 1 }}>
          <CustomButton
            title="View All"
            onPress={() => {}}
            icon={true}
            buttonStyle={styles.btnStyle}
            textStyle={styles.btnTitleStyle}
          />
        </View>
      </View>
      <CalendarHeader
        currentMonth={currentMonth}
        handleNextMonth={handleNextMonth}
        handlePrevMonth={handlePrevMonth}
      />
      <View>
        <FlatList
          data={weeks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderWeekItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {selectedItem ? (
        <View style={styles.rowContainer}>
          {selectedItem?.dates?.map((date, index) => (
            <View style={styles.eventContainer} key={index}>
              <Text key={index} style={styles.eventDates}>
                {date} {selectedItem?.dayNames[index]}/{selectedItem?.monthName}
              </Text>
              <View style={styles.eventDivider} />
              <View style={styles.eventDescription}>
                <Text style={styles.eventTitle}>-</Text>
              </View>
              <View style={styles.eventDivider} />
              <TouchableOpacity onPress={handleOpenPress}>
                <FastImage
                  source={addEvent}
                  style={styles.IconStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.rowContainer}>
          {weeks[0]?.dates?.map((date, index) => (
            <View style={styles.eventContainer} key={index}>
              <Text key={index} style={styles.eventDates}>
                {date} {weeks[0]?.dayNames[index]}/{weeks[0]?.monthName}
              </Text>
              <View style={styles.eventDivider} />
              <View style={styles.eventDescription}>
                <Text style={styles.eventTitle}>-</Text>
              </View>
              <View style={styles.eventDivider} />
              <TouchableOpacity>
                <FastImage
                  source={addEvent}
                  style={styles.IconStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
      <CustomBottomSheet ref={bottomSheetRef} title={title} />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 0,
  },
  appHeaderContainer: {
    paddingTop: moderateScale(30),
    paddingHorizontal: moderateScale(20),
  },
  subHeaderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightBlue,
    padding: moderateScale(15),
  },
  subTextContainer: {
    flexDirection: "row",
    gap: horizontalScale(5),
  },
  btnStyle: {
    backgroundColor: colors.primary,
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(30),
  },
  btnTitleStyle: {
    color: colors.light,
    fontSize: moderateScale(12),
    fontFamily: fonts.poppinsRegular,
    textAlign: "center",
    paddingRight: moderateScale(5),
  },
  divider: {
    height: moderateScale(60),
    borderColor: colors.dividerColor,
    borderWidth: moderateScale(0.4),
    marginHorizontal: horizontalScale(10),
  },
  heading: {
    fontSize: moderateScale(20),
    fontFamily: fonts.poppinsSemiBold,
    color: colors.dark,
  },
  subHeading: {
    fontSize: moderateScale(12),
    fontFamily: fonts.poppinsRegular,
    color: colors.dark,
  },
  meetingIndicator: {
    height: moderateScale(2),
    marginTop: verticalScale(9),
    padding: moderateScale(8),
    backgroundColor: colors.primary,
    borderRadius: moderateScale(30),
  },
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
  scrollDates: {
    backgroundColor: colors.highlightedGray,
    color: colors.dark,
    padding: moderateScale(10),
    borderRadius: moderateScale(8),
  },
  scrollHeader: {
    height: moderateScale(40),
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(10),
  },
  rowContainer: {
    paddingHorizontal: verticalScale(10),
  },
  eventDates: {
    flex: 0.4,
    fontSize: moderateScale(12),
    fontFamily: fonts.poppinsRegular,
    color: colors.dark,
  },
  eventContainer: {
    backgroundColor: colors.highlightedGray,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: moderateScale(2),
    padding: horizontalScale(6),
    borderRadius: moderateScale(8),
  },
  eventDivider: {
    height: moderateScale(40),
    borderColor: colors.dividerColor,
    borderWidth: moderateScale(0.4),
    marginHorizontal: horizontalScale(10),
  },
  eventDescription: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  eventTitle: {
    color: colors.dark,
  },
});
