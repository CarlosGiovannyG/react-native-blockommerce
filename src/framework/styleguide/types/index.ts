import React from 'react';

import { JSONSchemaType, IDSchemaPair } from '../JSONSchema';

export interface JSONContextValues {
  schema: JSONSchemaType;
  idMap: IDSchemaPair;
}

export type OnSubmitParameters = {
  data: JSONSchemaType;
  event: React.BaseSyntheticEvent | undefined;
  methods: JSONContextValues;
};
export type OnSubmitType = (props: OnSubmitParameters) => void | Promise<void>;

export type ContextProps = {
  submitFocusError?: boolean;
  onChange?: (data: JSONSchemaType) => void;
  onSubmit?: OnSubmitType;
  noNativeValidate?: boolean;
  schema: JSONSchemaType;
};
