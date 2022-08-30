export const getProfileQuery = /* GraphQL */ `
  query {
    getProfile @context(provider: "tiendasjumboqaio.profile-service-app") {
      firstName
      lastName
      email
      document
      documentType
      cellPhone
      userId
      birthDate
    }
  }
`;
