import { BasicInputReturnType } from '$styleguide/hooks/types';
import { CustomComponentsType } from '$styleguide/styleContext';
import React, { FC, useMemo } from 'react';


interface CustomComponentObjectProps {
  baseObject: BasicInputReturnType;
  customObjectMap: CustomComponentsType
}

export const CustomComponentObject: FC<CustomComponentObjectProps> = (
  props
) => {
  const ComponentObject = useMemo(
    () => props.customObjectMap[props.baseObject.type],
    [props.baseObject.type]
  );

  if (!ComponentObject)
    throw new Error(
      `El componente CUSTOM: "${props.baseObject.type}" No existe en el Styleguide`
    );

  return <ComponentObject inputObject={props.baseObject} />;
};
