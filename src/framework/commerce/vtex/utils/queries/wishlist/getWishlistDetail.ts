export const getWishlistDetail = /* GraphQL */ `
  query getUserWishlistDetail($data: IWishlistDetail) {
    getUserWishlistDetail(data: $data)
      @context(provider: "tiendasjumboqaio.profile-service-app") {
      listId
      quantity
      active
      skuId
      id
    }
  }
`;
