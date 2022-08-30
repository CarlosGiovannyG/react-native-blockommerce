import { withStyles } from '$styleguide/theme';

const walkthroughStyles = withStyles(({ palette, spacing, typography }) => ({
  homeTitle: {
    textStyles: {
      marginBottom: spacing[4] + spacing[2],
      marginTop: spacing[3],
    },
  },
  homeDescription: {
    textStyles: {
      marginBottom: spacing[4],
      color: '#38464F',
    },
  },
  texthomeSeparator: {
    textStyles: {
      marginBottom: spacing[2],
      marginTop: spacing[2],
    },
  },
  textColorAuth: {
    textStyles: {
      color: '#38464F',
    },
  },
  textGuestLogin: {
    textStyles: {
      ...typography.h3,
      fontSize: 12,
    },
  },
  containerButtons: {
    container: {
      marginHorizontal: spacing[5] + spacing[4],
    },
  },
}));

export default walkthroughStyles;
