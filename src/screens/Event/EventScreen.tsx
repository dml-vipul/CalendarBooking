import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { ReactNode, useEffect, useState } from "react";
import Container from "../../components/atoms/container";
import CalendarHeader from "../../components/atoms/CalendarHeader";
import dayjs from "dayjs";
import CustomSearchField from "../../components/atoms/customSearchField";
import { colors, moderateScale, verticalScale } from "../../theme";
import { searchIcon } from "../../utils/icons";
import GetWeeksInMonth from "../../helpers/GetWeeksInMonths";

interface Week {
  [x: string]: ReactNode;
  start: string;
  end: string;
  dates: number[];
  dayNames: string[];
}

const EventScreen = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [weeks, setWeeks] = useState<Week[]>([]);

  const [searchText, setSearchText] = useState("");

  const handleNextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));
  const handlePrevMonth = () =>
    setCurrentMonth(currentMonth.subtract(1, "month"));

  useEffect(() => {
    const weeksInMonth = GetWeeksInMonth(
      parseInt(currentMonth.format("YYYY")),
      parseInt(currentMonth.format("MM"))
    );
    setWeeks(weeksInMonth);
  }, [currentMonth]);

  const renderWeekItem = ({ item, index }: { item: Week; index: number }) => (
    <TouchableOpacity style={styles.scrollHeader} onPress={() => {}}>
      <Text style={styles.scrollDates}>
        {item?.dates?.length > 1 && `${item.start} -`} {item.end}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Container style={styles.container}>
      <CustomSearchField
        placeholder="Events"
        value={searchText}
        onChangeText={setSearchText}
        leftIcon={searchIcon}
        containerStyle={styles.searchContainer}
        textStyle={{ fontSize: moderateScale(18) }}
      />
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
    </Container>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(40),
    paddingHorizontal: 0,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: moderateScale(50),
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: colors.borderGray,
    backgroundColor: colors.light,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(8),
    marginHorizontal: moderateScale(10),
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
});
