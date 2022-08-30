export const signUpWithEmailMutation = /* GraphQL */ `
  mutation signUpWithEmail($data: ISignUpWithEmail) {
    signUpWithEmail(data: $data)
      @context(provider: "tiendasjumboqaio.auth-service") {
      token
      error
    }
  }
`;
