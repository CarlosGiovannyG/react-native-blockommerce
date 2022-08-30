export const addToCartMutation = /* GraphQL */ `
  mutation addToCart(
    $orderFormId: ID
    $items: [ItemInput]
    $marketingData: MarketingDataInput
    $salesChannel: String
    $allowedOutdatedData: [String!]
  ) {
    addToCart(
      orderFormId: $orderFormId
      items: $items
      marketingData: $marketingData
      salesChannel: $salesChannel
      allowedOutdatedData: $allowedOutdatedData
    ) @context(provider: "vtex.checkout-graphql") {
      id
    }
  }
`;
