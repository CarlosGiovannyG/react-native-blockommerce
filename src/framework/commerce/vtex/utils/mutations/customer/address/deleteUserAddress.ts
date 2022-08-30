export const deleteUserAddress = /* GraphQL */ `
  mutation DeleteUserAddress($addressName: String) {
    deleteUserAddress(addressName: $addressName)
      @context(provider: "tiendasjumboqaio.profile-service-app") {
      success
    }
  }
`;
