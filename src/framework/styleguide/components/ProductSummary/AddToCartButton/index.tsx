/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useMemo, useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { useLinkTo } from '@react-navigation/native';
import { useUI } from '$styleguide/components/UIActionsHandler';
import { useAddItem } from '$commerce/cart';
import { useCheckout } from '$commerce/checkout';
import { useShelfContext } from '../Shelf/context';
import { ModalModes } from '$styleguide/components/common/ModalComponent';
import useProductMetadata from '$core-commerce/product/use-product-metadata';

export const AddToCartButton: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const addItem = useAddItem();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  const linkTo = useLinkTo();
  const { data: product } = useShelfContext();

  const { openModal, closeModal } = useUI();
  const { data, isLoading } = useCheckout();
  const [loading, setLoading] = useState(false);

  let isSelectedAddress = Boolean(data?.orderForm.shipping?.selectedAddress);

  const { data: p, isLoading: metadataIsLoading } = useProductMetadata({
    // @ts-ignore
    slug: product?.linkText,
    isSelectedAddress: isSelectedAddress,
  });

  const handleLogic = async (props: any) => {
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
        await addItem({
          id: product?.productId,
          quantity: 1,
          seller: product?.seller,
          inputValues: '',
          options: [],
        });
        if (subSchema.content) {
          openModal({
            content: subSchema.content,
            modalType: subSchema.modalType,
            style: subSchema.blockClass,
            onAccept: () => {
              subSchema.redirectTo
                ? linkTo(subSchema.redirectTo)
                : closeModal();
            },
          });
        }
      }
    }
  };

  const PressButton = async (props: any) => {
    if (loading) return null;
    setLoading(true);
    try {
      await handleLogic(props);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  const isDisabled = useMemo(() => {
    if (loading || metadataIsLoading) return true;
    if (p?.price <= 0) return true;
    if (p?.productQuantity === 0) return true;
    return false;
  }, [loading, p?.price]);

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
        <Text style={defaultStyles.text}>Agregar</Text>
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
