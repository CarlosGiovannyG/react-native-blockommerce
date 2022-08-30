export const updateProfileMutation = /* GraphQL */ `
  mutation updateProfile($data: IUpdateProfile) {
    updateProfile(data: $data)
      @context(provider: "tiendasjumboqaio.profile-service-app") {
      success
    }
  }
`;
