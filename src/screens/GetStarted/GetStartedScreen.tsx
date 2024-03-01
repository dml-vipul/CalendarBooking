import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import Container from "../../components/atoms/container";
import { colors, fonts, moderateScale, verticalScale } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/slice/AuthSlice";

const GetStartedScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleNavigation = () => {
    dispatch(setLogin(true));
    navigation.navigate("HomeStackScreen", { screen: "Home" });
  };
  return (
    <Container style={styles.container}>
      <TouchableOpacity
        style={styles.GetStartedContainer}
        onPress={handleNavigation}
      >
        <Text style={styles.textStyle}>Get Started</Text>
        <View>
          <Icon
            name="chevron-right"
            size={moderateScale(28)}
            color={colors.primary}
          />
        </View>
      </TouchableOpacity>
    </Container>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  GetStartedContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: moderateScale(50),
    right: 0,
    backgroundColor: colors.light,
    paddingHorizontal: moderateScale(25),
    paddingVertical: verticalScale(5),
    borderTopLeftRadius: moderateScale(20),
    borderBottomLeftRadius: moderateScale(20),
  },
  textStyle: {
    color: colors.primary,
    fontSize: moderateScale(16),
    fontFamily: fonts.poppinsRegular,
  },
});
