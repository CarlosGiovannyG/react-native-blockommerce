/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  UseObjectProperties,
  UseObjectReturnType,
  BasicInputReturnType,
  UISchemaType,
} from './types';
import { JSONSubSchemaInfo, JSONSchemaType } from '../JSONSchema';
import {
  useAnnotatedSchemaFromPointer,
  concatPagePointer,
} from '../JSONSchema/path-handler';
import {
  getAnnotatedSchemaFromPointer,
  getObjectFromPage,
} from '../JSONSchema/logic';
import { getGenericInput } from './useGenericInput';
import { JSONContextValues } from '..';
import { usePageContext } from '../context';

function getFromGeneric(
  genericInput: BasicInputReturnType
): UseObjectReturnType {
  const currentObject = genericInput.getObject();
  const inputs: UseObjectReturnType = [];

  inputs.push({
    ...genericInput,
    type: currentObject.type,
  });

  return inputs;
}

// Outside of this function
function getChildProperties(
  pointer: string,
  UISchema: UISchemaType | undefined,
  formContext: JSONContextValues,
  data: JSONSchemaType
) {
  return (allInputs: UseObjectReturnType, key: string) => {
    const newUISchema =
      UISchema && UISchema.properties ? UISchema.properties[key] : undefined;

    const currentPointer = concatPagePointer(
      concatPagePointer(pointer, 'properties'),
      key
    );

    const currentPointerInfo = getAnnotatedSchemaFromPointer(
      currentPointer,
      data,
      formContext
    );

    const newInput = getStructure(
      formContext,
      currentPointerInfo,
      currentPointer,
      newUISchema,
      data
    );

    return allInputs.concat(newInput);
  };
}

function getStructure(
  formContext: JSONContextValues,
  pointerInfo: JSONSubSchemaInfo,
  pointer: string,
  UISchema: UISchemaType | undefined,
  data: JSONSchemaType
): UseObjectReturnType {
  const inputs: UseObjectReturnType = [];
  const { JSONSchema } = pointerInfo;

  const genericInput = getGenericInput(formContext, pointerInfo, pointer);

  if (JSONSchema.type === 'object') {
    const objKeys = Object.keys(JSONSchema.properties);
    const childInputs = objKeys.reduce(
      getChildProperties(pointer, UISchema, formContext, data),
      []
    );
    return childInputs;
  }

  if (!UISchema) {
    return inputs.concat(getFromGeneric(genericInput));
  }
  return inputs;
}

export const useObject: UseObjectProperties = (props) => {
  const formContext = usePageContext();
  const data = getObjectFromPage(formContext.schema, {});
  const childArray = getStructure(
    formContext,
    useAnnotatedSchemaFromPointer(props.pointer, data),
    props.pointer,
    props.UISchema,
    data
  );

  return childArray;
};
