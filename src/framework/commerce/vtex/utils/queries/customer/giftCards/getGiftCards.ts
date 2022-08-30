export const getGiftCard = /* GraphQL */ `
query{
    getGiftCard @context(provider: "tiendasjumboqaio.profile-service-app") {
          data{
                items{
                  email
                  emailComprador
                  fechaCompra
                  numeroCelular
                  numeroTarjeta
                  saldoDisponible
                  tipoTarjeta
                  valorInicial
                  estado
                  codigoEstado
                  transfiere
                  paga
                 }
          }
      }
    
    }
`;