export const getOrderById = /* GraphQL */ `
  query getOrderById($orderId: String) {
    getOrderById(orderId: $orderId)
      @context(provider: "tiendasjumboqaio.profile-service-app") {
      orderId
      status
      statusDescription
      value
      creationDate
      sellerOrderId
      origin
      lastChange
      totals {
        id
        name
        value
      }
      items {
        id 
        uniqueId 
        productId 
        name 
        price  
        sellingPrice 
        listPrice  
        quantity
        imageUrl
        additionalInfo {
          brandName
        }
      }
      clientProfileData {
        id
        email
        firstName
        lastName
        documentType
        document
        phone
        corporateName
        tradeName
        corporateDocument
        stateInscription
        corporatePhone
        isCorporate
        userProfileId
        customerClass
      }
      shippingData {
        id
        address {
          userId
          addressName
          addressType
          postalCode
          city
          state
          country
          street
          number
          neighborhood
          complement
          reference
          receiverName
          geoCoordinate
        }
      }
    }
  }
`;
