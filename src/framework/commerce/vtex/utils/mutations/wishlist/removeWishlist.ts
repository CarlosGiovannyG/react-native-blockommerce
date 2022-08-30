export const removeUserWishlist = /* GraphQL */ `
  mutation deleteWishlist($data: IWishlistDelete) {
    deleteWishlist(data: $data)
      @context(provider: "tiendasjumboqaio.profile-service-app") {
      success
    }
  }
`;
