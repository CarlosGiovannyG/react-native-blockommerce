import { usePrice } from '$commerce/product';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import { useProductDetails } from '../../context';

export const ProductDetailDiscountComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
}> = (props) => {
  const { product } = useProductDetails();

  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(
    ['textStyles', 'container'],
    subSchema.blockClass
  );

  const discountPrice = parseFloat(product.discount);

  return (
    <>
      {product.discount !== '0' && (
        <View
          style={{
            ...styles.container,
          }}
        >
          <Text style={styles.textStyles}>{discountPrice}%</Text>
        </View>
      )}
    </>
  );
};
