/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useStyleClass } from '$styleguide/styleContext';
import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
} from 'react-native';

import { BasicInputReturnType } from '$styleguide/hooks/types';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import useUpdateItemDetail from '$commerce/wishlist/use-update-item-detail';
import useWishlistDetail from '$commerce/wishlist/use-wishlist-detail';
import { useShelfContext } from '$styleguide/components/ProductSummary/Shelf/context';
import { useRoute } from '@react-navigation/native';

export const WishlistQuantity: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const [loading, setLoading] = useState(false);
  const subSchema = inputObject.getObject();
  const route = useRoute();
  const { data: product } = useShelfContext();
  const updateItem = useUpdateItemDetail();
  const {
    data: dataWishlistDetail,
    mutate,
  } = useWishlistDetail({
    // @ts-ignore
    id: route.params?.id,
  });
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

  // limit constant will be use in the future as a quantity control
  // using the shelfContext to bring the numberQuantity on products that we can buy

  const getWishlistItemById = useCallback(
    (id: string) => {
      const items = dataWishlistDetail;
      const item = items?.find(
        (predicate: { skuId: string }) => predicate.skuId === id
      );
      return item;
    },
    [dataWishlistDetail, product?.productId]
  );

  const getAndSetQuantityNumberHandler = useCallback(() => {
    const item = getWishlistItemById(product?.productId);
    if (item) onChangeNumberQuantity(Number(item.quantity));
  }, [getWishlistItemById, product?.productId]);

  useEffect(() => {
    getAndSetQuantityNumberHandler();
  }, [
    dataWishlistDetail,
    getAndSetQuantityNumberHandler,
    getWishlistItemById,
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
      const item = getWishlistItemById(product?.productId);
      if (item) {
        const itemData = {
          id: item.id,
          listId: item.listId,
          quantity: i,
          productId: product?.productId,
        };

        await updateItem(itemData);
        await mutate();
      }
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
