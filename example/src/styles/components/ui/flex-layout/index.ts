import { withStyles } from '$styleguide/theme';

export const defaultFlexLayoutStyles = withStyles(({ palette, spacing }) => ({
  center: {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  flex_row: {
    container: {
      flexDirection: 'row',
    },
  },
  flex_row_reverse: {
    container: {
      flexDirection: 'row-reverse',
    },
  },
  flex_column: {
    container: {
      flexDirection: 'column',
    },
  },
  flex_column_reverse: {
    container: {
      flexDirection: 'column-reverse',
    },
  },
  space_between: {
    container: {
      justifyContent: 'space-between',
    },
  },
  wrapperXs: {
    container: {
      marginHorizontal: spacing[0],
    },
  },
  wrapperSm: {
    container: {
      marginHorizontal: spacing[1],
    },
  },
  wrapperMed: {
    container: {
      marginHorizontal: spacing[2],
    },
  },
  wrapperLg: {
    container: {
      marginHorizontal: spacing[3],
    },
  },
  mt_1: {
    container: {
      marginTop: spacing[1],
    },
  },
  mt_2: {
    container: {
      marginTop: spacing[2],
    },
  },
  mt_3: {
    container: {
      marginTop: spacing[3],
    },
  },
  mt_4: {
    container: {
      marginTop: spacing[4],
    },
  },
  mb_1: {
    container: {
      marginBottom: spacing[2],
    },
  },
  mb_2: {
    container: {
      marginBottom: spacing[3],
    },
  },
  mb_3: {
    container: {
      marginBottom: spacing[4],
    },
  },
  mb_4: {
    container: {
      marginBottom: spacing[5],
    },
  },
  pt_1: {
    container: {
      paddingTop: spacing[1],
    },
  },
  pt_2: {
    container: {
      paddingTop: spacing[2],
    },
  },
  pt_3: {
    container: {
      paddingTop: spacing[3],
    },
  },
  pt_4: {
    container: {
      paddingTop: spacing[4],
    },
  },
  pb_1: {
    container: {
      paddingBottom: spacing[1],
    },
  },
  pb_2: {
    container: {
      paddingBottom: spacing[2],
    },
  },
  pb_3: {
    container: {
      paddingBottom: spacing[3],
    },
  },
  pb_4: {
    container: {
      paddingBottom: spacing[4],
    },
  },
  pv_0: {
    container: {
      paddingVertical: spacing[0],
    },
  },
  pv_1: {
    container: {
      paddingVertical: spacing[1],
    },
  },
  pv_2: {
    container: {
      paddingVertical: spacing[2],
    },
  },
  pv_3: {
    container: {
      paddingVertical: spacing[3],
    },
  },
  pv_4: {
    container: {
      paddingVertical: spacing[4],
    },
  },
  pv_5: {
    container: {
      paddingVertical: spacing[5],
    },
  },
  bg_primary: {
    container: {
      backgroundColor: palette.primary[palette.type],
    },
  },
  bg_secondary: {
    container: {
      backgroundColor: palette.secondary[palette.type],
    },
  },
  bg_dark: {
    container: {
      backgroundColor: palette.primary.dark,
    },
  },
  bg_light: {
    container: {
      backgroundColor: palette.primary.light,
    },
  },
  ml_1: {
    container: {
      marginLeft: spacing[2],
    },
  },
  ml_2: {
    container: {
      marginLeft: spacing[3],
    },
  },
  ml_3: {
    container: {
      marginLeft: spacing[4],
    },
  },
  ml_4: {
    container: {
      marginLeft: spacing[5],
    },
  },
  mr_1: {
    container: {
      marginRight: spacing[2],
    },
  },
  mr_2: {
    container: {
      marginRight: spacing[3],
    },
  },
  mr_3: {
    container: {
      marginRight: spacing[4],
    },
  },
  mr_4: {
    container: {
      marginRight: spacing[5],
    },
  },
  bg_white: {
    container: {
      backgroundColor: '#FFFFFF',
    },
  },
}));
