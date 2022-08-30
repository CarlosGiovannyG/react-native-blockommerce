/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useEffect, useRef } from 'react';
import { useStyleClass } from '../../styleContext';
import { WebView } from 'react-native-webview';
import { BasicInputReturnType } from '../../hooks/types';
import { useCheckout } from '$commerce/checkout';
import { Linking, Platform } from 'react-native';
import { setOrderFormId } from '$commerce/utils/customer-order-form-id';
import { useCart } from '$commerce/cart';
import useResetFlux from '$commerce/utils/utils-hooks/use-reset-flux';

interface newNavState {
  url?: string;
  title?: string;
  loading?: boolean;
  canGoBack?: boolean;
  canGoForward?: boolean;
}

export const WebViewComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const { data: checkout, mutate } = useCheckout();
  const { data: cart, mutate: mutateCart } = useCart();
  const { reset } = useResetFlux();
  const uri =
    subSchema.checkout && subSchema.hostname
      ? `https://${subSchema.hostname}/checkout/?orderFormId=${checkout?.orderForm?.id}&channelId=app/#/shipping/`
      : subSchema.uri;

  //// this function injects javascript to the web in base to classes

  const injected = subSchema.classes
    ? subSchema.classes.reduce((accum: string, currentValue: string) => {
        accum += `document.querySelector('.${currentValue}').remove(); `;
        return accum;
      }, '')
    : '';

  const pickupInPOint = JSON.stringify({
    activeTab: 'pickup-in-point',
    selectedLeanShippingOption: 'CHEAPEST',
    isScheduledDeliveryActive: true,
    originComponent: 'omnishipping',
  });

  const delivery = JSON.stringify({
    activeTab: 'delivery',
    selectedLeanShippingOption: 'CHEAPEST',
    isScheduledDeliveryActive: true,
    originComponent: 'omnishipping',
  });

  const selectedAddress =
    checkout?.orderForm?.shipping?.selectedAddress?.addressType === 'search'
      ? pickupInPOint
      : delivery;

  const injected_checkout = `(function() {
    const tokenLocalStorage = window.localStorage.setItem('termCheck', 'true');;
    window.ReactNativeWebView.postMessage(tokenLocalStorage);
    window.ReactNativeWebView.postMessage(${selectedAddress});
    document.querySelector('.checkout-header').remove();
    document.querySelector('.checkout-footer').remove();
    document.querySelector('.checkout-footer').remove();
  })();`;
  const webview = useRef<WebView>(null);
  const handleWebViewNavigationStateChange = async (
    newNavState: newNavState
  ) => {
    const { url } = newNavState;
    if (!url) return;
    const {loading} = newNavState
    const jsScript = ` var intervalChangeButton = setInterval(() => {
      let changeAddress = document.getElementsByClassName('vtex-omnishipping-1-x-linkEdit');
      if(changeAddress.length > 0) {changeAddress[0].remove();}
    }, 1)`

   
    if (!loading) {
      webview.current.injectJavaScript(jsScript);
    }
    const newURL = 'framework://cart';
    const redirectTo = 'window.location = "' + newURL + '"';
    // redirect somewhere else
    if (url.includes(`https://${subSchema.hostname}/cart`)) {
   
      if (Platform.OS === 'ios') {
        webview.current.injectJavaScript(redirectTo);
      } else {
        Linking.canOpenURL('framework://cart')
          .then((supported) => {
            if (!supported) {
              console.log("Can't handle url: " + url);
            } else {
              return Linking.openURL('framework://cart');
            }
          })
          .catch((err) => console.error('An error occurred', err));
      }
    } else if (url.includes('/orderPlaced')) {
      const injected_orderPlaced = `(function() {
       
        document.querySelector('.vtex-store-link-0-x-link--logo-cart').remove();
        document.querySelector('.vtex-rich-text-0-x-container--title-cart').remove();
        document.querySelector('.vtex-flex-layout-0-x-flexRow--header-row-mobile1').remove();
      })();`;

      webview.current.injectJavaScript(injected_orderPlaced);
    } else if (url.includes('/account#/orders/')) {
      const newURLOrder = 'framework://MyOrders';
      const redirectToOrders = 'window.location = "' + newURLOrder + '"';

      if (Platform.OS === 'ios') {
        webview.current.injectJavaScript(redirectToOrders);
      } else {
        Linking.canOpenURL('framework://MyOrders')
          .then((supported) => {
            if (!supported) {
              console.log("Can't handle url: " + url);
            } else {
              return Linking.openURL('framework://MyOrders');
            }
          })
          .catch((err) => console.error('An error occurred', err));
      }
    }
  };

  const handlerFunc = async () => {
    return await reset();
  };

  useEffect(() => {
    return () => {
      if (checkout.orderForm.items.length) {
        mutate().then((checkout) => {
          console.log(checkout)
          if (!checkout.orderForm.items.length) {
            handlerFunc();
          }
        });
      }
    };
  }, [mutate, mutateCart]);

  return (
    <WebView
      androidHardwareAccelerationDisabled={true}
      onLoadProgress={() => {
        //your code goes here
      }}
      onNavigationStateChange={handleWebViewNavigationStateChange}
      // onLoadEnd={()=> webViewRef.current.injectJavaScript(injectedDelayed)}
      onMessage={() => {}}
      //ref={webViewRef}
      // @ts-ignore
      updateNavigationState={handleWebViewNavigationStateChange}
      ref={webview}
      injectedJavaScript={
        subSchema.js === 'jsCheckout' ? injected_checkout : injected
      }
      domStorageEnabled={true}
      scalesPageToFit={false}
      javaScriptEnabled={true}
      bounces={false}
      showsHorizontalScrollIndicator={false}
      javaScriptEnabledAndroid
      startInLoadingState
      cacheEnabled={false}
      cacheMode={'LOAD_NO_CACHE'}
      originWhitelist={['https://*']}
      style={{
        ...styles.container,
        opacity: 0.99,
        overflow: 'hidden',
        width: subSchema.width,
        height: subSchema.height,
      }}
      source={{ uri: uri }}
    />
  );
};
