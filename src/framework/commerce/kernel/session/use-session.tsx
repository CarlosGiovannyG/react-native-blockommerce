import React, { FC, useCallback, useMemo } from 'react';

export interface State {
  isSignedIn: boolean;
  user: { [key: string]: any };
}

export interface SessionManagerActions {
  setSession: (profile: { [key: string]: any }) => void;
  setIsSignedIn: (payload: boolean) => void;
}

const initialState: State = {
  isSignedIn: false,
  user: {},
};

type Action =
  | {
      type: 'SET_USER';
      payload: { [key: string]: any };
    }
  | {
      type: 'SET_IS_SIGNED_IN';
      payload: boolean;
    };

export const SessionManagerContext = React.createContext<State>(initialState);

function SessionManagerReducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        isSignedIn: true,
        user: action.payload,
      };
    }
    case 'SET_IS_SIGNED_IN': {
      return {
        ...state,
        isSignedIn: action.payload,
      };
    }

    default:
      return state;
  }
}

export const SessionManagerProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(
    SessionManagerReducer,
    initialState
  );

  const setSession = useCallback(
    (profile: { [key: string]: any }) =>
      dispatch({ type: 'SET_USER', payload: profile }),
    [dispatch]
  );

  const setIsSignedIn = useCallback(
    (payload: boolean) => dispatch({ type: 'SET_IS_SIGNED_IN', payload }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      isSignedIn: state.isSignedIn,
      user: state.user,
      setSession,
      setIsSignedIn,
    }),
    [setIsSignedIn, setSession, state.isSignedIn, state.user]
  );

  return <SessionManagerContext.Provider value={value} {...props} />;
};

export const useSessionManager = () => {
  const context = React.useContext(SessionManagerContext);
  if (context === undefined) {
    throw new Error(
      'useSessionManager must be used within a SessionManagerProvider'
    );
  }
  return context as State & SessionManagerActions;
};

export default useSessionManager;
