import { useCustomer } from '$commerce/customer';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import React, { FC } from 'react';
import { View } from 'react-native';
import { BasicInputReturnType } from '../../hooks/types';
import { useStyleClass } from '../../styleContext';
import { MyAccountContextProvider } from './context';

export const MyAccountComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const children = useChildrenBlocks(subSchema.blocks);
  const { data, isLoading } = useCustomer();

  return (
    <MyAccountContextProvider config={{ data, isLoading }}>
      <View style={styles.container}>{children}</View>
    </MyAccountContextProvider>
  );
};
