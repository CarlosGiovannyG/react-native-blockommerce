export type OtpCodeValidationBody = {
  code: string;
};

export type OtpCodeValidationTypes = {
  body: OtpCodeValidationBody;
};

export type OtpCodeValidationHook<
  T extends OtpCodeValidationTypes = OtpCodeValidationTypes
> = {
  data: null;
  actionInput: OtpCodeValidationBody;
  fetcherInput: OtpCodeValidationBody;
  body: T['body'];
};
