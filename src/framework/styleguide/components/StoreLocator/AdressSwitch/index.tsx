import React, { FC, useState } from 'react';
import { Switch, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStoreShelfContext } from '../Shelf/context';

export const StoreLocatorSwitchComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const [isLoading, setLoading] = useState(false);
  const { trackColorFalse, trackColorTrue } = subSchema;
  const { selectedItem, setSelectedItem, item } = useStoreShelfContext();

  const { styles } = useStyleClass(
    ['switchStyles', 'container'],
    subSchema.blockClass
  );

  const renderToggle = selectedItem === item ? true : false;

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Switch
          trackColor={{ false: trackColorFalse, true: trackColorTrue }}
          ios_backgroundColor={trackColorFalse}
          style={[styles.switchStyles]}
          onValueChange={async () => {
            setLoading(true);
            await setSelectedItem(item);
            setLoading(false);
          }}
          value={renderToggle}
        />
      )}
    </View>
  );
};
