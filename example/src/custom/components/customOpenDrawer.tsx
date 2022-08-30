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

export const CustomOpenDrawer: FC<{
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

  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <View style={styles.container}>
        <Image
          style={{
            width: subSchema.width ?? '100%',
            height: subSchema.height ?? '100%',
            resizeMode: subSchema.resizeMode,
          }}
          source={{ uri: subSchema.uri }}
        />
      </View>
    </TouchableOpacity>
  );
};
 