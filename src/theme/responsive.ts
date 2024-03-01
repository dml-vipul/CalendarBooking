//Converting pixels to density pixels for responsive designs

import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 393; // 525
const guidelineBaseHeight = 852; // 1020

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };
