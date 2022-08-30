import React, { FC, useCallback, useState } from 'react';
import { useStyleClass } from '$styleguide/styleContext';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useUI } from '$styleguide/components/UIActionsHandler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useShelfContext } from '$styleguide/components/ProductSummary/Shelf/context';
import { useRoute } from '@react-navigation/native';
import useWishlistDetail from '$commerce/wishlist/use-wishlist-detail';
import { ModalModes } from '$styleguide/components/common/ModalComponent';
import { useCart, useUpdateItem } from '$commerce/cart';

export const CartItemRemoveButton: FC<{
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
  const updateItem = useUpdateItem();
 
  const { data, mutate } = useCart();

  const { openModal, closeModal } = useUI();

  const { data: product } = useShelfContext();

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
  
  const onSubmit = async (props: any) => {
    setLoading(true);
    try {
      const getCartItemId = await getCartItemById(product?.productId);

      if (getCartItemId) {
        if (subSchema.deleteConfirmationContent) {
          openModal({
            content: subSchema.deleteConfirmationContent,
            modalType: ModalModes.acceptCancel,
            style: subSchema.blockClass,
            onAccept: async () => {
              await updateItem({
                id: product?.productId,
                quantity: 0,
                seller: product?.seller,
                uniqueId: getCartItemById(product?.productId).uniqueId,
                inputValues: '',
                options: [],
              });
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
          await updateItem({
            id: product?.productId,
            quantity: 0,
            seller: product?.seller,
            uniqueId: getCartItemById(product?.productId).uniqueId,
            inputValues: '',
            options: [],
          });
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
