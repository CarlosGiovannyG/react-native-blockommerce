/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useStyleClass } from '../../styleContext';
import {
  StackActions,
  useLinkTo,
  useNavigation,
} from '@react-navigation/native';
import reactStringReplace from '../../utils/reactStringReplace';
import { BasicInputReturnType } from '../../hooks/types';
import { useTheme } from '../../theme';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';

export const StoreLink: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const linkTo = useLinkTo();
  const subSchema = props.inputObject.getObject();
  const { label, displayMode = 'anchor', url, blockClass } = subSchema;

  const { styles } = useStyleClass(['textStyles', 'container'], blockClass);
  const { theme, currentTheme } = useTheme();
  const RightIcon = useSlotBlock(subSchema.rightIcon);
  const LeftIcon = useSlotBlock(subSchema.leftIcon);

  const navigation = useNavigation();

  const redirect = () =>
    subSchema.url === 'goBack' ? goBackHandler() : linkTo(url ?? '/feed');

  const goBackHandler = () => {
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  };

  return (
    <>
      {displayMode === 'button' ? (
        <TouchableOpacity
          style={[defaultStyles.buttonStyles, styles.container]}
          onPress={() => redirect()}
        >
          {LeftIcon}
          {label?.length ? (
            <Text style={styles.textStyles}>{label}</Text>
          ) : null}
          {RightIcon}
        </TouchableOpacity>
      ) : (
        <Text style={styles.textStyles} onPress={() => redirect()}>
          {reactStringReplace(label, /\*\*(.*?)\*\*/gm, (match, i) => (
            <Text
              key={i}
              style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline',
                color:
                  theme.palette[subSchema.variant ?? 'primary'][currentTheme],
              }}
            >
              {match}
            </Text>
          ))}
        </Text>
      )}
    </>
  );
};

const defaultStyles = StyleSheet.create({
  buttonStyles: {
    height: 48,
    borderRadius: 6,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
