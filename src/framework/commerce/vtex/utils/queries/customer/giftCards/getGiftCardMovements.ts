export const getGiftCardMovements = /* GraphQL */ `
  query getGiftCardMovements($data: IGiftCardMovements) {
    getGiftCardMovements(data: $data)
      @context(provider: "tiendasjumboqaio.profile-service-app") {
      data {
        items {
          numeroTransaccion
          idTienda
          valorConsumido
          nombreTienda
          estado
          ordenVtex
          fechaMovimiento
        }
      }
    }
  }
`;
