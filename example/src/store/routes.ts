import { NavigatorType, Route } from '$engine/typings';

const defaultConfig = {
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: '#E2001A',
  },
};

const headerTitleDefaultConfig = {
  headerTitleBlock: 'image#logo',
};

const routes: Route = {
  rootType: NavigatorType.stack,
  initialRouteName: 'walkthrough',
  prefixes: ['https://blokommerce.io', 'blokommerce://'],
  screens: {
    'auth': {
      initialRouteName: 'walkthrough',
      unmountIfIsAuthenticated: true,
      options: {
        ...defaultConfig,
        ...headerTitleDefaultConfig,
      },
      type: NavigatorType.stack,
      screens: {
        'walkthrough': {
          path: 'walkthrough', // auth/login
          options: {
            headerShown: false,
            ...defaultConfig,
            ...headerTitleDefaultConfig,
          },
          type: NavigatorType.component,
        },
        'recovery-password': {
          path: '/auth/password/validate/recovery',
          options: {
             headerShown: false,
            ...defaultConfig,
          },
          type: NavigatorType.component,
        },
        /**
         *  Flujo de inicio de sesion BEGIN
         * */
        'sign-in': {
          path: 'auth/sign-in/:email',
          options: {
            headerShown: false,
          },
          type: NavigatorType.component,
        },
        'validate-recovery-password': {
          path: 'auth/password/recovery/:email',
          options: {
            headerShown: false,
          },
          type: NavigatorType.component,
        },
        /**
         *  Flujo de inicio de sesion END
         * */
        /**
         *  Flujo de registro BEGIN
         * */
        'verify-email': {
          path: 'auth/email/validate',
          type: NavigatorType.component,
          options: {
            headerShown: false,
          },
        },
        'password-entry': {
          path: 'auth/password/validate',
          type: NavigatorType.component,
          options: {
            headerShown: false,
            ...defaultConfig,
          },
        },
        'validate-otp-code': {
          path: 'auth/otp/validate/:email',
          options: {
            headerShown: false,
          },
          type: NavigatorType.component,
        },
        'sign-up-profile-step': {
          path: 'auth/sign-up/profile',
          options: {
            headerShown: false,
          },
          type: NavigatorType.component,
        },
        'sign-up-code-validation-step': {
          path: 'auth/sign-up/code-validation/:email',
          options: {
            headerShown: false,
          },
          type: NavigatorType.component,
        },
        'sign-up-password-step': {
          path: 'auth/sign-up/password',
          options: {
            headerShown: false,
          },
          type: NavigatorType.component,
        },
      },
    },
    /**
     *  Flujo de registro END
     * */
    'drawer-stack': {
      initialRouteName: 'feed',
      options: {
        ...defaultConfig,
        headerTitleBlock: 'flex-layout.col#header-row-col',
        headerRightBlock: 'image#logo_flame',
        drawerPosition:'right',
        drawerType: 'front',
        drawerContent: 'custom.drawer-button',
        drawerStyle: {
          right: 0,
        },
      },
      type: NavigatorType.drawer,
      screens: {
        /**
         *  Flujo PRINCIPAL BEGIN
         * */

        'main-stack': {
          initialRouteName: 'feed',
          options: {
            headerShown: false,
            ...defaultConfig,
          },
          type: NavigatorType.tab,
          screens: {
            feed: {
              path: 'feed',
              options: {
                headerShown: false,
                iconType: 'block',
                iconName: 'image#home-tab-bar',
                //imageUrl: 'https://vtexlatam.vteximg.com.br/arquivos/ids/157354',
              },
              type: NavigatorType.component,
            },
            'express-shipping': {
              path: 'express-shipping',
              options: {
                title: 'Envío Express',
                headerShown: false,
                iconType: 'block',
                iconName: 'image#express-tab-bar',
                //imageUrl: 'https://qaolimpica.vteximg.com.br/arquivos/envioExpress.png',

              },
              type: NavigatorType.component,
            },
            cart: {
              path: 'cart',
              options: {
                title: '',
                headerShown: false,
                cartBadge: true,
                iconType: 'block',
                iconName: 'image#cart-tab-bar',
              //  imageUrl: 'https://vtexlatam.vteximg.com.br/arquivos/ids/157353',
              },
              type: NavigatorType.component,
            },
            'my-orders': {
              path: 'my-orders',
              options: {
                title: 'Mis Pedidos',
                headerShown: false,
                listeners: true,
                iconType: 'block',
                iconName: 'custom.order-tab-bar-button',
               // imageUrl: 'https://vtexlatam.vteximg.com.br/arquivos/ids/157356',
              },
              type: NavigatorType.component,
            },
            'menu-drawer': {
              path: 'menu-drawer',
              options: {
                title: 'Menú',
                headerShown: false,
                listeners: true,
                iconType: 'block',
                iconName: 'custom.open-drawer-button',
               // imageUrl: 'https://vtexlatam.vteximg.com.br/arquivos/ids/157355',
                //imageUrl: 'https://vtexlatam.vteximg.com.br/arquivos/ids/157353',
              },
              type: NavigatorType.component,
            },
          },
        },
        /**
         *  Flujo PRINCIPAL END
         * */
      },
    },
    /**
     *  Flujo SEGUNDARIO BEGIN
     * */
    'secondary-stack': {
      initialRouteName: 'search',
      options: {
        ...defaultConfig,

        headerShown: false,
      },
      type: NavigatorType.stack,
      screens: {
        search: {
          path: 'search/:department?/:category?/:subCategory?/:brand?',
          type: NavigatorType.component,
          options: {
            title: 'Lista de productos',
            ...defaultConfig,
          },
        },
        searchTerm: {
          path: 'product:',
          type: NavigatorType.component,
          options: {
            title: 'Buscar',
            ...defaultConfig,
            headerShown: false,
          },
        },
        product: {
          path: ':productId/p',
          type: NavigatorType.component,
          options: {
            title: 'Producto',
            ...defaultConfig,
          },
        },
      },
    },
    /**
     *  Flujo PRINCIPAL END
     * */
    /**
     *  PROFILE STACK BEGIN
     * */
    'profile-stack': {
      initialRouteName: 'wishlist',
      options: {
        ...defaultConfig,
        headerShown: false,
      },
      type: NavigatorType.stack,
      screens: {
        // 'my-orders': {
        //   path: 'profile/orders',
        //   type: NavigatorType.component,
        //   options: {
        //     title: 'Mis pedidos',
        //     ...defaultConfig,
        //   },
        // },
        'order-summary': {
          path: 'profile/order/:orderId',
          type: NavigatorType.component,
          options: {
            title: 'Mi pedido',
            ...defaultConfig,
          },
        },
        'wishlist': {
          path: 'profile/wishlist',
          type: NavigatorType.component,
          options: {
            title: 'Mis Listas',
            ...defaultConfig,
          },
        },
        'wishlistDetail': {
          path: 'profile/wishlist/detail/:id',
          type: NavigatorType.component,
          options: {
            title: 'Mis Lista',
            ...defaultConfig,
            headerBackTitleVisible: false,
          },
        },
        'user-address': {
          path: 'user-address',
          type: NavigatorType.component,
          options: {
            title: 'Mis Direcciones',
            ...defaultConfig,
          },
        },
        'add-addresses': {
          path: 'add-addresses',
          type: NavigatorType.component,
          options: {
            title: 'Mis Direcciones',
            ...defaultConfig,
          },
        },
        'my-addresses': {
          path: 'my-addresses',
          type: NavigatorType.component,
          options: {
            title: 'Mis Direcciones',
            ...defaultConfig,
          },
        },
        'update-profile': {
          path: 'profile/update',
          type: NavigatorType.component,
          options: {
            title: 'Actualizar perfil',
            ...defaultConfig,
          },
        },
        'my-payments': {
          path: 'payments',
          type: NavigatorType.component,
          options: {
            title: 'Mis medios de pago',
            ...defaultConfig,
          },
        },
        'services-centers': {
          path: 'services/centers',
          options: {
            headerShown: false,
          },
          type: NavigatorType.component,
        },
        'profile-points': {
          path: 'profile/points',
          type: NavigatorType.component,
          options: {
            headerShown: false,
            ...defaultConfig,
          },
        },
        /**
         *  Flujo de registro END
         * */
      },
    },
    /**
     *  PROFILE STACK END
     * */
  },
};

export default routes;
