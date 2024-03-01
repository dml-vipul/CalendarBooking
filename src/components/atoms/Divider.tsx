import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateScale } from "../../theme";
import { getSelectedTheme } from "../../helpers/commonTheme";

interface DividerProps {
  LineStyles?: object | undefined;
}

const Divider: React.FC<DividerProps> = ({ LineStyles }) => {
  const selectedTheme = getSelectedTheme();
  const styles = generateStyles(selectedTheme);
  return <View style={[styles.divider, LineStyles]} />;
};

export default Divider;

const generateStyles = (selectedTheme: any) =>
  StyleSheet.create({
    divider: {
      height: moderateScale(1),
      backgroundColor: selectedTheme.darkGray,
      marginVertical: moderateScale(20),
    },
  });
