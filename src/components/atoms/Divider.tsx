import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, moderateScale } from "../../theme";

interface DividerProps {
  LineStyles?: object | undefined;
}

const Divider: React.FC<DividerProps> = ({ LineStyles }) => {
  return <View style={[styles.divider, LineStyles]} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: moderateScale(1),
    backgroundColor: colors.darkGray,
    marginVertical: moderateScale(20),
  },
});
