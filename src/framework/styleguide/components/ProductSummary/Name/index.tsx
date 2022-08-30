import React, { FC, useMemo } from 'react';
import { useStyleClass } from '$styleguide/styleContext';
import { Text, View } from 'react-native';
import { useShelfContext } from '../Shelf/context';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { truncate } from '$styleguide/utils/truncate';

export const ProductSummaryName: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(
    ['container', 'textStyles'],
    subSchema?.blockClass
  );

  const { data } = useShelfContext();
  const render = useMemo(
    () =>
      subSchema?.truncate && subSchema?.maxCharts
        ? truncate(data?.productName, subSchema?.maxCharts)
        : data?.productName,
    [data?.productName]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>{render}</Text>
    </View>
  );
};
