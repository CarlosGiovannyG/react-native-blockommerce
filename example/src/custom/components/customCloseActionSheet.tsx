import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DrawerActions,
  useLinkTo,
  useNavigation,
  NavigationContainer,
} from '@react-navigation/native';
import React, { FC, Fragment, useCallback } from 'react';
import { Image, Linking, TouchableOpacity, View, Text } from 'react-native';
import { useUI } from './../../../../src/framework/styleguide/components/UIActionsHandler';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const CustomCloseActionSheet: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container', 'textStyles'], subSchema.blockClass);
  const linkTo = useLinkTo();

  const navigation = useNavigation();
  const { closeActionSheet } = useUI();
  const blocks = useSlotBlock(subSchema.closeComponent);

  return (
    <TouchableWithoutFeedback onPress={() => closeActionSheet()}>
      {blocks}
    </TouchableWithoutFeedback>
  );
};
