/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useStyleClass } from '$styleguide/styleContext';
import {
  View,
  TouchableOpacity,
  Text,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { useShelfContext } from '../Shelf/context';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import { useCart, useUpdateItem } from '$commerce/cart';

export const ProductSummaryQuantity: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const [loading, setLoading] = useState(false);
  const subSchema = inputObject.getObject();
  const { data: product } = useShelfContext();

  const { data } = useCart();
  const { styles } = useStyleClass(
    [
      'container',
      'textStyles',
      'quantityButton',
      'quantityText',
      'quantityTextWrapper',
      'quantityButtonAdd',
      'quantityButtonDecrease',
    ],
    subSchema.blockClass
  );

  const [numberQuantity, onChangeNumberQuantity] = useState(0);
  const updateItem = useUpdateItem();
  // limit constant will be use in the future as a quantity control
  // using the shelfContext to bring the numberQuantity on products that we can buy

  const getCartItemById = useCallback(
    (id: string) => {
      const items = data?.cart?.items;
      const item = items?.find(
        (predicate: { id: string }) => predicate.id === id
      );
      return item;
    },
    [data?.cart?.items, product?.productId]
  );

  const getAndSetQuantityNumberHandler = useCallback(() => {
    const item = getCartItemById(product?.productId);
    if (item) onChangeNumberQuantity(item.quantity);
  }, [getCartItemById, product?.productId]);

  useEffect(() => {
    getAndSetQuantityNumberHandler();
  }, [
    data,
    getAndSetQuantityNumberHandler,
    getCartItemById,
    product?.productId,
  ]);

  const onHandleChange = async (action: string) => {
    if (loading) return null;
    setLoading(true);
    try {
      let i = 0;
      const limit = product.productQuantity;

      if (action == 'add' && numberQuantity < limit && numberQuantity >= 0) {
        i = numberQuantity + 1;
        onChangeNumberQuantity(i);
      } else if (numberQuantity > 0 && action == 'decrease') {
        i = numberQuantity - 1;
        onChangeNumberQuantity(i);
      }

      await updateItem({
        id: product?.productId,
        quantity: i,
        seller: product?.seller,
        uniqueId: getCartItemById(product?.productId).uniqueId,
        inputValues: '',
        options: [],
      });
    } catch (e) {
      console.log('Quantity error', e);
    }

    setLoading(false);
  };

  const minusBlock = useSlotBlock(subSchema.MinusIcon);
  const addBlock = useSlotBlock(subSchema.AddIcon);
  return (
    <View style={styles.container}>
      <Pressable
        disabled={loading}
        style={styles.quantityButtonDecrease}
        hitSlop={subSchema?.hitSlop}
        onPress={() => onHandleChange('decrease')}
      >
        {minusBlock}
      </Pressable>
      <View style={styles.quantityTextWrapper}>
        {loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <Text style={styles.quantityText}>{numberQuantity}</Text>
        )}
      </View>
      <Pressable
        disabled={loading}
        style={styles.quantityButtonAdd}
        hitSlop={subSchema?.hitSlop}
        onPress={() => onHandleChange('add')}
      >
        {addBlock}
      </Pressable>
    </View>
  );
};
