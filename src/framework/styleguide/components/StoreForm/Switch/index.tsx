import React, { FC, useState } from 'react';
import { Switch, View } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import { useStyleClass } from '$styleguide/styleContext';
import { BasicInputReturnType } from '$styleguide/hooks/types';

export const StoreFormSwitchComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { trackColorFalse, trackColorTrue, thumbColor } = subSchema;
  const [isEnabled, setIsEnabled] = useState(false);

  const { styles } = useStyleClass(
    ['switchStyles', 'container'],
    subSchema.blockClass
  );

  const { control } = useFormContext();

  return (
    <View style={styles.container}>
      {subSchema.label}
      <Controller
        control={control}
        rules={{
          required: subSchema.isRequired,
        }}
        render={({ field: { onChange, value } }) => (
          <Switch
            trackColor={{ false: trackColorFalse, true: trackColorTrue }}
            thumbColor={isEnabled ? thumbColor : thumbColor}
            ios_backgroundColor={trackColorFalse}
            style={[styles.switchStyles]}
            onValueChange={onChange}
            value={value}
          />
        )}
        name={subSchema.name || inputObject.name}
      />
    </View>
  );
};
