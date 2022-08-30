import React, { FC } from 'react';
import { useStyleClass } from '$styleguide/styleContext';
import { Text, View } from 'react-native';

import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useGiftCardDetailShelfContext } from '../Shelf/context';

export const GiftCardDetailTransactionNumber: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(
    ['container', 'textStyles'],
    subSchema.blockClass
  );

  const { data } = useGiftCardDetailShelfContext();

  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>{data.numeroTransaccion}</Text>
    </View>
  );
};
