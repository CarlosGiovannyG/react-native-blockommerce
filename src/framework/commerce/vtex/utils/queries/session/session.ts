export const createSessionQuery = /* GraphQL */ `
  mutation createSession($input: ISession) {
    createSession(input: $input)
      @context(provider: "tiendasjumboqaio.auth-service") {
      sessionToken
      segmentToken
    }
  }
`;
