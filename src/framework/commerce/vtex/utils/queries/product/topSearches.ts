export const topSearchesQuery = /* GraphQL */ `
  query topSearches {
    topSearches @context(provider: "vtex.search-graphql") {
      searches {
        term
      }
    }
  }
`;
