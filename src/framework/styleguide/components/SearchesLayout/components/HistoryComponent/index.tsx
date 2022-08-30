import React, { FC } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useSearchesHandler } from '../../context';
import { useStyleClass } from '$styleguide/styleContext';
import { useSearchInputHandler } from '../SearchInput/context';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';

export const HistoryComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const { data } = useSearchesHandler();
  const { onChangeText } = useSearchInputHandler();
  const subSchema = inputObject.getObject();
  const RightComponent = useSlotBlock(subSchema.RightComponent);
  const LeftComponent = useSlotBlock(subSchema.LeftComponent);

  const { styles } = useStyleClass(
    ['textStyles', 'container'],
    subSchema.blockClass
  );
  const renderHistory = () => {
    if (!data?.searches) return null;
    return data?.searches?.map((item) => {
      return (
        <TouchableOpacity
          onPress={() => onChangeText(item?.term)}
          key={item?.term}
        >
          <View style={styles.container}>
            {LeftComponent}
            <Text style={styles.textStyles}>{item.term}</Text>
            {RightComponent}
          </View>
        </TouchableOpacity>
      );
    });
  };

  return <View style={styles.textStyles}>{renderHistory()}</View>;
};
