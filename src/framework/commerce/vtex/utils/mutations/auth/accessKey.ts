export const sendAccessKeyMutation = /* GraphQL */ `
  mutation sendAccessKey($data: ISendAccessKey) {
    sendAccessKey(data: $data)
      @context(provider: "tiendasjumboqaio.auth-service") {
      response
    }
  }
`;
