import { withStyles } from '$styleguide/theme';
import { Dimensions, TextStyle } from 'react-native';

export const productDetailStyles = withStyles(
  ({ palette, typography, spacing }) => ({
    addToCartDetailProduct: {
      container: {
        backgroundColor: palette.info.main,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: spacing[4],
        paddingVertical: spacing[3],
        borderRadius: spacing[2],
        marginHorizontal: spacing[1],
        marginBottom: spacing[3],
      },
    },
    productBrandQuantityDetail: {
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: spacing[3],
        borderWidth: 1,
        borderColor: palette.gray.A100,
        paddingVertical: spacing[3],
        borderRadius: spacing[2],
        marginBottom: spacing[3],
      },
    },
    productName: {
      textStyles: {
        marginBottom: spacing[2],
      },
    },
    productDescription: {
      textStyles: {
        marginTop: spacing[3],
        marginBottom: spacing[2],
      },
    },
    divider: {
      container: {
        borderBottomWidth: 1,
        borderBottomColor: palette.gray.A100,
      },
    },
    filterCollapse: {
      summaryContainer: {
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        left: 0,
      },
    },
    filterNavigatorStyles: {
      container: {
        overflow: 'hidden',
        height: 100,
        //height: Dimensions.get('window').height * 0.7,
        flexDirection: 'row',
      },
    },
    flexLayoutRowOverlay: {
      container: {
        position: 'relative',
        backgroundColor: 'red',
        opacity: 0.3,
        left: 0,
        // height: Dimensions.get('screen').height,
        // width: Dimensions.get('screen').width,
      },
    },
  })
);
