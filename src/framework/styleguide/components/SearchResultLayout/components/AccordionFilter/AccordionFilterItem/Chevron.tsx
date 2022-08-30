import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { mix, mixColor } from 'react-native-redash';

import Icon from 'react-native-vector-icons/Ionicons';
const size = 30;
const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface ChevronProps {
  progress: Animated.SharedValue<number>;
}

const Chevron = ({ progress }: ChevronProps) => {
  const style = useAnimatedStyle(() => ({
    // backgroundColor: mixColor(progress.value, '#525251', '#e45645'),
    transform: [{ rotateZ: `${mix(progress.value, 0, Math.PI)}rad` }],
  }));
  return (
    <Animated.View style={[styles.container, style]}>
      <Icon name={'chevron-down-outline'} size={24} color="#565656" />
    </Animated.View>
  );
};

export default Chevron;
