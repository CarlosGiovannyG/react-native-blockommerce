export interface Stores {
  id: string;
  mask: string;
}

export type CustomerStoresTypes = {
  stores?: Stores;
};

export type GetStoresHook<T extends CustomerStoresTypes = CustomerStoresTypes> =
  {
    data: T['stores'] | null;
    input: {};
    fetcherInput: { cartId?: string };
    swrState: { isEmpty?: boolean };
  };
