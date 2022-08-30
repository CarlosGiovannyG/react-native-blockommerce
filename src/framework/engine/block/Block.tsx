/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ParamListBase, RouteProp } from '@react-navigation/native';
import React, { FC, Fragment, useMemo } from 'react';
import ExtensionComponent from '../extension/ExtensionComponent';
import { useRuntime } from '../render/Render';
import { buildBlock } from '$engine/utils/buildBlock';
import { Text } from 'react-native';

interface BlockComponentProps {
  id: string;
  navigation: {
    route: RouteProp<ParamListBase, string>;
  };
}

const BlockComponent: FC<BlockComponentProps> = (props) => {
  const { id } = props;

  const {
    rootPath: { extensions },
  } = useRuntime();

  const { props: blockProps } = extensions[id];

  const storeBlocksProps = useMemo(
    () =>
      blockProps?.blocks?.map((block) => extensions[block?.componentId ?? '']),
    [blockProps?.blocks, extensions]
  );

  const storeBlocks = useMemo(
    () =>
      storeBlocksProps?.map((storeBlock) => {
        const blockExtensionName = storeBlock.componentId
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
      }),
    [extensions, storeBlocksProps]
  );

  return <Fragment>{storeBlocks}</Fragment>;
};
export default BlockComponent;
