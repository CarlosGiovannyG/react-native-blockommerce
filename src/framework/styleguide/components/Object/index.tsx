import { useStyleguide } from '$styleguide/styleContext';
import React, { FC, Fragment, useMemo } from 'react';
import { useObject } from '../..';
import { BasicInputReturnType } from '../../hooks/types';
import { BaseInputProps } from '../../types/InputProps';
import { CustomComponentObject } from './CustomComponents';
import { SpecializedObject } from './SpecializedObject';

const RenderObj : FC<{
  obj: BasicInputReturnType
}> = ({obj}) => {
  return (
    <Fragment key={`${obj.type}${obj.pointer}`}>
      <SpecializedObject baseObject={obj} />
    </Fragment>
  );
};

const RenderCustomObj: FC<{
  obj: BasicInputReturnType
}> = ({obj}) => {
  const { CustomComponents } = useStyleguide()
  return (
    <Fragment key={`${obj.type}${obj.pointer}`}>
      <CustomComponentObject  baseObject={obj} customObjectMap={CustomComponents} />
    </Fragment>
  );
};

export const ObjectMapper: FC<BaseInputProps> = ({ pointer }) => {
  const methods = useObject({
    pointer,
  });

  const Components = useMemo(
    () =>
      methods.map((obj) => {
        if (obj.type.startsWith('custom.')) return <RenderCustomObj key={obj.type}  obj={obj} />;
        else return <RenderObj key={obj.type} obj={obj} />;
      }),
    [methods]
  );

  return <Fragment>{Components}</Fragment>;
};
