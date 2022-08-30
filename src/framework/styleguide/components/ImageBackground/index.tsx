import React, { FC } from 'react';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { ImageBackground } from 'react-native';
import { BasicInputReturnType } from '../../hooks/types';
import { useStyleClass } from '../../styleContext';

export const ImageBackgroundComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const children = useChildrenBlocks(subSchema.blocks);
  return (
    <ImageBackground
      style={[
        {
          width: subSchema.width ?? '100%',
          height: subSchema.height ?? '100%',
        },
        styles.container,
      ]}
      source={{ uri: subSchema.uri }}
    >
      {children}
    </ImageBackground>
  );
};
