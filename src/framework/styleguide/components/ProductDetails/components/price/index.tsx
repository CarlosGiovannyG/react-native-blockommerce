import React, { FC, useCallback } from 'react';
import { useStyleClass } from '$styleguide/styleContext';
import { Text, View } from 'react-native';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { usePrice } from '$commerce/product';
import { useProductDetails } from '../../context';

export const ProductDetailsPriceComponent: FC<{
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

  const { product } = useProductDetails();

  const { price, discount } = usePrice(
    product && {
      amount: Number(product.price),
      discountPercent: Number(product.discount),
      currencyCode: 'COP',
    }
  );

  const { price: listPrice } = usePrice(
    product && {
      amount: Number(product.listPrice),
      currencyCode: 'COP',
    }
  );

  const renderPrice = useCallback(() => {
    let priceTextValue =
      Number(product.listPrice) <= 0 ? 'No disponible' : listPrice;
    if (subSchema.discountPrice && discount) priceTextValue = price;
    if (subSchema.deleteDecimals)
      priceTextValue = priceTextValue.replace(/\D00(?=\D*$)/, '');
    return <Text style={styles.textStyles}>{priceTextValue}</Text>;
  }, [
    product.price,
    discount,
    listPrice,
    price,
    styles.textStyles,
    subSchema.deleteDecimals,
    subSchema.discountPrice,
  ]);

  return <View style={styles.container}>{renderPrice()}</View>;
};
