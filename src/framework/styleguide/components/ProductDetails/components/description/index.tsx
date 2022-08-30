/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BasicJSONSchemaType } from '$styleguide/JSONSchema';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { useProductDetails } from '../../context';

export const ProductDetailDescriptionComponent: FC<{
  inputObject: BasicJSONSchemaType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { product } = useProductDetails();
  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);
  return <Text style={styles.textStyles}>{product.description}</Text>;
};
