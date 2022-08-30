export const resetPasswordMutation = /* GraphQL */ `
  mutation resetPassword($data: IResetPassword) {
    resetPassword(data: $data)
      @context(provider: "tiendasjumboqaio.auth-service") {
      token
      error
    }
  }
`;
