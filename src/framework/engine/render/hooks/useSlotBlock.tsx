import React, { useMemo } from 'react';
import { ExtensionComponent } from '$engine/extension';
import { useRuntime } from '../Render';
import { buildBlock } from '$engine/utils/buildBlock';
import { Text } from 'react-native';

const useSlotBlock = (blockExtensionName: string) => {
  const {
    rootPath: { extensions },
  } = useRuntime();

  const blockComponent = useMemo(() => {
    if (!blockExtensionName) return null;
    const block = buildBlock(extensions, blockExtensionName);
    if (block && block.componentId) {
      const blockExtension = extensions[block.componentId];
      if (blockExtension && blockExtension.componentId) {
        const blockType = blockExtension.componentId.split('#')[0] ?? 'default';
        const blockName = blockExtension.componentId.split('#')[1] ?? 'default';
        const blockProps = extensions[blockExtensionName].props;

        const schemaDocument = {
          title: 'BlockComponent',
          type: 'object',
          properties: {
            [blockName]: {
              type: blockType,
              ...blockProps,
            },
          },
        };

        const ComponentProps = {
          key: blockExtensionName,
          cid: blockExtensionName,
          schemaDocument,
        };

        return React.createElement(ExtensionComponent, ComponentProps);
      } else {
        throw new Error(`${blockExtensionName} not found in Extension`);
      }
    }
    return <Text>Error building slot block: {blockExtensionName} </Text>;
  }, [blockExtensionName, extensions]);

  return blockComponent;
};

export default useSlotBlock;
