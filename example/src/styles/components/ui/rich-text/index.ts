import { withStyles } from '$styleguide/theme';

export const defaultRichTextStyle = withStyles(
  ({ palette, typography, spacing }) => ({
    h1: {
      textStyles: {
        ...typography.h1,
      },
    },
    h2: {
      textStyles: {
        ...typography.h2,
      },
    },
    subtitle2:{
      textStyles: {
        ...typography.subtitle2,
      },
    },
    h3: {
      textStyles: {
        ...typography.h3,
      },
    },
    textPrimary: {
      textStyles: {
        color: palette.textPrimary[palette.type],
      },
    },
    textSecondary: {
      textStyles: {
        color: palette.textSecondary[palette.type],
      },
    },
    textTertiary: {
      textStyles: {
        color: palette.textTertiary[palette.type],
      },
    },
    body1: {
      textStyles: {
        ...typography.body1,
      },
    },
    alignCenter:{
      textStyles:{
        textAlign: 'center',
      }
    },
    textGray:{
      textStyles:{
        color: palette.gray[600],
      }
    },
    w_0:{
      textStyles:{
        width: '0%'
      }
    },
    w_25:{
      textStyles:{
        width: '25%'
      }
    },
    w_50:{
      textStyles:{
        width: '50%'
      }
    },
    w_75:{
      textStyles:{
        width: '75%'
      }
    },
    w_100:{
      textStyles:{
        width: '100%',
      }
    },
    body2: {
      textStyles: {
        ...typography.body2,
      },
    },
    body3: {
      textStyles: {
        ...typography.body3,
      },
    },
    subtitle3: {
      textStyles: {
        ...typography.subtitle3,
      },
    },
    subtitle4: {
      textStyles: {
        ...typography.subtitle4,
      },
    },
  })
);
