import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
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
import { getSelectedTheme } from "../../helpers/commonTheme";

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
}) => {
  const { t } = useTranslation();
  const selectedTheme = getSelectedTheme();
  const styles = generateStyles(selectedTheme);
  return (
    <Fragment>
      {!!label && <Text style={styles.labelName}>{label}</Text>}
      <View style={styles.textInputWrapper}>
        {leftIcon && <View style={styles.iconWrapper}>{leftIcon}</View>}
        <TextInput
          placeholder={placeholder}
          value={value}
          style={[styles.input, style]}
          onChangeText={handleChange}
          placeholderTextColor={selectedTheme.placeholderColor}
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

const generateStyles = (selectedTheme: any) =>
  StyleSheet.create({
    textInputWrapper: {
      flexDirection: "row",
      textAlign: "center",
      alignItems: "center",
      borderRadius: moderateScale(12),
      borderWidth: 0.6,
      borderColor: selectedTheme.darkGray,
      paddingVertical: verticalScale(3),
      paddingLeft: moderateScale(0),
    },
    input: {
      color: selectedTheme.textColor,
      fontSize: moderateScale(14),
      fontFamily: fonts.regular,
      width: moderateScale(270),
      paddingLeft: moderateScale(15),
    },
    iconWrapper: {},
    labelName: {
      color: selectedTheme.textColor,
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
