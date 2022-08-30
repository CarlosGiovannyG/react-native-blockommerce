export interface ExtensionBlock {
  componentId: string;
  props: {
    blocks: Partial<ExtensionBlock>[];
  };
  component: string;
  children: boolean;
}

export enum NavigatorType {
  stack = 'Stack',
  drawer = 'Drawer',
  tab = 'Tab',
  component = 'Component',
}

export interface ScreenOptions {
  [key: string]: any;
}

export interface ExtensionScreen {
  type: NavigatorType;
  path?: string;
  exact?: boolean;
  initialRouteName?: string;

  unmountIfIsAuthenticated?: boolean;
  options?: ScreenOptions;
  screens?: Record<string, ExtensionScreen>;
}

export interface Route {
  rootType: NavigatorType;
  initialRouteName: string;
  options?: ScreenOptions;
  prefixes: string[];
  screens: Record<string, ExtensionScreen>;
}

export interface Interface {
  component: string;
  contentSchema: {
    type: string;
    properties: {};
  };
}

export interface File {
  children: string[];
  props: {
    [key: string]: AnyType;
    blockClass: string;
  };
  blocks: string[];
}

export type RenderContextValue = {
  rootPath: any;
};

export type AnyType = string | number | boolean | string[] | object | undefined;

export type DeepPartial<T> = Partial<{ [P in keyof T]: DeepPartial<T[P]> }>;
