import React, { memo, useEffect, useRef, useState } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { clamp, snapPoint } from 'react-native-redash';

type SwitchComponentProps = {
  value: boolean;
  onChange: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
  labelContainer: React.ReactNode;
  backgroundColor: string;
};
const SWITCH_CONTAINER_WIDTH = 50;
const SWITCH_CONTAINER_HEIGHT = 26;
const CIRCLE_WIDTH = 24;
const BORDER = 1;
const DEFAULT_MARGIN = 10;
const TRACK_CIRCLE_WIDTH = SWITCH_CONTAINER_WIDTH - CIRCLE_WIDTH - BORDER * 2;
const config = {
  overshootClamping: true,
};
const RawSwitchComponent = ({
  value = false,
  onChange,
  backgroundColor,
}: SwitchComponentProps) => {
  const [isToggled, setIsToggled] = useState(value);
  const translateX = useSharedValue(isToggled ? TRACK_CIRCLE_WIDTH : 0);

  useEffect(() => {
    translateX.value = withSpring(
      isToggled ? TRACK_CIRCLE_WIDTH : 0,
      config,
      (isFinished) => {
        if (isFinished) {
          if (value !== isToggled) {
            runOnJS(onChange)(isToggled);
          }
        }
      }
    );
  }, [isToggled]);

  const onPress = ({
    nativeEvent: { state },
  }: TapGestureHandlerStateChangeEvent) => {
    if (state !== State.ACTIVE) return;
    setIsToggled((prevstate) => !prevstate);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
      width: interpolate(
        translateX.value,
        [0, TRACK_CIRCLE_WIDTH / 3, TRACK_CIRCLE_WIDTH],
        [CIRCLE_WIDTH, (CIRCLE_WIDTH / 2) * 2.5, CIRCLE_WIDTH]
      ),
    };
  });
  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        translateX.value,
        [0, TRACK_CIRCLE_WIDTH],
        ['white', backgroundColor]
      ),
    };
  });

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number }
  >({
    onStart: (_e, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, ctx) => {
      translateX.value = clamp(translationX + ctx.x, 0, TRACK_CIRCLE_WIDTH);
    },
    onEnd: ({ velocityX }) => {
      const selectedSnapPoint = snapPoint(translateX.value, velocityX, [
        0,
        TRACK_CIRCLE_WIDTH,
      ]);
      translateX.value = withSpring(selectedSnapPoint, config);
      runOnJS(setIsToggled)(selectedSnapPoint !== 0);
      runOnJS(onChange)(selectedSnapPoint !== 0);
    },
  });

  const panRef = useRef<PanGestureHandler>(null);

  return (
    <TapGestureHandler waitFor={panRef} onHandlerStateChange={onPress}>
      <Animated.View style={[animatedContainerStyle, styles.switchContainer]}>
        <PanGestureHandler ref={panRef} onGestureEvent={onGestureEvent}>
          <Animated.View
            style={[
              animatedStyle,
              styles.circle,
              { borderColor: 'transparent' },
            ]}
          />
        </PanGestureHandler>
      </Animated.View>
    </TapGestureHandler>
  );
};
const SwitchComponent = memo(
  RawSwitchComponent,
  (prevProps, nextProps) => prevProps.value !== nextProps.value
);

export default SwitchComponent;

const styles = StyleSheet.create({
  switchContainer: {
    width: SWITCH_CONTAINER_WIDTH,
    height: SWITCH_CONTAINER_HEIGHT,
    borderRadius: 999,
    flexDirection: 'row',
  },
  circle: {
    alignSelf: 'center',
    width: CIRCLE_WIDTH,
    height: CIRCLE_WIDTH,
    borderRadius: 999,
    borderWidth: BORDER,
    elevation: 5,
    backgroundColor: 'white',
  },
});
