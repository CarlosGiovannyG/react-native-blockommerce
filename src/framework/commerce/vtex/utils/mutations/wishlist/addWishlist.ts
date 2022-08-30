export const createUserWishlist = /* GraphQL */ `
 mutation createDocumentV2($acronym: String!, $document: DocumentInputV2) {
    createDocumentV2(dataEntity: $acronym, document: $document)@context(provider: "vtex.store-graphql"){
      cacheId
      id
      href
      documentId
    }
  }
`;
