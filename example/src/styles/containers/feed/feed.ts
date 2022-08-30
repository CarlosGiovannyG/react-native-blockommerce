import { withStyles } from '$styleguide/theme';
import { Dimensions } from 'react-native';

export const feedStyles = withStyles(({ palette, typography, spacing }) => ({
  sliderHome: {
    sliderContainer: {
      backgroundColor: '#FFFFFF',
    },
    paginationPoint: {
      width: 6,
      height: 6,
      borderRadius: 16,
      backgroundColor: palette.tertiary[palette.type],
      marginHorizontal: 8,
    },
    paginationPointContainer: {
      flexDirection: 'row',
      height: 16,
      width: Dimensions.get('screen').width,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    stepInfoContainer: {
      paddingHorizontal: 16,
      paddingVertical: 16,
    },
  },
  scrollViewContainer: {
    container: {
      backgroundColor: '#FFFFFF',
    },
  },
  wrapperMenuHome: {
    container: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9,
      borderRadius: 11,
      padding: 10,
      marginVertical: spacing[4],
      marginLeft: spacing[3],
      marginRight: spacing[3],
    },
  },
  flexRowHomeStyle: {
    container: {
      borderRadius: spacing[4],
    },
  },
  flexColHomeStyle: {
    container: {
      borderRadius: spacing[4],
    },
  },
  menuContainer: {
    container: {
      flex: 1,
    },
  },
  mainTitle: {
    textStyles: {
      paddingVertical: spacing[2],
      margin: spacing[3],
      marginTop: spacing[5],
    },
  },
  imagesBanner: {
    imageStyles: {
      borderRadius: spacing[3],
    },
  },
  shelfStyles: {
    container: {
      marginHorizontal: spacing[5],
    }
  },    
  iconTabBarCart: {
    container: {
      width: 60,
      height: 60,
      borderRadius: 300,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#FFF',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 4,
      backgroundColor: '#FFF',
    },
  },
  savedAddressText: {
    textStyles: {
      color: '#658289',
    }
  },
  changeAddressLink: {
    textStyles: {
      color: '#d9001a',
      fontSize: 13,
      fontWeight: '600',
    },
  },
  selectedAddressStyles: {
    textStyles: {
      color: '#0B5AA8',
      fontSize: 13,
      fontWeight: 'bold',
    },
  },
}));
