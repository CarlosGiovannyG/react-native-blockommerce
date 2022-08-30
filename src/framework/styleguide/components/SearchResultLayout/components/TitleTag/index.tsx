import React, { FC } from 'react';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { Text } from 'react-native';
import { useAccordionFilterContainer } from '../AccordionFilter/AccordionFilterContainer/context';

export const FilterTitleTagComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);
  const { data } = useAccordionFilterContainer();
  return <Text style={styles.textStyles}>{data?.name}</Text>;
};
