/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { FC, Fragment, memo, useEffect, useState } from 'react';
import { useIsConnected } from 'react-native-offline';
import { StyleSheet, Text, useWindowDimensions } from 'react-native';
import isEqual from 'lodash.isequal';
import Animated, {
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { debounce } from 'debounce';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
  },
  offlineWrapper: {
    backgroundColor: '#cf000f',
    paddingVertical: 14,
    marginBottom: 50,
  },
  onlineWrapper: {
    backgroundColor: '#009944',
    paddingVertical: 14,
    alignSelf: 'flex-end',
    marginBottom: 50,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

const NetworkToast: FC = memo(() => {
  const bodyRef = useAnimatedRef<Animated.View>();
  const isConnected = useIsConnected();
  const [displayNetworkToast, setDisplayNetworkToast] = useState(false);
  const [lostConnection, setLostConnection] = useState(false);
  const { height: initialPosition } = useWindowDimensions();
  const y = useSharedValue(initialPosition);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: y.value }],
    };
  }, [y]);

  const close = () => {
    setDisplayNetworkToast(false);
    y.value = withTiming(initialPosition, { duration: 500 });
  };

  const open = () => {
    setDisplayNetworkToast(true);
    debounce(close, 5000)();
  };

  useEffect(() => {
    if (isConnected === false) setLostConnection(true);
    else if (lostConnection && isConnected) {
      open();
      setLostConnection(false);
    }
  }, [isConnected, lostConnection]);

  useEffect(() => {
    if (lostConnection) open();
  }, [lostConnection]);

  return (
    <Fragment>
      <Animated.View style={[style]}>
        <Animated.View
          style={[
            styles.container,
            !isConnected ? styles.offlineWrapper : styles.onlineWrapper,
          ]}
          ref={bodyRef}
          onLayout={({
            nativeEvent: {
              layout: { height: h2 },
            },
          }) => {
            if (displayNetworkToast) {
              runOnUI(() => {
                'worklet';
                y.value = withTiming(-h2, { duration: 500 });
              })();
            }
          }}
        >
          {lostConnection ? (
            <Text style={styles.text}>
              No se puede conectar a Internet. Compruebe las conexiones a
              Internet de su dispositivo.
            </Text>
          ) : (
            <Text style={styles.text}>Conexión establecida</Text>
          )}
        </Animated.View>
      </Animated.View>
    </Fragment>
  );
}, isEqual);

export default NetworkToast;
