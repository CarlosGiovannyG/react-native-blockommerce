import React, { FC } from 'react';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { View } from 'react-native';

export const FilterSelectedFiltersComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['container'], subSchema.blockClass);

  return <View style={styles.container} />;
};
