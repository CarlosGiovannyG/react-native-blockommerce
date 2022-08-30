/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useMemo } from 'react';
import { useStyleClass } from '../../styleContext';
import { View } from 'react-native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../hooks/types';
import { OrderDetailContextProvider } from './context';
import useOrderById from '$commerce/customer/order/use-order-by-id';
import { useRoute } from '@react-navigation/native';
import { ProductSummaryHandlerProvider } from '../ProductSummary/context';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';

export const OrderDetailLayoutComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const route = useRoute();
  // @ts-ignore
  const { data, isLoading } = useOrderById({ orderId: route.params?.orderId });
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);

  const DetailData = useMemo(() => {
    return {
      order: data,
    };
  }, [data]);

  const ProductSummaryData = useMemo(() => {
    return {
      list: data?.items,
      loadingProducts: isLoading,
    };
  }, [isLoading, data?.items]);

  const loadingComponent = useSlotBlock(subSchema?.loadingComponent);

  return (
    <OrderDetailContextProvider data={DetailData}>
      <ProductSummaryHandlerProvider config={ProductSummaryData}>
        <View style={styles.container}>
          {isLoading ? loadingComponent : blocks}
        </View>
      </ProductSummaryHandlerProvider>
    </OrderDetailContextProvider>
  );
};
