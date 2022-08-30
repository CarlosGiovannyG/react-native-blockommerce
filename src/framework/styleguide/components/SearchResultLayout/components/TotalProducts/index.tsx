import React, { FC } from 'react';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { useProductSummaryHandler } from '$styleguide/components/ProductSummary/context';
import { Text } from 'react-native';

export const TotalProductsComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { recordsFiltered } = useProductSummaryHandler();
  return <Text>{recordsFiltered}</Text>;
};
