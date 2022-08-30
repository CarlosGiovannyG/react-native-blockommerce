import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type TriggerUIActionContextValue = TriggerUIActionConfig;

const TriggerUIAction = createContext<TriggerUIActionContextValue | {}>({});

export interface TriggerUIActionProps {
  config: TriggerUIActionConfig;
}

export type TriggerUIActionConfig = {
  onSubmit?: (...args: any) => void;
  onAccept?: (...args: any) => void;
  onCancel?: (...args: any) => void;
  onContinue?: (...args: any) => void;
};

export const TriggerUIActionProvider: FC<TriggerUIActionProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    const getFunctions = () => {
      let functions = {};
      if (config.onAccept) {
        functions = {
          ...functions,
          onAccept: config.onAccept,
        };
      }
      if (config.onCancel) {
        functions = {
          ...functions,
          onCancel: config.onCancel,
        };
      }
      if (config.onSubmit) {
        functions = {
          ...functions,
          onSubmit: config.onSubmit,
        };
      }
      return functions;
    };
    return {
      ...getFunctions(),
    };
  }, [config]);
  return (
    <TriggerUIAction.Provider value={value}>
      {children}
    </TriggerUIAction.Provider>
  );
};

export const useTriggerUIAction = (): TriggerUIActionConfig =>
  useContext(TriggerUIAction) as TriggerUIActionContextValue;
