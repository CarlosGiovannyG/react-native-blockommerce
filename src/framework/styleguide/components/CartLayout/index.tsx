/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useStyleClass } from '../../styleContext';
import { View } from 'react-native';
import { ProductSummaryHandlerProvider } from '../ProductSummary/context';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../hooks/types';
import { useCart } from '$commerce/cart';
import { useGetProductsByIdentifier } from '$commerce/product';
import { CartLayoutHandlerProvider } from './context';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import useFirstRender from '$styleguide/utils/useFirstRender';

const CalculatePricePerQuantity = (items: any[], product: any) => {
  console.log('items', items);
  return items.reduce((accum: number, currentValue: { id: any }) => {
    var item = product?.products?.find(
      (pred) => pred.productId === currentValue.id
    );
    accum += item.price * currentValue.quantity;
    return accum;
  }, 0);
};

export const CartLayoutComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const { data } = useCart();
  const [loading, setLoading] = useState(false);
  const [localData, setLocalData] = useState([]);
  const [valueTotalPrice, setValueTotalPrice] = useState(0);
  const getProductsByIdentifier = useGetProductsByIdentifier();
  const isFirstRender = useFirstRender();
  const loadProducts = useCallback(async () => {
    if (isFirstRender) {
      setLoading(true);
    }
    if (data?.cart?.items?.length >= 1) {
      const value = await getProductsByIdentifier({
        values: data?.cart?.items.reduce(
          (accum: any[], currentValue: { id: any }) => {
            accum.push(currentValue.id);
            return accum;
          },
          []
        ),
      });
      // console.log('el valor', value?.products);

      const calculatePricePerQuantity = CalculatePricePerQuantity(
        data?.cart?.items,
        value
      );

      setValueTotalPrice(calculatePricePerQuantity);
      setLocalData(value?.products);
    } else {
      setValueTotalPrice(0);
      setLocalData([]);
    }
    setLoading(false);
  }, [data?.cart?.items, getProductsByIdentifier]);

  useEffect(() => {
    loadProducts()
      .then(() => {})
      .catch((e) => {
        setLoading(false);
      });
  }, [data, loadProducts]);

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);

  const loadingComponent = useSlotBlock(subSchema?.loadingComponent);
  return (
    <CartLayoutHandlerProvider config={{ totalPrice: valueTotalPrice }}>
      <ProductSummaryHandlerProvider config={{ list: localData }}>
        <View style={styles.container}>
          {loading ? loadingComponent : blocks}
        </View>
      </ProductSummaryHandlerProvider>
    </CartLayoutHandlerProvider>
  );
};
