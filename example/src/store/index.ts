import interfaces from './interfaces';
import routes from './routes';

const blocks = {
  /**
   * APP Header Components BEGIN
   */

  // HOME FAKE INPUT BEGIN
  'flex-layout.row#fake-input': {
    children: ['flex-layout.row#fake-input-container'],
  },
  'flex-layout.row#fake-input-container': {
    children: ['store-link#fake-input'],
  },
  'store-link#fake-input': {
    props: {
      label: 'Buscar en Olimpica',
      url: '/searchTerm',
      displayMode: 'button',
      leftIcon: 'icon#lupa-de-busqueda',
      blockClass: 'fakeInputStyles',
    },
  },
  // HOME FAKE INPUT END
  /**
   * APP Header Components END
   */
  /**
   * APP IMAGES BEGIN
   */
  'image#logo': {
    props: {
      width: 200,
      uri: 'https://olimpica.vtexassets.com/arquivos/header_logo_olimpica.svg',
      resizeMode: 'contain',
    },
  },

  'image#logo_flame': {
    props: {
      width: 40,
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/logoOlimp.png',
      resizeMode: 'contain',
      blockClass: 'mr_2',
    },
  },
  'image#enabledelivery': {
    props: {
      uri: 'https://i.imgur.com/or6N1oK.png',
      width: 120,
      height: 102,
      resizeMode: 'stretch',
    },
  },

  'image#disabledelivery': {
    props: {
      uri: 'https://i.imgur.com/SUSYIGx.png',
      width: 120,
      height: 102,
      resizeMode: 'stretch',
    },
  },

  'image#enablepickup': {
    props: {
      uri: 'https://i.imgur.com/Ddyfb3o.png',
      width: 120,
      height: 102,
      resizeMode: 'stretch',
    },
  },

  'image#disablepickup': {
    props: {
      uri: 'https://i.imgur.com/whnZAnY.png',
      width: 120,
      height: 102,
      resizeMode: 'stretch',
    },
  },
  // TABAR ICONS
  'image#home-tab-bar': {
    props: {
      height: 30,
      width: 30,
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/home.png',
      resizeMode: 'contain',
      blockClass: '',
    },
  },
  'image#cart-tab-bar': {
    props: {
      height: 33,
      width: 34,
      uri: 'https://vtexlatam.vteximg.com.br/arquivos/ids/157353',
      resizeMode: 'contain',
      blockClass: 'iconTabBarCart',
    },
  },
  'image#express-tab-bar': {
    props: {
      height: 30,
      width: 30,
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/envioExpress.png',
      resizeMode: 'contain',
      blockClass: '',
    },
  },
  'image#my-orders-tab-bar': {
    props: {
      height: 30,
      width: 30,
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/orders.png',
      resizeMode: 'contain',
      blockClass: '',
    },
  },
  'image#my-orders-disabled-tab-bar': {
    props: {
      height: 30,
      width: 30,
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/orders_disabled.png',
      resizeMode: 'contain',
      blockClass: '',
    },
  },
  /**
   * APP IMAGES END
   */
   /**
   * APP CUSTOM COMPONENTS START
   */
   'custom.open-drawer-button': {
    props: {
      height: 30,
      width: 30,
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/menuTab.png',
      resizeMode: 'contain',
      blockClass: '',
    },
  },
  'custom.drawer-button': {
    props: {
      signoutComppnent:'signout#log-out',
      blockClass: '',
    },
  },
  'custom.order-tab-bar-button':{
    props:{
      enableBlock:'image#my-orders-tab-bar',
      disableBlock:'image#my-orders-disabled-tab-bar',
    }
  },
   /**
   * APP CUSTOM COMPONENTS END
   */
    /**
   * APP DRAWER COMPONENTS BEGIN
   */

     'signout#log-out': {
      children: ['flex-layout.row#container__text-and-icon'],
      props: {
        modalType: 'acceptCancel',
        redirectTo: '/auth/login',
        content: 'flex-layout.row#contentModalSignOut',
        mode: 'onChange',
        blockClass: '',
      },
    },

    'flex-layout.row#container__text-and-icon': {
      children: ['icon#power-outline', 'rich-text#log-out'],
      props: {
        blockClass: 'flexTextAlignItem;mr_2;mb_2'
      }
    },

    'flex-layout.row#contentModalSignOut': {
      children: ['rich-text#titleModalSignOut'],
      props: {
        blockClass: ''
      },
    },
    'rich-text#titleModalSignOut': {
      props: {
        text: 'Estás por cerrar sesión,\n¿Estás seguro?',
        blockClass: '',
      },
    },
    /**
   * APP DRAWER COMPONENTS END
   */
  /**
   * APP SHARED ICONS BEGINS
   */
  'icon#cart-product-list': {
    props: {
      lib: 'Ionicons',
      name: 'cart-outline',
      size: 30,
      color: '#FFFFFF',
    },
  },
  'icon#plus': {
    props: {
      lib: 'Ionicons',
      name: 'add-outline',
      size: 30,
      color: '#FFFFFF',
    },
  },
  'icon#add': {
    props: {
      lib: 'FontAwesome5',
      name: 'plus',
      width: 14.67,
      height: 10.67,
      variant: 'primary',
    },
  },
  'icon#minus': {
    props: {
      lib: 'FontAwesome5',
      name: 'minus',
      width: 14.67,
      height: 10.67,
      color: '#fff',
      variant: 'primary',
    },
  },
  'icon#lupa-de-busqueda': {
    props: {
     lib: 'Ionicons',
      name: 'search',
      size: 24,
      variant: 'secondary',
    },
  },
  'icon#alert': {
    props: {
      lib: 'Ionicons',
      name: 'alert-circle-outline',
      size: 25,
      color: 'red',
    },
  },
  'icon#cart-plus': {
    props: {
      lib: 'FontAwesome5',
      name: 'cart-plus',
      size: 16,
      color: '#0569B3',
    },
  },
  'icon#pass': {
    props: {
      lib: 'Ionicons',
      name: 'key-outline',
      size: 30,
      color: '#565656',
    },
  },
  'icon#selectIcon2': {
    props: {
      lib: 'Ionicons',
      name: 'caret-down',
      size: 11,
      color: '#565656',
    },
  },
  'icon#bagShopping': {
    props: {
      lib: 'FontAwesome5',
      name: 'shopping-bag',
      size: 16,
      color: '#0569B3',
    },
  },
  'icon#lists': {
    props: {
      lib: 'MaterialIcons',
      name: 'playlist-add',
      size: 16,
      color: '#565656',
    },
  },
  'icon#calendar': {
    props: {
      lib: 'MaterialCommunityIcons',
      name: 'calendar',
      size: 30,
      color: '#565656',
    },
  },
  'icon#history': {
    props: {
      lib: 'FontAwesome5',
      name: 'history',
      size: 24,
      color: '#666666',
} },
  'rich-text#log-out': {
    props: {
      text: 'Cerrar sesión',
      blockClass: 'itemLogOut',
    },
  },
  'icon#power-outline': {
    props: {
      lib: 'Ionicons',
      name: 'power-outline',
      size: 18,
    },
  },


  'icon#list-edit': {
    props: {
      modalType: 'custom',
      content: 'flex-layout.row#contentModalDelivery',
      lib: 'FontAwesome5',
      name: 'edit',
      size: 20,
      blockClass: 'selectedAddressIcon',
    },
  },
  'icon#close': {
    props: {
      lib: 'Ionicons',
      name: 'close-circle-sharp',
      size: 24,
      color: 'gray',
    },
  },

  /**
   * APP SHARED ICONS END
   */
  /**
   * APP SHARED MODALS BEGIN
   */

  'flex-layout.row#contentModalDelivery': {
    children: ['flex-layout.col#contentModalDelivery'],
    props: { blockClass: 'flexRowContentModalDeliveryPickup' },
  },

  'flex-layout.col#contentModalDelivery': {
    children: [
      'rich-text#titleModalDeliveryPickup',
      'toggle-group#toggleModaldelivery',
    ],
    props: { blockClass: 'flexColContentModalDeliveryPickup' },
  },

  'rich-text#titleModalDeliveryPickup': {
    props: {
      text: 'Elige un metodo de entrega',
      blockClass: 'titleActionSheet',
    },
  },

  'toggle-group#toggleModaldelivery': {
    children: [
      'flex-layout.row#deliverypickup',
      'my-account#profileModalDelivery',
      'flex-layout.row#buttonDeliverypickup',
    ],
    props: {
      blockClass: 'toggleGroupStylesModalDelivery',
    },
  },
  /////// My Account
  'my-account#profileModalDelivery': {
    children: ['flex-layout.row#profileModalDelivery'],
  },

  'flex-layout.row#profileModalDelivery': {
    children: ['flex-layout.col#profileModalDelivery'],
    props: {
      blockClass: 'EmailModalDeliveryContainer',
    },
  },

  'flex-layout.col#profileModalDelivery': {
    children: ['my-account.email#profileModalDelivery'],
    props: {
      blockClass: 'welcomeProfileTextContianer',
    },
  },
  'my-account.email#profileModalDelivery': {
    props: {
      blockClass: '',
    },
  },
  //////
  'flex-layout.row#buttonDeliverypickup': {
    children: ['toggle-button#toggleButtonDeliveryPickup'],
  },

  'toggle-button#toggleButtonDeliveryPickup': {
    props: {
      rules: ['isAuthenticated'],
      label: 'Aceptar',
      blockClass: 'ModalDeliveryPickupButton',
    },
  },
  'flex-layout.row#deliverypickup': {
    children: ['flex-layout.col#delivery', 'flex-layout.col#pickup'],
    props: {
      blockClass: 'colContainerDeliveryPickup',
    },
  },

  'flex-layout.col#delivery': {
    children: ['toggle-item#delivery'],
    props: { blockClass: 'colContainerDeliveryItem' },
  },

  'flex-layout.col#pickup': {
    children: ['toggle-item#pickup'],
    props: { blockClass: 'colContainerDeliveryItem' },
  },
  'toggle-item#delivery': {
    children: ['image#enabledelivery', 'image#disabledelivery'],
    props: {
      name: 'delivery',
      redirectTo: '/user-address',
    },
  },

  'toggle-item#pickup': {
    children: ['image#enablepickup', 'image#disablepickup'],
    props: {
      name: 'pickup',
      redirectTo: '/feed',
    },
  },

  'flex-layout.row#contentModalProceedCheckout': {
    children: ['flex-layout.col#contentModalProceedCheckout'],
    props: { blockClass: 'flexRowContentModalProceedCheckout' },
  },

  'flex-layout.col#contentModalProceedCheckout': {
    children: [
      'image#modalProceedCheckout',
      'rich-text#titleModalProceedCheckout',
    ],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },

  'image#modalProceedCheckout': {
    props: {
      uri: 'https://i.imgur.com/38TTWBq.png',
      width: 100,
      height: 100,
      blockClass: 'proceedChekoutImageStyles',
    },
  },

  'rich-text#titleModalProceedCheckout': {
    props: {
      text: 'Producto agregado al carrito!',
      blockClass: 'ModalProceedCheckouttext',
    },
  },
  /**
   * APP SHARED MODALS END
   */
  /**
   * Walkthrough BEGIN
   */
  'store.walkthrough': {
    blocks: ['flex-layout.row#wrapper'],
  },
  'flex-layout.row#wrapper': {
    children: ['flex-layout.col#wrapper'],
  },
  'flex-layout.col#wrapper': {
    children: ['image-background#wrapper'],
  },
  'image-background#wrapper': {
    children: ['flex-layout.row#form-wrapper'],
    props: {
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/background.png',
    },
  },
  'flex-layout.row#form-wrapper': {
    children: ['flex-layout.col#form-wrapper'],
  },
  'flex-layout.col#form-wrapper': {
    children: [
      'rich-text#welcome-title',
      'flex-layout.row#header-container-walkthrough',
      'flex-layout.row#container-buttons-walkthrough',
    ],
    props: {
      blockClass: 'wrapperLg;mt_4',
    },
  },
  'flex-layout.col#header-container-walkthrough': {
    children: ['rich-text#welcome-description'],
  },
  'flex-layout.row#header-container-walkthrough': {
    children: ['flex-layout.col#header-container-walkthrough'],
    props: {
      blockClass: 'mt_4;alignCenter',
    },
  },
  'rich-text#welcome-title': {
    props: {
      text: '¡HOLA!',
      textAlignment: 'center',
      blockClass: 'h1;textSecondary;homeHeader',
    },
  },
  'rich-text#welcome-description': {
    props: {
      text: 'Para ingresar primero debes\n acceder a tu cuenta',
      textAlignment: 'center',
      blockClass: 'body1;homeDescription',
    },
  },
  'flex-layout.row#container-buttons-walkthrough': {
    children: ['flex-layout.col#container-buttons-walkthrough']
  },

  'flex-layout.col#container-buttons-walkthrough': {
    children: [
      'store-link#sign-in',
      'store-link#sign-up',
      'flex-layout.row#container-separator',
      'store-link#sign-in-guest'
    ],
    props: {
      blockClass: 'containerButtons'
    }
  },
  'store-link#sign-in': {
    props: {
      label: 'Iniciar sesión',
      url: '/auth/email/validate',
      textAlignment: 'center',
      displayMode: 'button',
      blockClass: 'h3;primaryLink;textSecondary',
    },
  },
  'store-link#sign-up': {
    props: {
      label: 'Crear una cuenta',
      url: '/auth/sign-up/profile',
      textAlignment: 'center',
      displayMode: 'button',
      blockClass: 'h3;secondaryLink;textPrimary;textColorAuth',
    },
  },
  'flex-layout.row#container-separator': {
    children: ['flex-layout.col#container-separator'],
  },

  'flex-layout.col#container-separator': {
    children: ['rich-text#separator'],
    props:{
      blockClass: 'mt_1;mb_1'
    }
  },
  'rich-text#separator': {
    props: {
      text: '- ó -',
      textAlignment: 'center',
      blockClass: 'subtitle3;textPrimary;textColorAuth',
    },
  },
  'store-link#sign-in-guest': {
    props: {
      label: 'Ingresar como invitado',
      url: '/feed',
      textAlignment: 'center',
      displayMode: 'button',
      blockClass: 'textGuestLogin;secondaryLink;textPrimary;textColorAuth',
    },
  },
  /**
   * Walkthrough END
   */
  /**
   * Auth verify-email BEGIN
   */
  'store.verify-email': {
    blocks: ['flex-layout.row#wrapper-verify-email'],
  },
  'flex-layout.row#wrapper-verify-email': {
    children: ['flex-layout.col#wrapper-verify-email'],
  },
  'image-background#wrapper-verify-email': {
    children: ['flex-layout.row#wrapper-content-verify-email'],
    props: {
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/background.png',
    },
  },
  'flex-layout.row#wrapper-content-verify-email': {
    children: ['flex-layout.col#wrapper-content-verify-email'],
    props: {
      blockClass: 'mt_4',
    },
  },
  'flex-layout.col#wrapper-content-verify-email': {
    children: [
      'rich-text#verify-email',
      'rich-text#info-verify-email-subtitle',
      'store-form.otp#verify-email',
    ],
    props: {
      blockClass: 'wrapperLg;',
    },
  },
  'flex-layout.col#wrapper-verify-email': {
    children: ['image-background#wrapper-verify-email'],
  },
  'rich-text#verify-email': {
    props: {
      text: 'Iniciar sesión',
      textAlignment: 'center',
      blockClass: 'subtitle2',
    },
  },
  'store-form.otp#verify-email': {
    children: [
      'flex-layout.row#input-email',
      'flex-layout.row#verify-email-otp-code',
      'flex-layout.row#redirect-userAndPassword',
    ],
    props: {
      redirectTo: '/feed',
      mode: 'onChange',
      blockClass: 'center',
      schemaValidation: [
        {
          id: 'email',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'required',
              params: ['El correo electrónico es requerido'],
            },
            {
              type: 'email',
              params: ['Debe ser un email válido'],
            },
          ],
        },
      ],
    },
  },
  'flex-layout.row#input-email': {
    children: ['flex-layout.col#input-email'],
    props: {
      blockClass: 'ml_3;mr_3;mb_2',
    }
  },

  'flex-layout.col#input-email': {
    children: ['store-form.input#email'],
  },
  'store-form.input#email': {
    children: ['icon#pass', 'icon#alert'],
    props: {
      blockClass: 'inputDefault',
      name: 'email',
      placeholder: 'email',
      isRequired: true,
      isEmail: true,
      rightIcon: true,
    },
  },

  'flex-layout.row#redirect-userAndPassword': {
    children: ['flex-layout.col#redirect-userAndPassword'],
    props: {
      blockClass: 'mt_2',
    },
  },

  'flex-layout.col#redirect-userAndPassword': {
    children: ['store-form.button#redirect-to-sign-in-with-email-and-password'],
    props: {
      blockClass: 'wrapperLg;ml_3;mr_3;pl_1;pr_1',
    },
  },

  'store-form.button#redirect-to-sign-in-with-email-and-password': {
    props: {
      buttonText: 'Ingresa con usuario y contraseña',
      blockClass: 'buttonSecondary;buttonAuthStyle;buttonAuth',
      customProps: {
        onlyRedirect: true,
        redirectTo: '/auth/sign-in/{email}',
      },
    },
  },
  'flex-layout.row#verify-email-otp-code': {
    children: ['flex-layout.col#verify-email-otp-code'],
    props: {
      blockClass: '',
    },
  },

  'flex-layout.col#verify-email-otp-code': {
    children: ['store-form.button#verify-email-otp-code'],
    props: {
      blockClass: 'wrapperLg;ml_3;mr_3;pl_1;pr_1',
    },
  },

  'store-form.button#verify-email-otp-code': {
    props: {
      buttonText: 'Recibir clave de acceso',
      blockClass: 'buttonPrimary;textSecondary;buttonAuthStyle',
        customProps: {
        onlyRedirect: true,
        redirectTo: '/auth/sign-in/{email}',
      },
    },
  },

  'rich-text#info-verify-email-subtitle': {
    props: {
      text: 'Ingresa tu email para validar tu \n identidad',
      blockClass: 'body1;homeDescription;alignCenter;insertEmailDescription',
    },
  },
  'store-form.button#submit': {
    props: {
      buttonText: 'Iniciar sesión',
    },
  },
  /**
   * Auth verify-email END
   */
  /**
   * Auth validate-otp-code BEGIN
   */
  'store.validate-otp-code': {
    blocks: ['store-form.otp-code-validation#otp-validation'],
  },
  'store-form.otp-code-validation#otp-validation': {
    children: ['flex-layout.row#otp-validation-content'],
    props: {
      redirectTo: '/auth/sign-up/{email}/{accesskey}',
      skipLogic: true,
      modalType: 'continue',
      modalTitle: 'Enviado',
      modalDescription:
        'El enlace de verificación se ha enviado de manera exitosa a tu correo: {email} ',
      mode: 'onChange',
      schemaValidation: [
        {
          id: 'code',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'required',
              params: ['El código que ha ingresado es incorrecto'],
            },
            {
              type: 'min',
              params: [6, 'El código debe ser de 6 dígitos'],
            },
            {
              type: 'max',
              params: [6, 'El código debe ser de 6 dígitos'],
            },
            {
              type: 'matches',
              params: [/^[0-9]+$/, 'Debe ser solo dígitos'],
            },
          ],
        },
      ],
    },
  },
  'store-link#otp-validation-link': {
    props: {
      label: '**Reenviar código**',
      url: '/auth/email/validate',
      displayMode: 'anchor', //button or anchor default value anchor
      accessibilityLabel: 'This is a button',
      blockClass: 'alignCenter;w_100',
    },
  },
  'flex-layout.row#otp-validation-content': {
    children: ['flex-layout.col#otp-validation-content'],
  },
  'flex-layout.col#otp-validation-content': {
    children: ['image-background#otp-validation-content'],
  },
  'image-background#otp-validation-content': {
    children: ['flex-layout.row#otp-validation-container'],
    props: {
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/background.png',
    },
  },
  'flex-layout.row#otp-validation-container': {
    children: ['flex-layout.col#otp-validation-container'],
    props: {
      blockClass: 'mt_4',
    },
  },
  'flex-layout.col#otp-validation-container': {
    children: [
      'flex-layout.row#validation-input',
      'flex-layout.row#otp-validation-buttonWrapper',
    ],
    props: {
      blockClass: 'wrapperLg',
    },
  },
  'flex-layout.row#otp-validation-buttonWrapper': {
    children: ['flex-layout.col#otp-validation-buttonWrapper'],
  },
  'flex-layout.row#otp-validation-link': {
    children: ['store-link#otp-validation-link'],
    props: {
      blockClass: 'mb_4;wrapperLg;w_100',
    },
  },

  'flex-layout.col#otp-validation-buttonWrapper': {
    children: [
      'flex-layout.row#input-link',
      'flex-layout.row#otp-validation-link',
      'flex-layout.row#submit-otp-code-validation',
    ],
  },
  'flex-layout.row#submit-otp-code-validation': {
    children: ['flex-layout.col#submit-otp-code-validation'],
  },
  'flex-layout.col#submit-otp-code-validation': {
    children: ['store-link#submit-otp-code-validation'],
    props: {
      blockClass: 'wrapperLg',
    },
  },

  'flex-layout.row#validation-input': {
    children: ['flex-layout.col#validation-input'],
  },
  'flex-layout.row#otp-code-input': {
    children: ['rich-text#otp-code-input'],
    props: {
      blockClass: 'pt_2;mt_2',
    },
  },
  'flex-layout.col#validation-input': {
    children: [
      'rich-text#otp-code-validation',
      'flex-layout.row#otp-code-input',
    ],
    props: {
      blockClass: 'center',
    },
  },
  'flex-layout.row#input-link': {
    children: ['flex-layout.col#input-link'],
  },
  'flex-layout.col#input-link': {
    children: ['store-form.input#otp-code-input-send'],
  },
  'rich-text#otp-code-input': {
    props: {
      text: 'Hemos enviado un código\nde verificacion a tu correo.\n       Por favor ingresalo.',
      blockClass: 'body1;homeDescription',
    },
  },
  'store-form.input#otp-code-input-send': {
    children: ['icon#alert'],
    props: {
      name: 'código',
      placeholder: 'Ingresa código de acceso',
      rightIcon: true,
      showPassword: true,
      isRequired: true,
      isPassword: true,
      blockClass: 'inputDefault;inputPadding',
    },
  },
  'store-link#submit-otp-code-validation': {
    props: {
      label: 'Enviar',
      displayMode: 'button',
      blockClass: 'h2;primaryLink;textSecondary',
    },
  },
  'rich-text#otp-code-validation': {
    props: {
      text: 'Ingresa código\nde verificación',
      blockClass: 'subtitle2',
    },
  },

  /**
   * Auth validate-otp-code END
   */
  /**
   * Auth - sign-up-password-step END
   */
  'store.sign-up-password-step': {
    blocks: ['flex-layout.row#wrapper-sign-up-password-step'],
  },
  'flex-layout.row#wrapper-sign-up-password-step': {
    children: ['flex-layout.col#wrapper-sign-up-password-step'],
    props: { blockClass: 'center' },
  },
  'flex-layout.col#wrapper-sign-up-password-step': {
    children: ['image-background#wrapper-sign-up-password-step'],
  },
  'image-background#wrapper-sign-up-password-step': {
    children: ['flex-layout.row#form-sign-up-password-step'],
    props: {
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/background.png',
    },
  },
  'flex-layout.row#form-sign-up-password-step': {
    children: ['flex-layout.col#form-sign-up-password-step'],
  },
  'flex-layout.col#form-sign-up-password-step': {
    children: [
      'flex-layout.row#title-sign-up-password-step',
      'rich-text#sign-in-sign-up-password-step',
      'store-form.login#sign-up-password-step',
      'store-link#sign-up-password-step',
    ],
    props: {
      blockClass: 'wrapperSm',
    },
  },
  'flex-layout.row#title-sign-up-password-step': {
    children: ['flex-layout.col#title-sign-up-password-step'],
    props: {
      blockClass: 'mt_4;mb_4',
    },
  },
  'flex-layout.col#title-sign-up-password-step': {
    children: ['rich-text#sign-up-password-step'],
    props: {
      blockClass: 'center',
    },
  },
  'rich-text#sign-up-password-step': {
    props: {
      text: 'Iniciar sesión',
      textAlignment: 'center',
      blockClass: 'subtitle2',
    },
  },
  'rich-text#sign-in-sign-up-password-step': {
    props: {
      text: 'Ingresa con tu mail y contraseña',
      textAlignment: 'center',
      blockClass: 'body1;homeDescription',
    },
  },
  'store-form.login#sign-up-password-step': {
    children: ['store-form.input#sign-in-sign-up-password-step'],
    props: {
      redirectTo: '/feed',
      validationLogin: true,
      mode: 'onChange',
      schemaValidation: [
        {
          id: 'password',
          type: 'text',
          validationType: 'string',
        },
      ],
    },
  },
  'store-form.input#sign-in-sign-up-password-step': {
    children: ['icon#pass', 'icon#alert'],
    props: {
      placeholder: 'Ingresa contraseña',
      showPassword: true,
      isRequired: true,
      isPassword: true,
      pattern: '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
      rightIcon: true,
      blockClass: 'inputDefault;wrapperSm',
    },
  },
  'store-link#sign-up-password-step': {
    props: {
      label: 'Enviar',
      url: '/auth/sign-in',
      displayMode: 'button',
      blockClass: 'h2;primaryLink;textSecondary',
    },
  },

  /**
   * Main Stack - Search Term END
   *
   * Auth password-recovery BEGIN
   */
  'store.validate-recovery-password': {
    children: ['scroll-view#validate-recovery-password'],
  },
  'scroll-view#validate-recovery-password': {
    children: ['flex-layout.row#new-password'],
  },
  'flex-layout.row#new-password': {
    children: ['flex-layout.col#new-password'],
  },
  'flex-layout.col#new-password': {
    children: ['store-form.new-password#new-password'],
    props: {
      blockClass: 'center;wrapperSm;mt_3',
    },
  },
  'store-form.new-password#new-password': {
    children: [
      'rich-text#recovery-form-title',
      'flex-layout.row#form-description',
      'rich-text#text-new-password',
      'store-form.input#new-password-code',
      'store-form.input#new-password-renew',
      'store-form.input#confirm-password',
      'rich-text#password-rules',
      'store-link#recovery-form',
    ],
    props: {
      mode: 'onChange',
      redirectTo: '/auth/login',
      schemaValidation: [
        {
          id: 'code',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'required',
              params: ['El código que ha ingresado es incorrecto'],
            },
            {
              type: 'min',
              params: [6, 'El código debe ser de 6 dígitos'],
            },
            {
              type: 'max',
              params: [6, 'El código debe ser de 6 dígitos'],
            },
            {
              type: 'matches',
              params: [/^[0-9]+$/, 'Debe ser solo dígitos'],
            },
          ],
        },
        {
          id: 'new-password',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'min',
              params: [8, 'La contraseña no puede ser menor a 8 caracteres'],
            },
            {
              type: 'max',
              params: [50, 'La contraseña no puede ser mayor a 50 caracteres'],
            },
            {
              type: 'matches',
              params: [/^.*[0-9].*$/, 'Debe contener al menos un numero'],
            },
            {
              type: 'matches',
              params: [
                /^.*[a-z].*$/,
                'Debe contener al menos una letra minuscula',
              ],
            },
            {
              type: 'matches',
              params: [
                /^.*[A-Z].*$/,
                'Debe contener al menos una letra mayuscula',
              ],
            },
            {
              type: 'required',
              params: ['La contraseña es requerida'],
            },
          ],
        },
        {
          id: 'confirm-password',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'min',
              params: [8, 'La contraseña no puede ser menor a 8 caracteres'],
            },
            {
              type: 'max',
              params: [50, 'La contraseña no puede ser mayor a 50 caracteres'],
            },
            {
              type: 'matches',
              params: [/^.*[0-9].*$/, 'Debe contener al menos un numero'],
            },
            {
              type: 'matches',
              params: [
                /^.*[a-z].*$/,
                'Debe contener al menos una letra minuscula',
              ],
            },
            {
              type: 'matches',
              params: [
                /^.*[A-Z].*$/,
                'Debe contener al menos una letra mayuscula',
              ],
            },
            {
              type: 'required',
              params: ['La contraseña es requerida'],
            },
          ],
        },
      ],
    },
  },
  'flex-layout.row#form-description': {
    children: ['flex-layout.col#form-description'],
  },
  'flex-layout.col#form-description': {
    children: ['rich-text#recovery-form-description'],
    props: {
      blockClass: 'mt_3',
    },
  },
  'rich-text#password-rules': {
    props: {
      text: 'Debe contar con:\n\n- Mínimo de 8 caracteres.\n- 1 número.\n- 1 letra minúscula.\n- 1 letra mayúscula.\n',
    },
  },
  'store-form.input#new-password-code': {
    props: {
      name: 'code',
      placeholder: 'Ingresa el código de verificación',
      keyboardType: 'numeric',
      isRequired: true,
      isEmail: true,
      rightIcon: true,
      blockClass: 'inputDefault',
    },
  },
  'store-form.input#new-password-renew': {
    children: ['icon#alert', 'icon#alert'],
    props: {
      name: 'new-password',
      placeholder: 'Ingresa tu contraseña',
      isRequired: true,
      isPassword: true,
      showPassword: true,
      rightIcon: true,
      editable: true,
      blockClass: 'inputDefault',
    },
  },
  'store-link#recovery-form': {
    props: {
      buttonText: 'Confirmar',
      variant: 'secondary',
      label: 'Enviar',
      //url: '/auth/sign-in',
      displayMode: 'button',
      blockClass: 'h2;primaryLink;textSecondary;wrapperLg',
    },
  },
  'store-form.input#confirm-password': {
    children: ['icon#alert', 'icon#alert'],
    props: {
      placeholder: 'Confirmar contraseña',
      isRequired: true,
      isPassword: true,
      showPassword: true,
      rightIcon: true,
      blockClass: 'inputDefault',
    },
  },
  'rich-text#text-new-password': {
    props: {
      text: 'Ingrese el código que enviamos a su correo para acceder',
      textAlignment: 'center',
    },
  },
  'rich-text#recovery-form-title': {
    props: {
      text: 'Recuperar contraseña',
      textAlignment: 'center',
      blockClass: 'subtitle2',
    },
  },
  'rich-text#recovery-form-description': {
    props: {
      text: 'Validar correo electrónico y crear una nueva contraseña',
      textAlignment: 'center',
      blockClass: 'body1;homeDescription',
    },
  },
  /**
   * Auth password-recovery END
   */
  /**
   * Main-stack BEGIN
   */
  'store.feed': {
    blocks: ['scroll-view#home-scroll', 'flex-layout.row#selected-address'],
  },
  'scroll-view#home-scroll': {
    children: [
      //'flex-layout.row#main-text',
      'rich-text#main-text',
      'info-card#main',
      'flex-layout.row#sliderhome',
      'flex-layout.row#home-row-one',
      'flex-layout.row#menuhome',
      'flex-layout.row#frutas-y-verduras-verduras',
      'flex-layout.row#despensa',
      'flex-layout.row#bebidas',
      'flex-layout.row#electrohogar',
      'info-card#bebidas',
      'info-card#despensas',
      'info-card#carne-pollo-pescado',
      'info-card#cafeteria',
    ],
    props: {
      blockClass: 'scrollViewContainer',
    },
  },
  'flex-layout.row#selected-address': {
    children: [
      'flex-layout.col#selected-address',
      'my-addresses.change-address',
    ],
    props: {
      blockClass: 'selectedAddressContainer',
    },
  },
  'flex-layout.col#selected-address': {
    children: [
      'rich-text#direccion-seleccionada',
      'my-addresses.selected-address-text',
    ],
  },
  'rich-text#direccion-seleccionada': {
    props: {
      text: 'Entregar en: ',
      blockClass: 'body3;savedAddressText',
    },
  },
  'rich-text#change-address': {
    props: {
      text: 'Cambiar dirección',
      blockClass: 'body2;changeAddressLink',
    },
  },

  'my-addresses.selected-address-text': {
    props: {
      blockClass: 'body2;selectedAddressStyles',
    },
  },

  'my-addresses.change-address':{
    props:{
      typeAction:'action-sheet',
      content:'flex-layout.col#address',
      isSignedInValidationContent:'rich-text#is-signed-in-validation-content',
      redirectTo:'/walkthrough',
      blockTitle:'rich-text#change-address',
      hitSlop: {
        top: 16,
        left: 16,
        bottom: 16,
        right: 16,
      },
      isSignedInValidation:true,
    },
  },

  'rich-text#is-signed-in-validation-content': {
    props: {
      text: 'Ya tienes una cuenta, no puedes cambiar de dirección hasta que inicies sesión ¿Deseas iniciar sesión?',
      blockClass: '',
    },
  },
  'rich-text#test': {
    props: {
      text: 'aqui va la información del formulario de seleccionar dirección',
      blockClass: '',
    },
  },
  'flex-layout.row#electrohogar': {
    children: ['flex-layout.col#electrohogar'],
    props: {
      blockClass: '',
    },
  },

  'flex-layout.col#electrohogar': {
    children: [
      'flex-layout.row#electrohogar-titles',
      'list-context.product-list#electrohogar',
    ],
    props: {
      blockClass: 'mt_2;scrollViewContainer',
    },
  },
  'flex-layout.row#electrohogar-titles': {
    children: ['rich-text#electrohogar', 'store-link#electrohogar-showmore'],
    props: {
      blockClass: 'space_between;mr_2;mt_1;ml_2',
    },
  },
  'rich-text#electrohogar': {
    props: {
      text: 'Electrohogar',
      blockClass: 'subtitle3;textGray;',
    },
  },
  'store-link#electrohogar-showmore': {
    props: {
      label: 'Ver todas >',
      url: '/search/electrodomesticos-y-tecnologia/electro-hogar',
      displayMode: 'anchor', //button or anchor default value anchor
      blockClass: 'subtitle4;alignCenter;textTertiary',
    },
  },

  'list-context.product-list#electrohogar': {
    children: ['product-summary.shelf#products'],
    props: {
      params: {
        department: 'electrodomesticos-y-tecnologia',
        category: 'electro-hogar',
      },
      perPage: 9,
      blockClass: '',
    },
  },
  ///
  'flex-layout.row#bebidas': {
    children: ['flex-layout.col#bebidas'],
    props: {
      blockClass: '',
    },
  },
  'flex-layout.col#bebidas': {
    children: [
      'flex-layout.row#bebidas-titles',
      'list-context.product-list#supermercado-bebidas',
    ],
    props: {
      blockClass: 'mt_2;scrollViewContainer',
    },
  },
  'flex-layout.row#bebidas-titles': {
    children: ['rich-text#bebidas', 'store-link#bebidas-showmore'],
    props: {
      blockClass: 'space_between;mr_2;mt_1;ml_2',
    },
  },
  'rich-text#bebidas': {
    props: {
      text: 'Bebidas',
      blockClass: 'subtitle3;textGray;',
    },
  },
  'store-link#bebidas-showmore': {
    props: {
      label: 'Ver todas >',
      url: '/search/supermercado/bebidas',
      displayMode: 'anchor', //button or anchor default value anchor
      blockClass: 'subtitle4;alignCenter;textTertiary',
    },
  },
  'list-context.product-list#supermercado-bebidas': {
    children: ['product-summary.shelf#products'],
    props: {
      params: {
        department: 'supermercado',
        category: 'bebidas',
      },
      perPage: 9,
      blockClass: 'mt_2;pt_2',
    },
  },
  ///

  'flex-layout.row#frutas-y-verduras-verduras': {
    children: ['flex-layout.col#frutas-y-verduras-verduras'],
    props: {
      blockClass: '',
    },
  },
  'flex-layout.col#frutas-y-verduras-verduras': {
    children: [
      'flex-layout.row#frutas-y-verduras-verduras-titles',
      'list-context.product-list#supermercado-frutas-y-verduras-verduras',
    ],
    props: {
      blockClass: 'mt_2;scrollViewContainer',
    },
  },
  'flex-layout.row#frutas-y-verduras-verduras-titles': {
    children: [
      'rich-text#frutas-y-verduras-verduras',
      'store-link#frutas-y-verduras-verduras-showmore',
    ],
    props: {
      blockClass: 'space_between;mr_2;mt_1;ml_2',
    },
  },
  'rich-text#frutas-y-verduras-verduras': {
    props: {
      text: 'Verduras',
      blockClass: 'textGray;subtitle3',
    },
  },
  'store-link#frutas-y-verduras-verduras-showmore': {
    props: {
      label: 'Ver todas >',
      url: '/search/supermercado/frutas-y-verduras',
      displayMode: 'anchor', //button or anchor default value anchor
      blockClass: 'subtitle4;alignCenter;textTertiary',
    },
  },
  'list-context.product-list#supermercado-frutas-y-verduras-verduras': {
    children: ['product-summary.shelf#products'],
    props: {
      params: {
        department: 'supermercado',
        category: 'frutas-y-verduras',
        subCategory: 'verduras',
      },
      perPage: 9,
      blockClass: 'mt_2;pt_2',
    },
  },
  ///
  'flex-layout.row#despensa': {
    children: ['flex-layout.col#despensa'],
    props: {
      blockClass: '',
    },
  },
  'flex-layout.col#despensa': {
    children: [
      'flex-layout.row#despensa-titles',
      'list-context.product-list#supermercado-despensa',
    ],
    props: {
      blockClass: 'mt_2;scrollViewContainer',
    },
  },
  'flex-layout.row#despensa-titles': {
    children: ['rich-text#despensa', 'store-link#despensa-showmore'],
    props: {
      blockClass: 'space_between;mr_2;mt_1;ml_2',
    },
  },
  'rich-text#despensa': {
    props: {
      text: 'Despensa',
      blockClass: 'subtitle3;textGray',
    },
  },
  'store-link#despensa-showmore': {
    props: {
      label: 'Ver todas >',
      url: '/search/supermercado/despensa',
      displayMode: 'anchor', //button or anchor default value anchor
      blockClass: 'subtitle4;alignCenter;textTertiary',
    },
  },
  'list-context.product-list#supermercado-despensa': {
    children: ['product-summary.shelf#products'],
    props: {
      params: {
        department: 'supermercado',
        category: 'despensa',
      },
      perPage: 9,
      blockClass: 'mt_2;pt_2',
    },
  },

  'product-summary.shelf#products': {
    children: [
      'product-summary-image#productimageTech',
      'flex-layout.col#tech-product-tittlecontainer',
    ],
    props: {
      redirectTo: '{link}',
      horizontal: true,
      blockClass: 'productShelf;mt3;mb3;ml_4;mr_4',
    },
  },
  'flex-layout.col#tech-product-tittlecontainer': {
    children: [
      'product-summary-name#productnameTech',
      'product-summary-price#productprice',
      'add-to-cart-button#search',
      'flex-layout.row#wishlist-plp',
      //'add-to-wishlist-button#add-list',
    ],
    props: {
      blockClass: 'TechProductContainer',
    },
  },

  'add-to-cart-button#search': {
    children: ['icon#cart-plus', 'rich-text#add-to-cart'],
    props: {
      modalType: 'acceptCancel',
      requiredSelectedAddress: true,
      contentSelectedAddress: 'flex-layout.row#contentModalDelivery',
      content: 'flex-layout.row#contentModalProceedCheckout',
      blockClass: 'addToCartProductSummary;mb_1',
    },
  },
  'flex-layout.row#wishlist-plp': {
    children: ['flex-layout.col#add-to-cart-wishlist-plp'],
  },
  'rich-text#wishlistCount-plp': {
    props: {
      text: 'Mi lista',
      blockClass: 'wishlistCount',
    },
  },
  'flex-layout.col#add-to-cart-wishlist-plp': {
    children: [
      'icon#lists',
      'rich-text#wishlistCount-plp',
      'add-to-wishlist-button#button-wishlist',
    ],
    props: {
      blockClass: 'addToCartProductSummary;wishListSummary;wishListShelf',
    },
  },
  'add-to-wishlist-button#button-wishlist': {},

  'rich-text#add-to-cart': {
    props: {
      text: 'Agregar',
      blockClass: 'addToCartProductSummary',
    },
  },

  'product-summary-name#productnameTech': {
    props: {
      truncate: true,
      maxCharts: 16,
      blockClass: 'body2;productNameTech;ml_1',
    },
  },
  'product-summary-image#productimageTech': {
    props: {
      blockClass: 'productImageTech',
    },
  },
  'product-summary-price#productprice': {
    props: {
      blockClass: 'productPrice;body1',
    },
  },

  // 'flex-layout.row#main-text': {
  //   children: ['rich-text#main-text'],
  //   props: { blockClass: 'center' },
  // },

  'rich-text#main-text': {
    props: {
      text: 'Encuentra lo que necesitas',
      blockClass: 'subtitle2;alignCenter;mainTitle',
    },
  },

  'info-card#main': {
    props: {
      height: 127,
      imageUrl: 'https://qaolimpica.vteximg.com.br/arquivos/lunesSaludable.jpg',
      callToActionUrl: '/comprar',
      callToActionMode: 'link',
      textPosition: 'bottom',
      textAlignment: 'center',
      blockClass: 'h2;textSecondary;wrapperMed',
    },
  },
  'flex-layout.row#sliderhome': {
    children: ['slider-layout#home'],
    props: { blockClass: 'scrollViewContainer;mb_1' },
  },

  'slider-layout#home': {
    children: [
      'image#oferta1',
      'image#oferta2',
      'image#oferta3',
      'image#oferta4',
      'image#oferta5',
      'image#oferta6',
      'image#oferta7',
    ],
    props: {
      height: 220,
      blockClass: 'sliderHome',
    },
  },
  'rich-text#slider-text-1': {
    props: {
      text: 'Bienvenido',
    },
  },
  'image#oferta1': {
    props: {
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/casaFanaticos.jpg',
      resizeMode: 'stretch', // 'cover', 'contain', 'stretch', 'repeat', 'center'
    },
  },
  'image#oferta2': {
    props: {
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/bebidasLacteas.png',
      resizeMode: 'stretch', // 'cover', 'contain', 'stretch', 'repeat', 'center'
    },
  },
  'image#oferta3': {
    props: {
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/compuCelulares.jpg',
      resizeMode: 'stretch', // 'cover', 'contain', 'stretch', 'repeat', 'center'
    },
  },
  'image#oferta4': {
    props: {
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/express.jpg',
      resizeMode: 'stretch', // 'cover', 'contain', 'stretch', 'repeat', 'center'
    },
  },
  'image#oferta5': {
    props: {
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/seccionSaludable.jpg',
      resizeMode: 'stretch', // 'cover', 'contain', 'stretch', 'repeat', 'center'
    },
  },
   'image#oferta6': {
    props: {
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/televisorPromo.jpg',
      resizeMode: 'stretch', // 'cover', 'contain', 'stretch', 'repeat', 'center'
    },
  },
   'image#oferta7': {
    props: {
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/tapabocasPromo.png',
      resizeMode: 'stretch', // 'cover', 'contain', 'stretch', 'repeat', 'center'
    },
  },
  'flex-layout.row#home-row-one': {
    children: ['flex-layout.col#home-col-one', 'flex-layout.col#home-col-two'],
    props: { blockClass: 'flexRowHomeStyle' },
  },
  'flex-layout.col#home-col-one': {
    children: ['info-card#productos-saludables'],
    props: { blockClass: 'wrapperMed' },
  },
  'flex-layout.col#home-col-two': {
    children: ['info-card#licores'],
    props: { blockClass: 'wrapperMed' },
  },
  'info-card#productos-saludables': {
    props: {
      isFullModeStyle: false,

      height: 175,
      imageUrl: 'https://qaolimpica.vteximg.com.br/arquivos/lomitosAtun.jpg',
      callToActionUrl: '/comprar',
      callToActionMode: 'link',
      //callToActionText: 'Productos Saludables',
      fontWeight: '500',
      resizeMode: 'contain',
      textPosition: 'bottom',
      textAlignment: 'center',
      blockClass: 'wrapperMed;imagesBanner',
    },
  },
  'info-card#licores': {
    props: {
      isFullModeStyle: false,
      height: 175,
      imageUrl: 'https://qaolimpica.vteximg.com.br/arquivos/pietranPromo.jpg',
      callToActionUrl: '/search/supermercado/licores',
      callToActionMode: 'link',
      //callToActionText: 'Licores',
      textPosition: 'bottom',
      textAlignment: 'center',
      resizeMode: 'contain',
      blockClass: 'wrapperMed;imagesBanner',
    },
  },

  'flex-layout.row#menuhome': {
    children: ['menu#menu-home'],
    props: { blockClass: 'wrapperXs' },
  },

  'menu#menu-home': {
    children: [
      'menu-item#home-supermercado',
      'menu-item#home-drogueria',
      'menu-item#home-licores',
      'menu-item#home-envio-express',
    ],
    props: {
      blockClass:
        'flex_row;space_between;menuContainer;wrapperMenuHome;wrapperMed',
    },
  },

  'menu-item#home-supermercado': {
    children: ['info-card#home-supermercado'],
    props: {
      redirectTo: '/feed',
    },
  },

  'info-card#home-supermercado': {
    props: {
      isFullModeStyle: false,
      width: 72,
      height: 72,
      imageUrl: 'https://qaolimpica.vteximg.com.br/arquivos/supermercado.png',
      callToActionUrl: '/search/supermercado',
      callToActionMode: 'link',
      callToActionText: 'Supermercado',
      textPosition: 'bottom',
      textAlignment: 'center',
      blockClass: '',
    },
  },
  'menu-item#home-drogueria': {
    children: ['info-card#home-drogueria'],
    props: {
      redirectTo: '/feed',
    },
  },

  'info-card#home-drogueria': {
    props: {
      isFullModeStyle: false,
      width: 72,
      height: 72,
      imageUrl: 'https://qaolimpica.vteximg.com.br/arquivos/drogueria.png',
      callToActionUrl: '/search/medicamentos',
      callToActionMode: 'link',
      callToActionText: 'Drogueria',
      textPosition: 'bottom',
      textAlignment: 'center',
      blockClass: '',
    },
  },
  'menu-item#home-licores': {
    children: ['info-card#home-licores'],
    props: {
      redirectTo: '/feed',
    },
  },

  'info-card#home-licores': {
    props: {
      isFullModeStyle: false,
      width: 72,
      height: 72,
      imageUrl: 'https://qaolimpica.vteximg.com.br/arquivos/licores.png',
      callToActionUrl: '/search/supermercado/licores',
      callToActionMode: 'link',
      callToActionText: 'Licores',
      textPosition: 'bottom',
      textAlignment: 'center',
      blockClass: '',
    },
  },
  'menu-item#home-envio-express': {
    children: ['info-card#home-envio-express'],
    props: {
      redirectTo: '/feed',
    },
  },

  'info-card#home-envio-express': {
    props: {
      isFullModeStyle: false,
      width: 72,
      height: 72,
      imageUrl: 'https://qaolimpica.vteximg.com.br/arquivos/supermercado.png',
      callToActionUrl: '/search/supermercado',
      callToActionMode: 'link',
      callToActionText: 'Envío Express',
      textPosition: 'bottom',
      textAlignment: 'center',
      blockClass: '',
    },
  },

  'info-card#bebidas': {
    props: {
      height: 100,
      imageUrl:
        'https://vtexlatam.vteximg.com.br/arquivos/ids/157314/bebidas.jpg',
      callToActionUrl: '/search/supermercado/bebidas',
      callToActionMode: 'link',
      textPosition: 'bottom',
      textAlignment: 'center',
      blockClass: 'h2;textSecondary;wrapperLg',
    },
  },

  'info-card#despensas': {
    props: {
      height: 100,
      imageUrl:
        'https://vtexlatam.vteximg.com.br/arquivos/ids/157313/despensa.jpg',
      callToActionUrl: '/search/supermercado/despensa',
      callToActionMode: 'link',
      textPosition: 'bottom',
      textAlignment: 'center',
      blockClass: 'h2;textSecondary;wrapperLg',
    },
  },

  'info-card#carne-pollo-pescado': {
    props: {
      height: 100,
      imageUrl:
        'https://vtexlatam.vteximg.com.br/arquivos/ids/157312/carne-polo-pescado.jpg',
      callToActionUrl: '/search/supermercado/pollo-carne-y-pescado',
      callToActionMode: 'link',
      textPosition: 'bottom',
      textAlignment: 'center',
      blockClass: 'h2;textSecondary;wrapperLg',
    },
  },

  'info-card#cafeteria': {
    props: {
      height: 100,
      imageUrl:
        'https://vtexlatam.vteximg.com.br/arquivos/ids/157311/cafeteria.jpg',
      callToActionUrl: '/search/supermercado/cafeteria-y-delikatessen',
      callToActionMode: 'link',
      textPosition: 'bottom',
      textAlignment: 'center',
      blockClass: 'h2;textSecondary;wrapperLg',
    },
  },
  /**
   * Main Stack - Feed END
   */
  /**
   * Main Stack - Cart BEGIN
   */
  // 'store.cart': {
  //   blocks: ['web-view#checkout'],
  // },

  // 'web-view#checkout': {
  //   props: {
  //     hostname: 'master--olimpica.myvtex.com',
  //     checkout: true,
  //     js: 'jsCheckout',
  //   },
  // },

  'store.cart': {
    blocks: ['flex-layout.row#emptyCart'],
  },

  'flex-layout.row#emptyCart': {
    children: ['flex-layout.col#emptyCart'],
    props: {
      blockClass: 'emptyCartScreen',
    },
  },

  'flex-layout.col#emptyCart': {
    children: [
      'image#emptyCart',
      'rich-text#emptyCartTitle',
      'rich-text#emptyCartText',
      'store-link#keepBuying',
    ],
    props: {
      blockClass: 'emptyCartCol',
    },
  },
  'image#emptyCart': {
    props: {
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/cart.png',
      width: 92,
      height: 82,
      blockClass: 'emptyCartImage',
    },
  },
  'rich-text#emptyCartTitle': {
    props: {
      text: 'Tu carrito está vacío',
      blockClass: 'emptyCartTitle',
    },
  },
  'rich-text#emptyCartText': {
    props: {
      text: 'Encuentra en Olímpica todo lo que necesitas en productos con el precio más bajo de tu ciudad. !a un solo clic!',
      blockClass: 'emptyCartText',
    },
  },

  'store-link#keepBuying': {
    props: {
      label: 'Seguir comprando',
      url: '/feed',
      textAlignment: 'center',
      displayMode: 'button',
      blockClass: 'smallLinkVariant;textSecondary',
    },
  },

  /**
   * Auth sign-in-with-email-and-password BEGIN
   */
  'store.sign-in': {
    blocks: ['flex-layout.row#wrapper-sign-in-with-email-and-password'],
  },
  'flex-layout.row#wrapper-sign-in-with-email-and-password': {
    children: ['flex-layout.col#wrapper-sign-in-with-email-and-password'],
    props: { blockClass: 'center' },
  },
  'flex-layout.col#wrapper-sign-in-with-email-and-password': {
    children: ['image-background#wrapper-sign-in-with-email-and-password'],
  },
  'image-background#wrapper-sign-in-with-email-and-password': {
    children: ['flex-layout.row#form-sign-in-with-email-and-password'],
    props: {
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/background.png',
    },
  },
  'flex-layout.row#form-sign-in-with-email-and-password': {
    children: ['flex-layout.col#form-sign-in-with-email-and-password'],
  },
  'flex-layout.col#form-sign-in-with-email-and-password': {
    children: [
      'flex-layout.row#title-sign-in-with-email-and-password',
      'rich-text#sign-in-with-email-and-password-description',
      'store-form.login#login-password',
      'store-link#sign-in-with-email-and-password',
    ],
    props: {
      blockClass: 'wrapperSm',
    },
  },
  'flex-layout.row#title-sign-in-with-email-and-password': {
    children: ['flex-layout.col#title-sign-in-with-email-and-password'],
    props: {
      blockClass: 'mt_4;mb_4',
    },
  },
  'flex-layout.col#title-sign-in-with-email-and-password': {
    children: ['rich-text#sign-in-with-email-and-password-title'],
    props: {
      blockClass: 'center',
    },
  },
  'rich-text#sign-in-with-email-and-password-title': {
    props: {
      text: 'Iniciar sesión',
      textAlignment: 'center',
      blockClass: 'subtitle2',
    },
  },
  'rich-text#sign-in-with-email-and-password-description': {
    props: {
      text: 'Ingresa con tu mail y contraseña',
      textAlignment: 'center',
      blockClass: 'body1;homeDescription',
    },
  },
  'store-form.login#login-password': {
    children: ['store-form.input#password', 'store-link#forgot-password'],
    props: {
      redirectTo: '/feed',
      validationLogin: true,
      mode: 'onChange',
      blockClass: '',
      schemaValidation: [
        {
          id: 'password',
          type: 'text',
          validationType: 'string',
        },
      ],
    },
  },
  'store-form.input#password': {
    children: ['icon#pass', 'icon#alert'],
    props: {
      placeholder: 'Ingresa contraseña',
      showPassword: true,
      isRequired: true,
      isPassword: true,
      pattern: '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
      rightIcon: true,
      blockClass: 'inputDefault;ml_3;mr_3',
    },
  },
  'store-link#forgot-password': {
    props: {
      label: '**¿Olvidaste tu contraseña?**',
      url: '/auth/password/validate/recovery',
      displayMode: 'anchor', //button or anchor default value anchor
      blockClass: 'body3;alignCenter;linkStoreForm',
    },
  },
  'store-link#sign-in-with-email-and-password': {
    props: {
      label: 'Enviar',
      url: '/auth/sign-in',
      displayMode: 'button',
      blockClass: 'h3;smallLink;textSecondary;mt_4',
    },
  },
  /**
   * Auth sign-in-with-email-and-password END
   */
  /**
   * Auth sign-up-profile-step BEGIN
   */
  'store.sign-up-profile-step': {
    blocks: ['scroll-view#sign-up-form'],
  },
  'scroll-view#sign-up-form': {
    children: ['flex-layout.row#wrapper-content-sign-up-profile-step'],
    props: {
      blockClass: 'scrollViewContainer',
    },
  },
  'flex-layout.row#wrapper-content-sign-up-profile-step': {
    children: ['flex-layout.col#wrapper-content-sign-up-profile-step'],
  },
  'flex-layout.col#wrapper-content-sign-up-profile-step': {
    children: [
      'flex-layout.row#register-new-user-title',
      'store-form.sign-in-as-guest#email',
    ],
    props: {
      blockClass: 'ml_3;mr_3;mt_3',
    },
  },
  'flex-layout.row#register-new-user-title': {
    children: ['rich-text#register-new-user-title'],
    props: {
      blockClass: 'center;mt_3;mb_2',
    },
  },
  'rich-text#register-new-user-title': {
    props: {
      text: 'Registrarse',
      blockClass: 'subtitle2',
    },
  },

  'store-form.sign-in-as-guest#email': {
    children: [
      'store-form.input#firstName',
      'rich-text#register-form-firstName',
      'store-form.input#lastName',
      'rich-text#register-form-lastName',
      'store-form.select#documentType',
      'rich-text#register-form-document-type',
      'store-form.input#document',
      'rich-text#register-form-document-number',
      'store-form.input#email-register',
      'store-form.input#cellPhone',
      'rich-text#register-form-cell-phone',
      // Replace for button
      'store-form.button#sign-up-profile-step',
    ],
    props: {
      redirectTo: '/auth/sign-up/code-validation/{email}',
      validationLogin: true,
      validateEmail: true,
      mode: 'onChange',
      blockClass: 'center',
      // Build all validations of form input
      schemaValidation: [
        {
          id: 'firstName',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'required',
              params: ['Este campo es requerido'],
            },
            {
              type: 'max',
              params: [32, 'El nombre no puede ser mayor a 50 caracteres'],
            },
            {
              type: 'matches',
              params: [
                /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/,
                'El nombre solo puede contener letras',
              ],
            },
          ],
        },
        {
          id: 'lastName',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'required',
              params: ['Este campo es requerido'],
            },
            {
              type: 'max',
              params: [32, 'El apellido no puede ser mayor a 50 caracteres'],
            },
            {
              type: 'matches',
              params: [
                /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/,
                'El apellido solo puede contener letras',
              ],
            },
          ],
        },
        {
          id: 'document',
          type: 'number',
          validationType: 'number',
          validations: [
            {
              type: 'required',
              params: ['Este campo es requerido'],
            },
            {
              type: 'min',
              params: [
                100000,
                'El número de documento no puede ser menor a 6 caracteres',
              ],
            },
            {
              type: 'max',
              params: [
                9999999999,
                'El número de documento no puede ser mayor a 10 caracteres',
              ],
            },
            {
              type: 'typeError',
              params: ['El número de documento debe ser válido'],
            },
          ],
        },
        {
          id: 'email',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'required',
              params: ['El correo electrónico es requerido'],
            },
            {
              type: 'email',
              params: ['Debe ser un email válido'],
            },
          ],
        },
        {
          id: 'cellPhone',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'required',
              params: ['Este campo es requerido'],
            },
            {
              type: 'matches',
              params: [/^[0-9]+$/, 'El celular solo puede tener numeros'],
            },
            {
              type: 'min',
              params: [10, 'El celular no puede ser menor a 10 caracteres'],
            },
            {
              type: 'max',
              params: [10, 'El celular no puede ser mayor a 10 caracteres'],
            },
            {
              type: 'typeError',
              params: ['El número de celular debe ser válido'],
            },
          ],
        },
        {
          id: 'documentType',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'required',
              params: ['Este campo es requerido'],
            },
          ],
        },
      ],
    },
  },
  'store-form.select#documentType': {
    props: {
      iconDisable: 'icon#selectIcon2',
      name: 'documentType',
      iconPosition: 'right',
      isRequired: true,
      defaultText: { label: 'Tipo de documento', value: '' },
      options: [
        { label: 'Cédula de ciudadanía', value: 'cedulaCOL' },
        { label: 'Cédula de extranjería', value: 'cedulaEXTRANJERO' },
        { label: 'NIT', value: 'nit' },
      ],
      label: 'select',
      blockClass: 'selectDefault;selectRegisterForm',
    },
  },
  'store-form.input#email-register': {
    children: ['icon#pass', 'icon#alert'],
    props: {
      blockClass: 'inputDefault;inputRegisterForm',
      name: 'email',
      placeholder: 'email',
      isRequired: true,
      isEmail: true,
      rightIcon: true,
    },
  },

  'store-form.input#firstName': {
    props: {
      blockClass: 'inputDefault',
      name: 'firstName',
      placeholder: 'Nombre',
      isRequired: true,
      padding: 10,
    },
  },

  'rich-text#register-form-firstName': {
    props: {
      text: '*Como aparece en tu documento',
      blockClass: 'body3',
    },
  },

  'store-form.input#lastName': {
    props: {
      blockClass: 'inputDefault;inputRegisterForm',
      name: 'lastName',
      placeholder: 'Apellido',
      isRequired: true,
    },
  },

  'rich-text#register-form-lastName': {
    props: {
      text: '*Como aparece en tu documento',
      blockClass: 'body3',
    },
  },

  'store-form.input#document': {
    props: {
      blockClass: 'inputDefault;inputRegisterForm',
      name: 'document',
      placeholder: 'Número de documento',
      isRequired: true,
    },
  },

  'rich-text#register-form-document-type': {
    props: {
      text: '*Como aparece en tu documento',
      blockClass: 'body3',
    },
  },

  'rich-text#register-form-document-number': {
    props: {
      text: '*Ingresa tu número de documento',
      blockClass: 'body3',
    },
  },

  'store-form.input#cellPhone': {
    props: {
      blockClass: 'inputDefault',
      name: 'cellPhone',
      placeholder: 'Número de teléfono',
      isRequired: true,
    },
  },

  'rich-text#register-form-cell-phone': {
    props: {
      text: '*Ingresa un número de contacto',
      blockClass: 'body3',
    },
  },

  'store-form.button#sign-up-profile-step': {
    props: {
      buttonText: 'Registrate',
      blockClass: 'buttonPrimary;storeFormButtonStyle',
      variant: 'secondary',
    },
  },
  /**
   * Auth sign-up-profile-step END
   */
  /**
   * Auth sign-up-code-validation-step START
   */
  'store.sign-up-code-validation-step': {
    blocks: ['flex-layout.row#container-code-validation'],
  },
  'flex-layout.row#container-code-validation': {
    children: ['flex-layout.col#container-items'],
    props: {
      blockClass: 'scrollViewContainer;authPages',
    }
  },
  'flex-layout.col#container-items': {
    children: [
      'flex-layout.row#container-code-validation-title',
      'flex-layout.row#container-title-messages',
      'flex-layout.row#container-subTitle-write-code',
      'flex-layout.row#container-input-text-code',
    ],
    props: {
      blockClass: 'wrapperLg;mt_4',
    },
  },
  // Definiendo cada uno de los bloques por filas
  'flex-layout.row#container-code-validation-title': {
    children: ['flex-layout.col#code-validation-title'],
  },
  'flex-layout.col#code-validation-title': {
    children: ['rich-text#title-code-validation'],
    props: {
      blockClass: 'wrapperLg;mt_2',
    },
  },
  'rich-text#title-code-validation': {
    props: {
      text: 'Verificación',
      textAlignment: 'center',
      blockClass: 'subtitle2',
    },
  },
  'flex-layout.row#container-title-messages': {
    children: ['flex-layout.col#title-message-of-succeess'],
  },
  'flex-layout.col#title-message-of-succeess': {
    children: ['rich-text#title-message-of-succeess'],
    props: {
      blockClass: 'wrapperLg;mt_4',
    },
  },
  'rich-text#title-message-of-succeess': {
    props: {
      text: 'Gracias por registrar su cuenta',
      textAlignment: 'center',
      blockClass: 'body1;homeDescription;subtitleVerification',
    },
  },
  'flex-layout.row#container-subTitle-write-code': {
    children: ['flex-layout.col#subTitle-write-code'],
  },
  'flex-layout.col#subTitle-write-code': {
    children: ['rich-text#subTitle-write-code'],
    props: {
      blockClass: 'wrapperLg',
    },
  },
  'rich-text#subTitle-write-code': {
    props: {
      text: 'Utiliza el código siguiente para\n completar la verificación',
      textAlignment: 'center',
      blockClass: 'body2;textColorAuth',
    },
  },
  'flex-layout.row#container-input-text-code': {
    children: ['flex-layout.col#input-text-code'],
  },
  'flex-layout.col#input-text-code': {
    children: ['store-form.otp-code-validation#input-text-code'],
    props: {
      blockClass: 'wrapperLg;mt_3',
    },
  },
  'store-form.otp-code-validation#input-text-code': {
    children: [
      'store-form.input#input-text-code',
      'store-link#verification-button-resend-code',
      'flex-layout.row#verification-button-send',
    ],
    props: {
      redirectTo: '/auth/sign-up/validate-successful',
      //skipLogic: true,
      modalType: 'continue',
      modalTitle: 'Enviado',
      modalDescription:
        'El enlace de verificación se ha enviado de manera exitosa a tu correo: {email} ',
      mode: 'onChange',
      schemaValidation: [
        {
          id: 'code',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'required',
              params: ['El código que ha ingresado es incorrecto'],
            },
            {
              type: 'min',
              params: [6, 'El código debe ser de 6 dígitos'],
            },
            {
              type: 'max',
              params: [6, 'El código debe ser de 6 dígitos'],
            },
            {
              type: 'matches',
              params: [/^[0-9]+$/, 'Debe ser solo dígitos'],
            },
          ],
        },
      ],
    },
  },
  'store-form.input#input-text-code': {
    props: {
      blockClass: 'inputDefault;ml_2;mr_2',
      name: 'code',
      isRequired: true,
      placeholder: 'Ingresa código de acceso',
    },
  },
  'store-link#verification-button-resend-code': {
    props: {
      label: '**Reenviar código**',
      url: '/auth/sign-up/register',
      displayMode: 'anchor', //button or anchor default value anchor
      blockClass: 'body3;alignCenter;linkStoreForm',
    },
  },
  'flex-layout.row#verification-button-send': {
    children: ['flex-layout.col#verification-button-send'],
  },
  'flex-layout.col#verification-button-send': {
    children: ['store-form.button#verification-button-send'],
    props: {
      blockClass: 'center;mt_4',
    },
  },
  'store-form.button#verification-button-send': {
    props: {
      buttonText: 'Enviar',
      url: '/auth/sign-up/validate-successful',
      displayMode: 'button',
      blockClass: 'smallButton',
    },
  },
  /**
   * Auth sign-up-code-validation-step END
   */

  /**
   * Main Stack - Search Term BEGIN
   */
 'store.searchTerm': {
    blocks: ['top-searches-layout#search-term'],
  },

  //# Containers
  'top-searches-layout#search-term': {
    children: ['flex-layout.row#header-row'],
    props: {
      blockClass: 'topSearchesLayout',
    },
  },

  'flex-layout.row#header-row': {
    children: ['flex-layout.col#header-row-col'],
  },
  'flex-layout.col#header-row-col': {
    children: ['search-input#term',],
    props: {
      blockClass: 'headerRowColSearch',
    },
  },
  // # Components
  'search-input#term': {
    props: {
      activeHistory: true,
      variant: 'primary',
      redirectToSearchPage: true,
      leftIcon: true,
      rightIcon: true,
      placeholder:'Buscar en Olímpica',
      LeftComponent: 'icon#lupa-de-busqueda',
      redirectTo: '/search/?term={term}',
      blockClass: 'storeFormInputStyleSearch',
      renderChildrenOnFocus: true,
      disableValidation: true,
    },
  },
  /**
   * Main Stack - Search Term END
   */

  /* Recovery Password */
  'store.recovery-password': {
    blocks: ['flex-layout.row#recovery-password-container'],
  },
  'flex-layout.row#recovery-password-container': {
    children: ['flex-layout.col#recovery-password-container'],
  },
  'flex-layout.col#recovery-password-container': {
    children: ['image-background#recovery-password-container'],
  },
  'image-background#recovery-password-container': {
    children: ['flex-layout.row#recovery-password-subcontainer'],
    props: {
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/background.png',
    },
  },
  'flex-layout.row#recovery-password-subcontainer': {
    children: ['flex-layout.col#recovery-password-subcontainer'],
    props: {
      blockClass: 'pt_3',
    },
  },
  'flex-layout.col#recovery-password-subcontainer': {
    children: [
      'flex-layout.row#recovery-password-titles',
      'store-form.new-password#recovery-password',
    ],
    props: {
      blockClass: 'wrapperLg',
    },
  },
  'flex-layout.row#recovery-password-titles': {
    children: ['flex-layout.col#recovery-password-titles'],
  },
  'flex-layout.col#recovery-password-titles': {
    children: [
      'flex-layout.row#recovery-password-title',
      'flex-layout.row#recovery-password-subtitle',
    ],
    props: {
      blockClass: '',
    },
  },
  'flex-layout.row#recovery-password-title': {
    children: ['flex-layout.col#recovery-password-title'],
  },
  'flex-layout.col#recovery-password-title': {
    children: ['rich-text#recovery-password-title'],
    props: {
      blockClass: 'center;mt_2',
    },
  },
  'flex-layout.row#recovery-password-subtitle': {
    children: ['flex-layout.col#recovery-password-subtitle'],
  },
  'flex-layout.col#recovery-password-subtitle': {
    children: ['rich-text#recovery-password-subtitle'],
    props: {
      blockClass: 'mt_4'
    }
  },
  'rich-text#recovery-password-title': {
    props: {
      text: 'Recuperar contraseña',
      blockClass: 'subtitle2',
    },
  },
  'rich-text#recovery-password-subtitle': {
    props: {
      text: 'Ingresa tu cuenta de correo \n electrónica registrada',
      blockClass: 'body1;homeDescription;alignCenter',
    },
  },
  'store-form.new-password#recovery-password': {
    children: [
      'store-form.input#input-email-recovery-password',
      'flex-layout.row#submit-recovery-password',
    ],
    props: {
      redirectTo: '/feed',
      validationLogin: true,
      mode: 'onChange',
      schemaValidation: [
        {
          id: 'password',
          type: 'text',
          validationType: 'string',
        },
      ],
    },
  },
  'store-form.input#input-email-recovery-password': {
    props: {
      name: 'recovery',
      placeholder: 'Ingresa email',
      isRequired: true,
      blockClass: 'inputDefault;ml_3;mr_3',
    },
  },
  'flex-layout.row#submit-recovery-password': {
    children: ['flex-layout.col#submit-recovery-password'],
  },
  'flex-layout.col#submit-recovery-password': {
    children: ['store-link#submit-recovery-password'],
    props: {
      blockClass: 'wrapperLg',
    },
  },
  'store-link#submit-recovery-password': {
    props: {
      label: 'Enviar',
      textAlignment: 'center',
      url: '/auth/password/recovery/:email',
      displayMode: 'button',
      blockClass: 'h3;smallLink;textSecondary',
    },
  },
  /**
   * Secondary Stack - PLP BEGIN
   */
  'store.search': {
    blocks: ['search-result-layout#list'],
  },
  'search-result-layout#list': {
    children: ['product-summary.shelf#department-products'],
    props: {
      perPage: 9,
      blockClass: 'scrollViewContainer',
    },
  },
  'product-summary.shelf#department-products': {
    children: ['flex-layout.row#products-list'],
    props: {
      redirectTo: '{link}',
      columns: 1,
    },
  },
  'flex-layout.row#products-list': {
    children: [
      'flex-layout.col#image-product',
      'flex-layout.col#description-product',
    ],
    props: {
      blockClass: 'ml_1;mr_3'
    }
  },
  'flex-layout.col#image-product': {
    children: ['flex-layout.row#image-product-offer'],
  },
  'flex-layout.row#image-product-offer': {
    children: ['product-summary-image#productimage', 'discountBadge#product'],
    props: {
      blockClass: 'center;rowContainerSummary',
    },
  },
  'product-summary-image#productimage': {
    props: {
      blockClass: 'productImage',
    },
  },
  'discountBadge#product': {
    props: {
      blockClass: 'productDiscountBadge',
    },
  },
  'flex-layout.col#description-product': {
    children: [
      //'product-summary-brand#productbrand',
      'product-summary-name#productname',
      // 'flex-layout.row#free-shipping',
      'flex-layout.row#product-price',
      // 'flex-layout.row#product-price-previous',
      // 'flex-layout.row#product-price-grams',
      'flex-layout.row#add-product',
    ],
    props: {
      blockClass: 'rowContainerSummary;descriptionSpacing',
    },
  },
  'product-summary-quantity#brandSearch': {
    props: {
      AddIcon: 'icon#add',
      MinusIcon: 'icon#minus',
      hitSlop: {
        top: 16,
        left: 16,
        bottom: 16,
        right: 16,
      },
      blockClass: 'productBrandQuantity',
    },
  },

  // 'product-summary-brand#productbrand': {
  //   props: {
  //     blockClass: 'productBrand',
  //   },
  // },

  'product-summary-name#productname': {
    props: {
      blockClass: 'colorTextGrisesTitleProduts;ml_1;mb_1',
    },
  },

  'flex-layout.row#free-shipping': {
    children: ['rich-text#product-price-free-shipping'],
    props: {
      blockClass: 'productPriceDesc;ml_1',
    }
  },

  'rich-text#product-price-free-shipping': {
    props: {
      text: '$2.000',
      blockClass: 'h3;colorTextRed'
    }
  },

  'flex-layout.row#product-price-previous': {
    children: ['rich-text#product-price-previous'],
    props: {
      blockClass: 'productPriceDesc;ml_1;mt_1',
    }
  },

  'rich-text#product-price-previous': {
    props: {
      text: 'Antes $1.500',
      blockClass: 'subtitle4;colorTextGrises'
    }
  },

  'flex-layout.row#product-price-grams': {
    children: ['rich-text#product-price-grams'],
    props: {
      blockClass: 'productPriceDesc;ml_1;mt_1',
    }
  },

  'rich-text#product-price-grams': {
    props: {
      text: 'Gramos a 0.68',
      blockClass: 'subtitle4;colorTextGrises'
    }
  },



  'flex-layout.row#product-price': {
    props: {
      blockClass: 'productPriceDesc;ml_1',
    },
    children: ['product-summary-price#productpricelist'],
  },
  'product-summary-price#productpricelist': {
    props: {
      blockClass: 'h3',
    },
  },
  'flex-layout.row#add-product': {
    children: ['flex-layout.col#wishlist', 'add-to-cart-button#search'],
  },
  'flex-layout.col#wishlist': {
    children: ['flex-layout.row#wishlist'],
    props: {
      blockClass: 'wishlistContainer',
    },
  },
  'flex-layout.row#wishlist': {
    children: ['flex-layout.col#add-to-cart-wishlist'],
  },
  'rich-text#wishlistCount': {
    props: {
      text: 'Mi lista',
      blockClass: 'wishlistCount',
    },
  },
  'flex-layout.col#add-to-cart-wishlist': {
    children: [
      'icon#lists',
      'rich-text#wishlistCount',
      'add-to-wishlist-button#button-wishlist',
    ],
    props: {
      blockClass: 'addToCartProductSummary;wishListSummary',
    },
  },

  /**
   * Secondary Stack - PLP END
   */

  /**
   *  Secondary Stack PDP BEGIN
   */
  'store.product': {
    blocks: ['product-details#detail'],
  },

  'flex-layout.row#product-checkout-button': {
    children: [
      'flex-layout.col#product-detail-selector',
      'flex-layout.col#product-checkout-button',
    ],
    props: {
      blockClass: 'sliderProductDetailsCheckout',
    },
  },
  'flex-layout.col#product-detail-selector': {
    children: ['product-details-quantity#detail'],
    props: {
      blockClass: 'quantitySelectorDetail',
    },
  },
  'flex-layout.col#product-checkout-button': {
    children: ['product-add-to-cart-button#pdp'],
  },
  'scroll-view#product': {
    children: [
      'flex-layout.row#product-details-image',
      'flex-layout.col#product-details-details',
      'flex-layout.row#product-checkout-button',
    ],
    props: {
      blockClass: 'scrollViewContainer',
    },
  },
  'product-details#detail': {
    children: ['scroll-view#product'],
    props: {
      blockClass: 'productDetails',
    },
  },
  'product-name#detail-name': {
    props: {
      blockClass: 'h2;productName',
    },
  },
  'product-price#detail-price': {
    props: {
      discountPrice: 'true',
      blockClass: 'h3',
    },
  },

  'product-description#price': {
    props: {
      blockClass: 'textPrimary',
    },
  },
  'product-discount': {
    props: {
      blockClass: 'productDiscountDetailBadge',
    },
  },
  'product-image': {
    props: {
      blockClass: 'productImage',
    },
  },
  'flex-layout.row#product-details-image': {
    children: ['product-slider', 'product-discount'],
    props: {
      blockClass: 'sliderProductDetails',
    },
  },
  'flex-layout.row#product-details-price': {
    children: [
      'flex-layout.col#product-details-pricing',
      //'flex-layout.col#product-details-quantity',
    ],
    props: {
      blockClass: 'sliderProductPrice',
    },
  },
  'flex-layout.col#product-details-pricing': {
    children: [
      'flex-layout.row#product-details-pricing',
      //'flex-layout.row#product-details-discount',
    ],
    props: {
      blockClass: 'productPriceDetailPrice',
    },
  },
  // 'flex-layout.row#product-details-discount': {
  //   children: ['rich-text#pricing', 'product-price#detail-price'],
  //   props: {
  //     blockClass: 'productPriceDetailPrice',
  //   },
  // },
  'flex-layout.row#product-details-pricing': {
    children: [
      //'rich-text#discount',
      'product-price#detail-discount',
    ],
    props: {
      blockClass: 'productPriceDetailPrice',
    },
  },
  'rich-text#pricing': {
    props: {
      text: 'Ahora: ',
      blockClass: 'detailPriceProduct',
    },
  },
  'product-price#detail-discount': {
    props: {
      blockClass: 'h2',
    },
  },
  // 'rich-text#discount': {
  //   props: {
  //     text: 'Precio regular: ',
  //     blockClass: 'detailPriceDiscountText',
  //   },
  // },
  // 'flex-layout.col#product-details-quantity': {
  //   children: ['product-details-quantity#detail'],
  //   props: { blockClass: 'productQuantityContainer' },
  // },
  'flex-layout.row#product-seller': {
    children: [
      'icon#bagShopping',
      'rich-text#seller',
      'product-seller-name#pdp',
    ],
    props: {
      blockClass: 'mb_2;mt_2',
    },
  },
  'rich-text#seller': {
    props: {
      text: ' Vendido por ',
    },
  },
  'product-seller-name#pdp': {},
  'flex-layout.row#product-unit-measurement': {
    children: [
      'product-unit-multiplier',
      'rich-text#measurement-unit',
      'product-measurement-unit',
    ],
  },
  'product-measurement-unit': {},
  'rich-text#measurement-unit': {
    props: {
      text: ' / ',
    },
  },
  'product-unit-multiplier': {},
  'rich-text#description-title': {
    props: {
      text: 'Descripción ',
      blockClass: 'h3;productDescription',
    },
  },
  'flex-layout.col#product-details-nameBrand': {
    children: ['product-name#detail-name'],
    props: {
      blockClass: 'nameBrandContainer',
    },
  },
  'collapse#description': {
    props: {
      overlay: 'flex-layout.row#overlay',
      summary: 'rich-text#filtrar-por',
      details: 'scroll-view#filter-navigator',
      activeOverlay: true,
      blockClass: 'filterCollapse',
    },
  },
  'flex-layout.row#overlay': {
    props: {
      blockClass: 'flexLayoutRowOverlay',
    },
  },
  'rich-text#filtrar-por': {
    props: {
      text: '',
    },
  },
  'scroll-view#filter-navigator': {
    children: ['product-description#price', 'flex-layout.col#product-plu'],
    props: {
      nestedScrollEnabled: true,
      blockClass: 'filterNavigatorStyles',
    },
  },
  'flex-layout.col#product-plu': {
    children: ['flex-layout.row#brand-productReference'],
  },
  'flex-layout.row#brand-productReference': {
    children: [
      //'product-brand',
      'rich-text#product-reference',
      'product-reference',
    ],
    props: {
      blockClass: 'mb_3;mt_1',
    },
  },
  'rich-text#product-reference': {
    props: {
      text: 'PLU:',
      blockClass: 'textGray',
    },
  },
  // 'product-brand': {
  //   props: {
  //     blockClass: 'productBrand',
  //   },
  // },
  'product-reference': {
    props: {
      blockClass: 'textGray',
    },
  },
  'flex-layout.col#product-details-details': {
    children: [
      'flex-layout.col#product-details-nameBrand',
      'flex-layout.row#product-details-price',
      'flex-layout.row#product-seller',
      'flex-layout.row#product-unit-measurement',
      'flex-layout.row#description-product',
      //'product-description#price',
      //'flex-layout.col#product-plu',
      'rich-text#specifications-title',
      'product-specifications',
    ],
    props: {
      blockClass: 'sliderProductDetails;wrapperSm',
    },
  },

  'product-specifications': {
    props: {
      tableTitle: 'Especificaciones técnicas',
      blockClass: 'pdp-technical-specifications',
    },
  },

  'product-slider': {
    props: {
      height: 500,
      blockClass: 'sliderDetail',
    },
  },
  'flex-layout.row#description-product': {
    children: ['rich-text#description-title', 'flex-layout.col#product-desc'],
  },
  'rich-text#specifications-title': {
    props: {
      text: 'Especificaciones',
      blockClass: 'h3;productDescription',
    },
  },
  'flex-layout.col#product-desc': {
    children: ['collapse#description'],
  },
  'product-details-quantity#detail': {
    props: {
      AddIcon: 'icon#add',
      MinusIcon: 'icon#minus',
      hitSlop: {
        top: 16,
        left: 16,
        bottom: 16,
        right: 16,
      },
      blockClass: 'productBrandQuantityDetail',
    },
  },
  'product-add-to-cart-button#pdp': {
    children: ['rich-text#detail'],
    props: {
      modalType: 'acceptCancel',
      requiredSelectedAddress: true,
      contentSelectedAddress: 'flex-layout.row#contentModalDelivery',
      content: 'flex-layout.row#contentModalProceedCheckout',
      blockClass: 'addToCartDetailProduct',
    },
  },
  'rich-text#detail': {
    props: {
      text: 'Agregar',
      blockClass: 'h3;textSecondary',
    },
  },
  /**
   *  Secondary Stack PDP END
   */

  /**
   *  Profile Stack adddress BEGIN
   */
  'store.user-address': {
    blocks: ['flex-layout.col#address'],
    props: {
      blockClass: 'scrollViewContainer',
    },
  },
  'flex-layout.col#address': {
    children: [
      'flex-layout.col#newAddAddressAccept',
      'flex-layout.row#newAddAddress',
      'custom.close-action-sheet#link-save',
    ],
    props: {
      blockClass: 'locatorContainerWrapper;center;bg_white',
    },
  },
 'my-addresses.shelf': {
    children: ['store-locator-item'],
    props: {
      modalType: 'continue',
      content: 'flex-layout.row#contentModalRemoveAddressSuccess',
      deleteConfirmationContent: 'flex-layout.row#contentModalRemoveAddress',

      blockClass: 'locatorwrapper'
    },
  },
  // Modal de Remover Address satisfactoriamente

  'flex-layout.row#contentModalRemoveAddressSuccess': {
    children: ['flex-layout.col#contentModalRemoveAddressSuccess'],
    props: { blockClass: 'flexRowContentModalProceedCheckout' },
  },

  'flex-layout.col#contentModalRemoveAddressSuccess': {
    children: ['image#modalAddAddress', 'rich-text#contentModalRemoveAddressSuccess'],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'rich-text#contentModalRemoveAddressSuccess': {
    props: {
      text: 'La dirección ha sido eliminada satisfactoriamente!',
      blockClass: 'ModalProceedCheckouttext',
    },
  },

  // Modal de de borrar Direccion

  'flex-layout.row#contentModalRemoveAddress': {
    children: ['flex-layout.col#contentModalRemoveAddress'],
    props: { blockClass: 'flexRowContentModalProceedCheckout' },
  },

  'flex-layout.col#contentModalRemoveAddress': {
    children: ['rich-text#titleModalRemoveAddress'],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'rich-text#titleModalRemoveAddress': {
    props: {
      text: '¿Seguro que quieres eliminar la dirección?',
      blockClass: 'ModalProceedCheckouttext',
    },
  },

  'custom.address-selector': {
    props: {
      check: true,
      renderSelection: true,
      blockClass: 'locatorwrapper',
    },
  },

  'my-addresses.formatted-address': {
    props: {
      blockClass: 'locatorAdress',
    },
  },
  'store-locator-item': {
    children: ['flex-layout.row#address'],
    props: {
      name: 'selectorLocator',
      blockClass: 'center;alignCenter',
    },
  },
  'flex-layout.row#more-options-menu': {
    props: {
      blockClass: 'address-menu-options'
    }
  },
  'flex-layout.row#address': {
    children: [
      'custom.address-selector',
      //'store-locator-switch',
      //'my-addresses.formatted-address',
      //'flex-layout.col#icon-swipe'
    ],
    props: {
      blockClass: '',
    },
  },
  'flex-layout.row#newAddAddress': {
    children: ['custom.close-action-sheet#link-add'],
    props: {
      blockClass: 'addWrapperAddress;mb_2;mt_2;center',
    },
  },
  'store-link#userAddAddress': {
    props: {
      blockClass: 'linkAddAdresses',
      displayMode: 'anchor',
      label: 'Agregar nueva dirección',
      url: '/add-addresses',
    },
  },
  'icon#addNewAddress': {
    props: {
      lib: 'FontAwesome5',
      color: '#A4C735',
      name: 'plus',
      width: 50,
      height: 50,
    },
  },
  'rich-text#user-address': {
    props: {
      text: '¿A dónde enviamos tu pedido?',
      blockClass: 'userAdressText;alignCenter',
    },
  },
  'custom.close-action-sheet#link-add': {
    props: {
      closeComponent: 'store-link#userAddAddress',
    },
  },

  'flex-layout.col#newAddAddressAccept': {
    children: [
      'flex-layout.row#user-address',
      'rich-text#user-address',
      'my-addresses.shelf',
    ],
    props: {
      blockClass: 'mt_2;mb_2',
    },
  },
  'flex-layout.row#user-address': {
    children: ['my-account.email#user-address'],
    props: {
      blockClass: 'userEmail',
    },
  },
  'my-account.email#user-address': {
    props: {
      blockClass: 'body3;userAdressText',
    },
  },
  'custom.close-action-sheet#link-save': {
    props: {
      closeComponent: 'store-link#userAddAddressAccept',
    },
  },
  'store-link#userAddAddressAccept': {
    props: {
      blockClass: 'linkAddAdressesButton;body2;textSecondary',
      displayMode: 'button',
      redirectTo: '/my-addresses',
      label: 'Guardar',
    },
  },

  /**
   *  Profile Stack adddress END
   */

  /**
   *  Profile Stack add adddress BEGIN
   */

  'store.add-addresses': {
    blocks: ['scroll-view#add-address'],
  },
  'scroll-view#add-address': {
    children: ['flex-layout.col#customer-add-address'],
    props: {
      blockClass: 'scrollAddAddress;scrollViewContainer',
    },
  },
  'flex-layout.col#customer-add-address': {
    children: ['store-form.customer-add-address#my-address'],
    props: {
      blockClass: 'wrapperLg',
    },
  },
  'store-form.customer-add-address#my-address': {
    children: [
      'rich-text#newAddressTitle',
      'store-form.select-group#address',
      'store-form.input#street',
      'store-form.button#add-address-submit',
    ],
    props: {
      redirectTo: '/my-addresses',
      modalType: 'continue',
      content: 'flex-layout.row#contentModalAddAddress',
      schemaValidation: [
        {
          id: 'departments',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'required',
              params: ['Este campo es requerido'],
            },
          ],
        },
        {
          id: 'address',
          type: 'text',
          validationType: 'object',
          validations: [
            {
              type: 'required',
              params: ['Este campo es requerido'],
            },
          ],
        },
        {
          id: 'street',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'required',
              params: ['Este campo es requerido'],
            },
          ],
        },
      ],
      blockClass: 'AddAddressWrapper',
    },
  },
  // Modal de de añadir direcciones satisfactoriamente
  'flex-layout.row#contentModalAddAddress': {
    children: ['flex-layout.col#contentModalAddAddress'],
    props: { blockClass: 'flexRowContentModalProceedCheckout' },
  },
  'flex-layout.col#contentModalAddAddress': {
    children: ['image#modalAddAddress', 'rich-text#titleModalAddAddress'],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'image#modalAddAddress': {
    props: {
      uri: 'https://i.imgur.com/38TTWBq.png',
      width: 100,
      height: 100,
      blockClass: 'proceedChekoutImageStyles',
    },
  },
  'rich-text#titleModalAddAddress': {
    props: {
      text: 'Dirección añadida satisfactoriamente!',
      blockClass: 'ModalProceedCheckouttext',
    },
  },
  ////Agregar Dirección

  'rich-text#newAddressTitle': {
    props: {
      text: 'Agrega una nueva dirección',
      blockClass: 'alignCenter;body1;newAddressTitle',
    },
  },
  'store-form.select-group#address': {
    children: [
      'store-form.select-group-item#departments',
      'store-form.select-group-item#municipalicies',
    ],
    props: {
      blockClass: 'wrapperGroup',
    },
  },
  'store-form.select-group-item#departments': {
    props: {
      iconDisable: 'icon#chevronDown',
      name: 'departments',
      placeholder: 'Departamento',
      iconActive: 'icon#chevronUp',
      isRequired: true,
      blockClass: 'storeFormSelectAdresses;selectDefault',
    },
  },
  'icon#chevronUp': {
    props: {
      lib: 'FontAwesome5',
      name: 'chevron-up',
      size: 15,
      color: '#1FA02E',
    },
  },
  'icon#chevronDown': {
    props: {
      lib: 'FontAwesome5',
      name: 'chevron-down',
      size: 15,
      color: '#1FA02E',
    },
  },
  'store-form.select-group-item#municipalicies': {
    props: {
      name: 'municipalicies',
      placeholder: 'Ciudad',
      dependency: 'departments',
      iconDisable: 'icon#chevronDown',
      iconActive: 'icon#chevronUp',
      iconPosition: 'right',
      blockClass: 'storeFormSelectAdresses;selectDefault',
    },
  },
  'store-form.input#neighborhood': {
    props: {
      placeholder: 'Barrio',
      name: 'neighborhood',
      blockClass: 'storeFormAddressInputStyle',
    },
  },
  'store-form.select#street-type': {
    props: {
      name: 'street-type',
      iconPosition: 'right',
      iconDisable: 'icon#chevronDown',
      iconActive: 'icon#chevronUp',
      defaultText: 'Autopista',
      blockClass: 'storeFormSelectAdresses',
      options: [
        'Autopista',
        'Autovía',
        'Avenida',
        'Bulevar',
        'Calle',
        'Calle peatonal',
        'Callejón',
        'Camino',
        'Carrera',
      ],
    },
  },
  'store-form.input#street': {
    props: {
      placeholder: 'Dirección',
      name: 'street',
      blockClass: 'inputDefault;storeFormAddressInputStyle',
    },
  },
  'store-form.input#street-number': {
    props: {
      placeholder: 'Número',
      name: 'street-number',
      blockClass: 'storeFormAddressInputStyle',
    },
  },
  'store-form.button#add-address-submit': {
    props: {
      buttonText: 'Guardar y continuar',
      variant: 'secondary',
      blockClass: 'buttonTertiary;storeFormButtonStyle',
    },
  },

  /**
   *  Profile Stack add adddress END
   */
  /**
   *  Profile Stack update-profile START
   */
  'store.update-profile': {
    children: ['scroll-view#update-profile'],
  },
  'scroll-view#update-profile': {
    children: ['store-form.update-profile#update-profile'],
    props: {
      blockClass: 'scrollViewContainer',
    },
  },
  'store-form.update-profile#update-profile': {
    children: [
      'flex-layout.row#update-profile-title',
      'store-link#password-update',
      'store-form.input#first-name',
      'store-form.input#last-name',
      'store-form.date-picker#dateBirth',
      'store-form.input#cell-phone',
      'store-form.select#id-type',
      'store-form.input#id',
      'store-form.button#update-profile',
    ],
    props: {
      mode: 'onChange',
      blockClass: 'editProfileForm',
      redirectTo: '/feed',
      schemaValidation: [
        {
          id: 'firstName',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'required',
              params: ['Este campo es requerido'],
            },
            {
              type: 'max',
              params: [32, 'El nombre no puede ser mayor a 50 caracteres'],
            },
            {
              type: 'matches',
              params: [
                /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/,
                'El nombre solo puede contener letras',
              ],
            },
          ],
        },
        {
          id: 'lastName',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'required',
              params: ['Este campo es requerido'],
            },
            {
              type: 'max',
              params: [32, 'El apellido no puede ser mayor a 50 caracteres'],
            },
            {
              type: 'matches',
              params: [
                /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/,
                'El apellido solo puede contener letras',
              ],
            },
          ],
        },
        {
          id: 'dateBirth',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'required',
              params: ['Este campo es requerido'],
            },
          ],
        },
        {
          id: 'cellPhone',
          type: 'text',
          validationType: 'string',
          validations: [
            {
              type: 'required',
              params: ['Este campo es requerido'],
            },
            {
              type: 'matches',
              params: [/^[0-9]+$/, 'Solo pueden ser numeros'],
            },
            {
              type: 'min',
              params: [10, 'El celular no puede ser menor a 10 caracteres'],
            },
            {
              type: 'max',
              params: [10, 'El celular no puede ser mayor a 10 caracteres'],
            },
            {
              type: 'typeError',
              params: ['El número de celular debe ser válido'],
            },
          ],
        },
        {
          id: 'document',
          type: 'number',
          validationType: 'number',
          validations: [
            {
              type: 'required',
              params: ['Este campo es requerido'],
            },
            {
              type: 'min',
              params: [
                100000,
                'El número de documento no puede ser menor a 6 caracteres',
              ],
            },
            {
              type: 'max',
              params: [
                9999999999,
                'El número de documento no puede ser mayor a 10 caracteres',
              ],
            },
            {
              type: 'typeError',
              params: ['El número de documento debe ser válido'],
            },
          ],
        },
      ],
    },
  },
  'flex-layout.row#update-profile-title': {
    children: ['rich-text#update-profile'],
    props: {
      blockClass: 'center;mb_3;mt_4',
    },
  },
  'rich-text#update-profile': {
    props: {
      text: 'Mi perfil',
      blockClass: 'h2;center',
    },
  },
  'store-link#password-update': {
    props: {
      label: 'Cambiar contraseña',
      url: '/searchTerm',
      displayMode: 'button',
      blockClass: 'tertiaryLink;textSecondary;body2',
    },
  },
  'store-form.button#update-profile': {
    props: {
      buttonText: 'Guardar',
      blockClass: 'buttonTertiary;body2',
    },
  },
  'store-form.input#first-name': {
    children: ['icon#pass', 'icon#alert'],
    props: {
      label: 'Nombre',
      name: 'firstName',
      isRequired: true,
      rightIcon: true,
      blockClass: 'inputDefault',
      schemaValidation: {},
    },
  },
  'store-form.input#last-name': {
    children: ['icon#pass', 'icon#alert'],
    props: {
      label: 'Apellidos',
      name: 'lastName',
      isRequired: true,
      rightIcon: true,
      blockClass: 'inputDefault',
      schemaValidation: {},
    },
  },
  'store-form.date-picker#dateBirth': {
    children: ['icon#calendar'],
    props: {
      label: 'Fecha de nacimiento',
      isRequired: true,
      variant: 'secondary',
      blockClass: 'storeFormDatePicker',
    },
  },
  'store-form.input#cell-phone': {
    children: ['icon#pass', 'icon#alert'],
    props: {
      label: 'Telefono celular',
      name: 'cellPhone',
      isRequired: true,
      rightIcon: true,
      blockClass: 'inputDefault',
      schemaValidation: {},
    },
  },
  'store-form.select#id-type': {
    props: {
      iconDisable: 'icon#selectIcon2',
      name: 'documentType',
      label: 'Tipo de documento',
      iconPosition: 'right',
      defaultText: { label: '(CC)Cédula de ciudadanía', value: 'cedulaCOL' },
      options: [
        { label: '(CC)Cédula de ciudadanía', value: 'cedulaCOL' },
        { label: '(CE)Cédula de extranjería', value: 'cedulaEXTRANJERO' },
        { label: 'NIT', value: 'nit' },
      ],
      blockClass: 'selectDefault',
    },
  },
  'store-form.input#id': {
    children: ['icon#pass', 'icon#alert'],
    props: {
      label: 'Tarjeta Plata / Cédula',
      isRequired: true,
      rightIcon: true,
      blockClass: 'inputDefault',
      schemaValidation: {},
    },
  },

  /**
   *  Profile Stack update-profile START
   */
  'store.my-payments': {
    children: ['rich-text#my-payments'],
  },
  'rich-text#my-payments': {
    props: {
      text: 'Mis medios de pago',
    },
  },

  /**
   *  Profile Stack service-centers START
   */
  'store.services-centers': {
    children: ['scroll-view#container__services-centers']
  },

  'scroll-view#container__services-centers': {
    children: [
      'flex-layout.row#container__services-centers',
      'flex-layout.row#container__services-centers-brand-box_1',
      'flex-layout.row#container__services-centers-brand-box_2',
      'flex-layout.row#container__services-centers-brand-box_3',
      'flex-layout.row#container__services-centers-brand-box_4',
      'flex-layout.row#container__services-centers-brand-box_5',
      'flex-layout.col#container__services-centers-title-user',
    ],
    props: {
      blockClass: 'scrollViewContainer',
    },
  },

  'flex-layout.row#container__services-centers': {
    children: ['flex-layout.row#container__services-centers-title']
  },

  'flex-layout.row#container__services-centers-title': {
    children: [
      'flex-layout.col#container__services-centers-title',
      'flex-layout.col#container__services-centers-subTitle'
    ],
    props: {
      blockClass: 'flex_column;mt_3;center'
    }
  },

  'flex-layout.col#container__services-centers-title': {
    children: ['rich-text#container__services-centers-title'],
    props: {
      blockClass: 'center'
    }
  },

  'rich-text#container__services-centers-title': {
    props: {
      text: 'Centros de servicio',
      blockClass: 'h3;mainTitleServices'
    }
  },

  'flex-layout.col#container__services-centers-subTitle': {
    children: ['rich-text#container__services-centers-subTitle'],
    props: {
      blockClass: 'center;mt_4'
    }
  },

  'rich-text#container__services-centers-subTitle': {
    props: {
      text: 'Marcas',
      blockClass: 'h3;mainTitleServices'
    }
  },

  'flex-layout.row#container__services-centers-brand-box_1': {
    children: [
      'flex-layout.col#container__services-centers-brand-box_abba',
      'flex-layout.col#container__services-centers-brand-box_acer',
      'flex-layout.col#container__services-centers-brand-box_epson'
    ],
    props: {
      blockClass: 'mt_4;mb_3;ml_2;mr_2'
    }
  },

  'flex-layout.col#container__services-centers-brand-box_abba': {
    children: ['info-card#services-centers-brand-box_abba'],
    props: {
      blockClass: 'wrapperMed'
    }
  },

  'info-card#services-centers-brand-box_abba': {
    props: {
      width: 120,
      height: 30,
      imageUrl:
        'https://qaolimpica.vteximg.com.br/arquivos/abbaLogo.png',
      callToActionUrl: '',
      textPosition: 'bottom',
      textAlignment: 'center',
      isFullModeStyle: false,
      resizeMode: 'contain',
      modalType: 'custom',
      content: 'flex-layout.row#content-modal-abba',
      callToActionUrl: '/services/centers',
      blockClass: 'brand_imag_infoCard_1'
    },
  },
  //Service Centers modals using close custom modal
  'flex-layout.row#content-modal-abba': {
    children: ['flex-layout.col#content-modal-abba'],
    props: { blockClass: 'modalServiceCenters' },
  },
  'flex-layout.col#content-modal-abba': {
    children: [
      'custom.close-modal#service-centers',
      'flex-layout.row#modal-title-service-centers',
      'flex-layout.row#modal-brand-abba',
      'flex-layout.row#modal-phone-abba'
    ],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'custom.close-modal#service-centers': {
    props:{
      closeComponent: 'icon#close',
      blockClass: 'modalCloseButton' 
    }
  },
  'flex-layout.row#modal-title-service-centers': {
    children: ['rich-text#modal-title-service-centers'],
    props: {
      blockClass: 'modalTextCenter;mb_1',
    }
  },
  'rich-text#modal-title-service-centers': {
    props: {
      text: 'Centros de servicio',
      blockClass: 'body1;modalTitleServices',
    }
  },
  'flex-layout.row#modal-brand-abba': {
    children: ['rich-text#modal-brand-abba'],
    props: {
      blockClass: 'modalTextCenter;mb_1',
    },
  },
  'rich-text#modal-brand-abba': {
    props: {
      text: 'ABBA', 
      blockClass: 'body2;modalTextCenter;textGray',
    }
  },
  'flex-layout.row#modal-phone-abba': {
     children: ['rich-text#modal-phone-abba'],
     props: {
        blockClass: 'modalTextCenter',
     }
  },
  'rich-text#modal-phone-abba': {
    props: {
      text: '018000112057', 
      blockClass: 'body1;modalTextCenter;textGray;modalPhone',
    }
  },
  'flex-layout.col#container__services-centers-brand-box_acer': {
    children: ['info-card#services-centers-brand-box_acer'],
    props: {
      blockClass: 'wrapperMed'
    }
  },
  'info-card#services-centers-brand-box_acer': {
    props: {
      width: 120,
      height: 30,
      imageUrl:
        'https://qaolimpica.vteximg.com.br/arquivos/acerLogo.png',
      callToActionUrl: '',
      textPosition: 'bottom',
      textAlignment: 'center',
      isFullModeStyle: false,
      resizeMode: 'contain',
      modalType: 'custom',
      content: 'flex-layout.row#content-modal-acer',
      blockClass: 'brand_imag_infoCard_1'
    },
  },
  'flex-layout.row#content-modal-acer': {
    children: ['flex-layout.col#content-modal-acer'],
    props: { blockClass: 'modalServiceCenters' },
  },
  'flex-layout.col#content-modal-acer': {
    children: [
      'custom.close-modal#service-centers',
      'flex-layout.row#modal-title-service-centers',
      'flex-layout.row#modal-brand-acer',
      'flex-layout.row#modal-phone-acer'
    ],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'flex-layout.row#modal-brand-acer': {
    children: ['rich-text#modal-brand-acer'],
    props: {
      blockClass: 'modalTextCenter;mb_1',
    },
  },
  'rich-text#modal-brand-acer': {
    props: {
      text: 'ACER', 
      blockClass: 'body2;modalTextCenter;textGray',
    }
  },
  'flex-layout.row#modal-phone-acer': {
     children: ['rich-text#modal-phone-acer'],
     props: {
        blockClass: 'modalTextCenter',
     }
  },
  'rich-text#modal-phone-acer': {
    props: {
      text: '0180009157126', 
      blockClass: 'body1;modalTextCenter;textGray;modalPhone',
    }
  },
  'flex-layout.col#container__services-centers-brand-box_epson': {
    children: ['info-card#services-centers-brand-box_epson'],
    props: {
      blockClass: 'wrapperMed'
    }
  },

  'info-card#services-centers-brand-box_epson': {
    props: {
      width: 120,
      height: 30,
      imageUrl:
        'https://qaolimpica.vteximg.com.br/arquivos/epsonLogo.png',
      callToActionUrl: '',
      textPosition: 'bottom',
      textAlignment: 'center',
      isFullModeStyle: false,
      resizeMode: 'contain',
      modalType: 'custom',
      content: 'flex-layout.row#content-modal-epson',
      blockClass: 'brand_imag_infoCard_1'
    },
  },
  'flex-layout.row#content-modal-epson': {
    children: ['flex-layout.col#content-modal-epson'],
    props: { blockClass: 'modalServiceCenters' },
  },
  'flex-layout.col#content-modal-epson': {
    children: [
      'custom.close-modal#service-centers',
      'flex-layout.row#modal-title-service-centers',
      'flex-layout.row#modal-brand-epson',
      'flex-layout.row#modal-phone-epson'
    ],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'flex-layout.row#modal-brand-epson': {
    children: ['rich-text#modal-brand-epson'],
    props: {
      blockClass: 'modalTextCenter;mb_1',
    },
  },
  'rich-text#modal-brand-epson': {
    props: {
      text: 'EPSON', 
      blockClass: 'body2;modalTextCenter;textGray',
    }
  },
  'flex-layout.row#modal-phone-epson': {
     children: ['rich-text#modal-phone-acer'],
     props: {
        blockClass: 'modalTextCenter',
     }
  },
  'rich-text#modal-phone-epson': {
    props: {
      text: '018000915235', 
      blockClass: 'body1;modalTextCenter;textGray;modalPhone',
    }
  },
  'flex-layout.row#container__services-centers-brand-box_2': {
    children: [
      'flex-layout.col#container__services-centers-brand-box_haceb',
      'flex-layout.col#container__services-centers-brand-box_hp',
      'flex-layout.col#container__services-centers-brand-box_lenovo'
    ],
    props: {
      blockClass: 'mt_4;mb_2;ml_2;mr_2'
    }
  },

  'flex-layout.col#container__services-centers-brand-box_haceb': {
    children: ['info-card#services-centers-brand-box_haceb'],
    props: {
      blockClass: 'wrapperMed'
    }
  },

  'info-card#services-centers-brand-box_haceb': {
    props: {
      width: 125,
      height: 30,
      imageUrl:
        'https://qaolimpica.vteximg.com.br/arquivos/hacebLogo.png',
      callToActionUrl: '',
      textPosition: 'bottom',
      textAlignment: 'center',
      isFullModeStyle: false,
      resizeMode: 'contain',
      modalType: 'custom',
      content: 'flex-layout.row#content-modal-haceb',
      blockClass: 'brand_imag_infoCard_2'
    },
  },
  'flex-layout.row#content-modal-haceb': {
    children: ['flex-layout.col#content-modal-haceb'],
    props: { blockClass: 'modalServiceCenters' },
  },
  'flex-layout.col#content-modal-haceb': {
    children: [
      'custom.close-modal#service-centers',
      'flex-layout.row#modal-title-service-centers',
      'flex-layout.row#modal-brand-haceb',
      'flex-layout.row#modal-phone-haceb'
    ],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'flex-layout.row#modal-brand-haceb': {
    children: ['rich-text#modal-brand-haceb'],
    props: {
      blockClass: 'modalTextCenter;mb_1',
    },
  },
  'rich-text#modal-brand-haceb': {
    props: {
      text: 'HACEB', 
      blockClass: 'body2;modalTextCenter;textGray',
    }
  },
  'flex-layout.row#modal-phone-haceb': {
     children: ['rich-text#modal-phone-haceb'],
     props: {
        blockClass: 'modalTextCenter',
     }
  },
  'rich-text#modal-phone-haceb': {
    props: {
      text: '018000511000', 
      blockClass: 'body1;modalTextCenter;textGray;modalPhone',
    }
  },
  'flex-layout.col#container__services-centers-brand-box_hp': {
    children: ['info-card#services-centers-brand-box_hp'],
    props: {
      blockClass: 'wrapperMed'
    }
  },

  'info-card#services-centers-brand-box_hp': {
    props: {
      width: 120,
      height: 40,
      imageUrl:
        'https://qaolimpica.vteximg.com.br/arquivos/hpLogo.png',
      callToActionUrl: '',
      textPosition: 'bottom',
      textAlignment: 'center',
      isFullModeStyle: false,
      resizeMode: 'contain',
      modalType: 'custom',
      content: 'flex-layout.row#content-modal-hp',
      blockClass: 'brand_imag_infoCard_3'
    },
  },
  'flex-layout.row#content-modal-hp': {
    children: ['flex-layout.col#content-modal-hp'],
    props: { blockClass: 'modalServiceCenters' },
  },
  'flex-layout.col#content-modal-hp': {
    children: [
      'custom.close-modal#service-centers',
      'flex-layout.row#modal-title-service-centers',
      'flex-layout.row#modal-brand-hp',
      'flex-layout.row#modal-phone-hp'
    ],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'flex-layout.row#modal-brand-hp': {
    children: ['rich-text#modal-brand-hp'],
    props: {
      blockClass: 'modalTextCenter;mb_1',
    },
  },
  'rich-text#modal-brand-hp': {
    props: {
      text: 'HP', 
      blockClass: 'body2;modalTextCenter;textGray',
    }
  },
  'flex-layout.row#modal-phone-hp': {
     children: ['rich-text#modal-phone-hp'],
     props: {
        blockClass: 'modalTextCenter',
     }
  },
  'rich-text#modal-phone-hp': {
    props: {
      text: '0180005184842', 
      blockClass: 'body1;modalTextCenter;textGray;modalPhone',
    }
  },
  'flex-layout.col#container__services-centers-brand-box_lenovo': {
    children: ['info-card#services-centers-brand-box_lenovo'],
    props: {
      blockClass: 'wrapperMed'
    }
  },

  'info-card#services-centers-brand-box_lenovo': {
    props: {
      width: 120,
      height: 30,
      imageUrl:
        'https://qaolimpica.vteximg.com.br/arquivos/lenovoLogo.png',
      callToActionUrl: '',
      textPosition: 'bottom',
      textAlignment: 'center',
      isFullModeStyle: false,
      resizeMode: 'contain',
      modalType: 'custom',
      content: 'flex-layout.row#content-modal-lenovo',
      blockClass: 'brand_imag_infoCard_lenovo'
    },
  },
  'flex-layout.row#content-modal-lenovo': {
    children: ['flex-layout.col#content-modal-lenovo'],
    props: { blockClass: 'modalServiceCenters' },
  },
  'flex-layout.col#content-modal-lenovo': {
    children: [
      'custom.close-modal#service-centers',
      'flex-layout.row#modal-title-service-centers',
      'flex-layout.row#modal-brand-lenovo',
      'flex-layout.row#modal-phone-lenovo'
    ],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'flex-layout.row#modal-brand-lenovo': {
    children: ['rich-text#modal-brand-lenovo'],
    props: {
      blockClass: 'modalTextCenter;mb_1',
    },
  },
  'rich-text#modal-brand-lenovo': {
    props: {
      text: 'LENOVO', 
      blockClass: 'body2;modalTextCenter;textGray',
    }
  },
  'flex-layout.row#modal-phone-lenovo': {
     children: ['rich-text#modal-phone-lenovo'],
     props: {
        blockClass: 'modalTextCenter',
     }
  },
  'rich-text#modal-phone-lenovo': {
    props: {
      text: '018009170541', 
      blockClass: 'body1;modalTextCenter;textGray;modalPhone',
    }
  },
  'flex-layout.row#container__services-centers-brand-box_3': {
    children: [
      'flex-layout.col#container__services-centers-brand-box_lg',
      'flex-layout.col#container__services-centers-brand-box_mabe',
      'flex-layout.col#container__services-centers-brand-box_olimpo'
    ],
    props: {
      blockClass: 'mt_4;mb_2;ml_2;mr_2'
    }
  },

  'flex-layout.col#container__services-centers-brand-box_lg': {
    children: ['info-card#services-centers-brand-box_lg'],
    props: {
      blockClass: 'wrapperMed'
    }
  },

  'info-card#services-centers-brand-box_lg': {
    props: {
      width: 120,
      height: 50,
      imageUrl:
        'https://qaolimpica.vteximg.com.br/arquivos/lgLogo.png',
      callToActionUrl: '',
      textPosition: 'bottom',
      textAlignment: 'center',
      isFullModeStyle: false,
      resizeMode: 'contain',
      modalType: 'custom',
      content: 'flex-layout.row#content-modal-lg',
      blockClass: 'brand_imag_infoCard_4'
    },
  },
  'flex-layout.row#content-modal-lg': {
    children: ['flex-layout.col#content-modal-lg'],
    props: { blockClass: 'modalServiceCenters' },
  },
  'flex-layout.col#content-modal-lg': {
    children: [
      'custom.close-modal#service-centers',
      'flex-layout.row#modal-title-service-centers',
      'flex-layout.row#modal-brand-lg',
      'flex-layout.row#modal-phone-lg'
    ],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'flex-layout.row#modal-brand-lg': {
    children: ['rich-text#modal-brand-lg'],
    props: {
      blockClass: 'modalTextCenter;mb_1',
    },
  },
  'rich-text#modal-brand-lg': {
    props: {
      text: 'LG', 
      blockClass: 'body2;modalTextCenter;textGray',
    }
  },
  'flex-layout.row#modal-phone-lg': {
     children: ['rich-text#modal-phone-lg'],
     props: {
        blockClass: 'modalTextCenter',
     }
  },
  'rich-text#modal-phone-lg': {
    props: {
      text: '018000910683', 
      blockClass: 'body1;modalTextCenter;textGray;modalPhone',
    }
  },
  'flex-layout.col#container__services-centers-brand-box_mabe': {
    children: ['info-card#services-centers-brand-box_mabe'],
    props: {
      blockClass: 'wrapperMed;mt_2'
    }
  },

  'info-card#services-centers-brand-box_mabe': {
    props: {
      width: 120,
      height: 30,
      imageUrl:
        'https://qaolimpica.vteximg.com.br/arquivos/mabeLogo.png',
      callToActionUrl: '',
      textPosition: 'bottom',
      textAlignment: 'center',
      isFullModeStyle: false,
      resizeMode: 'contain',
      modalType: 'custom',
      content: 'flex-layout.row#content-modal-mabe',
      blockClass: 'brand_imag_infoCard_mabe'
    },
  },
  'flex-layout.row#content-modal-mabe': {
    children: ['flex-layout.col#content-modal-mabe'],
    props: { blockClass: 'modalServiceCenters' },
  },
  'flex-layout.col#content-modal-mabe': {
    children: [
      'custom.close-modal#service-centers',
      'flex-layout.row#modal-title-service-centers',
      'flex-layout.row#modal-brand-mabe',
      'flex-layout.row#modal-phone-mabe'
    ],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'flex-layout.row#modal-brand-mabe': {
    children: ['rich-text#modal-brand-mabe'],
    props: {
      blockClass: 'modalTextCenter;mb_1',
    },
  },
  'rich-text#modal-brand-mabe': {
    props: {
      text: 'MABE', 
      blockClass: 'body2;modalTextCenter;textGray',
    }
  },
  'flex-layout.row#modal-phone-mabe': {
     children: ['rich-text#modal-phone-mabe'],
     props: {
        blockClass: 'modalTextCenter',
     }
  },
  'rich-text#modal-phone-mabe': {
    props: {
      text: '018005183227', 
      blockClass: 'body1;modalTextCenter;textGray;modalPhone',
    }
  },
  'flex-layout.col#container__services-centers-brand-box_olimpo': {
    children: ['info-card#services-centers-brand-box_olimpo'],
    props: {
      blockClass: 'wrapperMed;mt_2'
    }
  },
  'info-card#services-centers-brand-box_olimpo': {
    props: {
      width: 120,
      height: 30,
      imageUrl:
        'https://qaolimpica.vteximg.com.br/arquivos/olimpoLogo.png',
      callToActionUrl: '',
      textPosition: 'bottom',
      textAlignment: 'center',
      isFullModeStyle: false,
      resizeMode: 'contain',
      modalType: 'custom',
      content: 'flex-layout.row#content-modal-olimpo',
      blockClass: 'brand_imag_infoCard_samsung'
    },
  },
  'flex-layout.row#content-modal-olimpo': {
    children: ['flex-layout.col#content-modal-olimpo'],
    props: { blockClass: 'modalServiceCenters' },
  },
  'flex-layout.col#content-modal-olimpo': {
    children: [
      'custom.close-modal#service-centers',
      'flex-layout.row#modal-title-service-centers',
      'flex-layout.row#modal-brand-olimpo',
      'flex-layout.row#modal-phone-olimpo'
    ],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'flex-layout.row#modal-brand-olimpo': {
    children: ['rich-text#modal-brand-olimpo'],
    props: {
      blockClass: 'modalTextCenter;mb_1',
    },
  },
  'rich-text#modal-brand-olimpo': {
    props: {
      text: 'OLIMPO', 
      blockClass: 'body2;modalTextCenter;textGray',
    }
  },
  'flex-layout.row#modal-phone-olimpo': {
     children: ['rich-text#modal-phone-olimpo'],
     props: {
        blockClass: 'modalTextCenter',
     }
  },
  'rich-text#modal-phone-olimpo': {
    props: {
      text: '018000944418', 
      blockClass: 'body1;modalTextCenter;textGray;modalPhone',
    }
  },
  'flex-layout.row#container__services-centers-brand-box_4': {
    children: [
      'flex-layout.col#container__services-centers-brand-box_oster',
      'flex-layout.col#container__services-centers-brand-box_samsung',
      'flex-layout.col#container__services-centers-brand-box_sony'
    ],
    props: {
      blockClass: 'mt_3;mb_3;ml_2;mr_2'
    }
  },

  'flex-layout.col#container__services-centers-brand-box_oster': {
    children: ['info-card#services-centers-brand-box_oster'],
    props: {
      blockClass: 'wrapperMed'
    }
  },

  'info-card#services-centers-brand-box_oster': {
    props: {
      width: 120,
      height: 30,
      imageUrl:
        'https://qaolimpica.vteximg.com.br/arquivos/osterLogo.png',
      callToActionUrl: '',
      textPosition: 'bottom',
      textAlignment: 'center',
      isFullModeStyle: false,
      resizeMode: 'contain',
      modalType: 'custom',
      content: 'flex-layout.row#content-modal-oster',
      blockClass: 'brand_imag_infoCard_oster'
    },
  },
  'flex-layout.row#content-modal-oster': {
    children: ['flex-layout.col#content-modal-oster'],
    props: { blockClass: 'modalServiceCenters' },
  },
  'flex-layout.col#content-modal-oster': {
    children: [
      'custom.close-modal#service-centers',
      'flex-layout.row#modal-title-service-centers',
      'flex-layout.row#modal-brand-oster',
      'flex-layout.row#modal-phone-oster'
    ],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'flex-layout.row#modal-brand-oster': {
    children: ['rich-text#modal-brand-oster'],
    props: {
      blockClass: 'modalTextCenter;mb_1',
    },
  },
  'rich-text#modal-brand-oster': {
    props: {
      text: 'OSTER', 
      blockClass: 'body2;modalTextCenter;textGray',
    }
  },
  'flex-layout.row#modal-phone-oster': {
     children: ['rich-text#modal-phone-oster'],
     props: {
        blockClass: 'modalTextCenter',
     }
  },
  'rich-text#modal-phone-oster': {
    props: {
      text: '018000180360', 
      blockClass: 'body1;modalTextCenter;textGray;modalPhone',
    }
  },
  'flex-layout.col#container__services-centers-brand-box_samsung': {
    children: ['info-card#services-centers-brand-box_samsung'],
    props: {
      blockClass: 'wrapperMed;mt_2'
    }
  },

  'info-card#services-centers-brand-box_samsung': {
    props: {
      width: 140,
      height: 30,
      imageUrl:
        'https://qaolimpica.vteximg.com.br/arquivos/samsungLogo.png',
      callToActionUrl: '',
      textPosition: 'bottom',
      textAlignment: 'center',
      isFullModeStyle: false,
      resizeMode: 'contain',
      modalType: 'custom',
      content: 'flex-layout.row#content-modal-samsung',
      blockClass: 'brand_imag_infoCard_samsung'
    },
  },
  'flex-layout.row#content-modal-samsung': {
    children: ['flex-layout.col#content-modal-samsung'],
    props: { blockClass: 'modalServiceCenters' },
  },
  'flex-layout.col#content-modal-samsung': {
    children: [
      'custom.close-modal#service-centers',
      'flex-layout.row#modal-title-service-centers',
      'flex-layout.row#modal-brand-samsung',
      'flex-layout.row#modal-phone-samsung'
    ],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'flex-layout.row#modal-brand-samsung': {
    children: ['rich-text#modal-brand-samsung'],
    props: {
      blockClass: 'modalTextCenter;mb_1',
    },
  },
  'rich-text#modal-brand-samsung': {
    props: {
      text: 'SAMSUNG', 
      blockClass: 'body2;modalTextCenter;textGray',
    }
  },
  'flex-layout.row#modal-phone-samsung': {
     children: ['rich-text#modal-phone-samsung'],
     props: {
        blockClass: 'modalTextCenter',
     }
  },
  'rich-text#modal-phone-samsung': {
    props: {
      text: '018000112112', 
      blockClass: 'body1;modalTextCenter;textGray;modalPhone',
    }
  },
  'flex-layout.col#container__services-centers-brand-box_sony': {
    children: ['info-card#services-centers-brand-box_sony'],
    props: {
      blockClass: 'wrapperMed;mt_2'
    }
  },
  'info-card#services-centers-brand-box_sony': {
    props: {
      width: 120,
      height: 30,
      imageUrl:
        'https://qaolimpica.vteximg.com.br/arquivos/sonyLogo.png',
      callToActionUrl: '',
      textPosition: 'bottom',
      textAlignment: 'center',
      isFullModeStyle: false,
      resizeMode: 'contain',
      modalType: 'custom',
      content: 'flex-layout.row#content-modal-sony',
      blockClass: 'brand_imag_infoCard_sony'
    },
  },
   'flex-layout.row#content-modal-sony': {
    children: ['flex-layout.col#content-modal-sony'],
    props: { blockClass: 'modalServiceCenters' },
  },
  'flex-layout.col#content-modal-sony': {
    children: [
      'custom.close-modal#service-centers',
      'flex-layout.row#modal-title-service-centers',
      'flex-layout.row#modal-brand-sony',
      'flex-layout.row#modal-phone-sony'
    ],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'flex-layout.row#modal-brand-sony': {
    children: ['rich-text#modal-brand-sony'],
    props: {
      blockClass: 'modalTextCenter;mb_1',
    },
  },
  'rich-text#modal-brand-sony': {
    props: {
      text: 'SONY', 
      blockClass: 'body2;modalTextCenter;textGray',
    }
  },
  'flex-layout.row#modal-phone-sony': {
     children: ['rich-text#modal-phone-sony'],
     props: {
        blockClass: 'modalTextCenter',
     }
  },
  'rich-text#modal-phone-sony': {
    props: {
      text: '018000940011', 
      blockClass: 'body1;modalTextCenter;textGray;modalPhone',
    }
  },
  'flex-layout.row#container__services-centers-brand-box_5': {
    children: [
      'flex-layout.col#container__services-centers-brand-box_whir'
    ],
    props: {
      blockClass: 'mt_4;ml_2;mr_2'
    }
  },

  'flex-layout.col#container__services-centers-brand-box_whir': {
    children: ['info-card#services-centers-brand-box_whir'],
    props: {
      blockClass: 'wrapperMed'
    }
  },

  'info-card#services-centers-brand-box_whir': {
    props: {
      width: 120,
      height: 40,
      imageUrl:
        'https://qaolimpica.vteximg.com.br/arquivos/whirLogo.png',
      callToActionUrl: '',
      textPosition: 'bottom',
      textAlignment: 'center',
      isFullModeStyle: false,
      resizeMode: 'contain',
      modalType: 'custom',
      content: 'flex-layout.row#content-modal-whirlpool',
      callToActionUrl: '/services/centers',
      blockClass: 'brand_imag_infoCard_whir'
    },
  },
  'flex-layout.row#content-modal-whirlpool': {
    children: ['flex-layout.col#content-modal-whirlpool'],
    props: { blockClass: 'modalServiceCenters' },
  },
  'flex-layout.col#content-modal-whirlpool': {
    children: [
      'custom.close-modal#service-centers',
      'flex-layout.row#modal-title-service-centers',
      'flex-layout.row#modal-brand-whirlpool',
      'flex-layout.row#modal-phone-whirlpool'
    ],
    props: { blockClass: 'flexColContentModalProceedCheckout' },
  },
  'flex-layout.row#modal-brand-whirlpool': {
    children: ['rich-text#modal-brand'],
    props: {
      blockClass: 'modalTextCenter;mb_1',
    },
  },
  'rich-text#modal-brand': {
    props: {
      text: 'WHIRLPOOL', 
      blockClass: 'body2;modalTextCenter;textGray',
    }
  },
  'flex-layout.row#modal-phone-whirlpool': {
     children: ['rich-text#modal-phone'],
     props: {
        blockClass: 'modalTextCenter',
     }
  },
  'rich-text#modal-phone': {
    props: {
      text: '018000112365', 
      blockClass: 'body1;modalTextCenter;textGray;modalPhone',
    }
  },
  'flex-layout.col#container__services-centers-title-user': {
    children: ['rich-text#container__services-centers-title-user'],
    props: {
      blockClass: 'center;mt_4'
    }
  },
  'rich-text#container__services-centers-title-user': {
    props: {
      text: 'Línea de atención al cliente: 01 8000 51 0510',
      blockClass: 'body1'
    }
  },

  /**
   *  store Profile points START
   */
   'store.profile-points':{
    children: ['scroll-view#profile-points']
  },

  'scroll-view#profile-points': {
    children: ['flex-layout.row#container-profile-points'],
    props: {
      blockClass: 'scrollViewContainer'
    }
  },

  'flex-layout.row#container-profile-points': {
    children: ['flex-layout.row#container-profile-points-box'],
    props: {
      blockClass: 'mt_3;mb_4'
    }
  },

  'flex-layout.row#container-profile-points-box': {
    children: [
      'flex-layout.col#container-profile-points-box'
    ],
    props: {
      blockClass: 'mt_2;contaninerProfileBox'
    }
  },

  'flex-layout.col#container-profile-points-box': {
    children: [
      'flex-layout.row#container-profile-points-title',
      'flex-layout.row#container-profile-points-subtitle',
      'flex-layout.row#container-profile-pointsNumber',
      'flex-layout.row#container-profile-description'
    ],
    props: {
      blockClass: 'mt_2'
    }
  },

  'flex-layout.row#container-profile-points-title': {
    children: ['rich-text#profile-points-title'],
    props: {
      blockClass: 'mt_4;center'
    }
  },

  'rich-text#profile-points-title': {
    props: {
      text: 'Estos son tus puntos',
      blockClass: 'profileTitleH3'
    }
  },

  'flex-layout.row#container-profile-points-subtitle': {
    children: ['rich-text#profile-points-sudtitle'],
    props: {
      blockClass: 'mt_3;center'
    }
  },

  'rich-text#profile-points-sudtitle': {
    props: {
      text: 'Hasta ayer, tienes acumulados',
      blockClass: 'profileTitleSubtitle3'
    }
  },

  'flex-layout.row#container-profile-pointsNumber': {
    children: ['rich-text#profile-points-pointsNumber'],
    props: {
      blockClass: 'mt_3;center'
    }
  },

  'rich-text#profile-points-pointsNumber': {
    props: {
      text: '10',
      blockClass: 'profileTitleH1'
    }
  },

  'flex-layout.row#container-profile-description': {
    children: ['rich-text#profile-points-description'],
    props: {
      blockClass: 'mt_1;center;mb_3'
    }
  },

  'rich-text#profile-points-description': {
    props: {
      text: 'Puntos Tarjeta Plata',
      blockClass: 'profileTitleSubtitle3'
    }
  },

  /**
   *  store Profile points END
   */

  /**  store My Orders START
   */

  'store.my-orders': {
    children: [
      'flex-layout.row#emptyOrderListTitle',
      'orders-layout#container-my-orders-scroll',
    ],
  },

  'flex-layout.row#emptyOrderListTitle': {
    children: ['flex-layout.col#emptyOrderListTitle'],
    props: {
      blockClass: 'myOrderScreen;pt_2',
    },
  },
  'flex-layout.col#emptyOrderListTitle': {
    children: ['rich-text#emptyOrderListTitle'],
    props: {
      blockClass: 'center',
    },
  },
  'rich-text#emptyOrderListTitle': {
    props: {
      text: 'Mis pedidos',
      blockClass: 'myOrdersTitle',
    },
  },

  'orders-layout#container-my-orders-scroll': {
    children: [
      // 'flex-layout.row#card-container-my-orders',
      // 'flex-layout.row#subtitle-my-orders',
      // 'flex-layout.row#payments-my-orders',
      'orders-layout#orders',
    ],
    props: {
      blockClass: 'myOrderScreen',
    },
  },
  'orders-layout#orders': {
    children: ['orders-layout.list#orderList'],
  },

  'orders-layout.list#orderList': {
    children: [
      'flex-layout.row#card-container-my-orders',
      'flex-layout.row#payments-my-orders',
      'flex-layout.row#subtitle-my-orders',
    ],
    props: {
      redirectTo: '/profile/order/{orderId}',
      ListEmptyComponent: 'flex-layout.row#emptyOrderList',
      blockClass: 'orderLayoutContainer',
    },
  },
  'flex-layout.row#emptyOrderList': {
    children: ['flex-layout.col#emptyOrderList'],
  },
  'flex-layout.col#emptyOrderList': {
    children: ['rich-text#emptyOrderListText'],
  },

  // ---------->>> No orders advice text

  'rich-text#emptyOrderListText': {
    props: {
      text: 'No tienes pedidos realizados',
      blockClass: 'bodyTextMyOrders;center',
      textAlignment: 'center',
    },
  },

  // ---------->>> Card info with main Order

  'flex-layout.row#card-container-my-orders': {
    children: ['flex-layout.row#card-container-my-orders-center'],
    props: {
      blockClass: 'myOrderCardInfo',
    },
  },

  'flex-layout.row#card-container-my-orders-center': {
    children: [
      'image#orders-in-progress',
      'flex-layout.col#card-container-my-orders-text',
      'orders-layout.show-more#orders-show-more-button',
    ],
    props: {
      blockClass: '',
    },
  },
  'image#orders-in-progress': {
    props: {
      uri: 'https://qaolimpica.vteximg.com.br/arquivos/current_order.png',
      width: 48,
      height: 48,
      blockClass: 'ordersInProgressImage',
    },
  },
  'flex-layout.col#card-container-my-orders-text': {
    children: ['rich-text#card-text-my-orders-in-progress'],
    props: {
      blockClass: 'center',
    },
  },

  'rich-text#card-text-my-orders-in-progress': {
    props: {
      text: 'Tienes un pedido\n en curso',
      blockClass: 'myOrdersTitle',
    },
  },

  'orders-layout.show-more#orders-show-more-button': {
    props: {
      variant: 'primary',
      buttonText: 'Ver más',
      redirectTo: '/feed',
      blockClass: 'primaryButtonShowMore',
    },
  },

  // ---------->>> List of orders done


  'flex-layout.row#subtitle-my-orders': {
    children: ['flex-layout.col#subtitle-my-orders'],
  },
  'flex-layout.col#subtitle-my-orders': {
    children: ['rich-text#subtitle-my-orders'],
    props: {
      blockClass: '',
    },
  },
  'rich-text#subtitle-my-orders': {
    props: {
      text: 'Mis pedidos realizados',
      blockClass: 'myOrdersTitle',
    },
  },
  'flex-layout.row#payments-my-orders': {
    children: [
      'flex-layout.col#oderDetails',
      'orders-layout.show-more#button-show-more-order',
    ],
    props: {
      blockClass: 'paymentsMyOrdersContainer',
    },
  },

  'flex-layout.col#oderDetails': {
    children: [
      'orders-layout.status#order-status',
      'orders-layout.date#order-date',
      'orders-layout.id#order-id',
      'order-detail.total-items#specificationLabelAmmount',
    ],
  },

  'orders-layout.status#order-status': {
    props: {
      blockClass: 'successTextMyOrders',
    },
  },
  'orders-layout.date#order-date': {
    props: {
      blockClass: 'bodyTextMyOrders',
    },
  },
  'orders-layout.id#order-id': {
    props: {
      blockClass: 'bodyTextMyOrders',
    },
  },

  'orders-layout.show-more#button-show-more-order': {
    props: {
      buttonText: 'Ver más',
      redirectTo: '/feed',
      blockClass: 'secondaryButtonShowMore',
    },
  },

  'order-detail.total-items#specificationLabelAmmount': {
    props: {
      formatted: 'Total: {totalItems}',
      deleteDecimals: true,
      blockClass: 'boldTextMyOrders',
    },
  },
  /**
   *  store My Orders END
   */
  /**
   *  store Express START
   */
  'store.express-shipping': {
    children: ['rich-text#my-payments'],
  },

  /**
   *  store Express END
   */

   /**
   *  store Menu-drawer START
   */
    'store.menu-drawer':{
      children: ['rich-text#my-payments'],
    },

    /**
     *  store Menu-drawer END
     */
   /**
   *  store drawer-test START
   */


  'store.drawer-test': {
    children: ['rich-text#my-payments'],
  },

  /**
   *  store drawer-test END
   */
  /**
   *   Profile Stack my adddresses BEGIN
   */
  'store.my-addresses': {
    blocks: ['flex-layout.col#my-address'],
  },
  'flex-layout.col#my-address': {
    children: [
      'flex-layout.row#title-my-addresses',
      'flex-layout.row#my-saved-addresses',
    ],
    props: {
      blockClass: 'bg_white;center;alignCenter',
    },
  },
  'flex-layout.row#title-my-addresses': {
    children: ['rich-text#my-addresses'],
    props: {
      blockClass: 'addressesTitleCont'
    }
  },
  'rich-text#my-addresses': {
    props: {
      text: 'Mis direcciones',
      blockClass: 'h3;myAddressesTitle',
    },
  },
  'flex-layout.row#my-saved-addresses': {
    children: ['flex-layout.col#my-saved-addresses'],
    props: {
      blockClass: 'center',
    },
  },
  'flex-layout.col#my-saved-addresses': {
    children: ['my-addresses.shelf#my-addresses', 'flex-layout.row#add-address'],
  },
   'my-addresses.shelf#my-addresses': {
    children: ['store-locator-item#my-addresses'],
    props: {
      modalType: 'continue',
      blockClass: '',
    },
  },
  'store-locator-item#my-addresses': {
    children: ['flex-layout.row#my-address'],
    props: {
      name: 'selectorLocator',
      blockClass: 'center;alignCenter',
    },
  },
  'flex-layout.row#add-address': {
    children: ['store-link#add-address'],
    props: {
      blockClass: 'addNewAddress'
    }
  },  
  'flex-layout.row#my-address': {
    children: ['custom.address-selector#my-addresses', 'icon#list-edit'],
     props: {
      blockClass: 'savedAddresses',
    },
  },
  'custom.address-selector#my-addresses': {
    props: {
      renderSelection: false,
    },
  },
  'store-link#add-address': {
    props: {
      blockClass: 'linkAddMyAdresses;body3;textSecondary',
      displayMode: 'button',
      label: 'Agregar nueva dirección',
      url: '/add-addresses',
    },
  },

  /**
   *  Profile Stack my adddresses END
   */
};

export { routes, interfaces, blocks };
