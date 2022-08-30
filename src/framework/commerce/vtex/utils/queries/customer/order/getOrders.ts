export const getOrdersQuery = /* GraphQL */ `
  query getOrders {
    getOrders @context(provider: "tiendasjumboqaio.profile-service-app") {
      list {
        orderId
        status
        totalValue
        creationDate
      }
    }
  }
`;
