export const updateItemsMutation = /* GraphQL */ `
  mutation updateItems($orderFormId: ID, $orderItems: [ItemInput]) {
    updateItems(orderFormId: $orderFormId, orderItems: $orderItems)
      @context(provider: "vtex.checkout-graphql") {
      id
    }
  }
`;
