import React, { FC } from 'react';
import { useStyleClass } from '../../styleContext';
import { ActivityIndicator, View } from 'react-native';
import { BasicInputReturnType } from '../../hooks/types';
import useCards from '$commerce/customer/card/use-cards';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { CreditCardSummaryHandlerProvider } from './context';

export const CreditCardLayoutLayoutComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const { data, isLoading } = useCards();

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);

  return (
    <CreditCardSummaryHandlerProvider
      config={{ list: data?.availableAccounts ?? [] }}
    >
      {isLoading && <ActivityIndicator color={'#000'} />}
      <View style={styles.container}>{blocks}</View>
    </CreditCardSummaryHandlerProvider>
  );
};
