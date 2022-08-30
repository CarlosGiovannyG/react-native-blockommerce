/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getSession } from '$commerce/utils/customer-session';
import { productQuery } from '$commerce/utils/queries/product/product';
import useProduct from '$core-commerce/product/use-product';
import { SWRHook } from '$core-commerce/utils/types';

import { Buffer } from 'buffer';
export default useProduct;

export const NormalizeProduct = (product: any) => {
  //console.log("product", JSON.stringify(product))
  /* const discount =
    product.items[0].sellers[0].commertialOffer.teasers[0] &&
    product.items[0].sellers[0].commertialOffer.teasers[0].effects.parameters[0]
      .name === 'PercentualDiscount'
      ? product.items[0].sellers[0].commertialOffer.teasers[0].effects
          .parameters[0].value
      : '0'; */
  const restrictionsBins =
    product.items[0].sellers[0].commertialOffer.teasers[0] &&
    product.items[0].sellers[0].commertialOffer.teasers[0].conditions
      .parameters[0].name === 'RestrictionsBins'
      ? product.items[0].sellers[0].commertialOffer.teasers[0].conditions
          .parameters[0].value
      : '0';

  const restrictionsBinsArray = restrictionsBins.split(',');

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
    productReference: product.productReference,
    productId: product.productId,
    description: product.description,
    images: product?.items[0].images,
    price: product?.items[0].sellers[0].commertialOffer.Price,
    listPrice: product?.items[0].sellers[0].commertialOffer.ListPrice,
    priceWithoutDiscount:
      product?.items[0].sellers[0].commertialOffer.PriceWithoutDiscount,
    productQuantity:
      product.items[0].sellers[0].commertialOffer?.AvailableQuantity || 0,
    discount: getDiscount(),
    id: product.items[0].itemId,
    seller: product?.items[0].sellers[0].sellerId,
    sellerName: product?.items[0].sellers[0].sellerName,
    measurementUnit:
      product?.items[0]?.measurementUnit === 'un'
        ? 'unidad'
        : product?.items[0]?.measurementUnit,
    unitMultiplier: product?.items[0]?.unitMultiplier,
    valueUnitMultiplier:
      product?.items[0]?.sellers[0]?.commertialOffer?.ListPrice /
      product?.items[0]?.unitMultiplier,
    //  measurementUnit:
    //   product?.specificationGroups[0]?.specifications[0]?.values[0],
    // unitMultiplier:
    //  product?.specificationGroups[0]?.specifications[1]?.values[0],
    // valueUnitMultiplier:
    //  product?.items[0]?.sellers[0]?.commertialOffer?.Price /
    //  product?.specificationGroups[0]?.specifications[1]?.values[0],
    restrictionsBins: restrictionsBinsArray,
    offers: product?.items[0].sellers[0].commertialOffer.teasers,
    discountHighlights:
      product?.items[0].sellers[0].commertialOffer.discountHighlights,
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
    query: productQuery,
  },
  async fetcher({ input, options, fetch }) {
    const { segment } = await getSession();
    const decoded = JSON.parse(
      Buffer.from(segment, 'base64').toString('ascii')
    );
    const data = await fetch({
      ...options,
      variables: {
        slug: input.slug,
        regionId: decoded?.regionId,
      },
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
        input: [['slug', input.slug]],
        swrOptions: {
          revalidateOnFocus: false,
          ...input.swrOptions,
        },
      });
    },
};
