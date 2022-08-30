import { useTheme } from '$styleguide/theme';
import React, { useMemo } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface RightSwipeActionsProps {
  onDeleteCallback(): void;
  onEditCallback?(): void;
  enableEdit?: boolean;
  enableDelete?: boolean;
}

const RightSwipeActions = ({
  onDeleteCallback,
  onEditCallback,
  enableEdit = true,
  enableDelete = true,
}: RightSwipeActionsProps) => {
  const {
    theme: { palette },
  } = useTheme();

  const defaultStyle: ViewStyle = {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  const iconSize = 28;

  const renderDeleteButton = useMemo(() => {
    if (!enableDelete) return null;
    return (
      <TouchableOpacity
        onPress={onDeleteCallback}
        style={{
          ...defaultStyle,
          backgroundColor: palette.error.main,
        }}
      >
        <Icon name={'trash'} size={iconSize} color={'#fff'} />
      </TouchableOpacity>
    );
  }, [onDeleteCallback]);
  const renderEditButton = useMemo(() => {
    if (!enableEdit) return null;
    return (
      <TouchableOpacity
        onPress={onEditCallback}
        style={{
          ...defaultStyle,
          backgroundColor: palette.warning.main,
        }}
      >
        <Icon name={'create-outline'} size={iconSize} color={'#fff'} />
      </TouchableOpacity>
    );
  }, [onEditCallback]);

  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      {renderDeleteButton}

      {renderEditButton}
    </View>
  );
};

export default RightSwipeActions;
