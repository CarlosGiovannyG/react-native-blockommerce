/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Controller, useFormContext } from 'react-hook-form';
import { BasicInputReturnType } from '../../../hooks/types';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import { useStyleClass } from '$styleguide/styleContext';

export const FormSelect: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const {
    options = [],
    defaultValue = false,
    disabled = false,
    defaultText = { label: 'Pick', value: 'Pick' },
    iconPosition = 'right',
  } = subSchema;
 
 
  //const block = useChildrenBlocks (
  //  subSchema.blocks.length ? [subSchema.blocks[0]] : []
  //);
  var labelOpt = options.filter(function (opt:any) {
    return opt.value === control._defaultValues[subSchema.name];
});

  const { styles } = useStyleClass(
    ['textStyles', 'buttomStyle', 'buttomTextStyle', 'errorTextStyle'],
    subSchema.blockClass
  );
  const block = useSlotBlock(subSchema.iconDisable);
  const selectValue = subSchema.value || inputObject.name;

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: subSchema.isRequired,
        }}
        render={({ field: { onChange, value } }) => (
          <SelectDropdown
            defaultButtonText={control._defaultValues.hasOwnProperty(subSchema.name) ? labelOpt[0]?.label : defaultText.label}
            buttonStyle={styles.buttomStyle}
            buttonTextStyle={styles.buttomTextStyle}
            renderDropdownIcon={() => {
              return block;
            }}
            defaultValue={subSchema.defaultValue}
            dropdownIconPosition={iconPosition}
            data={options}
            onSelect={(selectedItem, index) => {
              value = { selectedItem: selectedItem?.value };
              onChange(selectedItem?.value);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem?.label;
            }}
            rowTextForSelection={(item, index) => {
              return item?.label;
            }}
          />
        )}
        name={subSchema.name || inputObject.name}
        defaultValue={control._defaultValues.hasOwnProperty(subSchema.name) ? control._defaultValues[subSchema.name] : subSchema.defaultText.value}
      />
      <Text style={[styles.errorTextStyle]}>
        {errors[selectValue]?.message ?? ''}
      </Text>
    </View>
  );
};
