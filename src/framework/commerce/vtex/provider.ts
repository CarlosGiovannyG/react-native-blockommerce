import fetcher from './fetcher';

import { handler as useCustomer } from './customer/use-customer';

import { handler as useSearch } from './product/use-search';
import { handler as useProduct } from './product/use-product';
import { handler as useProductMetadata } from './product/use-product-metadata';
import { handler as useGetProductsByIdentifier } from './product/use-get-product-by-identifier';

import { handler as useSignInAsAGuest } from './auth/use-sign-in-as-guest';
import { handler as useLogin } from './auth/use-login';
import { handler as useLogout } from './auth/use-logout';
import { handler as useSignup } from './auth/use-signup';
import { handler as useOtp } from './auth/use-otp';
import { handler as useUpdateProfile } from './customer/use-update-profile';
import { handler as useOtpCodeValidation } from './auth/use-otp-code-validation';
import { handler as useOAuthValidation } from './auth/use-oauth-validation';
import { handler as useCreateSession } from './session/use-create-session';
import { handler as useUpdateSession } from './session/use-update-session';
import { handler as useTopSearches } from './product/use-top-searches';
import { handler as useResetPassword } from './auth/use-reset-password';
// Cart
import { handler as useCart } from './cart/use-cart';
import { handler as useAddItem } from './cart/use-add-item';
import { handler as useUpdateItem } from './cart/use-update-item';
import { handler as useRemoveItem } from './cart/use-remove-item';
// Address
import { handler as useAddresses } from './customer/address/use-addresses';
import { handler as useAddAddress } from './customer/address/use-add-item';
import { handler as useUpdateAddress } from './customer/address/use-update-item';
import { handler as useRemoveAddress } from './customer/address/use-remove-item';
import { handler as useGeocode } from './customer/address/use-geocode';
import { handler as useSelectAddress } from './customer/address/use-select-address';
//
import { handler as useOrders } from './customer/order/use-orders';
// Card
import { handler as useAddCard } from './customer/card/use-add-item';
import { handler as useUpdateCard } from './customer/card/use-update-item';
import { handler as useRemoveCard } from './customer/card/use-remove-item';
import { handler as useCards } from './customer/card/use-cards';
// Checkout // Order-Form
import { handler as useCheckout } from './checkout/use-checkout';
import { handler as useSubmitCheckout } from './checkout/use-submit-checkout';
import { handler as useUpdateCheckout } from './checkout/use-update-checkout';
// Wishlist
import { handler as useWishlist } from './wishlist/use-wishlist';
import { handler as useAddWishlist } from './wishlist/use-add-item';
import { handler as useRemoveWishlist } from './wishlist/use-remove-item';
import { handler as useWishlistDetail } from './wishlist/use-wishlist-detail';
import { handler as useAddItemDetail } from './wishlist/use-add-item-detail';
import { handler as useUpdateItemDetail } from './wishlist/use-update-item-detail';
import { handler as useRemoveWishlistItem } from './wishlist/use-remove-item-detail';
// Stores
import { handler as useStores } from './stores/use-stores';
import { handler as useOrderById } from './customer/order/use-order-by-id';

import { handler as useTenant } from './tenant/use-tenant';

import { handler as useGiftCards } from './giftcard/use-gift-cards';
import { handler as useGiftCardMovements} from './giftcard/use-gift-card-movements';

export type Provider = typeof localProvider;
export const localProvider = {
  locale: 'es-CO',
  cartCookie: 'session',
  fetcher: fetcher,
  cart: { useCart, useAddItem, useUpdateItem, useRemoveItem },
  wishlist: {
    useWishlist,
    useAddItem: useAddWishlist,
    useRemoveItem: useRemoveWishlist,
    useWishlistDetail,
    useAddItemDetail: useAddItemDetail,
    useUpdateItemDetail: useUpdateItemDetail,
    useRemoveItemDetail: useRemoveWishlistItem,
  },
  checkout: {
    useCheckout,
    useSubmitCheckout,
    useUpdateCheckout,
  },
  customer: {
    useCustomer,
    useUpdateProfile,
    address: {
      useAddItem: useAddAddress,
      useUpdateItem: useUpdateAddress,
      useRemoveItem: useRemoveAddress,
      useAddresses,
      useGeocode,
      useSelectAddress,
    },
    card: {
      useCards,
      useUpdateCard,
      useAddCard,
      useRemoveCard,
    },
    order: {
      useOrders,
      useOrderById,
    },
  },
  stores: {
    useStores,
  },
  session: { useCreateSession, useUpdateSession },
  products: {
    useSearch,
    useProduct,
    useTopSearches,
    useProductMetadata,
    useGetProductsByIdentifier,
  },
  auth: {
    useSignInAsAGuest,
    useLogin,
    useLogout,
    useSignup,
    useOtp,
    useOtpCodeValidation,
    useResetPassword,
    useOAuthValidation,
  },
  tenant: {
    useTenant,
  },
  giftcard: {
    useGiftCards,
    useGiftCardMovements
  },
};
