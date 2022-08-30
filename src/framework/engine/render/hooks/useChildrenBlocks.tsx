import { ExtensionComponent } from '$engine/extension';
import { ExtensionBlock } from '$engine/typings';
import React, { memo, useMemo } from 'react';
import { useRuntime } from '../Render';

const buildComponentProps = (
  block: ExtensionBlock,
  extension: ExtensionBlock
) => {
  if (block && block.componentId) {
    const blockExtension = extension;
    if (blockExtension && blockExtension.componentId) {
      const blockType = blockExtension.componentId.split('#')[0] ?? 'default';
      const blockName = blockExtension.componentId.split('#')[1] ?? 'default';
      const blockProps = extension.props;

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
        key: `${blockType}-${blockName}`,
        schemaDocument,
      };

      return ComponentProps;
    } else {
      throw new Error(`${block.componentId} not found in Extension`);
    }
  }
};

const MemoExtensionComponent = memo(ExtensionComponent);

const useChildrenBlocks = (blocks: ExtensionBlock[]) => {
  const {
    rootPath: { extensions },
  } = useRuntime();

  const blockComponents = useMemo(
    () =>
      blocks.map((block) => {
        const ComponentProps = buildComponentProps(
          block,
          extensions[block.componentId]
        );
        return React.createElement(MemoExtensionComponent, {
          ...ComponentProps,
        });
      }),
    [blocks, extensions]
  );

  return blockComponents;
};

export { useChildrenBlocks };
