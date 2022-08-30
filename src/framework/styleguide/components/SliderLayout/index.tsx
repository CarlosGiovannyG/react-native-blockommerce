import React, { FC } from 'react';
import { Dimensions, View, ViewStyle } from 'react-native';
import { BasicInputReturnType } from '../../hooks/types';
import { useStyleClass } from '../../styleContext';
import { useWindowDimensions } from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import { snapPoint } from 'react-native-redash';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';

export const SliderLayoutComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(
    [
      'sliderContainer',
      'paginationPoint',
      'paginationPointContainer',
      'stepInfoContainer',
    ],
    subSchema.blockClass
  );

  const blocks = useChildrenBlocks(subSchema.blocks);

  return (
    <Slider
      style={styles}
      width={subSchema.width}
      height={subSchema.height}
      views={blocks}
    />
  );
};

interface SliderProps {
  height: number;
  width: number;
  views: React.ReactElement[];
  style: Record<string, ViewStyle>;
}

const Slider: FC<SliderProps> = ({
  height = undefined,
  width = Dimensions.get('window').width,
  views,
  style,
}) => {
  const x = useSharedValue(0);
  const currentPage = useSharedValue(0);

  const container = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }],
    };
  }, [x]);

  const points = views.map((_, index) => {
    if (index === 0) return 0;
    else return -Math.abs(width * index);
  });

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { startX: number }
  >({
    onStart: (_, ctx) => {
      ctx.startX = x.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
    },
    onEnd: (event) => {
      x.value = withTiming(
        snapPoint(x.value, event.velocityX, points),
        {
          duration: 500,
        },
        (isFinished) => {
          if (isFinished) {
            currentPage.value = points.findIndex((v) => v === x.value);
          }
        }
      );
    },
  });

  return (
    <View>
      <View>
        <PanGestureHandler minDist={0} onGestureEvent={gestureHandler}>
          <Animated.View
            style={[
              container,
              { width: width * views.length, height, flexDirection: 'row' },
              style.sliderContainer,
            ]}
          >
            {views.map((block, index) => (
              <View key={index} style={[style.stepInfoContainer, { width }]}>
                {block}
              </View>
            ))}
          </Animated.View>
        </PanGestureHandler>
      </View>
      <View style={[style.paginationPointContainer]}>
        {Array.from(Array(views.length).keys()).map((_, i) => {
          return (
            <PaginationPoint
              pointStyles={style.paginationPoint}
              key={`point-${i}`}
              index={i}
              xPos={x}
              pages={views.length}
              points={points}
            />
          );
        })}
      </View>
    </View>
  );
};

interface PaginationPointProps {
  pointStyles: ViewStyle;
  xPos: Animated.SharedValue<number>;
  index: number;
  pages: number;
  points: number[];
}

const PaginationPoint: React.FC<PaginationPointProps> = ({
  index,
  xPos,
  points,
  pointStyles,
}) => {
  const { width } = useWindowDimensions();
  const scalePoint = useSharedValue(
    Math.floor(xPos.value / -width) === index ? 1.5 : 1
  );
  const pointSize = useAnimatedStyle(() => {
    const selectedIndex = Math.floor(xPos.value / -width);
    const isSelectedIndex = selectedIndex === index;
    const isNextIndex = selectedIndex + 1 === index;
    const cV = points[selectedIndex];
    const nV = points[selectedIndex + 1];
    const d = cV - nV;
    const movingToRight = points[selectedIndex] > xPos.value;
    const movingToLeft = points[selectedIndex] < xPos.value;
    const paginationPercentage = Math.abs(
      ((xPos.value - points[selectedIndex]) * 100) / d
    );

    if (movingToRight || movingToLeft) {
      if (isSelectedIndex) {
        scalePoint.value = 1.5 - (paginationPercentage / 100) * 0.5;
      } else if (isNextIndex) {
        scalePoint.value = 1 + (paginationPercentage / 100) * 0.5;
      }
    }

    if (isNaN(scalePoint.value)) {
      scalePoint.value = 1.5;
    }

    return {
      transform: [{ scale: scalePoint.value }],
    };
  }, [xPos]);
  return <Animated.View style={[pointStyles, pointSize]} />;
};
