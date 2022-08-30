import { withStyles } from '$styleguide/theme';

export const defaultDatePickerStyle = withStyles(
  ({ palette, typography, spacing }) => ({
    storeFormDatePicker: {
      container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: palette.gray[600],
        borderRadius: spacing[4],
        paddingHorizontal: spacing[3],
        paddingVertical: spacing[2],
        height: 50,
        alignItems: 'center',
        marginBottom: spacing[3],
      },
      labelStyle: {
        marginLeft: spacing[3],
        marginBottom: spacing[1],
        fontSize: 13,
        fontFamily: 'Montserrat-SemiBold',
      },
    },
  })
);
