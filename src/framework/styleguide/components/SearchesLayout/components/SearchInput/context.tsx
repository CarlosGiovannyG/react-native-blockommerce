import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type SearchInputHandlerContextValue = SearchInputHandlerConfig;

const SearchInputHandler = createContext<SearchInputHandlerContextValue | {}>(
  {}
);

export interface SearchInputHandlerProps {
  config: SearchInputHandlerConfig;
}

export type SearchInputHandlerConfig = {
  onChangeText: (term: string) => void;
};

export const SearchInputHandlerProvider: FC<SearchInputHandlerProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    return {
      onChangeText: config.onChangeText,
    };
  }, [config.onChangeText]);
  return (
    <SearchInputHandler.Provider value={value}>
      {children}
    </SearchInputHandler.Provider>
  );
};

export const useSearchInputHandler = (): SearchInputHandlerConfig =>
  useContext(SearchInputHandler) as SearchInputHandlerContextValue;
