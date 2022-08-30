import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ICONS from './library/index';


export const CustomIconComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);


  const Icon = ICONS[subSchema.name]

  return React.createElement(Icon, props)

};
