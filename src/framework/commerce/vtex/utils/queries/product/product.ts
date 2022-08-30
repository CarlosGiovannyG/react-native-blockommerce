export const productQuery = /* GraphQL */ `
  query product(
    $slug: String
    $identifier: ProductUniqueIdentifier
    $regionId: String
    $salesChannel: Int
  ) {
    product(
      slug: $slug
      identifier: $identifier
      regionId: $regionId
      salesChannel: $salesChannel
    ) @context(provider: "vtex.search-graphql") {
      cacheId
      productId
      description
      productName
      productReference
      linkText
      brand
      brandId
      link
      categoryId
      priceRange {
        sellingPrice {
          highPrice
          lowPrice
        }
        listPrice {
          highPrice
          lowPrice
        }
      }
      specificationGroups {
        name
        originalName
        specifications {
          name
          originalName
          values
        }
      }
      items {
        itemId
        name
        nameComplete
        complementName
        ean
        kitItems {
          itemId
        }
        variations {
          name
          values
        }
        measurementUnit
        unitMultiplier
        images {
          cacheId
          imageId
          imageTag
          imageUrl
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
