export const productAvailableQuantityQuery = /* GraphQL */ `
  query product(
    $slug: String
    $identifier: ProductUniqueIdentifier
    $regionId: String
    $salesChannel: Int
  ) {
    product(
      slug: $slug
      identifier: $identifier
      regionId: $regionId
      salesChannel: $salesChannel
    ) @context(provider: "vtex.search-graphql") {
      productId
      link
      items {
        sellers {
          commertialOffer {
            Price
            AvailableQuantity
          }
        }
      }
    }
  }
`;
