/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SWRHook } from '$core-commerce/utils/types';
import {
  GetOrderByIdHook,
  OrdersHooks,
} from '$core-commerce/types/customer/orders';
import { getOrderById } from '$commerce/utils/queries/customer/order/getOrderById';
import useOrderById from '$core-commerce/customer/order/use-order-by-id';
import { NormalizeProducts } from '$commerce/product/use-search';

export default useOrderById;

enum idMaps {
  items = 'Items',
  shipping = 'Shipping',
  discounts = 'Discounts',
}

const parseTotals = (totals: { id: string; name: string; value: number }[]) => {
  const shipping = totals.find((pred) => pred.id === idMaps.shipping);
  const items = totals.find((pred) => pred.id === idMaps.items);
  const discounts = totals.find((pred) => pred.id === idMaps.discounts);

  return {
    shipping,
    items: {
      ...items,
      value: items?.value * 0.01,
    },
    discounts,
  };
};

const NormalizeOrderProduct = (items: any[]) => {
  return items.map((product) => {
    return {
      brand: product.additionalInfo.brandName,
      productName: product.name,
      productId: product.productId,
      price: product.sellingPrice * 0.01, 
      productQuantity: product.quantity  || 0,
      image: product.imageUrl,
    };
  });
};

export const handler: SWRHook<GetOrderByIdHook> = {
  fetchOptions: {
    query: getOrderById,
  },
  async fetcher({ input, options, fetch }) {
    const data = await fetch({
      ...options,
      variables: {
        orderId: input.orderId,
      },
    });

    const orderDetail = {
      orderId: data?.getOrderById?.orderId,
      totalValue: data?.getOrderById?.value,
      totals: parseTotals(data?.getOrderById?.totals),
      clientProfileData: data?.getOrderById?.clientProfileData,
      shippingData: data?.getOrderById?.shippingData,
      items: NormalizeOrderProduct(data?.getOrderById?.items),
    };

    if (data?.getOrderById) {
      return orderDetail;
    }
    return null;
  },
  useHook:
    ({ useData }) =>
    (input) => {
      return useData({
        input: [['orderId', input.orderId]],
        swrOptions: {
          revalidateOnFocus: false,
          ...input?.swrOptions,
        },
      });
    },
};
