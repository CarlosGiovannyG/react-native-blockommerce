export const getCartItemsQuery = /* GraphQL */ `
  query orderForm($orderFormId: ID, $refreshOutdatedData: Boolean) {
    orderForm(
      orderFormId: $orderFormId
      refreshOutdatedData: $refreshOutdatedData
    ) @context(provider: "vtex.checkout-graphql") {
      items {
        id
        quantity
        uniqueId
      }
      totalizers {
        id
        name
        value
      }
    }
  }
`;
