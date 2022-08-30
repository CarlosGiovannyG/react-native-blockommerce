/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { useStyleClass } from '$styleguide/styleContext';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useTheme } from '$styleguide/theme';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { debounce } from 'debounce';
import { useLinkTo } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import { useTopSearches } from '$commerce/product';

interface DeleteButtonProps {
  eraseButton: React.Dispatch<any>;
  subSchemaBlockClass: string;
}

export const DeleteButton: FC<DeleteButtonProps> = ({
  eraseButton,
  subSchemaBlockClass,
}) => {
  const { styles } = useStyleClass(
    ['rightIconStyles', 'leftIconStyles'],
    subSchemaBlockClass
  );

  return (
    <View style={[styleBase.iconStyles, styles.rightIconStyles]}>
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
          // backgroundColor: '#fff',
        }}
        onPress={eraseButton}
      >
        <Icon name={'close'} size={24} color="#565656" />
      </TouchableOpacity>
    </View>
  );
};

export const SearchInput: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { data: dataSearch } = useTopSearches();

  const [history, setHistory] = useState(false);

  const { inputObject } = props;

  const subSchema = inputObject.getObject();

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
  /*const onChangeText = (onChange: (...event: any[]) => void) => {
    return onChange;
  };*/

  const linkTo = useLinkTo();

  const [isFocus] = useState(false);

  const {
    theme: { spacing },
  } = useTheme();

  const childrens = useChildrenBlocks(subSchema.blocks);

  const RightComponent = useCallback(() => {
    if (!subSchema.rightIcon) return null;
    return (
      <View style={[styleBase.iconStyles, styles.rightIconStyles]}>
        {childrens.length == 2 && childrens[1]}
      </View>
    );
  }, [childrens, spacing, subSchema.rightIcon, styles.rightIconStyles]);

  const LeftComponent = useCallback(() => {
    if (!subSchema.leftIcon) return null;
    return (
      <View style={[styleBase.iconStyles, styles.leftIconStyles]}>
        {childrens.length && childrens[0]}
      </View>
    );
  }, [childrens, spacing, subSchema.leftIcon]);

  const [term, setTerm] = useState('');

  // Debouncer Function
  const changeTextDebounced = (term: string) => {
    if (term) {
      // return linkTo(`/search/?term=${term}`);
    }
  };

  //const time = subSchema.debouncerTime ? subSchema.debouncerTime : 1000

  const changeTextDebouncer = useCallback(
    debounce(changeTextDebounced, 1000),
    []
  );

  useEffect(() => {
    changeTextDebouncer(term);
  }, [term]);

  const handleKeyDown = () => {
    return linkTo(`/search/?term=${term}`);
  };

  //console.log(dataSearch);
  const searchMap = dataSearch?.topSearches?.searches.map((item) => {
    return (
      <TouchableOpacity
        key={item.term}
        style={styleBase.buttonStyles}
        onPress={() => setTerm(item.term)}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={styleBase.textStyles}>
            <IconAwesome name={'history'} size={20} color="#C6C6C6" />
          </Text>
          <Text style={styleBase.textStyles}>{item.term}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <>
      <View style={[styles.container]}>
        <View
          style={
            subSchema.leftIcon && [
              styleBase.container,
              styles.inputStyles,
              isFocus && {
                borderColor: '#A4C735',
              },
            ]
          }
        >
          <LeftComponent />
          <TextInput
            style={{ flex: 1, height: '100%', paddingHorizontal: 10 }}
            autoCapitalize="none"
            autoCorrect={false}
            value={term}
            onChangeText={(term) => setTerm(term)}
            //onKeyPress={handleKeyDown}
            onSubmitEditing={handleKeyDown}
            onFocus={() => {
              setHistory(true);
            }}
            placeholder={subSchema.placeholder}
            placeholderTextColor={subSchema.placeholderTextColor}
          />
          <RightComponent />
          {subSchema.deleteButton && (
            <DeleteButton
              subSchemaBlockClass={subSchema.blockClass}
              eraseButton={(term) => setTerm('')}
            />
          )}
        </View>
      </View>

      {history && (
        <ScrollView style={styleBase.containerScrollView}>
          <View style={[styles.container]}>{searchMap}</View>
        </ScrollView>
      )}
    </>
  );
};

const styleBase = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyles: {
    paddingRight: 18,
  },
  containerScrollView: {
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  textStyles: {
    paddingLeft: 20,
    fontSize: 14,
    fontWeight: '400',
    color: '#C6C6C6',
  },
  buttonStyles: {
    paddingTop: 10,
    paddingLeft: 10,
  },
});
