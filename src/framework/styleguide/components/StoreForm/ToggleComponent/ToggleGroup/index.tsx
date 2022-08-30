import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { ToogleContextProvider } from './context';

export const ToggleGroup: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(
    ['shelfContainer', 'shelfCardStyles'],
    subSchema.blockClass
  );
  const blocks = useChildrenBlocks(subSchema.blocks);

  const [selectedItem, setSelectedItem] = useState('');

  const [redirectTo, setRedirectTo] = useState('');

  return (
    <ToogleContextProvider
      config={{
        setSelectedItem: setSelectedItem,
        selectedItem: selectedItem,
        redirectTo: redirectTo,
        setRedirectTo: setRedirectTo,
      }}
    >
      <View style={styles.toggleGroupStyles}>{blocks}</View>
    </ToogleContextProvider>
  );
};
