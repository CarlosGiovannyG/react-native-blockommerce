export type OAuthValidationBody = {
  code: string;
};

export type OAuthValidationTypes = {
  body: OAuthValidationBody;
};

export type OAuthValidationHook<
  T extends OAuthValidationTypes = OAuthValidationTypes
> = {
  data: null;
  actionInput: OAuthValidationBody;
  fetcherInput: OAuthValidationBody;
  body: T['body'];
};
