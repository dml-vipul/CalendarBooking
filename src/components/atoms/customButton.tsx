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
  horizontalScale,
  moderateScale,
  typography,
  verticalScale,
} from "../../theme";
import FastImage from "react-native-fast-image";

interface CustomButtonProps {
  onPress: () => void | undefined;
  title: string;
  icon?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  imageStyle?: object;
  image?: ImageRequireSource;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  onPress = () => {},
  title = "",
  icon = false,
  buttonStyle,
  textStyle,
  imageStyle,
  image,
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
      {image && (
        <View style={{ paddingLeft: horizontalScale(10) }}>
          <FastImage
            source={image}
            resizeMode="contain"
            style={[styles.ImageStyle, imageStyle]}
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
    color: colors.dark,
    fontFamily: fonts.regular,
  },
  ImageStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
});

export default memo(CustomButton);
