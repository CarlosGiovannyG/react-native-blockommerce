export const productsQuery = /* GraphQL */ `
  fragment ProductFragment on Product {
    cacheId
    productId
    description
    productName
    productReference
    linkText
    brand
    brandId
    link
    categories
    categoryId
    categoryTree {
      cacheId
      href
      slug
      id
      name
      titleTag
      hasChildren
      metaTagDescription
      children {
        cacheId
        href
        slug
        id
        name
        titleTag
        hasChildren
        metaTagDescription
      }
    }
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
    }
    skuSpecifications {
      field {
        name
        originalName
      }
      values {
        name
        originalName
      }
    }
  }

  fragment ItemFragment on SKU {
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
      commertialOffer {
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
      }
    }
  }

  fragment SellerFragment on Seller {
    sellerId
    sellerName
    sellerDefault
  }

  fragment CommertialOfferFragment on Offer {
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
  }

  fragment InstallmentFragment on Installment {
    Value
    InterestRate
    TotalValuePlusInterestRate
    NumberOfInstallments
    Name
    PaymentSystemName
  }

  query productSearchV3(
    $queryFacets: String
    $query: String
    $map: String
    $fullText: String
    $selectedFacets: [SelectedFacetInput]
    $orderBy: String
    $from: Int
    $to: Int
    $hideUnavailableItems: Boolean = false
    $skusFilter: ItemsFilter = ALL_AVAILABLE
    $simulationBehavior: SimulationBehavior = default
    $installmentCriteria: InstallmentsCriteria = MAX_WITHOUT_INTEREST
    $productOriginVtex: Boolean = false
    $fuzzy: String
    $operator: Operator
    $searchState: String
    $excludedPaymentSystems: [String]
    $includedPaymentSystems: [String]
    $collection: String
  ) {
    productSearch(
      map: $map
      query: $query
      fullText: $fullText
      selectedFacets: $selectedFacets
      orderBy: $orderBy
      from: $from
      to: $to
      hideUnavailableItems: $hideUnavailableItems
      simulationBehavior: $simulationBehavior
      productOriginVtex: $productOriginVtex
      fuzzy: $fuzzy
      operator: $operator
      searchState: $searchState
      collection: $collection
    ) @context(provider: "vtex.search-graphql") {
      products {
        ...ProductFragment
        items(filter: $skusFilter) {
          ...ItemFragment
          sellers {
            ...SellerFragment
            commertialOffer {
              ...CommertialOfferFragment
              Installments(
                criteria: $installmentCriteria
                excludedPaymentSystems: $excludedPaymentSystems
                includedPaymentSystems: $includedPaymentSystems
              ) {
                ...InstallmentFragment
              }
            }
          }
        }
        selectedProperties {
          key
          value
        }
      }
      recordsFiltered
    }
    facets(
      query: $queryFacets
      selectedFacets: $selectedFacets
      fullText: $fullText
    ) @context(provider: "vtex.search-graphql") {
      facets {
        name
        values {
          id
          quantity
          name
          key
          value
          selected
          range {
            from
            to
          }
          link
          linkEncoded
          href
        }
      }
    }
  }
`;
