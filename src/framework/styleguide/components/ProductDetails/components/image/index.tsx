import React, { FC } from 'react';
import { useStyleClass } from '$styleguide/styleContext';
import { Image, View } from 'react-native';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useProductDetails } from '../../context';

export const ProductDetailImage: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(
    ['container', 'imageStyles'],
    subSchema.blockClass
  );

  const { product } = useProductDetails();

  return (
    <View style={styles.container}>
      <Image
        style={[styles.imageStyles, { resizeMode: 'contain' }]}
        source={{ uri: product.images[0].imageUrl }}
      />
    </View>
  );
};
