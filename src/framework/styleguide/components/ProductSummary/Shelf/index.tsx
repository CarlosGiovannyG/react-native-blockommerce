/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, memo, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useProductSummaryHandler } from '../context';
import { ShelfContextProvider } from './context';
import { useStyleClass } from '$styleguide/styleContext';
import { useLinkTo } from '@react-navigation/native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import isEqual from 'lodash.isequal';
import { FlatList } from 'react-native-gesture-handler';

export const Shelf: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();

  const { list, getNextPage, loadingProducts } = useProductSummaryHandler();
  const { styles } = useStyleClass(
    ['shelfContainer', 'shelfCardStyles'],
    subSchema.blockClass
  );
  const blocks = useChildrenBlocks(subSchema.blocks);

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

  const horizontal = subSchema.horizontal ? true : false;

  const children = useSlotBlock(subSchema.listEmptyComponent);

  const renderFlatListItem = useCallback(
    ({ item }) => (
      <MemoShelfItem
        item={item}
        redirectUrl={redirectUrl}
        redirectTo={subSchema.redirectTo ? true : false}
        blockClass={subSchema.blockClass}
      >
        {blocks}
      </MemoShelfItem>
    ),
    [blocks, redirectUrl, subSchema.blockClass]
  );

  return (
    <FlatList
      style={styles.shelfContainer}
      data={list}
      keyExtractor={(item) => item.productId}
      showsVerticalScrollIndicator={false}
      horizontal={horizontal}
      initialNumToRender={5}
      numColumns={subSchema.columns ?? 1}
      renderItem={renderFlatListItem}
      onEndReached={() => {
        if (!loadingProducts && typeof getNextPage === 'function') {
          getNextPage();
        }
      }}
      onEndReachedThreshold={0.5}
      ListEmptyComponent={() => children}
    />
  );
};

interface ShelfItemProps {
  item: any;
  redirectUrl: (item: any) => string;
  redirectTo: boolean;
  blockClass?: string;
  children: React.ReactNode;
}

const ShelfItem: FC<ShelfItemProps> = ({
  item,
  redirectUrl,
  redirectTo,
  blockClass,
  children,
}) => {
  const linkTo = useLinkTo();
  const { styles } = useStyleClass(
    ['shelfContainer', 'shelfCardStyles'],
    blockClass
  );
  return (
    <ShelfContextProvider key={`${item.id}-shelf-item`} config={{ data: item }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          redirectTo && linkTo(redirectUrl(item));
        }}
      >
        <View style={styles.shelfCardStyles}>{children}</View>
      </TouchableOpacity>
    </ShelfContextProvider>
  );
};

const MemoShelfItem = memo(ShelfItem, (prev, next) =>
  isEqual(prev.item, next.item)
);
