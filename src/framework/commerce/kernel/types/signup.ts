export type SignupBody = {
  email: string;
  newPassword: string;
  accesskey: string;
};

export type SignupTypes = {
  body: SignupBody;
};

export type SignupHook<T extends SignupTypes = SignupTypes> = {
  data: null;
  body: T['body'];
  actionInput: T['body'];
  fetcherInput: T['body'];
};

export type SignupSchema<T extends SignupTypes = SignupTypes> = {
  endpoint: {
    options: {};
    handlers: {
      signup: SignupHook<T>;
    };
  };
};
