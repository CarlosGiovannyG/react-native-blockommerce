/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useCallback, useMemo, useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
import { BasicInputReturnType } from '$styleguide/hooks/types';

import { useLinkTo, useNavigation, useRoute } from '@react-navigation/native';
import { useUI } from '$styleguide/components/UIActionsHandler';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { useCheckout } from '$commerce/checkout';
import { useShelfContext } from '../Shelf/context';

import { useWishlistShelfContext } from '$styleguide/components/WishlistLayout/Components/shelf/context';
import useAddItemDetail from '$commerce/wishlist/use-add-item-detail';
import { useProductDetails } from '$styleguide/components/ProductDetails/context';
import useWishlistDetail from '$commerce/wishlist/use-wishlist-detail';
import { ModalModes } from '$styleguide/components/common/ModalComponent';

export const AddToWishlistButton: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const addItem = useAddItemDetail();
  const { styles } = useStyleClass(
    ['textStyles', 'container'],
    subSchema.blockClass
  );
  const blocks = useChildrenBlocks(subSchema.blocks);
  const linkTo = useLinkTo();
  const route = useRoute();
  const { data: productDetail } = useShelfContext();
  const { product } = useProductDetails();
  const { data: wishlist } = useWishlistShelfContext();
  const { data: wishlistDetail, mutate } = useWishlistDetail({
    id: wishlist?.id,
  });
  const { openModal, closeModal } = useUI();
  const { data, isLoading } = useCheckout();
  const [loading, setLoading] = useState(false);
  const [wishlistDisable, setWishlistDisable] = useState(false);
  const navigation = useNavigation();
  const keysRegEx = /\{(.*?)\}/gm;

  const redirectUrl = useCallback(() => {
    if (subSchema.url) {
      return subSchema.url.replace(
        keysRegEx,
        product?.productId || productDetail?.productId
      );
    } else if (subSchema.redirectTo && subSchema.redirectTo === 'goBack') {
      return navigation.goBack();
    } else {
      return '/feed';
    }
  }, [keysRegEx, subSchema.redirectTo]);

  const exists = useMemo(
    // @ts-ignore
    () => wishlistDetail?.find((pred: any) => pred.skuId === route.params?.id),
    // @ts-ignore
    [wishlistDetail, route.params?.id]
  );

  const handleModal = (
    type: 'success' | 'error' | 'custom',
    params?: {
      id: string;
      image: string;
      description: string;
      productName: string;
    }
  ) => {
    switch (type) {
      case 'success':
        if (subSchema.content && subSchema.modalType) {
          openModal({
            content: subSchema.content,
            modalType: subSchema.modalType,
            style: subSchema.blockClass,
            onAccept: () => {
              subSchema.redirectTo ? redirectUrl() : closeModal();
            },
          });
        }
        break;
      case 'error':
        if (subSchema.contentError && subSchema.modalType) {
          openModal({
            content: subSchema.contentError,
            modalType: subSchema.modalType,
            style: subSchema.blockClass,
            onAccept: () => {
              closeModal();
            },
          });
        }
        break;
      case 'custom':
        openModal({
          modalContentBlock: subSchema.modalContentBlock,
          modalType: ModalModes.custom,
          style: subSchema.blockClass,
          params: params,
          onAccept: () => {
            closeModal();
          },
        });
        break;
    }
  };
  const submitWishlist = async (props: any) => {
    try {
      // @ts-ignore
      if (wishlist.id && route.params?.id && !exists) {
        await addItem({
          listId: wishlist?.id,
          quantity: 1,
          // @ts-ignore
          productId: route.params?.id,
        });
        setWishlistDisable(true);
        handleModal('success');
        // @ts-ignore
      } else if (!wishlist.id && !route.params?.id) {
        handleModal('custom', {
          id: productDetail?.productId,
          image: productDetail?.image,
          description: productDetail?.description,
          productName: productDetail?.productName,
        });
      } else {
        handleModal('error');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const PressButton = async (props: any) => {
    if (loading) return null;
    setLoading(true);
    try {
      if (subSchema.url) {
        // @ts-ignore
        linkTo(redirectUrl(product?.productId));
      } else {
        await submitWishlist(props);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const isDisabled = useMemo(() => {
    if (loading) return true;
    if (wishlistDisable) return true;
    return false;
  }, [loading, wishlistDisable]);

  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[styles.container, isDisabled && { opacity: 0.5 }]}
      onPress={PressButton}
    >
      {loading && isLoading ? (
        <ActivityIndicator size="small" />
      ) : blocks.length === 0 ? (
        <Text style={[styles.textStyles]}>{subSchema.label}</Text>
      ) : (
        blocks
      )}
    </TouchableOpacity>
  );
};
