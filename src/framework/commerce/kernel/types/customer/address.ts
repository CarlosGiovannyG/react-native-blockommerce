export interface Address {
  addressName: string;
  id: string;
  mask: string;
  geoCoordinates?: {
    latitud?: string;
    longitud?: string;
  };
}

export interface AddressFields {
  type?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  streetNumber?: string;
  apartments?: string;
  zipCode?: string;
  city?: string;
  country?: string;
  street?: string;
}

export type CustomerAddressTypes = {
  address?: Address;
  fields: AddressFields;
};

export type GetAddressesHook<
  T extends CustomerAddressTypes = CustomerAddressTypes
> = {
  data: T['address'][] | null;
  input: {};
  fetcherInput: { cartId?: string };
  swrState: { isEmpty?: boolean };
};

export type GetGeocodeHook<
  T extends CustomerAddressTypes = CustomerAddressTypes
> = {
  data: T['address'];
  input?: T['fields'];
  fetcherInput: T['fields'];
  body: { item: T['fields'] };
  actionInput: T['fields'];
};

export type AddItemHook<T extends CustomerAddressTypes = CustomerAddressTypes> =
  {
    data: T['address'];
    input?: T['fields'];
    fetcherInput: T['fields'];
    body: { item: T['fields'] };
    actionInput: T['fields'];
  };

export type SelectAddressHook<
  T extends CustomerAddressTypes = CustomerAddressTypes
> = {
  data: T['address'];
  input?: T['fields'];
  fetcherInput: T['fields'];
  body: { item: T['fields'] };
  actionInput: T['fields'];
};

export type UpdateItemHook<
  T extends CustomerAddressTypes = CustomerAddressTypes
> = {
  data: T['address'] | null;
  input: { item?: T['fields']; wait?: number };
  fetcherInput: { itemId: string; item: T['fields'] };
  body: { itemId: string; item: T['fields'] };
  actionInput: T['fields'] & { id: string };
};

export type RemoveItemHook<
  T extends CustomerAddressTypes = CustomerAddressTypes
> = {
  data: T['address'] | null;
  input: { item?: T['fields'] };
  fetcherInput: { itemId: string };
  body: { itemId: string };
  actionInput: { id: string };
};

export type CustomerAddressHooks<
  T extends CustomerAddressTypes = CustomerAddressTypes
> = {
  getAddresses: GetAddressesHook<T>;
  addItem: AddItemHook<T>;
  selectAddress: SelectAddressHook<T>;
  updateItem: UpdateItemHook<T>;
  removeItem: RemoveItemHook<T>;
  getGeocode: GetGeocodeHook<T>;
};

export type AddresssHandler<
  T extends CustomerAddressTypes = CustomerAddressTypes
> = GetAddressesHook<T> & {
  body: { cartId?: string };
};

export type GeocodeHandler<
  T extends CustomerAddressTypes = CustomerAddressTypes
> = GetGeocodeHook<T> & {
  body: { cartId?: string };
};

export type AddItemHandler<
  T extends CustomerAddressTypes = CustomerAddressTypes
> = AddItemHook<T> & {
  body: { cartId: string };
};

export type UpdateItemHandler<
  T extends CustomerAddressTypes = CustomerAddressTypes
> = UpdateItemHook<T> & {
  data: T['address'];
  body: { cartId: string };
};

export type RemoveItemHandler<
  T extends CustomerAddressTypes = CustomerAddressTypes
> = RemoveItemHook<T> & {
  body: { cartId: string };
};

export type CustomerAddressHandlers<
  T extends CustomerAddressTypes = CustomerAddressTypes
> = {
  getAddresses: GetAddressesHook<T>;
  addItem: AddItemHandler<T>;
  updateItem: UpdateItemHandler<T>;
  removeItem: RemoveItemHandler<T>;
  getGeocode: GeocodeHandler<T>;
};

export type CustomerAddressSchema<
  T extends CustomerAddressTypes = CustomerAddressTypes
> = {
  endpoint: {
    options: {};
    handlers: CustomerAddressHandlers<T>;
  };
};
