/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { productsQuery } from '$commerce/utils/queries/product/products';
import useSearch from '$core-commerce/product/use-search';
import { Product } from '$core-commerce/types/product';

import { SWRHook } from '$core-commerce/utils/types';
import { usePrice } from '.';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export const NormalizeProducts = (data: any[]) => {
  return data.map((product) => {
    /*  const getDiscount = () => {
      if (product.items?.length) {
        if (product.items[0].sellers?.length) {
          if (product.items[0].sellers[0].commertialOffer?.teasers?.length) {
            if (
              product.items[0].sellers[0].commertialOffer.teasers[0].effects
                .parameters.length
            ) {
              return product.items[0].sellers[0].commertialOffer.teasers[0]
                .effects.parameters[0].value;
            }
          }
        }
      }
      return '0';
    }; */
    const getDiscount = () => {
      const baseAmount = Number(
        product.items[0].sellers[0].commertialOffer.ListPrice
      );
      const amount = Number(product.items[0].sellers[0].commertialOffer.Price);
      const hasDiscount = baseAmount > amount;

      if (hasDiscount) {
        return Math.floor(((baseAmount - amount) / baseAmount) * 100);
      } else {
        return '0';
      }
    };

    return {
      brand: product.brand,
      productName: product.productName,
      productId: product.productId,
      description: product.description,
      image: product.items[0].images[0].imageUrl,
      price: product.items[0].sellers[0].commertialOffer.Price,
      listPrice: product.items[0].sellers[0].commertialOffer.ListPrice,
      productQuantity:
        product.items[0].sellers[0].commertialOffer?.AvailableQuantity || 0,
      discount: getDiscount(),
      linkText: product.linkText,
      link: product.link,
      categoryTree: product?.categoryTree ? product?.categoryTree : null,
      measurementUnit: product?.items[0].measurementUnit,
      unitMultiplier: product?.items[0].unitMultiplier,
      valueUnitMultiplier:
        product.items[0].sellers[0].commertialOffer.Price /
          product?.items[0].unitMultiplier || '',
      seller: product?.items[0].sellers[0].sellerId,
    };
  });
};

export default useSearch;

export interface SearchResult {
  data: {
    products: Product[];
    pagination: {
      from: number;
      to: number;
      totalSize: number;
    };
  };
}

export const handler: SWRHook<any> = {
  fetchOptions: {
    query: productsQuery,
  },
  async fetcher({ input, options, fetch }) {
    const data = await fetch({
      ...options,
      variables: {
        query: input.query,
        queryFacets: input.query,
        fullText: input.fullText,
        map: input.map,
        selectedFacets: input.selectedFacets || [],
        orderBy: '',
        from: input.from,
        to: input.to,
        hideUnavailableItems: false,
        skusFilter: 'ALL_AVAILABLE',
        installmentCriteria: 'MAX_WITHOUT_INTEREST',
        collection: input.collection,
      },
    });
    return {
      products: NormalizeProducts(data?.productSearch?.products || []),
      filters: data?.facets?.facets || [],
      pagination: {
        recordsFiltered: data?.productSearch?.recordsFiltered,
        from: input.from,
        to: input.to,
      },
    };
  },
  useHook:
    ({ useData }) =>
    (input = {}) =>
      useData({
        input: [
          ['from', input.from],
          ['to', input.to],
          ['category', input.category],
          ['query', input.query],
          ['map', input.map],
          ['selectedFacets', input.selectedFacets],
          ['fullText', input.fullText],
          ['collection', input.collection],
        ],
        swrOptions: {
          revalidateOnFocus: false,
          ...input.swrOptions,
        },
      }),
};

/**
 * {
  		"queryFacets":"electrodomesticos/refrigeracion/minibares/haceb",
      "query": "electrodomesticos/refigeracion/minibares/haceb",
      "map": "category-1,category-2,category-3,brand",
      "orderBy": "",
      "from":0,
      "to":9,
      "selectedFacets":[
      {
        "key": "category-1",
        "value": "electrodomesticos"
      },
        {
        "key": "category-2",
        "value": "refrigeracion"
        },{
        "key": "category-3",
        "value": "minibares"
        },{
          "key": "brand",
          "value": "haceb"
        }
      ],
      "fullText":"",
      "fuzzy":"",
      "searchState":"",
      "excludedPaymentSystems":"",
      "includedPaymentSystems":"",
      "hideUnavailableItems": false,
      "skusFilter": "ALL_AVAILABLE",
      "installmentCriteria":"MAX_WITHOUT_INTEREST"
}
 */
