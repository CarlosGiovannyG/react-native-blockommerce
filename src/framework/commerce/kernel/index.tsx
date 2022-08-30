/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {
  ReactNode,
  MutableRefObject,
  createContext,
  useContext,
  useMemo,
  useRef,
} from 'react';

import type {
  Customer,
  Wishlist,
  Cart,
  Product,
  Signup,
  Login,
  Logout,
  UpdateProfile,
  OtpCodeValidation,
  Session,
  TopSearches,
  Checkout,
  OAuthValidation,
} from '$core-commerce/types';

import type { Fetcher, SWRHook, MutationHook } from './utils/types';
import { UpdateCheckoutHook } from './types/checkout/updateCheckout';
import { GetStoresHook } from './types/stores';
import { GetProductsByIdentifierHook } from './types/product';
import { ResetPasswordHook } from './types/resetPassword';
import { SignInAsGuestHook } from './types/sign-in-as-guest';
import { GetTenantHook, SelectTenantHook } from './types/Tenant';
import { GetGiftCardsHook } from './types/giftcard';
import { GetProductMetadataHook } from './types/product-metadata';

const Commerce = createContext<CommerceContextValue<any> | {}>({});

export type Provider = CommerceConfig & {
  fetcher: Fetcher;
  cart?: {
    useCart?: SWRHook<Cart.GetCartHook>;
    useAddItem?: MutationHook<Cart.AddItemHook>;
    useUpdateItem?: MutationHook<Cart.UpdateItemHook>;
    useRemoveItem?: MutationHook<Cart.RemoveItemHook>;
  };
  checkout?: {
    useCheckout?: SWRHook<Checkout.GetCheckoutHook>;
    useSubmitCheckout?: MutationHook<Checkout.SubmitCheckoutHook>;
    useUpdateCheckout: MutationHook<UpdateCheckoutHook>;
  };
  wishlist?: {
    useWishlist?: SWRHook<Wishlist.GetWishlistHook>;
    useAddItem?: MutationHook<Wishlist.AddItemHook>;
    useRemoveItem?: MutationHook<Wishlist.RemoveItemHook>;
    useWishlistDetail?: SWRHook<Wishlist.GetWishlistDetailHook>;
    useAddItemDetail?: MutationHook<Wishlist.AddItemHook>;
    useUpdateItemDetail?: MutationHook<Wishlist.UpdateWishlistHook>;
    useRemoveItemDetail?: MutationHook<Wishlist.RemoveItemHook>;
  };
  customer?: {
    order?: {
      useOrders?: SWRHook<Customer.Order.GetOrdersHook>;
      useOrderById: SWRHook<Customer.Order.GetOrderByIdHook>;
    };
    card?: {
      useCards?: SWRHook<Customer.Card.GetCardsHook>;
      useAddItem?: MutationHook<Customer.Card.AddItemHook>;
      useUpdateItem?: MutationHook<Customer.Card.UpdateItemHook>;
      useRemoveItem?: MutationHook<Customer.Card.RemoveItemHook>;
    };
    address?: {
      useAddresses?: SWRHook<Customer.Address.GetAddressesHook>;
      useSelectAddress: MutationHook<Customer.Address.SelectAddressHook>;
      useAddItem?: MutationHook<Customer.Address.AddItemHook>;
      useUpdateItem?: MutationHook<Customer.Address.UpdateItemHook>;
      useRemoveItem?: MutationHook<Customer.Address.RemoveItemHook>;
      useGeocode?: MutationHook<Customer.Address.GetGeocodeHook>;
    };
    useCustomer?: SWRHook<Customer.CustomerHook>;
    useUpdateProfile?: MutationHook<UpdateProfile.UpdateProfileHook>;
  };
  session?: {
    useCreateSession?: MutationHook<Session.CreateSessionHook>;
    useUpdateSession?: MutationHook<Session.UpdateSessionHook>;
  };
  products?: {
    useSearch?: SWRHook<Product.SearchProductsHook>;
    useProduct?: SWRHook<any>;
    useProductMetadata?: SWRHook<GetProductMetadataHook<any>>;
    useTopSearches?: SWRHook<TopSearches.TopSearchesHook>;
    useGetProductsByIdentifier: MutationHook<GetProductsByIdentifierHook>;
  };
  stores?: {
    useStores: SWRHook<GetStoresHook>;
  };
  auth?: {
    useSignInAsAGuest?: MutationHook<SignInAsGuestHook>;
    useResetPassword?: MutationHook<ResetPasswordHook>;
    useSignup?: MutationHook<Signup.SignupHook>;
    useLogin?: MutationHook<Login.LoginHook>;
    useLogout?: MutationHook<Logout.LogoutHook>;
    useOtp?: MutationHook<Logout.LogoutHook>;
    useOtpCodeValidation: MutationHook<OtpCodeValidation.OtpCodeValidationHook>;
    useOAuthValidation: MutationHook<OAuthValidation.OAuthValidationHook>;
  };
  tenant: {
    useSelectTenant: MutationHook<SelectTenantHook>;
    useTenant: SWRHook<GetTenantHook>;
  },
  giftcard: {
    useGiftCards: SWRHook<GetGiftCardsHook>
    useGiftCardMovements: SWRHook<GetGiftCardsHook>
  }
};

export type CommerceProps<P extends Provider> = {
  children?: ReactNode;
  provider: P;
  config: CommerceConfig;
};

export type CommerceConfig = Omit<
  CommerceContextValue<any>,
  'providerRef' | 'fetcherRef'
> & {
  config: CommerceConfigProviderJSON;
};

export type CommerceConfigProviderJSON = {
  provider: string;
  features: {
    wishlist: boolean;
    cart: boolean;
    search: boolean;
    customerAuth: boolean;
  };
};

export type CommerceContextValue<P extends Provider> = {
  providerRef: MutableRefObject<P>;
  fetcherRef: MutableRefObject<Fetcher>;
  locale: string;
  cartCookie: string;
};

export function CommerceProvider<P extends Provider>({
  provider,
  children,
  config,
}: CommerceProps<P>) {
  if (!config) {
    throw new Error('CommerceProvider requires a valid config object');
  }

  const providerRef = useRef(provider);
  // TODO: Remove the fetcherRef

  const cfg = useMemo(
    () => ({
      providerRef,
      locale: config.locale,
      cartCookie: config.cartCookie,
      config: config.config,
    }),
    [config.locale, config.cartCookie, config.config]
  );

  return <Commerce.Provider value={cfg}>{children}</Commerce.Provider>;
}

export function useCommerce<P extends Provider>() {
  return useContext(Commerce) as CommerceContextValue<P>;
}
