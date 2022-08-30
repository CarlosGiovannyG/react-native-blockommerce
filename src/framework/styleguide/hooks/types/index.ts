import { JSONContextValues, JSONSchemaType } from '../..';

export enum UITypes {
  generic = 'generic',
  animationsExamples = 'animations-examples',
  formHandler = 'store-form.handler',
  formCustom = 'store-form.custom',
  formInput = 'store-form.input',
  formButton = 'store-form.button',
  formSelectGroup = 'store-form.select-group',
  formSelectGroupItem = 'store-form.select-group-item',
  otpForm = 'store-form.otp',
  loginform = 'store-form.login',
  signInAsGuestform = 'store-form.sign-in-as-guest',
  signUpform = 'store-form.signup',
  confirmEmail = 'store-form.confirm-email',
  newPasswordForm = 'store-form.new-password',
  updateProfileForm = 'store-form.update-profile',
  otpCodeValidation = 'store-form.otp-code-validation',
  oAuthCodeValidation = 'store-form.oauth-code-validation',
  selectTenantFormComponent = 'store-form.select-tenant',
  addAddressForm = 'store-form.customer-add-address',
  updateAddressForm = 'store-form.customer-update-address',
  addWishlistForm = 'store-form.customer-add-wishlist',

  text = 'rich-text',
  flexcol = 'flex-layout.col',
  flexrow = 'flex-layout.row',
  image = 'image',
  imageBackground = 'image-background',
  webview = 'web-view',
  searchResultLayout = 'search-result-layout',
  listContextProductListComponent = 'list-context.product-list',
  shelf = 'product-summary.shelf',
  productSummaryName = 'product-summary-name',
  productSummaryPrice = 'product-summary-price',
  productSummaryBrand = 'product-summary-brand',
  productSummaryDescription = 'product-summary-description',
  productSummaryImage = 'product-summary-image',
  productSummaryTotalProducts = 'product-summary.total-products',
  productTotal = 'product-summary-total',
  sliderLayout = 'slider-layout',
  infoCard = 'info-card',
  accordion = 'accordion',
  accordionItem = 'accordion-item',
  accordionList = 'accordion-list',
  storeLink = 'store-link',
  scrollView = 'scroll-view',
  icon = 'icon',
  switchComponent = 'switch-component',
  datePicker = 'store-form.date-picker',
  formSelect = 'store-form.select',
  menu = 'menu',
  menuItem = 'menu-item',
  triggerUIAction = 'trigger.ui-action',
  conditionTheme = 'condition.theme',
  conditionProduct = 'condition.product',
  conditionProductDetails = 'condition.product-details',
  triggerTheme = 'trigger.theme',

  discountBadge = 'discountBadge',
  addToCartButton = 'add-to-cart-button',
  ProductSummaryQuantity = 'product-summary-quantity',
  ProductDetailsQuantity = 'product-details-quantity',
  productDetailRestrictionBinFlag = 'product-details-restriction-bin-flag',
  signout = 'signout',
  productDetails = 'product-details',
  productName = 'product-name',
  productSellerName = 'product-seller-name',
  productDescription = 'product-description',
  productPrice = 'product-price',
  productDiscount = 'product-discount',
  productImage = 'product-image',
  productSlider = 'product-slider',
  productBrand = 'product-brand',
  productReference = 'product-reference',
  productSpecifications = 'product-specifications',
  productDetailsAddToCartButton = 'product-add-to-cart-button',
  productMeasurementUnit = 'product-measurement-unit',
  productUnitMultiplier = 'product-unit-multiplier',

  cartLayout = 'cart-layout',
  proceedToCheckoutButton = 'proceed-checkout.button',
  cartRemoveButton = 'cart.remove-button',

  wishlistLayout = 'wishlist-layout',
  wishlistDetailLayout = 'wishlist-detail-layout',
  wishlistName = 'wishlist-name',

  addresslocatorComponent = 'address-locator',

  ordersLayout = 'orders-layout',
  ordersShowMore = 'orders-layout.show-more',
  orderId = 'orders-layout.id',
  orderDate = 'orders-layout.date',
  orderStatus = 'orders-layout.status',
  orderList = 'orders-layout.list',

  orderDetailLayout = 'order-detail-layout',
  orderDetailFullname = 'order-detail.fullname',
  orderDetailOrderId = 'order-detail.order-id',
  orderDetailPostalCode = 'order-detail.postal-code',
  orderDetailFormattedAddress = 'order-detail.formatted-address',
  orderDetailProductQuantity = 'order-detail.product-quantity',
  orderDetailTotalDiscounts = 'order-detail.total-discounts',
  orderDetailTotalItems = 'order-detail.total-items',
  orderDetailTotalShipping = 'order-detail.total-shipping',

  myAccount = 'my-account',
  myAccounyFullname = 'my-account.fullname',
  myAccountEmail = 'my-account.email',

  searchInput = 'search-input',

  myAddressesList = 'my-addresses.shelf',
  myAddressesFormattedAddress = 'my-addresses.formatted-address',
  myAddressesMoreOptions = 'my-addresses.more-options',
  myAddressSelectedAddressText = 'my-addresses.selected-address-text',

  storeLocatorShelf = 'store-locator.shelf',
  storeLocatorName = 'store-locator-name',
  storeLocatorAddress = 'store-locator-address',
  storeLocatorOpeningHours = 'store-locator-openingHours',
  storeLocatorItems = 'store-locator-item',
  storeLocatorMap = 'store-locator-map',

  myAddressesSwitch = 'store-locator-switch',

  toggleButton = 'toggle-button',
  toggleGroup = 'toggle-group',
  toggleItem = 'toggle-item',
  addressFinder = 'address-finder',
  filterSelectedFilters = 'filter.selected-filters',
  accordionFilterContainer = 'accordion-filter.container',
  accordionFilterItem = 'accordion-filter.item',
  accordionFilterSummary = 'accordion-filter.summary',
  accordionFilterDetails = 'accordion-filter.details',
  filterDeparment = 'filter.department',
  filterCategory = 'filter.category',
  filterFacetItem = 'filter.facet-item',
  filterShowMoreButton = 'filter.show-more-button',
  filterTitleTag = 'filter.title-tag',
  countrySelector = 'country-selector',
  selectDropdown = 'select-dropdown',

  collapse = 'collapse',

  shopSearchesLayout = 'shop-searches-layout',
  topSearchesLayout = 'top-searches-layout',
  myAddressSearchesLayout = 'my-address-searches-layout',

  searchHistoryComponent = 'search-history',
  wishlistShelf = 'wishlist.shelf',
  wishlistRemoveButton = 'wishlist.remove-button',
  wishlistQuantity = 'wishlist-quantity',
  addToWishlistButton = 'add-to-wishlist-button',
  wishlistRemoveItemButton = 'wishlist-item.remove-button',
  wishlistToCartButton = 'wishlist-to-cart-button',

  creditCardList = 'credit-card-list',
  creditCardLayout = 'credit-card-layout',
  creditCardItem = 'credit-card-item',

  tenantLayout = 'tenant-layout',
  giftCardLayout = 'gift-card-layout',
  giftCardNumber = 'gift-card-number',
  giftCardInitialValue = 'gift-card-initial-value',
  giftCardAvailableBalance = 'gift-card-available-balance',
  giftCardShelf = 'gift-card.shelf',

  giftCardDetailLayout = 'gift-card-detail-layout',
  giftCardDetailConsumedValue = 'gift-card-detail-consumed-value',
  giftCardDetailStoreName = 'gift-card-detail-store-name',
  giftCardDetailTransactionNumber = 'gift-card-detail-transaction-number',
  giftCardDetailTransactionDate = 'gift-card-detail-transaction-date',
  giftCardDetailShelf = 'gift-card-detail.shelf',

  resendCodeLink = 'resend-code-link',

  changeAddressComponent = 'my-addresses.change-address',

  deviceInfoComponent = 'device-info',

  svgAnimation = 'svg-animation',

  conditionCart = 'condition.cart',

}

export interface BasicInputReturnType {
  formContext: JSONContextValues;
  isRequired: boolean;
  name: string;
  type: string;
  pointer: string;
  getObject(): JSONSchemaType;
}

export interface UseObjectProperties {
  (props: UseObjectParameters): UseObjectReturnType;
}

export interface GenericInputParameters {
  (pointer: string): BasicInputReturnType;
}

export type UseObjectReturnType = BasicInputReturnType[];

export type UISchemaType = {
  type: UITypes;
  properties?: {
    [key: string]: UISchemaType;
  };
};

export type UseObjectParameters = { pointer: string; UISchema?: UISchemaType };
