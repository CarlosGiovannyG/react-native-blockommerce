export const getGeocodeQuery = /* GraphQL */ `
  query address($city: String!, $street: String) {
    address(city: $city, street: $street)
      @context(provider: "tiendasjumboqaio.jumbo-graphql-service") {
      geoCoordinates
    }
  }
`;
