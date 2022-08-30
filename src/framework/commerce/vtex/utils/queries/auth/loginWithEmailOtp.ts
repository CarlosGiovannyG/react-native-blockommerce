export const validateAccessKeyMutation = /* GraphQL */ `
  query validateAccessKey($data: IValidateAccessKey) {
    validateAccessKey(data: $data)
      @context(provider: "tiendasjumboqaio.auth-service") {
      token
      response
      error {
        authStatus
        promptMFA
        clientToken
        scope
        expiresIn
        phoneNumber
        authCookie
      }
    }
  }
`;
