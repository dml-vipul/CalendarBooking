/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, View } from "react-native";
import type { ReactNode } from "react";

import React from "react";
import { colors, typography } from "../../theme";

interface ContainerProps {
  style?: object | undefined | null;
  children?: ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return <View style={[styles.container, style ? style : {}]}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: typography.HORIZONTAL_6,
    backgroundColor: colors.light,
  },
});
export default React.memo(Container);
