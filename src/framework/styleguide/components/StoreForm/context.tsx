import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type FormHandlerContextValue = FormHandlerConfig;

const FormHandler = createContext<FormHandlerContextValue | {}>({});

export interface FormHandlerProps {
  config: FormHandlerConfig;
}

export type FormHandlerConfig = {
  onSubmit: (props: any) => void;
  submitIsLoading?: boolean;
  defaultValues: Record<string, any> | any[];
};

export const FormHandlerProvider: FC<FormHandlerProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    return {
      submitIsLoading: config.submitIsLoading,
      onSubmit: config.onSubmit,
      defaultValues: config.defaultValues ?? {},
    };
  }, [config]);
  return <FormHandler.Provider value={value}>{children}</FormHandler.Provider>;
};

export const useFormHandler = (): FormHandlerConfig =>
  useContext(FormHandler) as FormHandlerContextValue;
