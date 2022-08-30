/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useCallback, useMemo } from 'react';
import { createContext, FC, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { PaletteType, ThemeType } from './types/theme';
import { createTheme } from './theme';
import merge from 'lodash.merge';
import { BasicInputReturnType } from './hooks/types';

export type StyleguideContextValue = StyleguideConfig;

const Styleguide = createContext<StyleguideContextValue | {}>({});

export interface StyleguideProps {
  config: Omit<StyleguideConfig, 'setTheme' | 'currentTheme'>;
}

export interface CustomComponentsType {
  [key: string]: React.FC<{
    inputObject: BasicInputReturnType;
  }>;
}

export interface StyleguideConfig extends ThemeState {
  theme: ThemeType;
  globalStyles: {
    [key: string]: any;
  };
  setTheme: (type: PaletteType) => void;
  CustomComponents: {};
}

export interface ThemeState {
  currentTheme: PaletteType;
  theme: ThemeType;
}

type ThemeAction = {
  type: 'SET_THEME';
  payload: PaletteType;
};

function ThemeReducer(state: ThemeState, action: ThemeAction) {
  switch (action.type) {
    case 'SET_THEME': {
      return {
        ...state,
        currentTheme: action.payload,
        theme: createTheme({
          ...state.theme,
          palette: {
            ...state.theme.palette,
            type: action.payload,
          },
        }),
      };
    }
    default:
      return state;
  }
}

export const StyleguideProvider: FC<StyleguideProps> = ({
  config,
  children,
}) => {
  const [state, dispatch] = React.useReducer(ThemeReducer, {
    currentTheme: config.theme.palette?.type,
    theme: config.theme,
  });

  const setTheme = useCallback(
    (type: PaletteType) => dispatch({ type: 'SET_THEME', payload: type }),
    [dispatch]
  );

  const buildStyles = useMemo(
    () =>
      Object.keys(config.globalStyles).reduce((accum, currentValue) => {
        if (typeof config.globalStyles[currentValue] === 'function') {
          accum = {
            ...accum,
            ...config.globalStyles[currentValue](state.theme),
          };
        }
        return accum;
      }, {}),
    [config.globalStyles, state.theme]
  );

  const value = useMemo(() => {
    return {
      currentTheme: state.currentTheme,
      theme: state.theme,
      globalStyles: buildStyles,
      setTheme,
      CustomComponents: config.CustomComponents
    };
  }, [buildStyles, setTheme, state.currentTheme, state.theme]);
  return <Styleguide.Provider value={value}>{children}</Styleguide.Provider>;
};

export function useStyleguide() {
  return useContext(Styleguide) as StyleguideContextValue;
}

export const useStyleClass = (classes: string[], className: string) => {
  const { globalStyles } = useStyleguide();
  const styles = useMemo(() => {
    if (className) {
      const isMultiClass = className.includes ? className.includes(';') : false;
      if (isMultiClass) {
        const multiClass = className.split(';');
        const multiStyles = multiClass.reduce(
          (mAccum, mCurrentValue) => {
            if (!(mCurrentValue in globalStyles)) return mAccum;
            const styleClassKeys = Object.keys(globalStyles[mCurrentValue]);

            const componentStyles = classes.reduce((accum, currentValue) => {
              const filteredClass = styleClassKeys.filter(
                (pred) => pred === currentValue
              );
              if (filteredClass.length) {
                accum = {
                  ...accum,
                  [filteredClass[0]]: {
                    ...accum[filteredClass[0]],
                    ...globalStyles[mCurrentValue][filteredClass[0]],
                  },
                };
              }
              return accum;
            }, {});

            mAccum = merge(mAccum, {
              styles: componentStyles,
            });

            return mAccum;
          },
          {
            styles: {},
          }
        );
        return { styles: StyleSheet.create({ ...multiStyles.styles }) };
      } else {
        if (!(className in globalStyles)) return { styles: {} };
        const styleClassKeys = Object.keys(globalStyles[className]);
        const componentStyles = classes.reduce((accum, currentValue) => {
          const filteredClass = styleClassKeys.filter(
            (pred) => pred === currentValue
          );
          if (filteredClass.length) {
            accum = {
              ...accum,
              [className]: {
                ...accum[className],
                [filteredClass[0]]: globalStyles[className][filteredClass[0]],
              },
            };
          }
          return accum;
        }, {});

        return { styles: StyleSheet.create({ ...componentStyles[className] }) };
      }
    } else {
      return { styles: {} };
    }
  }, [className, classes, globalStyles]);

  return styles;
};
