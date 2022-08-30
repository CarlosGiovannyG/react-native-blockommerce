/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { ProductDetailsProvider } from './context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useProduct } from '$commerce/product';
import { truncate } from '$styleguide/utils/truncate';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';

export const ProductDetails: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const route = useRoute();
  const { data, isLoading } = useProduct({
    // @ts-ignore
    slug: route.params?.productId,
  });

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title:
        subSchema?.truncateTitle && subSchema?.maxCharts
          ? truncate(data?.productName, subSchema?.maxCharts)  || ''
          : data?.productName || '',
    });
  }, [data?.productName, navigation]);

  const { styles } = useStyleClass(
    ['container', 'loadingWrapper'],
    subSchema.blockClass
  );
  const blocks = useChildrenBlocks(subSchema.blocks);
  const loadingComponent = useSlotBlock(subSchema.loadingComponent);
  if (!data && isLoading) {
    return <View style={styles.loadingWrapper}>{loadingComponent}</View>;
  }

  return (
    <ProductDetailsProvider config={{ product: data }}>
      <View style={styles.container}>{blocks}</View>
    </ProductDetailsProvider>
  );
};
