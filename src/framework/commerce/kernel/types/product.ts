export type ProductImage = {
  url: string;
  alt?: string;
  imageUrl?: string;
};

export type ProductPrice = {
  value: number;
  currencyCode?: 'USD' | 'EUR' | 'ARS' | string;
  retailPrice?: number;
  salePrice?: number;
  listPrice?: number;
  extendedSalePrice?: number;
  extendedListPrice?: number;
};

export type ProductOption = {
  __typename?: 'MultipleChoiceOption';
  id: string;
  displayName: string;
  values: ProductOptionValues[];
};

export type ProductOptionValues = {
  label: string;
  hexColors?: string[];
};

export type ProductVariant = {
  id: string | number;
  options: ProductOption[];
  availableForSale?: boolean;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  descriptionHtml?: string;
  sku?: string;
  slug?: string;
  path?: string;
  images: ProductImage[];
  variants: ProductVariant[];
  price: ProductPrice;
  options: ProductOption[];
  [key: string]: any;
};

export type SearchProductsBody = {
  search?: string;
  categoryId?: string | number;
  brandId?: string | number;
  sort?: string;
  from?: number;
  to?: number;
};

export type ProductTypes = {
  product: Product;
  searchBody: SearchProductsBody;
};

export type SearchProductsHook<T extends ProductTypes = ProductTypes> = {
  data: {
    products: T['product'][];
    filters: any[];
    pagination: {
      from: number;
      to: number;
      recordsFiltered: number;
    };
  };
  body: T['searchBody'];
  input: T['searchBody'];
  fetcherInput: T['searchBody'];
};

export type ProductsSchema<T extends ProductTypes = ProductTypes> = {
  endpoint: {
    options: {};
    handlers: {
      getProducts: SearchProductsHook<T>;
    };
  };
};

export type GetAllProductPathsOperation<T extends ProductTypes = ProductTypes> =
  {
    data: { products: Pick<T['product'], 'path'>[] };
    variables: { first?: number };
  };

export type GetAllProductsOperation<T extends ProductTypes = ProductTypes> = {
  data: { products: T['product'][] };
  variables: {
    relevance?: 'featured' | 'best_selling' | 'newest';
    ids?: string[];
    first?: number;
  };
};

export type GetProductOperation<T extends ProductTypes = ProductTypes> = {
  data: { product?: T['product'] };
  variables: { path: string; slug?: never } | { path?: never; slug: string };
};

export type GetProductHook<T extends ProductTypes> = {
  data: T['product'] | null;
  input: {};
  fetcherInput: { cartId?: string };
  swrState: { isEmpty?: boolean };
};

// Product By Identifier

export type GetProductsByIdentifierBody = {
  values: string[];
};

export type GetProductsByIdentifierTypes = {
  input: GetProductsByIdentifierBody;
};

export type GetProductsByIdentifierHook<T extends ProductTypes = ProductTypes> =
  {
    data: {
      products: T['product'][];
    };
    actionInput: GetProductsByIdentifierBody;
    fetcherInput: GetProductsByIdentifierBody;
    body: GetProductsByIdentifierBody;
  };
