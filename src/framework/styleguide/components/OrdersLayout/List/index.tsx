/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
import { useLinkTo } from '@react-navigation/native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { FlatList } from 'react-native-gesture-handler';
import { useOrderList } from '../context';
import { OrderItemListContextProvider } from './context';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';

export const OrderListComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();

  const { list } = useOrderList();

  const { styles } = useStyleClass(
    ['shelfContainer', 'shelfCardStyles'],
    subSchema.blockClass
  );
  const blocks = useChildrenBlocks(subSchema.blocks);

  const horizontal = subSchema.horizontal ? true : false;

  const addSlugToUrl = (match: string, item: any) =>
    item[match.replace('{', '').replace('}', '')];
  const keysRegEx = /\{(.*?)\}/gm;

  const redirectUrl = useCallback(
    (item: any) => {
      if (subSchema.redirectTo) {
        return subSchema.redirectTo.replace(keysRegEx, (match: string) =>
          addSlugToUrl(match, item)
        );
      } else {
        return '/feed';
      }
    },
    [keysRegEx, subSchema.redirectTo]
  );

  const renderFlatListItem = useCallback(
    ({ item }) => (
      <OrderItemComponent
        item={item}
        redirectUrl={redirectUrl}
        blockClass={subSchema.blockClass}
      >
        {blocks}
      </OrderItemComponent>
    ),
    [blocks, redirectUrl, subSchema.blockClass]
  );

  const EmptyComponent = useSlotBlock(subSchema?.ListEmptyComponent)

  return (
    <FlatList
      style={styles.shelfContainer}
      data={list}
      keyExtractor={(item) => item.orderId}
      showsVerticalScrollIndicator={false}
      horizontal={horizontal}
      ListEmptyComponent={EmptyComponent}
      initialNumToRender={10}
      numColumns={subSchema.columns ?? 1}
      renderItem={renderFlatListItem}
      onEndReached={(info) => {
        //if (!loadingProducts && typeof getNextPage === 'function') {
        // getNextPage();
        //}
      }}
      onEndReachedThreshold={0.5}
    />
  );
};

interface ShelfItemProps {
  item: any;
  redirectUrl: (item: any) => string;
  blockClass?: string;
}

const OrderItemComponent: FC<ShelfItemProps> = ({
  item,
  redirectUrl,
  blockClass,
  children,
}) => {
  const linkTo = useLinkTo();
  const { styles } = useStyleClass(
    ['shelfContainer', 'shelfCardStyles'],
    blockClass
  );
  return (
    <OrderItemListContextProvider
      key={`${item.orderId}-item`}
      config={{ data: item }}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          linkTo(redirectUrl(item));
        }}
      >
        <View style={styles.shelfCardStyles}>{children}</View>
      </TouchableOpacity>
    </OrderItemListContextProvider>
  );
};
