import { JSONSchemaType, JSONSubSchemaInfo } from './types';
import {
  getObjectFromPage,
  concatPagePointer,
  getAnnotatedSchemaFromPointer,
  getSplitPointer,
} from './logic';
import { usePageContext } from '../context';
const useAnnotatedSchemaFromPointer = (
  path: string,
  data: JSONSchemaType
): JSONSubSchemaInfo => {
  return getAnnotatedSchemaFromPointer(path, data, usePageContext());
};

const useObjectFromPage = (data: JSONSchemaType): JSONSchemaType => {
  return getObjectFromPage(usePageContext().schema, data);
};

const getDataFromPointer = (
  pointer: string,
  data: JSONSchemaType
): undefined | string => {
  const splitPointer = getSplitPointer(pointer);

  let insideProperties = false;

  return splitPointer
    .reduce(
      (currentContext, node: string) => {
        if (node === 'properties' && !insideProperties) {
          insideProperties = true;
          return { ...currentContext, insideProperties: true };
        }
        insideProperties = false;

        return {
          currentData: currentContext.currentData
            ? currentContext.currentData[node]
            : undefined,
          insideProperties: true,
        };
      },
      { currentData: data, insideProperties: false }
    )
    .currentData?.toString();
};

export {
  useObjectFromPage,
  concatPagePointer,
  useAnnotatedSchemaFromPointer,
  getDataFromPointer,
};
