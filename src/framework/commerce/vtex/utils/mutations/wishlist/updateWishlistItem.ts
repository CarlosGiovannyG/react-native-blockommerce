export const updateUserWishlistItem = /* GraphQL */ `
  mutation updateDocument($acronym: String!, $document: DocumentInput) {
    updateDocument(acronym: $acronym, document: $document)
      @context(provider: "vtex.store-graphql") {
      cacheId
      id
      href
      documentId
    }
  }
`;
