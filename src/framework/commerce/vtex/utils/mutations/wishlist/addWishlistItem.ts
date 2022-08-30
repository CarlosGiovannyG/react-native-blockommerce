export const createUserWishlistItem = /* GraphQL */ `
  mutation createDocument($acronym: String!, $document: DocumentInput) {
    createDocument(acronym: $acronym, document: $document)
      @context(provider: "vtex.store-graphql") {
      cacheId
      id
      href
      documentId
    }
  }
`;
