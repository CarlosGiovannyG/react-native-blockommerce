import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '$styleguide/hooks/types';

export const FlexRowComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = useMemo(() => inputObject.getObject(), [inputObject]);
  const { styles } = useStyleClass(['container'], subSchema.blockClass);

  const blocks = useChildrenBlocks(subSchema.blocks);
  return (
    <View
      style={[
        {
          flexDirection: 'row',
        },
        styles.container,
      ]}
    >
      {blocks}
    </View>
  );
};
