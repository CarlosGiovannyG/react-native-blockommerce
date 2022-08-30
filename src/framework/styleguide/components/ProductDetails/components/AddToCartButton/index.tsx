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
import { useProductDetails } from '../../context';
import { ModalModes } from '$styleguide/components/common/ModalComponent';

export const ProductDetailsAddToCartButton: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const addItem = useAddItem();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  const linkTo = useLinkTo();
  const { product } = useProductDetails();
  const { openModal, closeModal } = useUI();
  const { data, isLoading } = useCheckout();
  const [loading, setLoading] = useState(false);

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
        await addItem({
          id: product?.productId,
          quantity: 1,
          seller: product?.seller,
          inputValues: '',
          options: [],
        });
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
    if (loading) return true;
    if (product?.price?.value <= 0) return true;
    return false;
  }, [loading, product?.price]);

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
