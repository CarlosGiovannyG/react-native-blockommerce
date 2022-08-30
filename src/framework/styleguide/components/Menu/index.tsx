import React, { FC } from 'react';
import { View, ScrollView } from 'react-native';

import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../hooks/types';
import { useStyleClass } from '../../styleContext';

export const Menu: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);

  return <View style={styles.container}>{blocks}</View>;
};
