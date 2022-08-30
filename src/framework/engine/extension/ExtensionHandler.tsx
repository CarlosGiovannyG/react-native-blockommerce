import React, { FC } from 'react';
import { JSONSchemaType } from '$styleguide';
import { Context } from '$styleguide/context';
const ExtensionHandler: FC<{
  schema: JSONSchemaType;
}> = (props) => {
  return <Context schema={props.schema}>{props.children}</Context>;
};

export default ExtensionHandler;
