import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { memo } from "react";
import { colors, fonts, horizontalScale, moderateScale } from "../../../theme";
import { font16Px } from "../../../theme/typography";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { getSelectedTheme } from "../../../helpers/commonTheme";

interface AppBackHeaderProps {
  title?: string;
  backButton?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const AppBackHeader: React.FC<AppBackHeaderProps> = ({
  title,
  backButton,
  containerStyle,
}) => {
  const navigation = useNavigation();
  const selectedTheme = getSelectedTheme();

  const styles = generateStyles(selectedTheme);
  return (
    <View style={[styles.headerContainer, containerStyle]}>
      {backButton && (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backIcon}
        >
          <Icon
            name="chevron-left"
            size={moderateScale(30)}
            color={selectedTheme.textColor}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const generateStyles = (selectedTheme: any) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: "row",
      height: moderateScale(90),
      paddingTop: moderateScale(20),
      backgroundColor: selectedTheme.themeColor,
    },
    headerTitle: {
      flex: 1,
      fontSize: font16Px,
      color: selectedTheme.textColor,
      fontFamily: fonts.semiBold,
      textAlign: "center",
      paddingRight: horizontalScale(20),
    },
    backIcon: {
      paddingLeft: moderateScale(10),
    },
  });

export default memo(AppBackHeader);
