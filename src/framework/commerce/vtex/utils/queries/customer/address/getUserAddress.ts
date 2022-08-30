export const getUserAddress = /* GraphQL */ `
  query GetUserAddress {
    getUserAddress @context(provider: "tiendasjumboqaio.profile-service-app") {
      userId
      addressName
      addressType
      postalCode
      city
      state
      country
      street
      number
      neighborhood
      complement
      reference
      receiverName
      geoCoordinate
    }
  }
`;
