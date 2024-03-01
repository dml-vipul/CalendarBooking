import {
  ImageRequireSource,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { memo } from "react";
import FastImage, { Source } from "react-native-fast-image";
import {
  colors,
  fonts,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../theme";
import { font14Px } from "../../../theme/typography";
import { TouchableOpacity } from "react-native-gesture-handler";
import { arrowBack, notificationIcon } from "../../../utils/icons";
import { useNavigation } from "@react-navigation/native";
import { profileImage } from "../../../utils/images";

interface AppHeaderProps {
  style?: ViewStyle;
  profileSource?: Source | ImageRequireSource;
  title?: string;
  backHandler?: () => void;
  showNotification?: boolean;
  showNotificationBadge?: boolean;
}
const AppHeader: React.FC<AppHeaderProps> = ({
  style,
  profileSource,
  title,
  showNotification = false,
  showNotificationBadge = false,
  backHandler,
}) => {
  const navigation = useNavigation();
  const backPress = () => {
    if (backHandler) {
      backHandler();
    } else {
      navigation.goBack();
    }
  };
  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftContainer}>
        {profileSource && (
          <FastImage
            source={profileSource}
            resizeMode="cover"
            style={styles.profileStyle}
          />
        )}
        {!!title && <Text style={styles.titleStyle}>{title}</Text>}
      </View>
      <View style={styles.rightContainer}>
        {showNotification && (
          <TouchableOpacity style={styles.iconContainer}>
            <FastImage
              source={notificationIcon}
              resizeMode="cover"
              style={styles.iconStyle}
              tintColor={colors.dark}
            />
            {showNotificationBadge && <View style={styles.iconBadge} />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default memo(AppHeader);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: moderateScale(8),
    height: verticalScale(50),
  },
  logoStyle: {
    width: moderateScale(128),
    height: moderateScale(45),
  },
  profileStyle: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: 100,
    borderColor: colors.secondary,
    borderWidth: 0.2,
  },
  titleStyle: {
    fontSize: font14Px,
    fontFamily: fonts.regular,
    color: colors.textColor,
    padding: horizontalScale(8),
    flex: 1,
  },

  leftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: moderateScale(40),
    height: moderateScale(40),
    alignItems: "center",
    justifyContent: "center",
  },
  iconStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  iconBadge: {
    backgroundColor: "red",
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: 20,
    position: "absolute",
    top: moderateScale(6),
    right: moderateScale(6),
  },
});
