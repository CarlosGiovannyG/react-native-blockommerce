import { withStyles } from '$styleguide/theme';

export const defaultStoreLinkStyle = withStyles(({ palette, spacing }) => ({
  primaryLink: {
    container: {
      borderRadius: spacing[4],
      backgroundColor: palette.primary[palette.type],
      marginBottom: spacing[2],
      padding: spacing[2],
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  secondaryLink: {
    container: {
      borderRadius: spacing[4],
      borderWidth: 1,
      backgroundColor: 'white',
      borderColor: palette.secondary[palette.type],
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacing[2],
    },
  },
  tertiaryLink: {
    container: {
      borderRadius: spacing[4],
      backgroundColor: palette.primary[palette.type],
      marginBottom: spacing[2],
      padding: spacing[2],
      width: '50%',
      alignSelf: 'center',
    },
  },
  smallLink: {
    container: {
      borderRadius: spacing[4],
      backgroundColor: palette.primary[palette.type],
      marginBottom: spacing[2],
      padding: spacing[2],
      width: '25%',
      alignSelf: 'center',
    },
  },
  smallLinkVariant: {
    container: {
      width: '50%',
      paddingHorizontal: 23,
      paddingVertical: 12,
      borderRadius: 23,
      borderWidth: 1,
      backgroundColor: '#FD0D1F',
      borderColor: '#FD0D1F',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyles:{
      fontSize: 15,
      fontFamily: 'Montserrat-SemiBold',
    }
  },
}));
