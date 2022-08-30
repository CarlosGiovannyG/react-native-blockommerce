/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { useLinkTo, useRoute } from '@react-navigation/native';
import { useUI } from '$styleguide/components/UIActionsHandler';
import { useAddItem } from '$commerce/cart';
import { useCheckout } from '$commerce/checkout';
import { useShelfContext } from '$styleguide/components/ProductSummary/Shelf/context';
import useWishlistDetail from '$commerce/wishlist/use-wishlist-detail';
import { useGetProductsByIdentifier } from '$commerce/product';
import {
  ModalModes,
  ModalModesType,
} from '$styleguide/components/common/ModalComponent';
export const WishlistToCartButton: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const addItem = useAddItem();
  const { styles } = useStyleClass(
    ['container', 'textStyles'],
    subSchema.blockClass
  );
  const blocks = useChildrenBlocks(subSchema.blocks);
  const linkTo = useLinkTo();
  const { data: product } = useShelfContext();
  const route = useRoute();
  const { data: wishlist, isLoading: loadingWishlist } = useWishlistDetail({
    // @ts-ignore
    id: route.params?.id,
  });
  const { openModal, closeModal } = useUI();
  const { data, isLoading } = useCheckout();
  const [loading, setLoading] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const getProductsByIdentifier = useGetProductsByIdentifier();

  const loadProducts = useCallback(async () => {
    setLoading(true);
    if (wishlist?.length >= 1) {
      const value = await getProductsByIdentifier({
        values: wishlist?.reduce(
          (accum: any[], currentValue: { id: any; skuId: string }) => {
            accum.push(currentValue?.skuId);
            return accum;
          },
          []
        ),
      });
      setWishlistItems(value?.products);
    } else {
      setWishlistItems([]);
    }
  }, [wishlist, getProductsByIdentifier]);

  const getWishlistItemById = useCallback(
    (id: string) => {
      const items = wishlist;
      const item = items?.find(
        (predicate: { skuId: string }) => predicate.skuId === id
      );
      return item;
    },
    [wishlist, product?.productId]
  );

  useEffect(() => {
    loadProducts()
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, [wishlist, loadProducts]);
  const handleModal = async (props: any) => {
    if (
      subSchema.requiredSelectedAddress &&
      subSchema.contentSelectedAddress &&
      !data?.orderForm.shipping?.selectedAddress
    ) {
      openModal({
        content: subSchema.contentSelectedAddress,
        modalType: ModalModes.custom,
        style: subSchema.blockClass,
        onAccept: () => {
          subSchema.redirectTo ? linkTo(subSchema.redirectTo) : closeModal();
        },
      });
    } else {
      if (data?.orderForm.shipping?.selectedAddress) {
        // var arr = [];
        for (let index = 0; index < wishlistItems.length; index++) {
          const item = getWishlistItemById(wishlistItems[index].productId);

          const obj = {
            id: wishlistItems[index]?.productId,
            quantity: item.quantity,
            seller: wishlistItems[index]?.seller,
            inputValues: '',
            options: [],
          };
          await addItem(obj);
        }

        openModal({
          content: subSchema.content,
          modalType: subSchema.modalType,
          style: subSchema.blockClass,
          onAccept: () => {
            subSchema.redirectTo ? linkTo(subSchema.redirectTo) : closeModal();
          },
        });
      }
    }
  };

  const PressButton = async (props: any) => {
    if (loading) return null;
    setLoading(true);
    try {
      if (subSchema.modalType && subSchema.content) await handleModal(props);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const isDisabled = useMemo(() => {
    if (loadingWishlist) return true;
    if (wishlist?.length <= 0) return true;
    return false;
  }, [loadingWishlist, wishlist]);

  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[
        defaultStyles.button,
        styles.container,
        isDisabled && { opacity: 0.5 },
      ]}
      onPress={PressButton}
    >
      {loading && isLoading ? (
        <ActivityIndicator size="small" />
      ) : blocks.length === 0 ? (
        <Text style={[defaultStyles.text, styles.textStyles]}>
          Agregar lista al carrito
        </Text>
      ) : (
        blocks
      )}
    </TouchableOpacity>
  );
};

const defaultStyles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    borderRadius: 4,
    padding: 4,
  },
  text: {
    color: '#FFFFFF',
  },
});
