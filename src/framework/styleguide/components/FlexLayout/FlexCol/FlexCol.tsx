import React, { FC, useMemo } from 'react';
import { BasicInputReturnType } from '../../../hooks/types';
import { View } from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';

export const FlexColComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = useMemo(() => inputObject.getObject(), [inputObject]);
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);

  return (
    <View style={[{ flex: 1, flexDirection: 'column' }, styles.container]}>
      {blocks}
    </View>
  );
};
