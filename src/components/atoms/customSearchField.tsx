import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo } from "react";
import {
  colors,
  fonts,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../theme";
import { font14Px } from "../../theme/typography";
import { getSelectedTheme } from "../../helpers/commonTheme";

interface SearchHeaderProps {
  placeholder?: string | undefined;
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  rightOnPress?: (() => void) | undefined;
}
const CustomSearchField: React.FC<SearchHeaderProps> = ({
  placeholder,
  value,
  onChangeText,
  leftIcon,
  rightIcon,
  rightOnPress,
}) => {
  const selectedTheme = getSelectedTheme();
  const styles = generateStyles(selectedTheme);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{leftIcon}</View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={selectedTheme.placeholderColor}
        style={styles.inputStyle}
      />
      {rightIcon && (
        <TouchableOpacity style={styles.rightIcon} onPress={rightOnPress}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(CustomSearchField);

const generateStyles = (selectedTheme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
      height: moderateScale(50),
      borderWidth: 1,
      borderColor: selectedTheme.lightGray,
      backgroundColor: selectedTheme.themeColor,
      borderRadius: moderateScale(10),
      paddingHorizontal: moderateScale(8),
    },
    inputStyle: {
      flex: 1,
      color: selectedTheme.textColor,
      paddingHorizontal: moderateScale(12),
      fontSize: font14Px,
      fontFamily: fonts.semiBold,
    },
    iconContainer: {
      paddingLeft: horizontalScale(5),
    },
    rightIcon: {},
  });
