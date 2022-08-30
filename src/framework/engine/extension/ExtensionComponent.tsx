import React, { FC, memo } from 'react';
import { BasicJSONSchemaType } from '$styleguide';
import { ObjectMapper } from '$styleguide/components/Object';
import ExtensionHandler from './ExtensionHandler';
import isEqual from 'lodash.isequal';

type ExtensionComponentProps = {
  schemaDocument?: BasicJSONSchemaType;
};

const ExtensionComponent: FC<ExtensionComponentProps> = memo(
  ({ children, schemaDocument }) => {
    if (!schemaDocument) {
      console.error('No MasterData Schema found');
      return null;
    }

    if (!('properties' in schemaDocument)) {
      console.error(
        'The MasterData Schema fields should be inside "properties". Example: { "schema": { "type": "object", "properties": { "foo": { "type": "string" } }}}'
      );
      console.error('Received:', schemaDocument);
      return null;
    }

    if (!('type' in schemaDocument)) {
      console.error(
        'The MasterData Schema is missing the required property `"type": "object"`. Example: { "schema": { "type": "object", "properties": { "foo": { "type": "string" } }}}'
      );
      console.error('Received:', schemaDocument);
      return null;
    }

    if (!React.Children.count(children)) {
      return (
        <ExtensionHandler schema={schemaDocument}>
          <ObjectMapper pointer="#" />
        </ExtensionHandler>
      );
    }

    return (
      <ExtensionHandler schema={schemaDocument}>{children}</ExtensionHandler>
    );
  },
  (prevProps, nextProps) =>
    isEqual(prevProps.schemaDocument, nextProps.schemaDocument)
);

export default ExtensionComponent;
