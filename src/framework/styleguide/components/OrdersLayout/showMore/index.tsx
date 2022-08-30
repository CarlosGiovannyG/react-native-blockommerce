/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useLinkTo } from '@react-navigation/native';
import { useTheme } from '$styleguide/theme';
import { useOrderItemListContext } from '../List/context';

export const OrderShowMoreComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const linkTo = useLinkTo();

  const { styles } = useStyleClass(
    ['buttonStyles', 'buttonTextStyles'],
    subSchema.blockClass
  );
  const { currentTheme, theme } = useTheme();
  const { data } = useOrderItemListContext();

  const addSlugToUrl = (match: string, item: any) =>
    item[match.replace('{', '').replace('}', '')];
  const keysRegEx = /\{(.*?)\}/gm;

  const redirectUrl = useCallback(
    (item: any) => {
      if (subSchema.redirectTo) {
        return subSchema.redirectTo.replace(keysRegEx, (match: string) =>
          addSlugToUrl(match, item)
        );
      } else {
        return '/feed';
      }
    },
    [keysRegEx, subSchema.redirectTo]
  );

  return (
    <TouchableOpacity
      style={[
        styles.buttonStyles,
        {
          backgroundColor:
            theme.palette[subSchema.variant ?? 'primary'][currentTheme],
        },
      ]}
      onPress={() => linkTo(redirectUrl(data))}
    >
      <Text style={styles.buttonTextStyles}>{subSchema.buttonText}</Text>
    </TouchableOpacity>
  );
};
