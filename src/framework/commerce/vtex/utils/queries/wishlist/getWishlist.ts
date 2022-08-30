export const getWishlist = /* GraphQL */ `
  query {
    getUserWishlists
      @context(provider: "tiendasjumboqaio.profile-service-app") {
      id
      active
      name
      owner
    }
  }
`;
