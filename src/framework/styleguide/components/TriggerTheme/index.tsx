import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../hooks/types';
import { useStyleClass } from '../../styleContext';
import { useTheme } from '../../theme';

export const TriggerThemeComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  const { setTheme } = useTheme();

  return (
    <TouchableOpacity
      onPress={() => {
        setTheme(subSchema.value);
      }}
      style={styles.container}
    >
      {blocks}
    </TouchableOpacity>
  );
};
