export type ResetPasswordBody = {
  email: string;
  newPassword: string;
  accesskey: string;
};

export type ResetPasswordTypes = {
  body: ResetPasswordBody;
};

export type ResetPasswordHook<
  T extends ResetPasswordTypes = ResetPasswordTypes
> = {
  data: null;
  body: T['body'];
  actionInput: T['body'];
  fetcherInput: T['body'];
};

export type ResetPasswordSchema<
  T extends ResetPasswordTypes = ResetPasswordTypes
> = {
  endpoint: {
    options: {};
    handlers: {
      signup: ResetPasswordHook<T>;
    };
  };
};
