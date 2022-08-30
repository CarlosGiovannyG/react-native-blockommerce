import React, { useMemo } from 'react';
import { createContext, FC, useContext } from 'react';

export type FilterNavigatorContextValue = FilterNavigatorData;

const FilterNavigatorContext = createContext<FilterNavigatorContextValue | {}>(
  {}
);

export interface FilterNavigatorProps {
  data: FilterNavigatorData;
}

export type FilterNavigatorData = {
  facets: any[];
  selectedFacets: any[];
  selectFacetHandler(args: any): void;
};

export const FilterNavigatorContextProvider: FC<FilterNavigatorProps> = ({
  data,
  children,
}) => {
  const value = useMemo(() => {
    return {
      data: {
        facets: data.facets,
        selectedFacets: data.selectedFacets,
        selectFacetHandler: data.selectFacetHandler,
      },
    };
  }, [data]);
  return (
    <FilterNavigatorContext.Provider value={value}>
      {children}
    </FilterNavigatorContext.Provider>
  );
};

export function useFilterNavigator() {
  return useContext(FilterNavigatorContext) as FilterNavigatorProps;
}
