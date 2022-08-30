import React, { FC } from 'react';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../hooks/types';
import { useStyleClass } from '../../styleContext';
import { ScrollView } from 'react-native-gesture-handler';

export const ScrollViewComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const subSchema = props.inputObject.getObject();
  const { blockClass } = subSchema;
  const { styles } = useStyleClass(
    ['container', 'contentContainerStyle'],
    blockClass
  );
  const blocks = useChildrenBlocks(subSchema.blocks);
  return (
    <ScrollView
      bounces={subSchema.bounces || false}
      nestedScrollEnabled={subSchema.nestedScrollEnabled}
      showsVerticalScrollIndicator={
        subSchema.showsVerticalScrollIndicator ?? false
      }
      showsHorizontalScrollIndicator={
        subSchema.showsHorizontalScrollIndicator ?? false
      }
      horizontal={subSchema.horizontal}
      persistentScrollbar={true}
      style={[styles.container]}
      contentContainerStyle={styles.contentContainerStyle}
    >
      {blocks}
    </ScrollView>
  );
};
