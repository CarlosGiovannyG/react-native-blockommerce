import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { BasicInputReturnType } from '../../hooks/types';
import { useStyleClass } from '../../styleContext';

export const TextComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);

  return (
    <Text style={[{ textAlign: subSchema.textAlignment }, styles.textStyles]}>
      {subSchema.text}
    </Text>
  );
};
