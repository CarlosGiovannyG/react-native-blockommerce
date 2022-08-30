/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState, FC, Fragment } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import { BasicInputReturnType } from '../../../hooks/types';
import { useStyleClass } from '../../../styleContext';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import DateTimePicker from 'react-native-modal-datetime-picker';

export const DatePicker: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const [isDatePickerVisible, setIsDatePickerVisible] =
    useState<boolean>(false);
  const [dateRaw, setDateRaw] = useState<Date | undefined>();

  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const { isRequired = false, label = '' } = subSchema;

  const { control } = useFormContext();

  const { styles } = useStyleClass(
    ['container', 'labelStyle', 'dateText', 'iconStyles'],
    subSchema.blockClass
  );

  const showDatePicked = () => {
    setIsDatePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setIsDatePickerVisible(false);
    setDateRaw(undefined);
  };

  const handleOnChangeDatePicker = (
    date: Date,
    onChange: (...args: any) => void
  ) => {
    setIsDatePickerVisible(false);
    onChange(date.toISOString());
  };

  const childrens = useChildrenBlocks(subSchema.blocks);

  return (
    <Controller
      control={control}
      rules={{
        required: isRequired,
      }}
      render={({ field: { value, onChange } }) => {
        const maximumDate = () => {
          const date = new Date();
          date.setFullYear(date.getFullYear() - 18);
          return date;
        };

        const dateValue: Date = new Date(value || maximumDate());
        const dd = String(dateValue.getDate()).padStart(2, '0');
        const mm = String(dateValue.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = dateValue.getFullYear();

        const formatted = dd + '/' + mm + '/' + yyyy;

        return (
          <Fragment>
            <Text style={styles.labelStyle}>{label}</Text>
            <TouchableOpacity
              style={[defaultStyles.datePickerInput, styles.container]}
              onPress={showDatePicked}
            >
              <Text style={styles.dateText}>{formatted}</Text>
              <View style={[defaultStyles.iconStyles]}>{childrens[0]}</View>
            </TouchableOpacity>
            <DateTimePicker
              date={dateValue}
              maximumDate={maximumDate()}
              isVisible={isDatePickerVisible}
              onConfirm={(date) => {
                handleOnChangeDatePicker(date, onChange);
              }}
              onCancel={hideDateTimePicker}
            />
          </Fragment>
        );
      }}
      name={subSchema.name || inputObject.name}
    />
  );
};

const defaultStyles = StyleSheet.create({
  datePickerInput: {
    borderColor: '#e3e4e6',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 18,
  },
  iconStyles: {
    // paddingRight: 18,
  },
});
