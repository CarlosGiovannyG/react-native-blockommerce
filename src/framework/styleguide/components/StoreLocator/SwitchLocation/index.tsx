import React, { FC, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { useStoreShelfContext } from '../Shelf/context';

export const StoreLocatorItemComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { trackColorFalse, trackColorTrue, thumbColor } = subSchema;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { selectedItem, setSelectedItem, item, data } = useStoreShelfContext();

  const { styles } = useStyleClass(
    ['switchStyles', 'container'],
    subSchema.blockClass
  );
  const blocks = useChildrenBlocks(subSchema.blocks);

  const renderToggle = selectedItem === item ? true : false;

  return <View style={styles.container}>{blocks}</View>;
};

const defaultStyles = StyleSheet.create({});
