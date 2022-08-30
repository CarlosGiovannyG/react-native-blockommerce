import React, { FC, useCallback, useEffect } from 'react';
import { useStyleClass } from '$styleguide/styleContext';
import { useShelfContext } from '../Shelf/context';
import { ActivityIndicator, Text, View } from 'react-native';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { usePrice, useProduct } from '$commerce/product';
import { useCheckout } from '$commerce/checkout';
import { usePrevious } from '$styleguide/utils/usePrevious';
import isEqual from 'lodash.isequal';
import useProductMetadata from '$core-commerce/product/use-product-metadata';
import { getOrderFormId } from '$commerce/utils/customer-order-form-id';

export const ProductSummaryPrice: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(
    ['container', 'textStyles'],
    subSchema.blockClass
  );

  const { data } = useShelfContext();



  const { data: checkout } = useCheckout();

  let isSelectedAddress = Boolean(
    checkout?.orderForm.shipping?.selectedAddress
  );

  const {
    data: p,
    mutate: revalidateProduct,
    isLoading,
    isValidating
  } = useProductMetadata({
    // @ts-ignore
    slug: data?.linkText,
    isSelectedAddress: isSelectedAddress,
  });

  const checkoutPrevious = usePrevious(checkout);

  const revalidateHandler = async () => {
    if (
      checkout?.orderForm?.shipping?.selectedAddress
    ) {
      if (
        checkoutPrevious !== undefined &&
        !isEqual(
          checkoutPrevious?.orderForm?.shipping?.selectedAddress,
          checkout?.orderForm?.shipping?.selectedAddress
        )
      ) {
        revalidateProduct();
      }
    }
  };

  useEffect(() => {
    if(!subSchema.showOriginal)  {
      revalidateHandler();
    }
  }, [
    checkout?.orderForm.shipping?.selectedAddress,
    checkoutPrevious?.orderForm.shipping?.selectedAddress,
  ]);

  const { price, discount } = usePrice(
    p
      ? {
          amount: Number(p?.price),
          discountPercent: Number(p?.discount),
          currencyCode: 'COP',
        }
      : {
          amount: Number(data?.price),
          discountPercent: Number(data?.discount),
          currencyCode: 'COP',
        }
  );

  const renderPrice = () => {
    let priceTextValue =
      Number(p?.price) <= 0 || Number(data?.price) <= 0
        ? 'No disponible'
        : price;
    if (subSchema.discountPrice && discount) priceTextValue = discount;
    if (subSchema.deleteDecimals)
      priceTextValue = priceTextValue.replace(/\D00(?=\D*$)/, '');
    return <Text style={styles.textStyles}>{priceTextValue}</Text>;
  }
  
  return (
    <View style={styles.container}>
      {(!isLoading || !isValidating) ? renderPrice() : <ActivityIndicator />}
    </View>
  );
};
