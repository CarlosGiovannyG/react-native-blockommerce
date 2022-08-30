import React, { FC, useState } from 'react';
import {
  Switch,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStoreShelfContext } from '$styleguide/components/MyAddresses/AddressList/context';
import Icon from 'react-native-vector-icons/Ionicons';

export const CustomAddressSelectorComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const [isLoading, setLoading] = useState(false);
  const { trackColorFalse, trackColorTrue } = subSchema;
  const { selectedItem, setSelectedItem, item, data } = useStoreShelfContext();

  const { styles } = useStyleClass(
    ['switchStyles', 'container'],
    subSchema.blockClass
  );

  const renderSelectedItem = selectedItem === item ? true : false;

  return (
    <View
      style={[
        styles.container,
        subSchema.renderSelection && renderSelectedItem && {
          borderWidth: 1,
          borderColor: '#4BB543',
        },
      ]}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <TouchableOpacity
          onPress={async () => {
            setLoading(true);
            await setSelectedItem(item);
            setLoading(false);
          }}
        >
          <Text style={styles.textStyles}>
            {data.street} {data.number} {data.postalCode}
          </Text>
          <Text style={styles.textStyleBottom}>
            {data.city}, {data.state} - {data.country}
          </Text>

          {subSchema.check && renderSelectedItem && (
            <View style={{ position: 'absolute', right: '-15%' }}>
              <Icon name={'md-checkmark-sharp'} size={30} color={'#4BB543'} />
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const defaultStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#4BB543',
  }
})