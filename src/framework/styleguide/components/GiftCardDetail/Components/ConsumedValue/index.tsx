import React, { FC } from 'react';
import { useStyleClass } from '$styleguide/styleContext';
import { Text, View } from 'react-native';
import { usePrice } from '$commerce/product';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useGiftCardDetailShelfContext } from '../Shelf/context';

export const GiftCardDetailConsumedValue: FC<{
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
  const { price } = usePrice({
    amount: Number(data.valorConsumido),
    currencyCode: 'COP',
  });
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>{price}</Text>
    </View>
  );
};
