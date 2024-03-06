import {
  ImageRequireSource,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
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
import FastImage from "react-native-fast-image";

interface SearchHeaderProps {
  placeholder?: string | undefined;
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  leftIcon?: ImageRequireSource;
  rightIcon?: JSX.Element;
  rightOnPress?: (() => void) | undefined;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
const CustomSearchField: React.FC<SearchHeaderProps> = ({
  placeholder,
  value,
  onChangeText,
  leftIcon,
  rightIcon,
  rightOnPress,
  containerStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <FastImage
        source={leftIcon}
        style={styles.iconContainer}
        resizeMode="contain"
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.dark}
        style={[styles.inputStyle, textStyle]}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: moderateScale(50),
    borderWidth: 1,
    borderColor: colors.borderGray,
    backgroundColor: colors.light,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(8),
  },
  inputStyle: {
    flex: 1,
    color: colors.textColor,
    paddingHorizontal: moderateScale(12),
    fontSize: font14Px,
    fontFamily: fonts.semiBold,
  },
  iconContainer: {
    paddingLeft: horizontalScale(5),
    width: moderateScale(20),
    height: moderateScale(20),
  },
  rightIcon: {},
});
