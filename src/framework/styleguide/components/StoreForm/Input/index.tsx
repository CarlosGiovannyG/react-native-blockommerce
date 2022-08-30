import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import { useStyleClass } from '$styleguide/styleContext';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useTheme } from '$styleguide/theme';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import RawTextInput from './components/RawTextInput';

export const FormInput: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { styles } = useStyleClass(
    [
      'container',
      'inputStyles',
      'labelStyles',
      'rightIconStyles',
      'leftIconStyles',
      'showIconStyle',
    ],
    subSchema.blockClass
  );
  const onChangeText = (onChange: void) => {
    return onChange;
  };

  const { currentTheme, theme } = useTheme();

  const childrens = useChildrenBlocks(subSchema.blocks);
  const inputName = subSchema.name || inputObject.name;
  const isInvalid = errors[inputName];

  return (
    <View style={[styles.container]}>
      <Text style={[styles.labelStyles]}>{subSchema.label}</Text>
      <Controller
        control={control}
        rules={{
          required: subSchema.isRequired,
        }}
        render={({ field: { onChange, value } }) => {
          return (
            <RawTextInput
              isInvalid={isInvalid}
              onChangeText={(text: string) => {
                const parseValue: string = text;
                /*if (subSchema.valueType) {
                  if (subSchema.valueType === 'number') {
                    parseValue = parseInt(text);
                  }
                }*/
                return onChangeText(onChange(parseValue));
              }}
              rightComponent={childrens.length == 2 ? childrens[1] : undefined}
              leftComponent={childrens.length ? childrens[0] : undefined}
              keyboardType={
                subSchema.keyboardType ? subSchema.keyboardType : 'default'
              }
              value={value}
              maxLength={subSchema.maxLength}
              styles={styles}
              subSchema={subSchema}
            />
          );
        }}
        name={subSchema.name || inputObject.name}
      />
      <Text
        style={[
          styles.labelStyles,
          isInvalid && {
            color: theme.palette.error[currentTheme],
          },
        ]}
      >
        {errors[inputName]?.message ?? ''}
      </Text>
    </View>
  );
};
