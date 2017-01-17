import {
  blue500, blue700, faintBlack, deepOrange700, darkBlack, grey200, grey500, grey100, white, indigo800,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import { Spacing } from 'material-ui/styles/spacing';

export default {
  spacing: Spacing,
  fontFamily: 'Source Sans Pro, sans-serif',
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: faintBlack,
    accent1Color: deepOrange700,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: indigo800,
    canvasColor: white,
    borderColor: grey200,
    disabledColor: fade(darkBlack, 0.3),
  },
};
