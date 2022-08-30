/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useCallback, useMemo } from 'react';
import storeFormHandlerReducer, {
  initialState,
  SetSubmitFunctionProps,
  State,
} from './Reducer';

export const StoreFormHandlerContext = React.createContext<State>(initialState);

StoreFormHandlerContext.displayName = 'StoreFormHandlerContext';

export const StoreFormHandlerProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(
    storeFormHandlerReducer,
    initialState
  );

  const setSubmitFunction = useCallback(
    (props: SetSubmitFunctionProps) =>
      dispatch({ type: 'SET_SUBMIT_FUNCTION', payload: props }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      setSubmitFunction,
    }),
    [setSubmitFunction, state]
  );

  return <StoreFormHandlerContext.Provider value={value} {...props} />;
};

export const useStoreFormHandler = () => {
  const context = React.useContext(StoreFormHandlerContext);
  if (context === undefined) {
    throw new Error(
      'useStoreFormHandler must be used within a StoreFormHandlerProvider'
    );
  }
  return context;
};
