import React, { FC } from 'react';
import { useStyleClass } from '../../styleContext';
import { ActivityIndicator, View } from 'react-native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../hooks/types';
import { useRoute } from '@react-navigation/native';
import { GiftCardDetailSummaryHandlerProvider } from './context';
import useGiftCardMovements from '$commerce/giftcard/use-gift-card-movements';

export const GiftCardDetailLayoutComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  //const { data, isLoading } = useCart();
  const route = useRoute();

  // @ts-ignore

  const { data, isLoading } = useGiftCardMovements({
    numeroTarjeta: route?.params?.id,
  });
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);

  return (
    <GiftCardDetailSummaryHandlerProvider config={{ list: data ?? [] }}>
      {isLoading && <ActivityIndicator color={'#000'} />}
      <View style={styles.container}>{blocks}</View>
    </GiftCardDetailSummaryHandlerProvider>
  );
};
