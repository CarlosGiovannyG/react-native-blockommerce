/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { FC } from 'react';
import { Text } from 'react-native';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { useCheckout } from '$commerce/checkout';

export const SelectedAddressTextComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);
  const { data } = useCheckout();

  return (
    <Text style={styles.textStyles}>
      {data?.orderForm?.shipping?.selectedAddress?.street}
    </Text>
  );
};
