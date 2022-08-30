/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { useOrderItemListContext } from '../List/context';
import { FormattedMessage } from 'react-intl';

export const OrderStatusComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);
  const { data } = useOrderItemListContext();

  return (
    <Text style={styles.textStyles}>
      <FormattedMessage id={data?.status} />
    </Text>
  );
};
