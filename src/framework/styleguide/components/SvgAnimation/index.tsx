import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useStyleClass } from '$styleguide/styleContext';
import { TouchableOpacity, View } from 'react-native';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import LottieView from 'lottie-react-native';
import { useTheme } from '$styleguide/theme';

export const SvgAnimation: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { currentTheme, theme } = useTheme();
  const { styles } = useStyleClass(
    ['container', 'imageStyles'],
    subSchema.blockClass
  );
  const autoPlay = subSchema.autoPlay ? true : false;
  const loop = subSchema.loop ? true : false;
  const autoSize = subSchema.autoSize ? true : false;
  const speed = subSchema.speed ? subSchema.speed : 1;
  const duration = subSchema.duration && subSchema.duration;

  const [LottieAnim, setLottieAnim] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const animation = useRef(null);

  useEffect(() => {
    if (!isMounted) {
      fetch(subSchema.uri, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((responseData) => {
          setLottieAnim(responseData);
        })
        .catch((error) => {});
      setIsMounted(true);
    }
  }, [LottieAnim]);

  useEffect(() => {
    return () => {
      animation.current.reset()
      setLottieAnim('');
    };
  }, []);

  const handlePress = () => {
    if (isPressed) {
      animation.current.play(
        subSchema.endFrame || 0,
        subSchema.startFrame || 0
      );
      setIsPressed(false);
    } else {
      animation.current.play(
        subSchema.startFrame || 0,
        subSchema.endFrame || 0
      );
      setIsPressed(true);
    }
  };
  const SVGComponent = useCallback(() => {
    return (
      <View style={[styles.container]}>
        {LottieAnim ? (
          <LottieView
            ref={animation}
            style={{
              width: subSchema.width ?? '100%',
              height: subSchema.height ?? '100%',
            }}
            source={LottieAnim}
            autoPlay={autoPlay}
            loop={loop}
            autoSize={autoSize}
            speed={speed}
            duration={duration}
            resizeMode={subSchema.resizeMode || 'contain'}
          />
        ) : null}
      </View>
    );
  }, [LottieAnim]);

  const renderSvg = useCallback(() => {
    if (subSchema.typeAction === 'button') {
      return (
        <TouchableOpacity onPress={handlePress}>
          {SVGComponent()}
        </TouchableOpacity>
      );
    } else {
      return SVGComponent();
    }
  }, [LottieAnim, handlePress]);

  return renderSvg();
};
