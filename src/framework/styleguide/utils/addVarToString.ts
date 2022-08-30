/* eslint-disable @typescript-eslint/no-unsafe-return */
const keysRegEx = /\{(.*?)\}/gm;

export const addVarToStringFromObject = (
  match: string,
  item: Record<string, any>
) => item[match.replace('{', '').replace('}', '')];

export const replaceKeysForVar = (value: string, item: Record<string, any>) =>
  value.replace(keysRegEx, (match: string) =>
    addVarToStringFromObject(match, item)
  );
