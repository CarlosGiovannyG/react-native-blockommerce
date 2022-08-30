/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC } from 'react';
import { FormattedDate } from 'react-intl';
import { Text } from 'react-native';
import { useOrderItemListContext } from '../List/context';

export const OrderDateComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);

  const { data } = useOrderItemListContext();
  return (
    <Text style={styles.textStyles}>
      <FormattedDate
        value={new Date(data?.creationDate).toDateString()}
        year="numeric"
        month="long"
        day="numeric"
        weekday="long"
      />
    </Text>
  );
};
