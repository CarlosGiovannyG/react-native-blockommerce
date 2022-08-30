/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { FC, useCallback, useMemo, useState } from 'react';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import RawTextInput, {
  ComponentSubSchemaProps,
} from '../../../StoreForm/Input/components/RawTextInput';
import { useSearchesHandler } from '../../context';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputFocusEventData,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
import { replaceKeysForVar } from '$styleguide/utils/addVarToString';
import { useLinkTo } from '@react-navigation/native';
import { SearchInputHandlerProvider } from './context';
import debounce from 'debounce';

export const SearchInputComponent: FC<{
  inputObject: BasicInputReturnType;
}> = ({ inputObject }) => {
  const [term, setTerm] = useState('');
  const [historyIsVisible, setHistoryIsVisible] = useState<boolean>(false);
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(
    [
      'wrapperStyles',
      'container',
      'inputStyles',
      'labelStyles',
      'rightIconStyles',
      'leftIconStyles',
    ],
    subSchema.blockClass
  );
  const linkTo = useLinkTo();
  const RightComponent = useSlotBlock(subSchema.RightComponent);
  const LeftComponent = useSlotBlock(subSchema.LeftComponent);
  const ExteriorComponent = useSlotBlock(subSchema.ExteriorComponent);
  const HistoryComponent = useSlotBlock(subSchema.HistoryComponent);
  const DeleteIconComponent = useSlotBlock(subSchema.DeleteIconComponent);

  const onChangeText = (text: string) => {
    setTerm(text);
    if (subSchema.withDebounce) {
      debounce(onSubmit, subSchema.debounceDelay || 1000);
    }
  };

  const onChange:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined = () => {};

  const onSubmit = () => {
    if (subSchema.redirectToSearchPage && subSchema.redirectTo) {
      const redirectToUrl = replaceKeysForVar(subSchema.redirectTo, { term });
      linkTo(redirectToUrl);
    } else if (subSchema.activeHistory) {
      setHistoryIsVisible(true);
    }
  };

  const onSubmitEditing:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined = onSubmit;

  const onFocus:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined = () => {
      if (!subSchema.activeHistory) return null;
      setHistoryIsVisible(true);
    };

  const onBlur:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined = () => {
      if (!subSchema.activeHistory) return null;
      setHistoryIsVisible(false);
    };

  const renderHistory = useMemo(() => {
    if (!subSchema.activeHistory || !historyIsVisible) return null;
    return <View>{HistoryComponent}</View>;
  }, [HistoryComponent, historyIsVisible, subSchema.activeHistory]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapperStyles}>
        {ExteriorComponent}
        <RawTextInput
          onChange={onChange}
          rightComponent={RightComponent}
          leftComponent={LeftComponent}
          DeleteIconComponent={DeleteIconComponent}
          styles={styles}
          subSchema={subSchema as ComponentSubSchemaProps}
          value={term}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onFocus={onFocus}
          onBlur={onBlur}
          disableValidation={subSchema.disableValidation}
        />
      </View>
      <SearchInputHandlerProvider config={{ onChangeText }}>
        {renderHistory}
      </SearchInputHandlerProvider>
    </View>
  );
};
