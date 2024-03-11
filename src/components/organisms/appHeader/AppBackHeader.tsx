import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { memo } from "react";
import {
  colors,
  fonts,
  horizontalScale,
  moderateScale,
  typography,
} from "../../../theme";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

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
            color={colors.dark}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    backgroundColor: colors.light,
    alignItems: "center",
  },
  headerTitle: {
    flex: 1,
    fontSize: typography.font18Px,
    color: colors.dark,
    fontFamily: fonts.poppinsRegular,
    paddingLeft: horizontalScale(10),
  },
  backIcon: {
    paddingLeft: moderateScale(10),
  },
});

export default memo(AppBackHeader);
