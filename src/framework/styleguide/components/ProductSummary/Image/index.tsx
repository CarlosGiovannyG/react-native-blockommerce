import React, { FC } from 'react';
import { useStyleClass } from '$styleguide/styleContext';
import { useShelfContext } from '../Shelf/context';
import { View } from 'react-native';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import FastImage from 'react-native-fast-image';

export const ProductSummaryImage: FC<{
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

  const { data } = useShelfContext();
  return (
    <View style={styles.container}>
      <FastImage
        style={[styles.imageStyles, { resizeMode: 'contain' }]}
        source={{
          uri: data.image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};
