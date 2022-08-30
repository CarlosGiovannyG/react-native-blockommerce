/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ExtensionComponent } from '$engine/extension';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC, Fragment } from 'react';
import { Text, View } from 'react-native';

export const AddressMoreOptionsComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['textStyles'], subSchema.blockClass);

  return (
    <ExtensionComponent
      schemaDocument={{
        title: 'BlockComponent',
        type: 'object',
        properties: {
          'my-address-options': {
            type: 'collapse',
            overlay: subSchema?.collapseProps?.overlay,
            summary: subSchema?.collapseProps?.summary,
            details: subSchema?.collapseProps?.details,
            activeOverlay: subSchema?.collapseProps?.activeOverlay,
            blockClass: subSchema?.collapseProps?.blockClass,
          },
        },
      }}
    />
  );
};
