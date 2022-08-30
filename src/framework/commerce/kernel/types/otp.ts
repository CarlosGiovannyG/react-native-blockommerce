export type OtpBody = {
  email: string;
};

export type OtpTypes = {
  body: OtpBody;
};

export type OtpHook<T extends OtpTypes = OtpTypes> = {
  data: null;
  actionInput: OtpBody;
  fetcherInput: OtpBody;
  body: T['body'];
};
