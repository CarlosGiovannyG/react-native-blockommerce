export const createUserAddress = /* GraphQL */ `
  mutation CreateUserAddress(
    $address: ICreateUserAddress
    $orderFormId: String
  ) {
    createUserAddress(address: $address, orderFormId: $orderFormId)
      @context(provider: "tiendasjumboqaio.profile-service-app") {
      success
    }
  }
`;
