/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { useOrderDetail } from '../../context';

export const OrderDetailFormattedAddressComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { order } = useOrderDetail();
  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);

  const addSlugToUrl = (match: string, item: any) =>
    item[match.replace('{', '').replace('}', '')];
  const keysRegEx = /\{(.*?)\}/gm;

  const address = `${order?.shippingData?.address?.street} ${order?.shippingData?.address?.state}`;

  const formatted = subSchema?.formatted?.replace(keysRegEx, (match: string) =>
    addSlugToUrl(match, { address })
  );

  return (
    <Text style={styles.textStyles}>
      {subSchema?.formatted ? formatted : address}
    </Text>
  );
};
