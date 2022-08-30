import React, { FC } from 'react';
import { useStyleClass } from '../../styleContext';
import { ActivityIndicator, View } from 'react-native';
import { BasicInputReturnType } from '../../hooks/types';
import useCards from '$commerce/customer/card/use-cards';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { TenantHandlerProvider } from './context';
import useTenant from '$commerce/tenant/use-tenant';
import useStores from '$commerce/stores/use-stores';

export const TenantLayoutComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const { data } = useStores({ storesAvailable: true });
  console.log(data?.departments, data?.municipalicies);
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  return (
    <TenantHandlerProvider config={{ list: [] }}>
      <View style={styles.container}>{blocks}</View>
    </TenantHandlerProvider>
  );
};
