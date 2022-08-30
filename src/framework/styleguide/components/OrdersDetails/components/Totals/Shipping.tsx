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

export const OrderDetailTotalShippingComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { order } = useOrderDetail();
  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);

  const addSlugToUrl = (match: string, item: any) =>
    item[match.replace('{', '').replace('}', '')];
  const keysRegEx = /\{(.*?)\}/gm;

  const postalCode = `${order?.shippingData?.address?.postalCode}`;

  const formatted = subSchema?.formatted?.replace(keysRegEx, (match: string) =>
    addSlugToUrl(match, { postalCode })
  );

  return (
    <Text style={styles.textStyles}>
      {subSchema?.formatted ? formatted : postalCode}
    </Text>
  );
};
