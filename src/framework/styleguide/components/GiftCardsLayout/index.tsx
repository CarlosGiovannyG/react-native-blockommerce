import React, { FC } from 'react';
import { useStyleClass } from '../../styleContext';
import { ActivityIndicator, View } from 'react-native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../hooks/types';
import useGiftCards from '$commerce/giftcard/use-gift-cards';
import { GiftCardSummaryHandlerProvider } from './context';

export const GiftCardLayoutComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  //const { data, isLoading } = useCart();

  const { data, isLoading } = useGiftCards();
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);

  return (
    <GiftCardSummaryHandlerProvider config={{ list: data ?? [] }}>
      {isLoading && <ActivityIndicator color={'#000'} />}
      <View style={styles.container}>{blocks}</View>
    </GiftCardSummaryHandlerProvider>
  );
};
