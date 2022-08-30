export const updateSelectedAddressMutation = /* GraphQL */ `
  mutation UpdateSelectedAddress($orderFormId: ID, $input: AddressInput!) {
    updateSelectedAddress(orderFormId: $orderFormId, input: $input)
      @context(provider: "vtex.checkout-graphql") {
      id
      shipping {
        availableAddresses {
          addressId
        }
        selectedAddress {
          addressId
          addressType
          city
          complement
          country
          geoCoordinates
          neighborhood
          number
          postalCode
          receiverName
          reference
          state
          street
          isDisposable
        }
      }
    }
  }
`;
