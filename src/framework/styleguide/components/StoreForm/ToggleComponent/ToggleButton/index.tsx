import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { useLinkTo } from '@react-navigation/native';
import { useUI } from '$styleguide/components/UIActionsHandler';
import { useToogleContext } from '../ToggleGroup/context';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import useSession from '$core-commerce/session/use-session';

export const ToggleButton: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;
  const { redirectTo } = useToogleContext();
  const subSchema = inputObject.getObject();
  const linkTo = useLinkTo();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const { closeModal } = useUI();

  const onSubmit = async (props: any) => {
    try {
      linkTo(redirectTo ?? '/feed');
      closeModal();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableOpacity
      style={[defaultStyles.button, styles.container]}
      onPress={() => onSubmit(redirectTo)}
    >
      <Text style={defaultStyles.text}>
        {subSchema.label ? subSchema.label : 'Continuar'}
      </Text>
    </TouchableOpacity>
  );
};

const defaultStyles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    borderRadius: 4,
    padding: 4,
  },
  text: {
    color: '#FFFFFF',
  },
});
