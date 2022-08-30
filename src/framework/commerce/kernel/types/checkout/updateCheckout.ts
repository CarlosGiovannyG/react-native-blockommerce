export type UpdateCheckoutBody = {
  email: string;
  firstName: string;
  lastName: string;
  document: string;
  documentType?: string;
};

export type UpdateCheckoutTypes = {
  body: UpdateCheckoutBody;
};

export type UpdateCheckoutHook<
  T extends UpdateCheckoutTypes = UpdateCheckoutTypes
> = {
  data: null;
  actionInput: { orderFormId: string; input: UpdateCheckoutBody };
  fetcherInput: { input: UpdateCheckoutBody };
  body: T['body'];
};
