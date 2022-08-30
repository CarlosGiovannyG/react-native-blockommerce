import defaultStyles from './defaultStyles';
import walkthroughStyles from './containers/walkthrough/index';
import theme from './theme';
import { signStyles } from './containers/auth-sign/sign';
import signOtp from './containers/auth-sign/validate-otp-code';
import { feedStyles } from './containers/feed/feed';
import { productDetailStyles } from './containers/product-detail/index';
import { myOrderStyles } from './containers/my-orders/index';
import { defaultImagInfoCard } from './containers/service-centers';
import { myPointsStyles } from './containers/my-points';
import { addressesStyles } from './containers/addresses/addresses';

const StoreStyles = {
  ...defaultStyles,
  signStyles,
  signOtp,
  walkthroughStyles,
  feedStyles,
  productDetailStyles,
  myOrderStyles,
  defaultImagInfoCard,
  myPointsStyles,
  addressesStyles,
};

const StoreTheme = theme;

export { StoreTheme, StoreStyles };
