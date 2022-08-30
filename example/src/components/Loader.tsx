import React, { useEffect } from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  useDerivedValue,
  Easing,
} from 'react-native-reanimated';

const CencoLoading = () => {
  const circleSize = 100;
  const borderSize = 6;
  const pointSize = 18;
  const completeCycleDeg = 360;

  const animation = useSharedValue(0);

  const rotation = useDerivedValue(() => {
    return interpolate(animation.value, [0, 1], [0, completeCycleDeg]);
  });

  const startAnimation = () => {
    'worklet';
    animation.value = withRepeat(
      withTiming(1, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1
    );
  };

  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: rotation.value + 'deg',
        },
      ],
    };
  }, []);

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <Animated.View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Animated.View
        style={{
          width: circleSize,
          height: circleSize,
          borderRadius: circleSize,
          borderWidth: borderSize,
          borderColor: '#fff',
          backgroundColor: '#4DB852',
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      >
        <Animated.View
          style={[
            {
              width: circleSize,
              height: 14,
              right: (borderSize * 2) / 2,
            },
            circleContainerStyle,
          ]}
        >
          <Animated.View
            style={{
              width: pointSize,
              height: pointSize,
              borderRadius: pointSize,
              borderColor: 'white',
              borderWidth: 1,
              backgroundColor: '#4DB852',
              right: borderSize,
            }}
          ></Animated.View>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default CencoLoading;
