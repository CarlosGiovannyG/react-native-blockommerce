/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { usePrice } from '$commerce/product';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC, useCallback } from 'react';
import { Text } from 'react-native';
import { useOrderDetail } from '../../context';

export const OrderDetailTotalItemsComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { order } = useOrderDetail();
  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);

  const addSlugToUrl = (match: string, item: any) =>
    item[match.replace('{', '').replace('}', '')];
  const keysRegEx = /\{(.*?)\}/gm;

  const totalValue = Number(order?.totalValue) * 0.01;

  const { price } = usePrice({
    amount: totalValue,
    currencyCode: 'COP',
  });
  const totalItems = `${price}`;

  const formatted = subSchema?.formatted?.replace(keysRegEx, (match: string) =>
    addSlugToUrl(match, { totalItems })
  );

  const renderPrice = useCallback(() => {
    let priceTextValue = Number(price) <= 0 ? 'No disponible' : price;
    if (subSchema.formatted) priceTextValue = formatted;
    if (subSchema.deleteDecimals)
      priceTextValue = priceTextValue.replace(/\D00(?=\D*$)/, '');
    return priceTextValue;
  }, [
    price,
    styles.textStyles,
    subSchema.deleteDecimals,
    subSchema.discountPrice,
  ]);

  return <Text style={styles.textStyles}>{renderPrice()}</Text>;
};
