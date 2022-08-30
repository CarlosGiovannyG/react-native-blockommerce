import { withStyles } from '$styleguide/theme';

export const defaultImagInfoCard = withStyles(({ palette, spacing }) => ({
  back_1: {
    container: {
      backgroundColor: palette.gray[300]
    },
  },

  brand_imag_infoCard_1: {
    imageStyles: {
      width: 105,
      height: 25,
      marginLeft: 5
    },
  },

  brand_imag_infoCard_2: {
    imageStyles: {
      width: 110,
      height: 36
    },
  },

  brand_imag_infoCard_3: {
    imageStyles: {
      width: 80,
      height: 80,
      marginTop: -30,
      marginLeft: 20
    },
  },

  brand_imag_infoCard_lenovo: {
    imageStyles: {
      width: 110,
      height: 22,
      marginTop: 0
    },
  },

  brand_imag_infoCard_mabe: {
    imageStyles: {
      width: 90,
      height: 25,
      marginTop: 0,
      marginLeft: 5
    },
  },

  brand_imag_infoCard_4: {
    imageStyles: {
      width: 100,
      height: 46,
      marginTop: 0
    },
  },

  brand_imag_infoCard_oster: {
    imageStyles: {
      width: 105,
      height: 48,
      marginTop: 0
    },
  },

  brand_imag_infoCard_samsung: {
    imageStyles: {
      width: 110,
      height: 16,
      marginTop: 8
    },
  },

  brand_imag_infoCard_sony: {
    imageStyles: {
      width: 110,
      height: 18,
      marginTop: 5
    },
  },

  brand_imag_infoCard_whir: {
    imageStyles: {
      width: 110,
      height: 60,
      marginTop: -20
    },
  },
  mainTitleServices: {
    textStyles: {
      fontSize: 18,
    },
  },
  modalCloseButton: {
    container: {
      alignItems: 'flex-end',
    },
  },
  modalTextCenter: {
    container: {
      alignSelf: 'center',
    },
  },
  modalTitleServices: {
    textStyles: {
      color: '#178BFC',
      fontWeight: 'bold',
    },
  },
  modalPhone: {
    textStyles: {
      fontWeight: 'bold',
    },
  },
}));
