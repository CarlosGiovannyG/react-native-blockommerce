import { withStyles } from '$styleguide/theme';

export const defaultButtonStyle = withStyles(
  ({ palette, typography, spacing }) => ({
    buttonPrimary:{
      buttonStyles:{
        backgroundColor: palette.primary[palette.type] ,
        width: '100%',
        height: 50,
        borderRadius: spacing[4],
        elevation: 10,
        justifyContent: 'center',
      },
      buttonTextStyles:{
        ...typography.button,
        color: palette.textPrimary['dark']
      },
    },
    buttonSecondary:{
      buttonStyles:{
        backgroundColor: palette.secondary['light'],
        width: '100%',
        height: 50,
        borderRadius: spacing[4],
        elevation: 10,
        justifyContent: 'center',
      },
      buttonTextStyles: {
        ...typography.button,
        color: palette.textPrimary.light,
      },
    },
    buttonTertiary: {
      buttonStyles: {
        backgroundColor: palette.secondary.light,
        width: '30%',
        height: 50,
        borderRadius: spacing[4],
        elevation: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: spacing[3],
      },
      buttonTextStyles: {
        ...typography.body2,
        color: palette.textPrimary.dark,
      },
    },
    primaryButtonShowMore: {
      buttonStyles: {
        width: 'auto',
        elevation: 2,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 33,
        height: 40,
        alignSelf: 'center'
      },
      buttonTextStyles: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        letterSpacing: 0,
        opacity: 1,
        alignSelf: 'center',
      },
    },
    secondaryButtonShowMore: {
      buttonStyles: {
        padding: spacing[2],
        borderRadius: 30,
        borderColor: '#178BFC',
        borderWidth: 1,
        textAlign: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
      },
      buttonTextStyles: {
        color: palette.primary.main,
        fontSize: 10,
        fontFamily: 'Montserrat-SemiBold',
      },
    },
    storeFormButtonStyle: {
      buttonStyles: {
        width: '55%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: spacing[4] + spacing[3],
        marginBottom: spacing[3],
      },
      buttonTextStyles: {
        ...typography.h3,
        color: palette.textPrimary.dark,
      },
    },
    smallButton: {
      buttonStyles: {
        backgroundColor: palette.primary[palette.type],
        width: '50%',
        height: 50,
        borderRadius: spacing[4],
        elevation: 10,
        justifyContent: 'center',
        marginHorizontal: spacing[2],
        paddingHorizontal: spacing[4],
      },
      buttonTextStyles: {
        ...typography.h3,
        color: palette.textPrimary['dark'],
      },
    },
  })
);
