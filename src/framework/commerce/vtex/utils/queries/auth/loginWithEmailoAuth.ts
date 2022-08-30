export const validateoAuthMutation = /* GraphQL */ `
  query validateoAuth($data: IValidateoAuth) {
    validateoAuth(data: $data)
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
