import { withStyles } from '$styleguide/theme';

export const defaultCartStyles = withStyles(({ palette, spacing }) => {
  return {
    selectedAddressContainer: {
      container: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 50,
        justifyContent: 'space-between',
        paddingHorizontal: spacing[3],
        paddingVertical: spacing[3],
        position: 'absolute', 
        top: 0,
        width: '100%',
      },
    },
    cartLayoutClass: {
      container: {
        flex: 1,
      },
    },
    emptyCartScreen: {
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    },
    cartHeader: {
      container: {
        backgroundColor: '#1FA02E',
        padding: 10,
      },
    },
    selectedAddress: {
      textStyles: {
        color: palette.gray[800],
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    myCartTittleStyles: {
      textStyle: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 18,
      },
    },
    emptyCartCol: {
      container: {
        alignItems: 'center',
      },
    },
    productSummaryTotal: {
      container: {
        margin: 18,
      },
      textStyles: {
        fontSize: 16,
        fontWeight: '600',
      },
    },
    emptyCartImage: {
      container: {
        marginTop: 68,
        marginBottom: 35,
      },
    },
    emptyCartTitle: {
      textStyles: {
        color: '#36474f',
        fontFamily: 'Montserrat-Bold',
        fontSize: 25,
        margin: 10,
        marginBottom: 34,
        marginTop: 49,
      },
    },
    emptyCartText: {
      textStyles: {
        color: '#38464f',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        margin: 10,
        marginBottom: 36,
        marginHorizontal: 40,
        textAlign: 'center',
      },
    },

    addToCart: {
      container: {
        justifyContent: 'center',
        padding: 10,
        margin: 15,
        width: '92%',
        height: 50,
        backgroundColor: '#FF9700',
        alignItems: 'center',
        bottom: 0, //Here is the trick
      },
      textStyles: {
        fontSize: 20,
        color: 'white',
        fontWeight: '500',
      },
    },
    cartContainer: {
      container: {
        backgroundColor: '#fff',
      },
    },
  };
});
