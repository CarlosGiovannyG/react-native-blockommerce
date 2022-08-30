import { DeepPartial, ExtensionBlock, File } from '../typings';

export const buildBlock = (
  file: Record<string, DeepPartial<File>>,
  block: string
) => {
  const app = block.split('#')[0];
  const blocks: Partial<ExtensionBlock>[] = [];

  if (file[block].hasOwnProperty('blocks')) {
    file[block].blocks?.map((children) => {
      blocks.push({
        componentId: children,
        children: false,
      });
    });
  }

  if (file[block].hasOwnProperty('children')) {
    file[block].children?.map((children) => {
      blocks.push({
        componentId: children,
        children: true,
      });
    });
  }

  const blocksAux: DeepPartial<ExtensionBlock> = {
    componentId: block,
    props: {
      ...(file[block] && file[block].props),
      blocks,
    },
    component: `${app}/${block}`,
  };
  return blocksAux;
};
