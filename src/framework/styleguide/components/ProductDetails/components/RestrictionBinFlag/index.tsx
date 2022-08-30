import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { useLinkTo } from '@react-navigation/native';
import React, { FC, Fragment, useCallback, useMemo } from 'react';
import { Image, Linking, TouchableOpacity, View, Text } from 'react-native';
import { useProductDetails } from '../../context';

const FindCommonElement = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
};

const buildImage = (uri: string, width: any, height: any) => {
  return (
    <Image
      key={uri}
      style={{
        width: width ?? '100%',
        height: height ?? '100%',
        resizeMode: 'contain',
      }}
      source={{ uri }}
    />
  );
};

const ResctrictionReduce = (
  items: string[],
  bins: string[],
  width: any,
  height: any
) =>
  items.reduce((accum: any, current: string) => {
    let binCompare = FindCommonElement(bins, current.bin);
    let image = buildImage(current.value, width, height);
    if (binCompare) {
      accum = {
        ...accum,
        [current.label ?? '']: image,
      };
    }
    return accum;
  }, {});

export const ProductDetailRestrictionBinFlagComponent: FC<{
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

  const bin = ResctrictionReduce(
    subSchema?.restriction,
    product?.restrictionsBins,
    subSchema.width,
    subSchema.height
  );

  const imageBlock = Object.values(bin).map((image) => {
    return image;
  });

  return (
    <>
      {imageBlock.length ? (
        <View style={styles.container}>{imageBlock}</View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.textStyles}>
            {subSchema.emptyText || 'Promoción sin restricción'}
          </Text>
        </View>
      )}
    </>
  );
};
