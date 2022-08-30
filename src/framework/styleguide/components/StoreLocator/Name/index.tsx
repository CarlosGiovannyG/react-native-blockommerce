import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { useStoreShelfContext } from '../Shelf/context';

export const StoreLocatorNameComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const { data } = useStoreShelfContext();
  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);
  return <Text style={styles.textStyles}>{data?.name}</Text>;
};
