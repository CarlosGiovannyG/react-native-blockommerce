export const signInWithPasswordMutation = /* GraphQL */ `
  mutation signInWithPassword($data: ISignInWithPassword) {
    signInWithPassword(data: $data)
      @context(provider: "tiendasjumboqaio.auth-service") {
      token
    }
  }
`;
