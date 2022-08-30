import React, { FC, Fragment, useState } from 'react';
import { useStyleClass } from '$styleguide/styleContext';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { useToogleContext } from '../ToggleGroup/context';

export const ToggleItem: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(
    ['container', 'toggleStyles'],
    subSchema.blockClass
  );

  const blocks = useChildrenBlocks(subSchema.blocks);

  const { selectedItem, setSelectedItem, setRedirectTo } = useToogleContext();
  
  const renderToggle = selectedItem === subSchema.name ? blocks[0] : blocks[1];

  return (
    <TouchableOpacity
      key={subSchema.name}
      onPress={() => {
        setSelectedItem(subSchema.name);
        setRedirectTo(subSchema.redirectTo ?? '/feed');
      }}
    >
      {renderToggle}
    </TouchableOpacity>
  );
};
