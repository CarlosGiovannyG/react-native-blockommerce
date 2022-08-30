export const getTenantsQuery = /* GraphQL */ `
  query getDocuments($acronym: String, $where: String, $fields: [String]) {
    documents(
      acronym: $acronym
      pageSize: 100
      where: $where
      fields: $fields
    ) @context(provider: "vtex.store-graphql") {
      id
      fields {
        key
        value
      }
    }
  }
`;