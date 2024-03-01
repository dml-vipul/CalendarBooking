import {
  ImageRequireSource,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { memo, useMemo } from "react";
import Icon from "react-native-vector-icons/Feather";

import {
  colors,
  fonts,
  moderateScale,
  typography,
  verticalScale,
} from "../../theme";

interface CustomButtonProps {
  onPress: () => void | undefined;
  title: string;
  icon?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  onPress = () => {},
  title = "",
  icon = false,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[styles.textStyle, textStyle]}>{title}</Text>
      {icon && (
        <View>
          <Icon
            name="chevron-right"
            size={moderateScale(15)}
            color={colors.light}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: verticalScale(15),
    backgroundColor: colors.primary,
  },
  textStyle: {
    fontSize: typography.font16Px,
    color: colors.light,
    fontFamily: fonts.regular,
  },
});

export default memo(CustomButton);
