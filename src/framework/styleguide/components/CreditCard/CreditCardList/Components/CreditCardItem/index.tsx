import React, { useState, FC, Fragment, useMemo, useCallback } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Animated,
  PixelRatio,
} from 'react-native';

import { useTheme } from '$styleguide/theme';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { useCreditCardListContext } from '../../context';
import {
  CreditCardTemplate,
  validatorNumberCard,
} from '$styleguide/components/CreditCard/CreditCardTemplate';

export const CreditCardItemComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const { isRequired = false, label = '' } = subSchema;

  const { styles } = useStyleClass(
    [
      'container',
      'labelStyle',
      'dateText',
      'iconStyles',
      'numberCardStyles',
      'styles.cardholderStyles',
      'dueDateStyles',
    ],
    subSchema.blockClass
  );
  const { currentTheme, theme } = useTheme();

  const { data } = useCreditCardListContext();

  
  const codeValidator = validatorNumberCard(data.bin);

  return (
    <View style={[styleBase.container, styles.container]}>
      <CreditCardTemplate code={data.bin} />

      <Text
        style={[
          styleBase.cardNumber,
          styles.numberCardStyles,
          codeValidator == 'default' && { color: '#000' },
        ]}
      >
        {data.cardNumber}
      </Text>
      <Text
        style={[
          styleBase.dueDate,
          styles.dueDateStyles,
          codeValidator == 'default' && { color: '#000' },
        ]}
      >
        {data.expirationDate}
      </Text>
    </View>
  );
};

const styleBase = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    marginBottom: 16,
  },
  cardNumber: {
    paddingLeft: 30,
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
    //color: '#C6C6C6',
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(28),
  },
  cardholder: {
    paddingLeft: 30,
    fontSize: 17,
    fontWeight: '400',
    color: '#fff',
    //color: '#C6C6C6',
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(40),
  },
  dueDate: {
    paddingLeft: 250,
    fontSize: 17,
    fontWeight: '400',
    color: '#fff',
    //color: '#C6C6C6',
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(40),
  },
});
