import React, { FC, Fragment } from 'react';
import { Dimensions, Image, ImageStyle, View, ViewStyle } from 'react-native';

import { StyleSheet, PixelRatio, useWindowDimensions } from 'react-native';
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
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { useProductDetails } from '../../context';

export const ProductDetailSliderComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(
    ['sliderContainer', 'imageStyles'],
    subSchema.blockClass
  );
  const { product } = useProductDetails();

  return (
    <Slider
      style={styles.sliderContainer}
      styleImage={styles.imageStyles}
      width={subSchema.width}
      height={subSchema.height}
      views={product.images}
    />
  );
};

interface SliderProps {
  height: number;
  width: number;
  views: any[];
  style: ViewStyle;
  styleImage: ImageStyle;
}

const Slider: FC<SliderProps> = ({
  height = undefined,
  width = Dimensions.get('window').width,
  views,
  style,
  styleImage,
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
          currentPage.value = points.findIndex((v) => v === x.value);
        }
      );
    },
  });

  return (
    <Fragment>
      <PanGestureHandler minDist={0} onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            container,
            { width: width * views.length, height, flexDirection: 'row' },
            style,
          ]}
        >
          {views.map((product, index) => (
            <View
              key={index}
              style={[styles.walkthroughStepInfoContainer, { width }]}
            >
              <Image
                style={[styleImage, { flex: 1, resizeMode: 'contain' }]}
                source={{ uri: product.imageUrl }}
              />
            </View>
          ))}
        </Animated.View>
      </PanGestureHandler>
      <View
        style={{
          width: '100%',
          marginVertical: 8,
          bottom: 0,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}
        >
          {Array.from(Array(views.length).keys()).map((_, i) => {
            return (
              <PaginationPoint
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
    </Fragment>
  );
};

interface PaginationPointProps {
  xPos: Animated.SharedValue<number>;
  index: number;
  pages: number;
  points: number[];
}

const PaginationPoint: React.FC<PaginationPointProps> = ({
  index,
  xPos,
  pages,
  points,
}) => {
  const { width } = useWindowDimensions();
  const scalePoint = useSharedValue(1);
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

  return (
    <Animated.View style={[styles.walkthroughPaginationPoint, pointSize]} />
  );
};

const styles = StyleSheet.create({
  walkthroughStepInfoContainer: {
    //paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(8),
  },
  walkthroughPaginationPoint: {
    width: 8,
    height: 8,
    borderRadius: 16,
    backgroundColor: '#085CEA',
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(2),
  },
});
