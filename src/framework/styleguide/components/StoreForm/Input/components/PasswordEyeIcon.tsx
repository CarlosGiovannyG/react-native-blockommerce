import { useStyleClass } from '$styleguide/styleContext';
import React, { FC } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
interface PasswordEyeIconProps {
  showPassword: boolean;
  setShowPassword: React.Dispatch<boolean>;
  subSchemaBlockClass?: string;
}

const PasswordEyeIcon: FC<PasswordEyeIconProps> = ({
  showPassword,
  setShowPassword,
  subSchemaBlockClass,
}) => {
  const { styles } = useStyleClass(
    ['rightIconStyles', 'leftIconStyles'],
    subSchemaBlockClass
  );

  return (
    <View style={[{ paddingRight: 18 }, styles.rightIconStyles]}>
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
          backgroundColor: '#fff',
        }}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Icon
          name={showPassword ? 'eye-outline' : 'eye-off-outline'}
          size={24}
          color="#565656"
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordEyeIcon;
