import { withStyles } from '$styleguide/theme';

export const defaultProductStyle = withStyles(({ palette, spacing }) => ({
  productShelf: {
    shelfContainer: {
      flex: 1,
      backgroundColor: 'white',
      //margin: 16,
    },
    shelfCardStyles: {
      backgroundColor: palette.primary.light,
      borderRadius: 6,
    },
  },
  TechProductContainer: {
    container: {
      maxWidth: 160,
      padding: spacing[2],
    },
  },
  productImageTech: {
    container: {
      paddingLeft: 5,
      marginHorizontal: spacing[2],
    },
    imageStyles: {
      height: 150,
      width: 150,
    },
  },
  productNameTech: {
    container: {
      alignItems: 'flex-start',
    },
    textStyles: {
      fontSize: 12,
      fontWeight: '400',
      color: '#707070',
      lineHeight: 30,
      marginBottom: 12,
      marginLeft: 0,
    },
  },
  productDescription: {
    container: {},
    textStyles: {
      fontSize: 14,
      marginLeft: 0,
    },
  },
  productPrice: {
    container: {
      paddingLeft: 5,
      marginHorizontal: spacing[1],
    },
    textStyles: {
      color: palette.primary.jumbo,
      fontWeight: '700',
      textAlign: 'left',
    },
  },
  productBrand: {
    container: {},
    textStyles: {
      color: '#C6C6C6',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 14,
      marginBottom: 8,
    },
  },
  productCart: {
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  freeShipping: {
    container: {
      alignItems: 'center',
    },
  },
  textFreeShipping: {
    textStyles: {
      color: '#A4C735',
      fontSize: 10,
      lineHeight: 18,
      marginLeft: 5,
    },
  },
  textProductOffer: {
    textStyles: {
      backgroundColor: palette.primary.jumbo,
      borderRadius: 25,
      color: 'white',
      fontSize: 12,
      lineHeight: 18,
      position: 'absolute',
      textAlign: 'center',
      paddingHorizontal: 2,
      width: 38,
    },
  },
  productList: {
    container: {
      borderBottomColor: '#E2E2E2',
      borderBottomWidth: 1,
      marginLeft: 16,
      marginRight: 16,
      paddingVertical: 20,
      paddingHorizontal: 15,
    },
  },
  productPriceDesc: {
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  productDiscountBadge: {
    container: {
      width: 38,
      backgroundColor: palette.primary.jumbo,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
    },
    textStyles: {
      color: 'white',
      fontSize: 12,
      lineHeight: 18,
      textAlign: 'center',
      paddingHorizontal: 2,
      paddingVertical: 1,
      width: 38,
    },
  },

  addToCartProductSummary: {
    container: {
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: palette.secondary.main,
      borderRadius: 16,
      height: 30,
      //width: 140,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginHorizontal: 5,
      paddingLeft: 12,
      paddingRight: 12
    },
    textStyles: {
      color: palette.secondary.main,
      fontSize: 12,
      fontWeight: '500',
      lineHeight: 18,
      textAlign: 'center',
      paddingHorizontal: 2,
      paddingVertical: 1,
      marginHorizontal: spacing[1],
      //width: 60,
    },

    buttonAcceptContainer: {
      height: 36,
      backgroundColor: '#A4C735',
      borderRadius: 6,
      marginTop: 24,
      width: '50%',
      justifyContent: 'center',
    },

    buttonCancelContainer: {
      height: 36,
      backgroundColor: '#ffff',
      borderRadius: 6,
      marginTop: 24,
      borderWidth: 1,
      borderColor: palette.secondary[palette.type],
      marginRight: 8,
      width: '50%',
      justifyContent: 'center',
    },
    textAcceptContainer: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
    textCancelContainer: {
      color: palette.secondary[palette.type],
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },

    modalWrapper: {
      width: '85%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonsWrapper: {
      justifyContent: 'center',
    },
  },
  productImage: {
    container: {
      overflow: 'hidden',
      width: 95,
      height: 95,
      alignSelf: 'center',
      resizeMode: 'contain',
      paddingLeft: 0,
    },
    imageStyles: {
      height: 95,
      width: 95,
    },
  },
  rowContainerSummary: {
    container: {
      marginVertical: 20,
    },
  },
  descriptionSpacing: {
    container: {
      flexBasis: '15%',
    },
  },
  wishListSummary: {
    container: {
      borderColor: palette.gray.A200,
      height: 30,
      width: 80,
      alignContent: 'center',
      justifyContent: 'center',
    },
    textStyles: {
      color: palette.gray.A200,
      fontSize: 12,
      fontWeight: '500',
    },
  },
  wishListShelf: {
    container: {
      marginBottom: spacing[4],
      marginTop: 0,
    },
  },
  wishlistCount: {
    textStyles: {
      marginHorizontal: spacing[2],
      fontSize: 12,
    },
  },
  colorTextRed: {
    textStyles: {
      color: palette.tertiary.main
    },
  },

  colorTextGrises: {
    textStyles: {
      fontSize: 12,
      color: palette.gray['600']
    },
  },

  colorTextGrisesTitleProduts: {
    textStyles: {
      fontSize: 16.5,
      color: palette.gray['700']
    },
  },
}));
