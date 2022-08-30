import React, { FC } from 'react';
import { useStyleClass } from '$styleguide/styleContext';
import { Text, View } from 'react-native';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useCart } from '$commerce/cart';
import { replaceKeysForVar } from '$styleguide/utils/addVarToString';

export const ProductSummaryTotal: FC<{
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

  const { data } = useCart();

  const total = data?.cart?.items?.length;

  return !total ? (
    <View style={styles.container}>
      <Text style={styles.textStyles} />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Tienes {total} productos</Text>
    </View>
  );
};
