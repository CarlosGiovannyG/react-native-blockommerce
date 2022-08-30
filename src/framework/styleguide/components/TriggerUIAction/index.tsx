import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../hooks/types';
import { useStyleClass } from '../../styleContext';
import { useUI } from '../UIActionsHandler';
import { useTriggerUIAction } from './context';

export const TriggerUIActionComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(
    ['container', 'contentStyles'],
    subSchema.blockClass
  );
  const childrens = useChildrenBlocks(subSchema.blocks);
  const methods = useTriggerUIAction();

  const existsContentProp = subSchema.content ? true : false;

  const { openActionSheet, openModal } = useUI();
  const onTouch = () => {
    if (existsContentProp) {
      switch (subSchema.typeAction) {
        case 'action-sheet':
          openActionSheet({ content: subSchema.content });
          break;
        case 'modal':
          openModal({
            content: subSchema.content,
            modalType: subSchema.modalType,
            onAccept: methods.onAccept,
          });
          break;
        default:
          openActionSheet({ content: subSchema.content });
      }
    }
  };

  return (
    <TouchableOpacity
      hitSlop={subSchema.touchableHitSlop}
      onPress={onTouch}
      style={styles.container}
    >
      <View style={styles.contentStyles}>{childrens}</View>
    </TouchableOpacity>
  );
};
