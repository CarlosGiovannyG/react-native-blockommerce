export const updateOrderFormProfileQuery = /* GraphQL */ `
  mutation UpdateOrderFormProfile($orderFormId: ID, $input: UserProfileInput!) {
    updateOrderFormProfile(orderFormId: $orderFormId, input: $input)
      @context(provider: "vtex.checkout-graphql") {
      id
      userProfileId
      loggedIn
      shipping {
        availableAddresses {
          addressId
        }
        selectedAddress {
          addressId
        }
      }
      clientProfileData {
        email
        firstName
        lastName
        document
        documentType
        phone
        isValid
      }
    }
  }
`;
