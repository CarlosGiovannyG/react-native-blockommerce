export const getPaymentsQuery = /* GraphQL */ `
  query {
    getUserPayments @context(provider: "tiendasjumboqaio.profile-service-app") {
      availableAccounts {
        accountId
        paymentSystem
        paymentSystemName
        cardNumber
        bin
        expirationDate
        isExpired
      }
    }
  }
`;
