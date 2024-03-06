import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React, { Fragment } from "react";
import { useTranslation } from "../hooks/useTranslation";
import {
  colors,
  fonts,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../theme";

interface TextFieldProps {
  placeholder?: string | undefined;
  style?: StyleProp<TextStyle> | undefined;
  value?: string | undefined;
  handleChange?: (text: string) => void;
  leftIcon?: JSX.Element;
  color?: string;
  label?: string;
  isValidated?: boolean;
  secureTextEntry?: boolean;
  rightIcon?: JSX.Element;
  keyboardType?: KeyboardTypeOptions | undefined;
  textInputStyle?: StyleProp<ViewStyle>;
}
const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  style,
  value,
  handleChange,
  leftIcon,
  color,
  label,
  isValidated = true,
  secureTextEntry = false,
  rightIcon = false,
  keyboardType = "ascii-capable",
  textInputStyle,
}) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      {!!label && <Text style={styles.labelName}>{label}</Text>}
      <View style={[styles.textInputWrapper, textInputStyle]}>
        {leftIcon && <View style={styles.iconWrapper}>{leftIcon}</View>}
        <TextInput
          placeholder={placeholder}
          value={value}
          style={[styles.input, style]}
          onChangeText={handleChange}
          placeholderTextColor={colors.dark}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
        {isValidated && rightIcon && (
          <View style={styles.rightIconWrapper}>{rightIcon}</View>
        )}
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  textInputWrapper: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    borderRadius: moderateScale(12),
    borderWidth: 0.6,
    borderColor: colors.darkGray,
    paddingVertical: verticalScale(3),
    paddingLeft: moderateScale(0),
  },
  input: {
    color: colors.textColor,
    fontSize: moderateScale(14),
    fontFamily: fonts.regular,
    width: moderateScale(270),
    paddingLeft: moderateScale(15),
  },
  iconWrapper: {},
  labelName: {
    color: colors.textColor,
    fontSize: moderateScale(16),
    fontFamily: fonts.regular,
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(8),
  },
  rightIconWrapper: {
    paddingLeft: verticalScale(20),
  },
});

export default React.memo(TextField);
