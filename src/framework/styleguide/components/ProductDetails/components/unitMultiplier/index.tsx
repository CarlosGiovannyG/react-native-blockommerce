import React, { FC, useCallback } from 'react';
import { useStyleClass } from '$styleguide/styleContext';
import { Text, View } from 'react-native';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useProductDetails } from '../../context';
import { usePrice } from '$commerce/product';

export const ProductDetailUnitMultiplier: FC<{
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

  const { price } = usePrice(
    product && {
      amount: Number(product?.valueUnitMultiplier),
      currencyCode: 'COP',
    }
  );

  const renderTextValue = useCallback(() => {
    let priceTextValue = Number(product?.valueUnitMultiplier) <= 0 ? 'No disponible' : price;
    if (subSchema?.deleteDecimals)
      priceTextValue = priceTextValue?.replace(/\D00(?=\D*$)/, '');
    return <Text style={styles.textStyles}>{priceTextValue}</Text>;
  }, [
    product?.price,
    price,
    styles?.textStyles,
    subSchema.deleteDecimals,
    subSchema.discountPrice,
  ]);

  return ( 
    <View style={styles.container}>
      <Text style={styles.textStyles}>{renderTextValue()}</Text>
    </View>
  );
};
