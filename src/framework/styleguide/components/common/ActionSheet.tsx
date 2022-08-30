import React, { FC, useEffect } from 'react';
import { PixelRatio, useWindowDimensions, View } from 'react-native';

import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  useAnimatedRef,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useUI } from '../UIActionsHandler';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import { clamp } from 'react-native-redash';

export const ActionSheet: FC<any> = () => {
  const bodyRef = useAnimatedRef<Animated.View>();
  const { height } = useWindowDimensions();
  const { displayActionSheet, closeActionSheet, actionSheetContentBlock } =
    useUI();

  const children = useSlotBlock(actionSheetContentBlock);

  const startingPosition = height;
  const y = useSharedValue(startingPosition);
  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: y.value }],
    };
  }, [y]);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (_event, ctx) => {
      // @ts-ignore
      ctx.offsetY = y.value;
    },
    onActive: (event, ctx) => {
      // @ts-ignore
      bodyRef?.current?.measure((x, yT, w, h) => {
        y.value = clamp(
          // @ts-ignore
          ctx.offsetY + event.translationY,
          startingPosition,
          -h - 40
        );
      });
    },
    onEnd: (event, ctx) => {
      y.value = withTiming(
        startingPosition,
        { duration: 500 },
        (isFinished) => {
          if (isFinished) {
            runOnJS(closeActionSheet)();
          }
        }
      );
    },
  });

  useEffect(() => {
    if (displayActionSheet) {
      // @ts-ignore
      bodyRef?.current?.measure((x, yT, w, h) => {
        y.value = withTiming(-h - 40, { duration: 500 });
      });
    } else {
      if (y.value !== startingPosition) {
        y.value = withTiming(startingPosition, { duration: 500 });
      }
    }
  }, [bodyRef, displayActionSheet, startingPosition]);
  return (
    <>
      {displayActionSheet && (
        <View
          onTouchEnd={() => closeActionSheet()}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#000',
            opacity: 0.5,
          }}
        />
      )}
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View
          style={[
            {
              width: '100%',
              top: height,
              position: 'absolute',
              backgroundColor: 'white',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
            },
            style,
          ]}
        >
          <Animated.View
            ref={bodyRef}
            style={{ paddingBottom: PixelRatio.getPixelSizeForLayoutSize(16) }}
            renderToHardwareTextureAndroid={true}
          >
            <View
              style={{
                height: 5,
                width: 100,
                borderRadius: 5,
                alignSelf: 'center',
                backgroundColor: '#C4C4C4',
                marginTop: 5,
              }}
            />
            {children}
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};
