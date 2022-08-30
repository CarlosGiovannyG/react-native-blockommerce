/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SWRHook } from '$core-commerce/utils/types';
import { getCartItemsQuery } from '$commerce/utils/queries';
import { CommerceError } from '$core-commerce/utils/errors';
import useCart, { UseCart } from '$core-commerce/cart/use-cart';

export default useCart as UseCart<typeof handler>;

enum TotalizerTypes {
  items = 'Items',
  discounts = 'Discounts',
  shipping = 'Shipping',
}

const NormalizeTotalizers = (data: any) => {
  const totalizerInitialValue = {
    totalizers: {
      subTotal: 0,
      discounts: 0,
      shipping: 0,
    },
  };
  const result = data?.totalizers?.reduce((accum, currentValue) => {
    if (currentValue.id === TotalizerTypes.items) {
      accum = {
        ...accum,
        totalizers: {
          ...accum.totalizers,
          subTotal: accum.totalizers.subTotal + currentValue.value,
        },
      };
    } else if (currentValue.id === TotalizerTypes.discounts) {
      accum = {
        ...accum,
        totalizers: {
          ...accum.totalizers,
          discounts: accum.totalizers.discounts + currentValue.value,
        },
      };
    } else if (currentValue.id === TotalizerTypes.shipping) {
      accum = {
        ...accum,
        totalizers: {
          ...accum.totalizers,
          shipping: accum.totalizers.shipping + currentValue.value,
        },
      };
    }

    return accum;
  }, totalizerInitialValue);

  const values = [
    result.totalizers.shipping,
    result.totalizers.subTotal,
    result.totalizers.discounts,
  ];

  const subvalues = [
    
    result.totalizers.subTotal,
    result.totalizers.discounts,
  ];
  const calculateTotalCart = (calcValues: number[]) => {
    const values = calcValues.reduce((accum, currentValue) => {
      return accum + currentValue;
    }, 0);
    return values;
  };

  return {
    totalizer: result.totalizers,
    totalCart: calculateTotalCart(values) * 0.01,
    subtotalCart: calculateTotalCart(subvalues) * 0.01,
  };
};

export const handler: SWRHook<any> = {
  fetchOptions: {
    query: getCartItemsQuery,
  },
  async fetcher({ input, options, fetch }) {
    const data = await fetch({
      ...options,
      variables: {
        orderFormId: input?.orderFormId,
      },
    });

    const totalizers = NormalizeTotalizers(data?.orderForm);

    if (data?.orderForm) {
      return {
        cart: data?.orderForm,
        ...totalizers,
      };
    } else {
      throw new CommerceError({
        message: 'use-checkout error: orderFormId not found',
      });
    }
  },
  useHook:
    ({ useData }) =>
      (input = {}) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
        return useData({
          input: [['orderFormId', input?.orderFormId]],
          swrOptions: {
            ...input?.swrOptions,
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
          },
        });
      },
};
