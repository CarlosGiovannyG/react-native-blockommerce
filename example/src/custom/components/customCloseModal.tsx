import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC, Fragment, useCallback } from 'react';
import { useUI } from './../../../../src/framework/styleguide/components/UIActionsHandler';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const CustomCloseModal: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container', 'textStyles'], subSchema.blockClass);

  const { closeModal } = useUI();
  const blocks = useSlotBlock(subSchema.closeComponent);

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={() => closeModal()}>
      {blocks}
    </TouchableWithoutFeedback>
  );
};
