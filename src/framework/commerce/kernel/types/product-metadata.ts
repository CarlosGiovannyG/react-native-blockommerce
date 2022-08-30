export type ProductMetadata = {
  [key: string]: any;
};

export type IProductMetadata = {
  [key: string]: any;
};


export type ProductTypes = {
  productMetadata: ProductMetadata;
  input: IProductMetadata;
};


export type GetProductMetadataHook<T extends ProductTypes> = {
  data: T['productMetadata'] | null;
  input: {};
  fetcherInput: {};
  swrState: { isEmpty?: boolean };
};
