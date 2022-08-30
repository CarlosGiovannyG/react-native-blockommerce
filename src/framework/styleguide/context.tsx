import React, { FC, createContext, useContext, useMemo } from 'react';

import { ContextProps, JSONContextValues } from './types';

import { getIdSchemaPairs, resolveRefs } from './JSONSchema/logic';

export const InternalPageContext = createContext<JSONContextValues | null>(
  null
);

export function usePageContext(): JSONContextValues {
  return useContext(InternalPageContext) as JSONContextValues;
}

export const Context: FC<ContextProps> = (props) => {
  const idMap = useMemo(() => getIdSchemaPairs(props.schema), [props.schema]);

  const resolvedSchemaRefs = useMemo(
    () => resolveRefs(props.schema, idMap, []),
    [props.schema, idMap]
  );

  const formContext: JSONContextValues = useMemo(() => {
    return {
      schema: resolvedSchemaRefs,
      idMap: idMap,
    };
  }, [resolvedSchemaRefs, idMap]);

  return (
    <InternalPageContext.Provider value={formContext}>
      {props.children}
    </InternalPageContext.Provider>
  );
};
