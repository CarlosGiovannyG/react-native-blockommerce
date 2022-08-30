import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useStoreShelfContext } from '../Shelf/context';

export const StoreLocatorAddressComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const { data } = useStoreShelfContext();

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(
    ['textStyles', 'textStyleBottom', 'container'],
    subSchema.blockClass
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>
        {data?.street} - {data?.number} - {data?.postalCode}
      </Text>
    </View>
  );
};
