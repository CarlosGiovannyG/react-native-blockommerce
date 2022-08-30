import React, { FC, useState } from 'react';
import { useStyleClass } from '$styleguide/styleContext';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useUI } from '$styleguide/components/UIActionsHandler';
import useRemoveItem from '$commerce/wishlist/use-remove-item';
import { useWishlistShelfContext } from '../shelf/context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useWishlist from '$commerce/wishlist/use-wishlist';
import { ModalModes } from '$styleguide/components/common/ModalComponent';

export const WishlistRemoveButton: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;
  const [isLoading, setLoading] = useState(false);
  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(
    ['container', 'imageStyles'],
    subSchema.blockClass
  );
  const removeWishlist = useRemoveItem();
  const { mutate } = useWishlist();
  const { openModal, closeModal } = useUI();

  const { data } = useWishlistShelfContext();

  const onSubmit = async (props: any) => {
    setLoading(true);
    try {
      if (subSchema.deleteConfirmationContent) {
        openModal({
          content: subSchema.deleteConfirmationContent,
          modalType: ModalModes.acceptCancel,
          style: subSchema.blockClass,
          onAccept: async () => {
            await removeWishlist(data);
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
        await removeWishlist(data);
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
