import { withStyles } from '$styleguide/theme';

export const defaultSelectStyle = withStyles(
  ({ palette, typography, spacing }) => ({
    selectDefault: {
      buttomStyle: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: palette.gray[500],
        borderRadius: spacing[4],
        opacity: 1,
        width: '100%',
        textAlign: 'left',
        marginTop: spacing[3],
        paddingLeft: spacing[3],
        paddingRight: spacing[3],
      },
      buttomTextStyle: {
        fontSize: 14,
        textAlign: 'left',
        opacity: 1,
      },
      errorTextStyle: {
        color: palette.error[palette.type],
        fontWeight: '600',
        marginLeft: spacing[3],
      },
    },
  })
);
