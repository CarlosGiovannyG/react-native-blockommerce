import { GenericInputParameters, BasicInputReturnType, UITypes } from './types';
import { JSONSubSchemaInfo } from '../JSONSchema';
import { useAnnotatedSchemaFromPointer } from '../JSONSchema/path-handler';
import { getObjectFromPage } from '../JSONSchema/logic';
import { JSONContextValues } from '..';
import { usePageContext } from '../context';

export const getGenericInput = (
  formContext: JSONContextValues,
  subSchemaInfo: JSONSubSchemaInfo,
  pointer: string
): BasicInputReturnType => {
  const { JSONSchema, isRequired, objectName } = subSchemaInfo;

  return {
    name: objectName,
    pointer: pointer,
    isRequired: isRequired,
    formContext: formContext,
    type: UITypes.generic,
    getObject: () => JSONSchema,
  };
};

export const useGenericInput: GenericInputParameters = (pointer: string) => {
  const formContext = usePageContext();
  const data = getObjectFromPage(
    formContext.schema,
    /*formContext.getValues()*/ {}
  );
  const subSchemaInfo = useAnnotatedSchemaFromPointer(pointer, data);
  return getGenericInput(formContext, subSchemaInfo, pointer);
};
