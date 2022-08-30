import useSession from '$commerce/session/use-session';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
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
import { Image, Linking, TouchableOpacity, View } from 'react-native';

export const CustomOrderTabBarButton: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const linkTo = useLinkTo();

  const navigation = useNavigation();
  // navigation.openDrawer();

  const enableButton = useSlotBlock(subSchema.enableBlock);
  const disabledButton = useSlotBlock(subSchema.disableBlock);

  const { isSignedIn } = useSession();

  return (
    <>
      {isSignedIn ? (
        <TouchableOpacity
          onPress={() => {
            linkTo('/my-orders');
          }}
        >
          {enableButton}
        </TouchableOpacity>
      ) : (
        disabledButton
      )}
    </>
  );
};
