/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, memo, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CreditCardListContextProvider } from './context';
import { useStyleClass } from '$styleguide/styleContext';
import { useLinkTo } from '@react-navigation/native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import isEqual from 'lodash.isequal';
import { FlatList } from 'react-native-gesture-handler';
import { useCreditCardSummaryHandler } from '$styleguide/components/CreditCardLayout/context';

export const CreditCardList: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();

  const { list } = useCreditCardSummaryHandler();

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
      keyExtractor={(item) => item.accountId}
      showsVerticalScrollIndicator={false}
      horizontal={horizontal}
      initialNumToRender={10}
      numColumns={subSchema.columns ?? 1}
      renderItem={renderFlatListItem}
      onEndReachedThreshold={0.5}
      ListEmptyComponent={() => children}
    />
  );
};

interface ShelfItemProps {
  item: any;
  redirectUrl: (item: any) => string;
  blockClass?: string;
  children: Element;
}

const ShelfItem: FC<ShelfItemProps> = ({
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
    <CreditCardListContextProvider
      key={`${item.accountId}-shelf-item`}
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
    </CreditCardListContextProvider>
  );
};

const MemoShelfItem = memo(ShelfItem, (prev, next) =>
  isEqual(prev.item, next.item)
);
