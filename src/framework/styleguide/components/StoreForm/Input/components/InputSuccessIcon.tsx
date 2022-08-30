import { useStyleClass } from '$styleguide/styleContext';
import React, { FC } from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
interface InputSuccessIconProps {
  subSchemaBlockClass?: string;
}

const InputSuccessIcon: FC<InputSuccessIconProps> = ({
  subSchemaBlockClass,
}) => {
  const { styles } = useStyleClass(
    ['rightIconStyles', 'leftIconStyles'],
    subSchemaBlockClass
  );

  return (
    <View style={[{ paddingRight: 18 }, styles.rightIconStyles]}>
      <Icon name="checkmark-outline" size={24} color="#1FA02E" />
    </View>
  );
};

export default InputSuccessIcon;
