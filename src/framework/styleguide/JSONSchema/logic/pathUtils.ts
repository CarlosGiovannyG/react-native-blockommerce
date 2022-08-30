export const JSONSchemaRootPointer = '#';

export const concatPagePointer = (path: string, newNode: string): string => {
  return path + '/' + newNode;
};

export const getSplitPointer = (pointer: string): string[] => {
  const split = pointer.split('/');

  // Removes the root pointer
  if (split[0] === JSONSchemaRootPointer) {
    split.shift();
  }

  return split;
};
