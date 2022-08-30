/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, memo, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { WishlistShelfContextProvider } from './context';
import { useStyleClass } from '$styleguide/styleContext';
import { useLinkTo } from '@react-navigation/native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import isEqual from 'lodash.isequal';
import { FlatList, Swipeable } from 'react-native-gesture-handler';
import { useWishlistSummaryHandler } from '../../context';
import RightSwipeActions from '$styleguide/components/common/RightSwipeActions';
import useRemoveItem from '$commerce/wishlist/use-remove-item';
import { useUI } from '$styleguide/components/UIActionsHandler';
import { ModalModes } from '$styleguide/components/common/ModalComponent';

export const WishlistShelf: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();

  const { list, getNextPage, loadingProducts } = useWishlistSummaryHandler();

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
      <ShelfItem
        item={item}
        redirectUrl={redirectUrl}
        blockClass={subSchema.blockClass}
        subSchema={subSchema}
      >
        {blocks}
      </ShelfItem>
    ),
    [blocks, redirectUrl, subSchema.blockClass]
  );

  return (
    <FlatList
      style={styles.shelfContainer}
      data={list}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      horizontal={horizontal}
      initialNumToRender={10}
      numColumns={subSchema.columns ?? 1}
      renderItem={renderFlatListItem}
      onEndReached={(info) => {
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
  blockClass?: string;
  children: Element;
  subSchema:any
}

const ShelfItem: FC<ShelfItemProps> = ({
  item,
  redirectUrl,
  blockClass,
  children,
  subSchema
}) => {
  const linkTo = useLinkTo();
  const { styles } = useStyleClass(
    ['shelfContainer', 'shelfCardStyles'],
    blockClass
  );

  const { openModal, closeModal } = useUI();
  const removeWishlist = useRemoveItem();
  
  const onDelete = async (item: any) => { 
    try {
      if (subSchema.deleteConfirmationContent) {
        openModal({
          content: subSchema.deleteConfirmationContent,
          modalType: ModalModes.acceptCancel,
          style: subSchema.blockClass,
          onAccept: async () => {
            await removeWishlist(item);
            closeModal();
            if (subSchema.content && subSchema.modalType) {
              openModal({
                content: subSchema.content,
                modalType: subSchema.modalType,
                style: subSchema.blockClass,
                onAccept: () => {
                  closeModal();
                },
              });
            } else {
              console.log('se cerró');
            }
          },
          onCancel: () => {
            closeModal();
          },
        });
      } else {
        await removeWishlist(item);

      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <WishlistShelfContextProvider
      key={`${item.id}-wishlist-item`}
      config={{ data: item }}
    >
      <Swipeable
        rightThreshold={30}
        renderRightActions={() => (
          <RightSwipeActions
          onDeleteCallback={()=> onDelete(item)}
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
    </WishlistShelfContextProvider>
  );
};


