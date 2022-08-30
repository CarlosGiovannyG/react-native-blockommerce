import { withStyles } from '$styleguide/theme';

export const signStyles = withStyles(({ palette, typography, spacing }) => ({
  homeHeader: {
    textStyles: {
      fontFamily: 'Montserrat-Black',
      color: '#38464F',
      fontSize: 40,
    },
  },
  buttonAuthStyle: {
    buttonTextStyles: {
      ...typography.subtitle4,
    },
  },
  buttonAuth: {
    buttonStyles: {
      backgroundColor: '#FFFFFF',
    },
  },
  insertEmailDescription: {
    textStyles: {
      marginTop: spacing[4],
      marginBottom: spacing[2],
    },
  },
  insertPasswordInput: {
    container: {
      backgroundColor: 'red',
      marginHorizontal: spacing[4],
    },
  },
  linkStoreForm: {
    LabelStyles: {
      color: '#0B5AA8',
    },
  },
  inputRegisterForm: {
    inputStyles: {
      marginTop: spacing[3],
    },
  },
  selectRegisterForm: {
    buttomStyle: {
      marginTop: spacing[3] + spacing[3],
    },
  },
  subtitleVerification: {
    textStyles: {
      color: '#707070',
    },
  },
  authPages: {
    container: {
      flex: 1,
    },
  },
}));
