import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useMyAccount } from '../context';

export const MyAccountFullnameComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const { data, isLoading } = useMyAccount();
  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);
  const dataName = isLoading ? '' : `${data?.firstName} ${data?.lastName}`;
  return <Text style={styles.textStyles}>{dataName}</Text>;
};
