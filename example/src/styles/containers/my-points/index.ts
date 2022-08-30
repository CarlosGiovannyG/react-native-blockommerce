import { withStyles } from '$styleguide/theme';

export const myPointsStyles = withStyles(
  ({ palette, typography, spacing }) => ({
    flexTextAlignItem: {
      container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    },
    contaninerProfileBox: {
      container: {
        width: 320,
        backgroundColor: palette.textPrimary.dark,
        elevation: 15,
        borderRadius: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    profileTitleH3: {
      textStyles: {
        ...typography.subtitle3,
        fontSize: 17.5,
        fontWeight: 'bold',
        color: palette.gray[800]
      },
    },

    profileTitleSubtitle3: {
      textStyles: {
        ...typography.subtitle3,
        fontSize: 15,
        color: palette.gray[700]
      },
    },

    profileTitleH1: {
      textStyles: {
        ...typography.subtitle3,
        fontSize: 30,
        fontWeight: 'bold',
        color: palette.tertiary.main
      },
    },
  })
);
