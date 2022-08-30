/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCheckout } from '$commerce/checkout';
import { getSession } from '$commerce/utils/customer-session';
import { productQuery } from '$commerce/utils/queries/product/product';
import { productAvailableQuantityQuery } from '$commerce/utils/queries/product/productAvailableQuantity';
import useProductMetadata from '$core-commerce/product/use-product-metadata';

import { SWRHook } from '$core-commerce/utils/types';

import { Buffer } from 'buffer';
export default useProductMetadata;

const NormalizeProduct = (product: any) => {
  return {
    price: product.items[0].sellers[0].commertialOffer.Price,
    productQuantity:
      product.items[0].sellers[0].commertialOffer?.AvailableQuantity || 0,
  };
};

const NormalizeSpecifications = (specifications: any) => {
  const spec = specifications.filter(
    (item: { name: string }) => item.name === 'Gr Especificaciones de Producto'
  );
  let specResult: any[] = [];
  if (spec.length) {
    if (spec[0].specifications?.length)
      specResult = specResult.concat(spec[0].specifications);
  }

  return { specifications: specResult };
};

export const handler: SWRHook<any> = {
  fetchOptions: {
    query: productAvailableQuantityQuery,
  },
  async fetcher({ input, options, fetch }) {
    let payload: any = {
      slug: input.slug,
    };
    if (input?.isSelectedAddress) {
      const { segment } = await getSession();
      const decoded = JSON.parse(
        Buffer.from(segment, 'base64').toString('ascii')
      );
      payload = {
        ...payload,
        regionId: decoded?.regionId,
      };
    }

    const data = await fetch({
      ...options,
      variables: payload,
    });
    if (data.product) {
      let productData = {
        ...NormalizeProduct(data.product),
      };
      if (data.product.specificationGroups) {
        productData = {
          ...productData,
          ...NormalizeSpecifications(data.product.specificationGroups),
        };
      }

      return productData;
    } else return null;
  },
  useHook:
    ({ useData }) =>
    (input = {}) => {
      return useData({
        input: [
          ['slug', input.slug],
          ['isSelectedAddress', input.isSelectedAddress],
        ],
        swrOptions: {
          revalidateOnFocus: false,
          ...input.swrOptions,
        },
      });
    },
};
