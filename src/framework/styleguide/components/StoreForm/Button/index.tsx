/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { useFormHandler } from '../context';
import { useStyleClass } from '$styleguide/styleContext';
import { useTheme } from '$styleguide/theme';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useFormContext } from 'react-hook-form';

export const FormButton: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { onSubmit, submitIsLoading } = useFormHandler();
  const { currentTheme, theme } = useTheme();

  const {
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const ErrorsLength = Object.keys(errors).length;

  const { styles } = useStyleClass(
    ['buttonStyles', 'buttonTextStyles'],
    subSchema.blockClass
  );

  const [formIsInvalid, setFormIsInvalid] = useState(false);

  useEffect(() => {
    if (ErrorsLength) setFormIsInvalid(true);
    else setFormIsInvalid(false);
  }, [ErrorsLength]);

  return (
    <View style={{ opacity: formIsInvalid ? 0.5 : 1 }}>
      <TouchableOpacity
        disabled={submitIsLoading || formIsInvalid}
        style={[
                 {
            backgroundColor:
              theme.palette[subSchema.variant ?? 'primary'][currentTheme],
          },
          styles.buttonStyles,
   
        ]}
        onPress={handleSubmit((event) =>
          onSubmit({
            ...event,
            ...subSchema?.customProps,
          })
        )}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          {submitIsLoading && <ButtonLoading />}
          <Text style={styles.buttonTextStyles}>{subSchema.buttonText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ButtonLoading = () => {
  const {
    theme: { spacing },
  } = useTheme();
  return (
    <View style={{ marginHorizontal: spacing[2] }}>
      <ActivityIndicator color="#fff" />
    </View>
  );
};
