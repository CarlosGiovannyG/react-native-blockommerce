/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { FC, Fragment, useState } from 'react';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import { View } from 'react-native';
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Chevron from '../SearchResultLayout/components/AccordionFilter/AccordionFilterItem/Chevron';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const CollapseComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const aref = useAnimatedRef<Animated.View>();
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withSpring(1) : withTiming(0)
  );
  const height = useSharedValue(0);
  const overlayStyle = useAnimatedStyle(() => {
    return { opacity: progress.value === 0 ? 0 : 1 };
  });
  const style = useAnimatedStyle(() => ({
    height: height.value * progress.value + 1,
    opacity: progress.value === 0 ? 0 : 1,
  }));

  const subSchema = inputObject.getObject();
  const { styles: storeStyles } = useStyleClass(
    ['summaryContainer', 'detailsContainer'],
    subSchema.blockClass
  );
  if (!subSchema.summary)
    throw new Error('Accordion Filter Item: "summary" property not found');
  if (!subSchema.details)
    throw new Error('Accordion Filter Item: "details" property not found');
  if (!subSchema.overlay && subSchema.activeOverlay)
    throw new Error(
      'Accordion Filter Item: When activeOverlay is active the overlay slot component is required'
    );
  const SummaryComponent = useSlotBlock(subSchema.summary);
  const DetailsComponent = useSlotBlock(subSchema.details);
  const OverlayComponent = useSlotBlock(subSchema.overlay);

  const [isVisible, setIsVisible] = useState(false);
  const setOpen = (value: boolean) => {
    if (height.value === 0) {
      runOnUI(() => {
        'worklet';
        height.value = measure(aref).height;
      })();
    }
    open.value = value;

    setIsVisible(value);
  };
  return (
    <Fragment>
      {subSchema.activeOverlay && (
        <Animated.View onTouchEnd={() => setOpen(false)} style={overlayStyle}>
          {isVisible && OverlayComponent}
        </Animated.View>
      )}

      <TouchableWithoutFeedback onPress={() => setOpen(!open.value)}>
        <Animated.View style={[storeStyles.summaryContainer]}>
          <View>{SummaryComponent}</View>
          <Chevron {...{ progress }} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <Animated.View style={[storeStyles.detailsContainer, style]}>
        <Animated.View ref={aref}>{DetailsComponent}</Animated.View>
      </Animated.View>
    </Fragment>
  );
};
