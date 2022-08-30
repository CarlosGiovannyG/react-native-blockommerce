export const orderFormQuery = /* GraphQL */ `
  query orderForm($orderFormId: ID) {
    orderForm(orderFormId: $orderFormId)
      @context(provider: "vtex.checkout-graphql") {
      id
      items {
        additionalInfo {
          brandName
        }
        attachments {
          name
          content
        }
        attachmentOfferings {
          name
          required
          schema
        }
        bundleItems {
          additionalInfo {
            brandName
          }
          attachments {
            name
            content
          }
          attachmentOfferings {
            name
            required
            schema
          }
          availability
          detailUrl
          id
          imageUrls {
            at1x
            at2x
            at3x
          }
          listPrice
          measurementUnit
          name
          offerings {
            id
            name
            price
            type
            attachmentOfferings {
              name
              required
              schema
            }
          }
          price
          productCategories
          productCategoryIds
          productRefId
          productId
          quantity
          seller
          sellingPrice
          skuName
          skuSpecifications {
            fieldName
            fieldValues
          }
          unitMultiplier
          uniqueId
          refId
        }
        parentAssemblyBinding
        parentItemIndex
        sellingPriceWithAssemblies
        options {
          assemblyId
          id
          quantity
          seller
          inputValues
          options {
            assemblyId
            id
            quantity
            seller
            inputValues
            options {
              assemblyId
              id
              quantity
              seller
              inputValues
            }
          }
        }
        availability
        detailUrl
        id
        imageUrls {
          at1x
          at2x
          at3x
        }
        listPrice
        manualPrice
        measurementUnit
        name
        offerings {
          id
          name
          price
          type
          attachmentOfferings {
            name
            required
            schema
          }
        }
        price
        priceTags {
          identifier
          isPercentual
          name
          rawValue
          value
        }
        productCategories
        productCategoryIds
        productRefId
        productId
        quantity
        seller
        sellingPrice
        skuName
        skuSpecifications {
          fieldName
          fieldValues
        }
        unitMultiplier
        uniqueId
        refId
        priceTags {
          identifier
          isPercentual
          rawValue
          value
          name
          ratesAndBenefitsIdentifier {
            description
            id
            featured
            name
            matchedParameters
          }
        }
        isGift
      }
      canEditData
      loggedIn
      userProfileId
      userType
      marketingData {
        coupon
        utmCampaign
        utmMedium
        utmSource
        utmiCampaign
        utmiPart
        utmiPage
      }
      totalizers {
        id
        name
        value
      }
      shipping {
        countries
        availableAddresses {
          addressId
          addressType
          city
          complement
          country
          neighborhood
          number
          postalCode
          receiverName
          reference
          state
          street
          isDisposable
          geoCoordinates
        }
        selectedAddress {
          addressId
          addressType
          city
          complement
          country
          neighborhood
          number
          postalCode
          receiverName
          reference
          state
          street
          isDisposable
          geoCoordinates
        }
        deliveryOptions {
          id
          deliveryChannel
          price
          estimate
          isSelected
        }
        pickupOptions {
          id
          address {
            addressId
            addressType
            city
            complement
            country
            neighborhood
            number
            postalCode
            receiverName
            reference
            state
            street
            isDisposable
            geoCoordinates
          }
          deliveryChannel
          price
          estimate
          isSelected
          friendlyName
          additionalInfo
          storeDistance
          transitTime
          businessHours {
            dayNumber
            closed
            closingTime
            openingTime
          }
        }
        isValid
      }
      paymentData {
        paymentSystems {
          id
          name
          groupName
          validator {
            regex
            mask
            cardCodeRegex
            cardCodeMask
            weights
            useCvv
            useExpirationDate
            useCardHolderName
            useBillingAddress
          }
          stringId
          requiresDocument
          isCustom
          description
          requiresAuthentication
          dueDate
        }
        payments {
          paymentSystem
          bin
          accountId
          tokenId
          installments
          referenceValue
          value
        }
        installmentOptions {
          paymentSystem
          installments {
            count
            hasInterestRate
            interestRate
            value
            total
          }
        }
        availableAccounts {
          accountId
          paymentSystem
          paymentSystemName
          cardNumber
          bin
        }
        isValid
      }
      clientProfileData {
        email
        firstName
        lastName
        document
        documentType
        phone
        isValid
      }
      clientPreferencesData {
        locale
        optInNewsletter
      }
      messages {
        couponMessages {
          code
        }
        generalMessages {
          code
          text
          status
        }
      }
      value
      allowManualPrice
    }
  }
`;
