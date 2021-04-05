import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dimensions, PixelRatio} from 'react-native';

const baseWidth = 375;
const baseHeight = 812;

const wpPx = pixel => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel((screenWidth * pixel) / baseWidth);
};

const hpPx = pixel => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel((screenHeight * pixel) / baseHeight);
};

const Metrics = {
  wp(px) {
    return wpPx(px);
  },
  hp(px) {
    return hpPx(px);
  },
  width(px) {
    return wp(px);
  },
  height(px) {
    return hp(px);
  },
};

export default Metrics;
