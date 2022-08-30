export const updateUserAddress = /* GraphQL */ `
  mutation UpdateUserAddress(
    $address: ICreateUserAddress
    $orderFormId: String
  ) {
    updateUserAddress(address: $address, orderFormId: $orderFormId)
      @context(provider: "tiendasjumboqaio.profile-service-app") {
      success
    }
  }
`;
