import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  useColorScheme,
} from "react-native";
import React, { Fragment } from "react";
import { colors } from "../../theme";

interface SafeAreaContainerProps {
  background?: "1" | "2";
  Header?: React.FC;
  Footer?: React.FC;
  children?: any;
  routeName?: string;
}
const SafeAreaContainer: React.FC<SafeAreaContainerProps> = ({
  children,
  routeName = "",
}) => {
  return (
    <Fragment>
      <SafeAreaView style={[styles.topSafeArea]} />
      <StatusBar
        backgroundColor={colors.light}
        barStyle={
          routeName === "GetStarted" || !routeName
            ? "light-content"
            : "dark-content"
        }
      />
      <SafeAreaView style={[styles.bottomSafeArea]}>{children}</SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
  },
  bottomSafeArea: {
    flex: 1,
  },
});

export default React.memo(SafeAreaContainer);
