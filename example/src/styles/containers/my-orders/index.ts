import { withStyles } from '$styleguide/theme';

export const myOrderStyles = withStyles(({ palette, spacing, typography }) => {
  return {

    orderLayoutContainer:{
      shelfContainer: {
        backgroundColor: '#fff',
        height: '100%'
      }
    },
    myOrdersTitle: {
      textStyles: {
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Bold',
        marginVertical: 20,
        color: '#37474f',
      },
    },
    myOrderScreen: {
      container: {
        paddingHorizontal: 20,
        backgroundColor: '#fff',
      },
    },
    myOrderCardInfo: {
      container: {
        backgroundColor: '#fff',
        borderColor: '#7070701f',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 25,
        borderRadius: 20,
        shadowColor: '#00001D',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 6,
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
    ordersInProgressImage: {
      container: {
        overflow: 'hidden',
        alignSelf: 'center'
      },
    },
    successTextMyOrders: {
      textStyles: {
        color: palette.success['main'],
        fontSize: 13,
        fontFamily: 'Montserrat-semibold',
        fontWeight: 'bold',
      },
    },
    bodyTextMyOrders: {
      textStyles: {
        fontSize: 13,
        fontFamily: 'Montserrat-semibold',
      },
    },
    boldTextMyOrders: {
      textStyles: {
        fontSize: 13,
        fontFamily: 'Montserrat-semibold',
        fontWeight: 'bold',
      },
    },
    paymentsMyOrdersContainer: {
      container: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#707070',
        alignContent: 'stretch',
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
  };
});
