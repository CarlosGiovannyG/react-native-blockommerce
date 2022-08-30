import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useMyAccount } from '../context';

export const MyAccountEmailComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const { data, isLoading } = useMyAccount();
  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);

  const dataEmail = isLoading ? (
    <ActivityIndicator style={styles.textStyles} color={'#000'} />
  ) : (
    data?.email
  );
  return <Text style={styles.textStyles}>{dataEmail}</Text>;
};
