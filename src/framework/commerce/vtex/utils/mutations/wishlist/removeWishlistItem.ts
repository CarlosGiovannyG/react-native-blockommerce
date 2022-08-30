export const removeUserWishlistItem = /* GraphQL */ `
  mutation deleteWishlistItem($data: IWishlistDeleteItem) {
    deleteWishlistItem(data: $data)
      @context(provider: "tiendasjumboqaio.profile-service-app") {
      success
    }
  }
`;
