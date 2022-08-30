/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { Pressable, Text, View } from 'react-native';
import { useAccordionFilterContainer } from '../AccordionFilter/AccordionFilterContainer/context';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const FilterShowMoreButtonComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(
    ['buttonStyles', 'buttonTextStyles'],
    subSchema.blockClass
  );

  const { loadMore, disableShowMore } = useAccordionFilterContainer();
  if(disableShowMore) return null;
  return (
    <Pressable onPress={loadMore} style={[styles.buttonStyles]}>
      <Text style={styles.buttonTextStyles}>{subSchema.buttonText}</Text>
    </Pressable>
  );
};
