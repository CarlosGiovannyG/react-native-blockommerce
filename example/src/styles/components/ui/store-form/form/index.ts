import { withStyles } from '$styleguide/theme';

export const defaultFormStyle = withStyles(
  ({ palette, typography, spacing }) => ({
    editProfileForm: {
      formContainer: {
        marginHorizontal: spacing[3],
      },
    },
  })
);
