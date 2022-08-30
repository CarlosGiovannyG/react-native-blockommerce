export const productsByIdentifierQuery = /* GraphQL */ `
  query productsByIdentifier(
    $field: ProductUniqueIdentifierField!
    $values: [ID!]
  ) {
    productsByIdentifier(field: $field, values: $values)
      @context(provider: "vtex.search-graphql") {
      brand
      brandId
      cacheId
      categoryId
      description
      link
      linkText
      productId
      productName
      productReference
      titleTag
      metaTagDescription
      jsonSpecifications
      releaseDate
      properties {
        name
        values
      }
      items {
        itemId
        name
        nameComplete
        complementName
        ean
        variations {
          name
          values
        }
        referenceId {
          Key
          Value
        }
        measurementUnit
        unitMultiplier
        images {
          cacheId
          imageId
          imageLabel
          imageTag
          imageUrl
          imageText
        }
        sellers {
          sellerId
          sellerName
          sellerDefault
          commertialOffer {
            discountHighlights {
              name
            }
            teasers {
              name
              conditions {
                minimumQuantity
                parameters {
                  name
                  value
                }
              }
              effects {
                parameters {
                  name
                  value
                }
              }
            }
            Price
            ListPrice
            Tax
            taxPercentage
            spotPrice
            PriceWithoutDiscount
            RewardValue
            PriceValidUntil
            AvailableQuantity
            Installments {
              Value
              InterestRate
              TotalValuePlusInterestRate
              NumberOfInstallments
              Name
              PaymentSystemName
            }
          }
        }
      }
    }
  }
`;
