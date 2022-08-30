/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FC, useCallback } from 'react';
import BlockComponent from '../block/Block';
import { Image, View } from 'react-native';
import { NavigatorType, Route } from '../typings';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '$styleguide/theme';
import useSession from '$commerce/session/use-session';
import Layout from '$styleguide/components/Layout';
import { useCart } from '$commerce/cart';
import useSlotBlock from './hooks/useSlotBlock';
import { open } from 'fs';

const getNavigator = (compare: string) => {
  switch (compare) {
    case NavigatorType.tab:
      return createBottomTabNavigator();
    case NavigatorType.drawer:
      return createDrawerNavigator();
    case NavigatorType.stack:
      return createStackNavigator();
    default:
      return createStackNavigator();
  }
};

interface HeaderComponentExtensionProps {
  blockName: string;
}
interface IconProps {
  color: string;
  name: string;
  size: number;
}

const HeaderTitleExtension: FC<HeaderComponentExtensionProps> = ({
  blockName,
}) => {
  const headerBlockTitle = useSlotBlock(blockName);
  return headerBlockTitle;
};

const HeaderLeftExtension: FC<HeaderComponentExtensionProps> = ({
  blockName,
}) => {
  const headerBlockLeft = useSlotBlock(blockName);
  return headerBlockLeft;
};
const HeaderRightExtension: FC<HeaderComponentExtensionProps> = ({
  blockName,
}) => {
  const headerBlockRight = useSlotBlock(blockName);
  return headerBlockRight;
};
const TabBarBlockIcon: FC<HeaderComponentExtensionProps> = ({ blockName }) => {
  const iconBlock = useSlotBlock(blockName);
  return iconBlock;
};

const TabBarIcon: FC<IconProps> = ({ color, name, size }) => {
  const tabBarIcon = <Icon name={name} size={size} color={color} />;

  return tabBarIcon;
};

const DrawerContent: FC<any> = (props) => {
  const DrawerCustomItem = useSlotBlock(props.blockName);
  return (
    <DrawerContentScrollView {...props}>
      {DrawerCustomItem}
    </DrawerContentScrollView>
  );
};

const buildScreens = ({ screens, rootType }: any) => {
  const Root = getNavigator(rootType);
  const screenKeys = Object.keys(screens);
  const screenComponents = screenKeys.map((screenName: string) => {
    const {
      theme: { palette },
    } = useTheme();
    const { isSignedIn } = useSession();
    const { data: cartData } = useCart();

    const getOptions = useCallback(() => {
      let options = {
        ...screens[screenName].options,
        headerStyle: {
          backgroundColor: screens[screenName].options?.headerStyle
            ?.backgroundColor
            ? screens[screenName].options?.headerStyle?.backgroundColor
            : palette.primary[palette.type],
        },
      };

      if (options.cartBadge) {
        options = {
          ...options,
          tabBarBadge:
            cartData?.cart?.items?.length >= 1
              ? cartData?.cart?.items?.length
              : undefined,
          tabBarBadgeStyle: {
            backgroundColor: palette.primary[palette.type],
          },
        };
      }
      if (typeof options.headerTitleBlock === 'string') {
        options = {
          ...options,
          headerTitle: () => (
            <HeaderTitleExtension blockName={options.headerTitleBlock} />
          ),
        };
      }

      if (typeof options.headerLeftBlock === 'string') {
        options = {
          ...options,
          headerLeft: () => (
            <HeaderLeftExtension blockName={options.headerLeftBlock} />
          ),
        };
      }

      if (typeof options.headerRightBlock === 'string') {
        options = {
          ...options,
          headerRight: () => (
            <HeaderRightExtension blockName={options.headerRightBlock} />
          ),
        };
      }
      return options;
    }, [
      cartData?.cart?.items?.length,
      palette.primary,
      palette.type,
      screenName,
    ]);

    const options = getOptions();
    const listener = {
      tabPress: (e: any) => {
        // Prevent default action
        e.preventDefault();
      },
    };

    if (screens[screenName].type !== NavigatorType.component) {
      const ChildrenStack = useCallback(() => {
        const {
          theme: { palette },
        } = useTheme();
        const Children = getNavigator(screens[screenName].type);
        const childrenScreens = buildScreens(screens[screenName]);

        const renderTabIcon = (route, size, color) => {
          if (screens[screenName].screens[route.name].options.iconName) {
            if (
              screens[screenName].screens[route.name].options.iconType ===
              'block'
            ) {
              return (
                <TabBarBlockIcon
                  blockName={
                    screens[screenName].screens[route.name].options.iconName
                  }
                />
              );
            } else {
              return (
                <TabBarIcon
                  name={
                    screens[screenName].screens[route.name].options.iconName
                  }
                  size={size}
                  color={color}
                />
              );
            }
          } else if (screens[screenName].screens[route.name].options.imageUrl) {
            return (
              <Image
                source={{
                  uri: screens[screenName].screens[route.name].options.imageUrl,
                }}
                style={{ width: 20, height: 20 }}
              />
            );
          }
        };

        const navigatorTypeOptions = (type: any) => {
          switch (type) {
            case NavigatorType.tab:
              return ({ route }) => ({
                ...screens[screenName].options,
                tabBarActiveTintColor: palette.primary[palette.type],
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ focused, color, size }) => {
                  return renderTabIcon(route, size, color);
                },
              });
            case NavigatorType.drawer:
              return { ...screens[screenName].options };

            case NavigatorType.stack:
              return {};

            default:
              return {};
          }
        };

        let NavigatorProps: any = {
          initialRouteName: screens[screenName].initialRouteName,
        };

        if (typeof options.drawerContent === 'string') {
          NavigatorProps = {
            ...NavigatorProps,
            drawerContent: (props) => (
              <DrawerContent {...props} blockName={options.drawerContent} />
            ),
          };
        }

        const screenOptions = navigatorTypeOptions(screens[screenName].type);

        return (
          <Children.Navigator screenOptions={screenOptions} {...NavigatorProps}>
            {childrenScreens}
          </Children.Navigator>
        );
      }, [screenName]);

      if (screens[screenName].unmountIfIsAuthenticated && isSignedIn) return;

      return (
        <Root.Screen
          options={options}
          listeners={screens[screenName]?.options.listeners && listener}
          key={screenName}
          name={screenName}
          component={ChildrenStack}
        />
      );
    }

    return (
      <Root.Screen
        options={options}
        listeners={screens[screenName]?.options.listeners && listener}
        key={screenName}
        name={screenName}
      >
        {(props) => (
          <View style={{ flex: 1 }}>
            <BlockComponent id={`store.${screenName}`} navigation={props} />
          </View>
        )}
      </Root.Screen>
    );
  });
  return screenComponents;
};

const getNavigatorLinkingConfig = ({ screens }: any) => {
  const screenKeys = Object.keys(screens);
  const screenComponents = screenKeys.reduce(
    (accum, currentScreenName: string) => {
      if (screens[currentScreenName].type !== NavigatorType.component) {
        const childrenScreens = getNavigatorLinkingConfig(
          screens[currentScreenName]
        );
        accum = {
          ...accum,
          [currentScreenName]: {
            path: screens[currentScreenName].path,
            exact: screens[currentScreenName].exact,
            screens: {
              ...childrenScreens,
            },
          },
        };
      } else {
        accum = {
          ...accum,
          [currentScreenName]:
            screens[currentScreenName].path ?? currentScreenName,
        };
      }

      return accum;
    },
    {} as any
  );

  return screenComponents;
};

export function buildNavigation(navigation: Route) {
  const Root = getNavigator(navigation.rootType);
  const RootScreens = buildScreens(navigation);
  const config = getNavigatorLinkingConfig(navigation);

  const linking = {
    prefixes: navigation.prefixes,
    config: {
      screens: config,
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Layout>
        <Root.Navigator initialRouteName={navigation.initialRouteName}>
          {RootScreens}
        </Root.Navigator>
      </Layout>
    </NavigationContainer>
  );
}
