import React, { FC, useState } from 'react';
import { useStyleClass } from '$styleguide/styleContext';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useUI } from '$styleguide/components/UIActionsHandler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useRemoveItemDetail from '$commerce/wishlist/use-remove-item-detail';
import { useShelfContext } from '$styleguide/components/ProductSummary/Shelf/context';
import { useRoute } from '@react-navigation/native';
import useWishlistDetail from '$commerce/wishlist/use-wishlist-detail';
import { ModalModes } from '$styleguide/components/common/ModalComponent';

export const WishlistItemRemoveButton: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;
  const [isLoading, setLoading] = useState(false);
  const subSchema = inputObject.getObject();
  const route = useRoute();
  const { styles } = useStyleClass(
    ['container', 'imageStyles'],
    subSchema.blockClass
  );
  const removeWishlist = useRemoveItemDetail();
  const { data: dataWishlistDetail, mutate } = useWishlistDetail({
    // @ts-ignore
    id: route.params?.id,
  });

  const { openModal, closeModal } = useUI();

  const { data } = useShelfContext();

  const getWishlistItemBySku = (data: any) => {
    const items = dataWishlistDetail;
    const item = items?.find((item: any) => item.skuId === data.productId);

    return item;
  };

  const onSubmit = async (props: any) => {
    setLoading(true);
    try {
      const getWishlistBySku = await getWishlistItemBySku(data);

      if (getWishlistBySku) {
        if (subSchema.deleteConfirmationContent) {
          openModal({
            content: subSchema.deleteConfirmationContent,
            modalType: ModalModes.acceptCancel,
            style: subSchema.blockClass,
            onAccept: async () => {
              await removeWishlist(getWishlistBySku);
              await mutate();
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
          await removeWishlist(getWishlistBySku);
          await mutate();
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
        }
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  const label = subSchema.label ?? 'Remover';
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSubmit}>
        {subSchema.icon && subSchema.name ? (
          <Icon
            name={subSchema.name ?? 'delete'}
            size={subSchema.size ?? 30}
            color={subSchema.color ?? 'black'}
          />
        ) : (
          <Text>{label}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
