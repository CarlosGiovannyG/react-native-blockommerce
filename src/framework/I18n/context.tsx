import React, { FC, createContext, useContext, useMemo } from 'react';

export const I18nContext = createContext<{} | null>(null);

export function useI18nContext() {
  return useContext(I18nContext);
}

interface ContextProps {
  switchLanguage: (args: { locale: string; messages: {} }) => void;
}

export const I18nContextProvider: FC<ContextProps> = (props) => {
  const dataContext = useMemo(() => {
    return {
      switchLanguage: props?.switchLanguage,
    };
  }, []);

  return (
    <I18nContext.Provider value={dataContext}>
      {props.children}
    </I18nContext.Provider>
  );
};
