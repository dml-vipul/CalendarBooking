//File for Margins and Paddings

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './responsive';

//Button Sizes
export const large = moderateScale(84);
export const small = large / 2;
export const extraSmall = large / 4;

//Verticals
export const VERTICAL_1 = verticalScale(10);
export const VERTICAL_2 = verticalScale(14);
export const VERTICAL_3 = verticalScale(16);
export const VERTICAL_4 = verticalScale(18);
export const VERTICAL_5 = verticalScale(20);
export const VERTICAL_6 = verticalScale(22);
export const VERTICAL_7 = verticalScale(24);
export const VERTICAL_8 = verticalScale(32);

//Horizontals
export const HORIZONTAL_1 = horizontalScale(2);
export const HORIZONTAL_2 = horizontalScale(4);
export const HORIZONTAL_3 = horizontalScale(12);
export const HORIZONTAL_4 = horizontalScale(16);
export const HORIZONTAL_5 = horizontalScale(18);
export const HORIZONTAL_6 = horizontalScale(20);
export const HORIZONTAL_8 = horizontalScale(22);
export const HORIZONTAL_9 = horizontalScale(24);
//Paddings
export const BUTTON_PADDING = moderateScale(5);

//Modal Container Margin
export const MODAL_MARGIN = moderateScale(10);
