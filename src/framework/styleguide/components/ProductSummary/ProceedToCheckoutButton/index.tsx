import React, { FC, useCallback, useMemo } from 'react';
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
import { usePrice } from '$commerce/product';
import useCart from '$core-commerce/cart/use-cart';
import { useCartLayoutHandler } from '$styleguide/components/CartLayout/context';

export const ProceedToCheckoutButton: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const linkTo = useLinkTo();
  const { styles } = useStyleClass(
    ['container', 'textStyles'],
    subSchema.blockClass
  );
  const blocks = useChildrenBlocks(subSchema.blocks);
  const { openModal } = useUI();

  const { data, isLoading } = useCart();

  const { totalPrice } = useCartLayoutHandler();
  
  const totalizer = subSchema.total ? data?.totalCart : data?.subtotalCart;

  const { price } = usePrice({
    amount: totalizer || 0,
    currencyCode: 'COP',
  });

  const keysRegEx = /\{(.*?)\}/gm;

  const onSubmit = async (props: any) => {
    try {
      openModal({
        content: subSchema.content,
        modalType: subSchema.modalType,
        style: subSchema.blockClass,
        onAccept: () => {
          linkTo(subSchema.redirectTo ?? '/feed');
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  const renderPrice = useCallback(() => {
    if (totalPrice !== Number(totalizer)) return 'No disponible';
    let priceTextValue = Number(totalizer) <= 0 ? 'No disponible' : price;
    if (subSchema.deleteDecimals)
      priceTextValue = priceTextValue.replace(/\D00(?=\D*$)/, '');

    return priceTextValue;
  }, [
    totalizer,
    price,
    styles.textStyles,
    subSchema.deleteDecimals,
    subSchema.discountPrice,
    totalPrice
  ]);

  const textTotal =
    subSchema.text && subSchema.text.replace(keysRegEx, renderPrice());

  const isDisabled = useMemo(() => {
    if (totalPrice !== Number(totalizer)) return true;
    if (Number(totalizer) <= 0) return true;
    if (isLoading) return true;
    if (data?.cart?.items.length <= 0) return true;
    return false;
  }, [isLoading, data?.cart?.items.length, totalizer, totalPrice]);

  const PressButton = (props: any) => {
    if (subSchema.modalType && subSchema.content) {
      return onSubmit(props);
    } else {
      return linkTo(subSchema.redirectTo ?? '/feed');
    }
  };
  if (!data && isLoading) return <ActivityIndicator size={16} color={'#000'} />;
  return (
    <TouchableOpacity
      style={[
        defaultStyles.button,
        styles.container,
        isDisabled && { opacity: 0.5 },
      ]}
      onPress={PressButton}
      disabled={isDisabled}
    >
      {blocks.length === 0 ? (
        <Text style={[defaultStyles.text, styles.textStyles]}>{textTotal}</Text>
      ) : (
        textTotal
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
