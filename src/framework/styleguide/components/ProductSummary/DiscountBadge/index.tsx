import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { BasicInputReturnType } from '../../../hooks/types';
import { useStyleClass } from '../../../styleContext';
import { useShelfContext } from '../Shelf/context';

export const DiscountBadgeComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { data } = useShelfContext();
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(
    ['textStyles', 'container'],
    subSchema.blockClass
  );

  const discountPrice = parseFloat(data.discount);

  return (
    <>
      {data.discount !== '0' && (
        <View
          style={{
            ...styles.container,
          }}
        >
          <Text style={styles.textStyles}>{discountPrice}%</Text>
        </View>
      )}
    </>
  );
};
