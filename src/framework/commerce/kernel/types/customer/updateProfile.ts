export type UpdateProfileBody = {
  email: string;
};

export type UpdateProfileTypes = {
  body: UpdateProfileBody;
};

export type UpdateProfileHook<
  T extends UpdateProfileTypes = UpdateProfileTypes
> = {
  data: null;
  actionInput: UpdateProfileBody;
  fetcherInput: UpdateProfileBody;
  body: T['body'];
};
