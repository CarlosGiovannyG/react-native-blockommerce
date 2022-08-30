import React, { FC } from 'react';
import { useStyleClass } from '$styleguide/styleContext';
import { useShelfContext } from '../Shelf/context';
import { Text, View } from 'react-native';
import { BasicInputReturnType } from '$styleguide/hooks/types';

export const ProductSummaryBrand: FC<{
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

  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>{data.brand}</Text>
    </View>
  );
};
