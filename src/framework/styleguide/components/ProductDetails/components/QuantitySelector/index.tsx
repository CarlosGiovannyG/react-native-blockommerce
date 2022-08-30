import React, { FC, useCallback, useEffect, useState } from 'react';
import { useStyleClass } from '$styleguide/styleContext';
import { View, Text, ActivityIndicator, Pressable } from 'react-native';

import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useProductDetails } from '../../context';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import { useCart, useUpdateItem } from '$commerce/cart';

export const ProductDetailQuantity: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const [loading, setLoading] = useState(false);
  const subSchema = inputObject.getObject();
  const { product } = useProductDetails();
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
      const item = items?.find((predicate) => predicate.id === id);
      return item;
    },
    [data?.cart?.items]
  );

  const getAndSetQuantityNumberHandler = useCallback(async () => {
    const itemQuantity = await getCartItemById(product?.id).quantity;
    onChangeNumberQuantity(itemQuantity);
  }, [getCartItemById, product?.id]);

  useEffect(() => {
    getAndSetQuantityNumberHandler()
      .then(() => {})
      .catch(() => {});
  }, [data, getAndSetQuantityNumberHandler, getCartItemById, product.id]);

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
        uniqueId: getCartItemById(product?.id).uniqueId,
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
