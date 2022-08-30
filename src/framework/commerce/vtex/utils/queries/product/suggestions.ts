export const suggestions = /* GraphQL */ `
  query suggestions($fullText: String = "") {
    searchSuggestions(fullText: $fullText)
      @context(provider: "vtex.search-graphql") {
      searches {
        term
        count
        attributes {
          key
          value
          labelValue
        }
      }
    }
  }
`;
