import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type SearchesHandlerContextValue = SearchesHandlerConfig;

const SearchesHandler = createContext<SearchesHandlerContextValue | {}>({});

export interface SearchesHandlerProps {
  config: SearchesHandlerConfig;
}

export type SearchesHandlerConfig = {
  isLoading: boolean;
  data: any;
};

export const SearchesHandlerProvider: FC<SearchesHandlerProps> = ({
  config,
  children,
}) => {
  const value = useMemo(() => {
    return {
      isLoading: config.isLoading,
      data: config.data,
    };
  }, [config.data, config.isLoading]);
  return (
    <SearchesHandler.Provider value={value}>
      {children}
    </SearchesHandler.Provider>
  );
};

export const useSearchesHandler = (): SearchesHandlerConfig =>
  useContext(SearchesHandler) as SearchesHandlerContextValue;
