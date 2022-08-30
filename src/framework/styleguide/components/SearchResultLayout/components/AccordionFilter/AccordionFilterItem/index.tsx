/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { FC, useState } from 'react';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { useAccordionFilterContainer } from '../AccordionFilterContainer/context';
import { AccordionFilterItemContextProvider } from './context';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
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
import Chevron from './Chevron';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  items: {
    overflow: 'hidden',
    minHeight: 250,
  },
});

export const AccordionFilterItemComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const { data } = useAccordionFilterContainer();
  const aref = useAnimatedRef<Animated.View>();
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withSpring(1) : withTiming(0)
  );
  const height = useSharedValue(0);
  const headerStyle = useAnimatedStyle(() => ({
    borderBottomLeftRadius: progress.value === 0 ? 8 : 0,
    borderBottomRightRadius: progress.value === 0 ? 8 : 0,
  }));
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

  const SummaryComponent = useSlotBlock(subSchema.summary);
  const DetailsComponent = useSlotBlock(subSchema.details);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <AccordionFilterItemContextProvider config={{ data: data }}>
      <TouchableWithoutFeedback
        onPress={() => {
          if (height.value === 0) {
            runOnUI(() => {
              'worklet';
              height.value = measure(aref).height;
            })();
          }
          open.value = !open.value;
          setIsVisible((state) => !state);
        }}
      >
        <Animated.View
          style={[styles.container, headerStyle, storeStyles.summaryContainer]}
        >
          <View>{SummaryComponent}</View>
          <Chevron {...{ progress }} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.items, style]}>
        <Animated.View
          ref={aref}
          onLayout={({
            nativeEvent: {
              layout: { height: h },
            },
          }) => {
            if (h !== height.value) {
              runOnUI(() => {
                'worklet';
                height.value = h;
              })();
            }
          }}
          style={storeStyles.detailsContainer}
        >
          {DetailsComponent}
        </Animated.View>
      </Animated.View>
    </AccordionFilterItemContextProvider>
  );
};
