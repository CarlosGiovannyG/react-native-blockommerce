/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, memo, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { GiftCardDetailShelfContextProvider } from './context';
import { useStyleClass } from '$styleguide/styleContext';
import { useLinkTo } from '@react-navigation/native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import isEqual from 'lodash.isequal';
import { FlatList, Swipeable } from 'react-native-gesture-handler';
import { useGiftCardDetailSummaryHandler } from '../../context';
import RightSwipeActions from '$styleguide/components/common/RightSwipeActions';

export const GiftCardDetailShelf: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();

  const { list, getNextPage, loading } = useGiftCardDetailSummaryHandler();

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
      data={list.items}
      keyExtractor={(item) => item.numeroTransaccion}
      showsVerticalScrollIndicator={false}
      horizontal={horizontal}
      initialNumToRender={10}
      numColumns={subSchema.columns ?? 1}
      renderItem={renderFlatListItem}
      onEndReached={(info) => {
        if (!loading && typeof getNextPage === 'function') {
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
    <GiftCardDetailShelfContextProvider
      key={`${item.numeroTransaccion}-gift-card-detail-item`}
      config={{ data: item }}
    >
      <Swipeable
        rightThreshold={30}
        renderRightActions={() => (
          <RightSwipeActions
            onDeleteCallback={async () => {
              //await removeGiftCardDetail(item);
            }}
            enableDelete={false}
            enableEdit={false}
          />
        )}
      >
        <TouchableOpacity
          style={{ backgroundColor: '#fff' }}
          activeOpacity={0.8}
          onPress={() => {
            linkTo(redirectUrl(item));
          }}
        >
          <View style={styles.shelfCardStyles}>{children}</View>
        </TouchableOpacity>
      </Swipeable>
    </GiftCardDetailShelfContextProvider>
  );
};

const MemoShelfItem = memo(ShelfItem, (prev, next) =>
  isEqual(prev.item, next.item)
);
