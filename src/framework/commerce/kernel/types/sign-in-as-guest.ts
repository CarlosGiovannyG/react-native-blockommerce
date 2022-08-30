export type SignInAsGuestBody = {
  email: string;
};

export type SignInAsGuestTypes = {
  body: SignInAsGuestBody;
};

export type SignInAsGuestHook<
  T extends SignInAsGuestTypes = SignInAsGuestTypes
> = {
  data: null;
  actionInput: SignInAsGuestBody;
  fetcherInput: SignInAsGuestBody;
  body: T['body'];
};

export type SignInAsGuestOperation = {
  data: { result?: string };
  variables: any;
};
