import { withStyles } from '$styleguide/theme';

export const addressesStyles = withStyles(
  ({ palette, typography, spacing }) => ({
    userAdressText: {
      textStyles: {
        color: '#36474F',
      },
    },
    userEmail: {
      container: {
        justifyContent: 'flex-start',
        marginVertical: spacing[2],
        paddingVertical: spacing[1],
      },
    },
    locatorwrapper: {
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: '#38464F4E',
        borderRadius: spacing[5],
        borderWidth: 1,
        height: 70,
        marginVertical: spacing[2] + spacing[1],
        width: 350,
        marginHorizontal: spacing[1],
      },
    },
    linkAddAdresses: {
      textStyles: {
        color: '#D9091A',
      },
    },
    linkAddAdressesButton: {
      container: {
        backgroundColor: '#3CDB1F',
        borderRadius: 20,
        elevation: 2,
        height: 40,
        opacity: 1,
        padding: 10,
        width: 228,
      },
      textStyles: {
        fontWeight: 'bold',
      },
    },
    newAddressTitle: {
      textStyles: {
        color: '#38464F',
        opacity: 1,
        fontWeight: '600',
        marginTop: spacing[3] + spacing[2],
        marginBottom: spacing[4] + spacing[3],
      },
    },
    AddAddressWrapper: {
      container: {
        marginHorizontal: spacing[3],
      },
    },
    addressShelfStyles: {
      container: {
        alignContent: 'center',
        justifyContent: 'center',
      },
    },
    myAddressesTitle: {
      textStyles: {
        color: '#37474F',
        fontWeight: 'bold',
        marginVertical: spacing[3] + spacing[1],
      },
    },
    savedAddresses: {
      container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#7070701F',
        borderRadius: spacing[3] + spacing[1],
        borderWidth: 1,
        height: 120,
        marginBottom: spacing[3] + spacing[1],
        width: 350,
        marginHorizontal: spacing[2] + spacing[3],
        shadowColor: '#00001D',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: spacing[3] + spacing[1],
        elevation: spacing[2],
        paddingHorizontal: spacing[3] + spacing[3],
        paddingVertical: spacing[3],
      },
    },
    linkAddMyAdresses: {
      container: {
        borderRadius: spacing[3] + spacing[1],
        backgroundColor: '#E2001A',
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: spacing[3],
        paddingVertical: spacing[2],
      },
      textStyles: {
        fontWeight: '600',
      },
    },
    addNewAddress: {
      container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing[5] + spacing[2],
      },
    },
    addressesTitleCont: {
      container: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  })
);
