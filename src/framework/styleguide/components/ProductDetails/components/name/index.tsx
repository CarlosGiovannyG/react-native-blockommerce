import { BasicJSONSchemaType } from '$styleguide/JSONSchema';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { useProductDetails } from '../../context';

export const ProductDetailsNameComponent: FC<{
  inputObject: BasicJSONSchemaType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);
  const { product } = useProductDetails();

  return <Text style={styles.textStyles}>{product.productName}</Text>;
};
