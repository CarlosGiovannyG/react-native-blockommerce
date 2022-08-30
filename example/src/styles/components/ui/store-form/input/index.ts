import { withStyles } from '$styleguide/theme';

export const defaultInputStyle = withStyles(
  ({ palette, typography, spacing }) => ({
    inputDefault: {
      inputStyles: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: palette.gray[500],
        borderRadius: spacing[4],
        opacity: 1,
        paddingLeft: spacing[3],
        paddingRight: spacing[3],
      },
      labelStyles: {
        marginLeft: spacing[3],
        marginBottom: spacing[1],
        fontSize: 13,
        fontFamily: 'Montserrat-SemiBold',
      },
    },
    fakeInputStyles: {
      container: {
        flexDirection: 'row',
        width: '94%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: palette.gray[600],
        borderRadius: spacing[4],
        paddingHorizontal: spacing[3],
        paddingVertical: spacing[1],
        alignItems: 'center',
      },
    },
    storeFormInputStyleSearch: {
      inputStyles: {
        width: '85%',
        backgroundColor: "#FFFFFF",
        borderRadius: spacing[4],
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: spacing[3],
      },
      wrapperStyles: {
        paddingVertical: spacing[2],
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    storeFormAddressInputStyle: {
      inputStyles: {
        marginTop: -20,
      },
    },
  })
);
