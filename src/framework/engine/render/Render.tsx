import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import { DeepPartial, ExtensionBlock, RenderContextValue } from '../typings';
import { buildBlock } from '../utils/buildBlock';
import { FrameworkProps } from '../../';

import { buildNavigation } from './BuildNavigation';

const RenderContext = createContext<any>({
  rootPath: undefined,
});

/**
 * Blocks vendria siendo File, ese archivo
 *  */
const Render: FC<FrameworkProps> = ({ blocks, routes, engineIsLoading }) => {
  const extensions: Record<string, DeepPartial<ExtensionBlock>> = useMemo(
    () =>
      Object.keys(blocks).reduce((accumValue, current: string) => {
        // Extension block es la construccion del bloque usando la funcion buildBlock
        const block: DeepPartial<ExtensionBlock> = buildBlock(blocks, current);
        return {
          ...accumValue,
          [block.componentId ?? '']: block,
        };
      }, {}),
    [blocks]
  );
  /**
   * - Pages seria el archivo entero con todo el JSON de el ecommerce
   * - Extension
   *  */

  const root = useMemo(
    () => ({
      pages: blocks,
      extensions: extensions,
      routes: routes,
    }),
    [blocks, extensions, routes]
  );

  const value = useMemo(
    () => ({
      rootPath: root,
    }),
    [root]
  );

  const render = useCallback(() => {
    const Root = buildNavigation(root.routes);
    if (engineIsLoading) return null;
    return <>{Root}</>;
  }, [engineIsLoading, root.routes]);

  return (
    <RenderContext.Provider value={value}>{render()}</RenderContext.Provider>
  );
};

export const useRuntime = () => {
  const context = useContext(RenderContext);

  if (context === undefined) {
    throw new Error('useRuntime must be use within a RenderProvider');
  }

  return context as RenderContextValue;
};

export default Render;
