/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BasicJSONSchemaType } from '$styleguide/JSONSchema';
import { useTheme } from '$styleguide/theme';
import React, { FC, useCallback, useMemo, useState } from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputSubmitEditingEventData,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import InputSuccessIcon from './InputSuccessIcon';
import PasswordEyeIcon from './PasswordEyeIcon';

export interface ComponentSubSchemaProps extends BasicJSONSchemaType {
  rightIcon?: boolean;
  leftIcon?: boolean;
  placeholder?: string;
  placeholderTextColor?: string;
  isPassword?: boolean;
  showPassword?: boolean;
  blockClass?: string | undefined;
  deleteButton?: boolean;
  DeleteIconComponent?: string;
  successIcon?: boolean;
}

interface TextInputProps {
  disableValidation?: boolean;
  isInvalid?: boolean;
  onChange?: (...event: any[]) => void;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
  onFocus?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onBlur?: (...event: any[]) => void;
  onChangeText?: (...event: any[]) => void;
  value: string;
  styles: {
    [x: string]: TextStyle | ViewStyle;
  };
  rightComponent?: React.ReactElement | null;
  leftComponent?: React.ReactElement | null;
  DeleteIconComponent?: React.ReactElement | null;
  subSchema: ComponentSubSchemaProps;
  keyboardType?: string;
  successIcon?: boolean;
  maxLength?: number;
}

interface DeleteButtonProps {
  eraseButton: React.Dispatch<any>;
  styles?: Record<string, ViewStyle>;
  DeleteIcon: React.ReactElement | null;
}

export const DeleteButton: FC<DeleteButtonProps> = ({
  eraseButton,
  styles,
  DeleteIcon,
}) => {
  return (
    <TouchableOpacity style={[styles?.rightIconStyles]} onPress={eraseButton}>
      {DeleteIcon}
    </TouchableOpacity>
  );
};

const RawTextInput: FC<TextInputProps> = ({
  subSchema,
  rightComponent = null,
  leftComponent = null,
  DeleteIconComponent = null,
  onChange,
  onChangeText,
  isInvalid,
  value,
  styles,
  onBlur,
  onFocus,
  onSubmitEditing,
  keyboardType,
  maxLength,
  disableValidation = false
}) => {
  const {
    theme: { palette },
  } = useTheme();
  const [showPassword, setShowPassword] = useState<boolean>(
    subSchema.showPassword
  );
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    typeof onFocus === 'function' && onFocus(e);
    setIsFocus(true);
  };
  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    typeof onBlur === 'function' && onBlur(e);
    setIsFocus(false);
  };

  const RightComponent = useCallback(() => {
    if (subSchema.deleteButton && subSchema.DeleteIconComponent) {
      const eraseButtonHandler = () =>
        typeof onChangeText === 'function' && onChangeText('');

      return (
        <View style={[styles.rightIconStyles]}>
          <DeleteButton
            DeleteIcon={DeleteIconComponent}
            eraseButton={eraseButtonHandler}
          />
        </View>
      );
    }
  
   if (!subSchema.rightIcon) return null;
   // Esto se implemento actualmente el componente cuenta con un rightComponent y si el bloque cuenta con validacion
   // de errores  entonces no mostaria nunca el RightComponent
   // caso en que fallaria: mostrar un icono derecho + validación.
   // va a pasar con cualquier componente mostrado a la derecha que no este estandarizado...
   // Componentes estandar: PasswordEyeIcon, InputSuccessIcon 

    if (!isInvalid && !disableValidation) return null;

    return <View style={[styles.rightIconStyles]}>{rightComponent}</View>;
  }, [isInvalid]);

  const LeftComponent = useCallback(() => {
    if (!subSchema.leftIcon) return null;
    return <View style={[styles.leftIconStyles]}>{leftComponent}</View>;
  }, []);

  const WrapperStyles = useMemo(() => {
    let InteractionStyles = {};

    const errorStyles = {
      borderColor: palette.error.main,
    };

    const successStyles = {
      borderColor: palette.success.main,
    };

    const onFocusStyles = {
      borderColor: palette.primary.main,
    };

    if (isInvalid) {
      InteractionStyles = Object.assign(InteractionStyles, errorStyles);
    } else if (isFocus) {
      if (!isInvalid && value) {
        InteractionStyles = Object.assign(InteractionStyles, successStyles);
      } else {
        InteractionStyles = Object.assign(InteractionStyles, onFocusStyles);
      }
    } else if (!isInvalid && value) {
      InteractionStyles = Object.assign(InteractionStyles, successStyles);
    }

    const stylesContainers: ViewStyle[] = [
      styleBase.container,
      styles.inputStyles,
      InteractionStyles,
    ];

    return stylesContainers;
  }, [isFocus, isInvalid, styles.inputStyles, value]);

  return (
    <View style={WrapperStyles}>
      <LeftComponent />
      <TextInput
        style={[
          { flex: 1, height: '100%', paddingHorizontal: 10, color: 'black' },
          styles.textInput,
        ]}
        secureTextEntry={showPassword}
        onChangeText={onChangeText}
        onChange={onChange}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType={keyboardType as KeyboardTypeOptions}
        onSubmitEditing={onSubmitEditing}
        placeholder={subSchema.placeholder}
        placeholderTextColor={subSchema.placeholderTextColor}
        maxLength={maxLength}
      />
      <RightComponent />
      {subSchema.isPassword && subSchema.showPassword && !isInvalid && (
        <PasswordEyeIcon
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          subSchemaBlockClass={subSchema.blockClass}
        />
      )}

      {subSchema.successIcon && !isInvalid && value && (
        <InputSuccessIcon subSchemaBlockClass={subSchema.blockClass} />
      )}
    </View>
  );
};
const styleBase = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RawTextInput;
