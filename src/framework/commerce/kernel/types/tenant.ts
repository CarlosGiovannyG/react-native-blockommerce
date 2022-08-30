export type Tenant = any;

export interface TenantFields {
  id?: string;
}

export type TenantTypes = {
  tenant?: Tenant;
  fields: TenantFields;
};

export type GetTenantHook<T extends TenantTypes = TenantTypes> = {
  data: T['tenant'] | null;
  input: {};
  fetcherInput: {};
  swrState: { isEmpty?: boolean };
};

export type SelectTenantBody = {
  id: string;
};

export type SelectTenantHook<T extends TenantTypes = TenantTypes> = {
  data: null;
  actionInput: SelectTenantBody;
  fetcherInput: SelectTenantBody;
  body: T['fields'];
};
