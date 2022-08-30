/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { FlexColComponent } from '../FlexLayout/FlexCol/FlexCol';
import { FlexRowComponent } from '../FlexLayout/FlexRow/FlexRow';
import { ImageComponent } from '../Image';
import { FormButton } from '../StoreForm/Button';
import { FormInput } from '../StoreForm/Input';
import { LoginFormEmailComponent } from '../StoreForm/Forms/Auth/LoginFormEmail';
import { StoreLink } from '../StoreLink';
import { ScrollViewComponent } from '../ScrollView';
import { TextComponent } from '../Text';
import { WebViewComponent } from '../WebView/WebView';
import { Shelf } from '../ProductSummary/Shelf';
import { ProductSummaryName } from '../ProductSummary/Name';
import { SearchResultLayoutComponent } from '../SearchResultLayout';
import { ProductSummaryPrice } from '../ProductSummary/Price';
import { ProductSummaryBrand } from '../ProductSummary/Brand';
import { ProductSummaryDescription } from '../ProductSummary/Description';
import { ProductSummaryImage } from '../ProductSummary/Image';
import { SliderLayoutComponent } from '../SliderLayout';
import { InfoCard } from '../InfoCard';
import { IconComponent } from '../Icon';
import { DatePicker } from '../StoreForm/DatePicker';
import { UITypes, BasicInputReturnType } from '../../hooks/types';
import { Menu } from '../Menu';
import { MenuItem } from '../Menu/Item';
import { TriggerUIActionComponent } from '../TriggerUIAction';
import { ConditionThemeComponent } from '../ConditionTheme';
import { TriggerThemeComponent } from '../TriggerTheme';
import { DiscountBadgeComponent } from '../ProductSummary/DiscountBadge';
import { AddToCartButton } from '../ProductSummary/AddToCartButton';
import { ProductSummaryQuantity } from '../ProductSummary/QuantitySelector';
import { OtpFormEmailComponent } from '../StoreForm/Forms/Auth/OtpFormEmail';
import { StoreFormHandlerComponent } from '../StoreForm/Handler/StoreFormHandler';
import { UpdateProfileFormComponent } from '../StoreForm/Forms/Customer/UpdateProfileForm';
import { NewPasswordForm } from '../StoreForm/Forms/Auth/NewPasswordForm';
import { ProductDetails } from '../ProductDetails';
import { ProductDetailsNameComponent } from '../ProductDetails/components/name';
import { ProductDetailDescriptionComponent } from '../ProductDetails/components/description';
import { ProductDetailsPriceComponent } from '../ProductDetails/components/price';
import { ProductDetailDiscountComponent } from '../ProductDetails/components/discountBadge';
import { ProductDetailImage } from '../ProductDetails/components/image';
import { ProductDetailSliderComponent } from '../ProductDetails/components/slider';
import { CartLayoutComponent } from '../CartLayout';
import { ProceedToCheckoutButton } from '../ProductSummary/ProceedToCheckoutButton';
import { WishlistLayoutComponent } from '../WishlistLayout';
import { ProductDetailBrand } from '../ProductDetails/components/brand';
import { ProductDetailProductReference } from '../ProductDetails/components/productReference';
import { OrdersLayoutComponent } from '../OrdersLayout';
import { OtpCodeValidationComponent } from '../StoreForm/Forms/Auth/OtpCodeValidationForm';
import { OrderShowMoreComponent } from '../OrdersLayout/ShowMore';
import { MyAccountComponent } from '../MyAccount';
import { MyAccountEmailComponent } from '../MyAccount/Email';
import { MyAccountFullnameComponent } from '../MyAccount/Fullname';
import { SignoutComponent } from '../StoreForm/Forms/Auth/SignoutComponent';
import { SignupFormEmailComponent } from '../StoreForm/Forms/Auth/SignupFormEmail';
import { FormSelect } from '../StoreForm/Select';
import { StoreFormSwitchComponent } from '../StoreForm/Switch';
import { StoreLocatorNameComponent } from '../StoreLocator/Name';
import { StoreLocatorOpeningHoursComponent } from '../StoreLocator/OpeningHours';
import { StoreLocatorItemComponent } from '../StoreLocator/SwitchLocation';
import { ToggleGroup } from '../StoreForm/ToggleComponent/ToggleGroup';
import { ToggleItem } from '../StoreForm/ToggleComponent/ToggleItem';
import { FilterSelectedFiltersComponent } from '../SearchResultLayout/components/SelectedFilters';
import { AccordionFilterContainerComponent } from '../SearchResultLayout/components/AccordionFilter/AccordionFilterContainer';
import { AccordionFilterItemComponent } from '../SearchResultLayout/components/AccordionFilter/AccordionFilterItem';
import { AccordionFilterSummaryComponent } from '../SearchResultLayout/components/AccordionFilter/AccordionFilterSummary';
import { AccordionFilterDetailsComponent } from '../SearchResultLayout/components/AccordionFilter/AccordionFilterDetails';
import { FilterDeparmentComponent } from '../SearchResultLayout/components/Filters/Department';
import { FilterCategoryComponent } from '../SearchResultLayout/components/Filters/Category';
import { FilterFacetItemComponent } from '../SearchResultLayout/components/FacetItem';
import { FilterShowMoreButtonComponent } from '../SearchResultLayout/components/ShowMoreFilterButton';
import { FilterTitleTagComponent } from '../SearchResultLayout/components/TitleTag';
import { StoreLocatorMapComponent } from '../StoreLocator/Maps';
import { MyAddressesSwitchComponent } from '../MyAddresses/AddressSwitch';
import { ToggleButton } from '../StoreForm/ToggleComponent/ToggleButton';
import { TotalProductsComponent } from '../SearchResultLayout/components/TotalProducts';
import { CollapseComponent } from '../Collapse';
import { ProductSpecifications } from '../ProductDetails/components/ProductSpecifications';
import { MyAddressSearchesLayoutComponent } from '../SearchesLayout/containers/MyAddressSearchesLayout';
import { ProductDetailQuantity } from '../ProductDetails/components/QuantitySelector';
import { SearchInputComponent } from '../SearchesLayout/components/SearchInput/SearchInput';
import { HistoryComponent } from '../SearchesLayout/components/HistoryComponent';
import { ShopSearchesLayoutComponent } from '../SearchesLayout/containers/ShopSearchesLayout';
import { TopSearchesLayoutComponent } from '../SearchesLayout/containers/TopSearchesLayout';
import { AddAddressFormComponent } from '../StoreForm/Forms/Customer/Address/AddAddressForm';
import { SelectGroupComponent } from '../StoreForm/SelectGroup';
import { SelectGroupItemComponent } from '../StoreForm/SelectGroup/SelectGroupItem';
import { ProductSummaryTotal } from '../ProductSummary/TotalProduct';
import { ProductDetailsAddToCartButton } from '../ProductDetails/components/AddToCartButton';
import { OrderIdComponent } from '../OrdersLayout/OrderId';
import { OrderDateComponent } from '../OrdersLayout/Date';
import { OrderStatusComponent } from '../OrdersLayout/Status';
import { OrderListComponent } from '../OrdersLayout/List';
import { OrderDetailLayoutComponent } from '../OrdersDetails';
import { OrderDetailFullnameComponent } from '../OrdersDetails/components/ClientProfileData/Fullname';
import { OrderDetailFormattedAddressComponent } from '../OrdersDetails/components/ShippingData/FormattedAddress';
import { OrderDetailPostalCodeComponent } from '../OrdersDetails/components/ShippingData/PostalCode';
import { OrderDetailOrderIdComponent } from '../OrdersDetails/components/Detail/OrderId';

import { OrderDetailTotalDiscountsComponent } from '../OrdersDetails/components/Totals/Discounts';
import { OrderDetailTotalItemsComponent } from '../OrdersDetails/components/Totals/Items';
import { OrderDetailTotalShippingComponent } from '../OrdersDetails/components/Totals/Shipping';
import { OauthCodeValidationComponent } from '../StoreForm/Forms/Auth/OauthCodeValidationForm';
import { WishlistName } from '../WishlistLayout/Components/name';
import { AddWishlistFormComponent } from '../StoreForm/Forms/Customer/Wishlist/AddWishlistForm';
import { WishlistShelf } from '../WishlistLayout/Components/shelf';
import { WishlistRemoveButton } from '../WishlistLayout/Components/removeButton';
import { WishlistDetailLayoutComponent } from '../WishlistDetail';
import { WishlistQuantity } from '../WishlistLayout/Components/quantitySelector';
import { AddToWishlistButton } from '../ProductSummary/AddToWishlistButton';
import { WishlistItemRemoveButton } from '../WishlistLayout/Components/removeItemButton';
import { WishlistToCartButton } from '../WishlistLayout/Components/WishlistToCartButton';
import { ImageBackgroundComponent } from '../ImageBackground';
import { CreditCardLayoutLayoutComponent } from '../CreditCardLayout';
import { CreditCardList } from '../CreditCard/CreditCardList';
import { CreditCardItemComponent } from '../CreditCard/CreditCardList/Components/CreditCardItem';

import { MyAddressesListComponent } from '../MyAddresses/AddressList';
import { MyAddressesAddressComponent } from '../MyAddresses/Address';
import { AddressMoreOptionsComponent } from '../MyAddresses/MoreOptions';
import { UpdateAddressFormComponent } from '../StoreForm/Forms/Customer/Address/UpdateAddressForm';
import { ListContextProductListComponent } from '../ListContext/ProductList';
import { ProductDetailsSellerNameComponent } from '../ProductDetails/components/sellerName';
import { ProductDetailMeasurementUnit } from '../ProductDetails/components/measurementUnit';
import { ProductDetailUnitMultiplier } from '../ProductDetails/components/unitMultiplier';
import { SignInAsGuestFormComponent } from '../StoreForm/Forms/Auth/SignInAsGuest';
import { TenantLayoutComponent } from '../TenantLayout';
import { StoreLocatorShelfComponent } from '../StoreLocator/Shelf';
import { StoreLocatorAddressComponent } from '../StoreLocator/Address';
import { GiftCardLayoutComponent } from '../GiftCardsLayout';
import { GiftCardInitialValue } from '../GiftCardsLayout/Components/InitialValue';
import { GiftCardNumber } from '../GiftCardsLayout/Components/GiftCardNumber';
import { GiftCardAvailableBalance } from '../GiftCardsLayout/Components/AvailableBalance';
import { GiftCardShelf } from '../GiftCardsLayout/Components/Shelf';
import { GiftCardDetailLayoutComponent } from '../GiftCardDetail';
import { GiftCardDetailConsumedValue } from '../GiftCardDetail/Components/ConsumedValue';
import { GiftCardDetailStoreName } from '../GiftCardDetail/Components/StoreName';
import { GiftCardDetailTransactionNumber } from '../GiftCardDetail/Components/TransactionNumber';
import { GiftCardDetailTransactionDate } from '../GiftCardDetail/Components/TransactionDate';
import { GiftCardDetailShelf } from '../GiftCardDetail/Components/Shelf';
import { SelectTenantFormComponent } from '../StoreForm/Forms/Tenant/SelectTenantForm';
import { SelectedAddressTextComponent } from '../MyAddresses/SelectedAddressText';
import { CartItemRemoveButton } from '../ProductSummary/RemoveItemCart';
import { ConditionProductComponent } from '../ConditionTheme/ConditionProduct';
import { ProductDetailRestrictionBinFlagComponent } from '../ProductDetails/components/RestrictionBinFlag';
import { ConditionProductDetailsComponent } from '../ConditionTheme/ConditionProductDetails';
import { ResendCodeLink } from '../StoreForm/ResendCodeLink';
import { ChangeAddressComponent } from '../MyAddresses/ChangeAddress';
import { OrderDetailProductQuantityComponent } from '../OrdersDetails/components/Quantity/ProductQuantity';
import DeviceInfoComponent from '../DeviceInfo';
import { SvgAnimation } from '../SvgAnimation';
import { ConditionCartComponent } from '../ConditionTheme/ConditionCart';
const ObjectMap = {
  [UITypes.flexcol]: FlexColComponent,
  [UITypes.flexrow]: FlexRowComponent,
  [UITypes.image]: ImageComponent,
  [UITypes.imageBackground]: ImageBackgroundComponent,
  [UITypes.infoCard]: InfoCard,
  [UITypes.productSummaryBrand]: ProductSummaryBrand,
  [UITypes.productSummaryDescription]: ProductSummaryDescription,
  [UITypes.productSummaryImage]: ProductSummaryImage,
  [UITypes.productSummaryName]: ProductSummaryName,
  [UITypes.productSummaryPrice]: ProductSummaryPrice,
  [UITypes.ProductSummaryQuantity]: ProductSummaryQuantity,
  [UITypes.searchResultLayout]: SearchResultLayoutComponent,
  [UITypes.listContextProductListComponent]: ListContextProductListComponent,
  [UITypes.productSummaryTotalProducts]: TotalProductsComponent,
  [UITypes.shelf]: Shelf,
  [UITypes.sliderLayout]: SliderLayoutComponent,
  [UITypes.storeLink]: StoreLink,
  [UITypes.text]: TextComponent,
  [UITypes.webview]: WebViewComponent,
  [UITypes.scrollView]: ScrollViewComponent,
  [UITypes.icon]: IconComponent,
  [UITypes.switchComponent]: StoreFormSwitchComponent,
  [UITypes.formSelect]: FormSelect,
  [UITypes.datePicker]: DatePicker,
  [UITypes.menu]: Menu,
  [UITypes.menuItem]: MenuItem,
  [UITypes.generic]: View,
  [UITypes.triggerUIAction]: TriggerUIActionComponent,
  [UITypes.conditionTheme]: ConditionThemeComponent,
  [UITypes.conditionProduct]: ConditionProductComponent,
  [UITypes.conditionProductDetails]: ConditionProductDetailsComponent,
  [UITypes.triggerTheme]: TriggerThemeComponent,
  [UITypes.addToCartButton]: AddToCartButton,
  [UITypes.triggerTheme]: TriggerThemeComponent,
  // Store Form Standard
  [UITypes.formHandler]: StoreFormHandlerComponent,
  [UITypes.formButton]: FormButton,
  [UITypes.formInput]: FormInput,
  [UITypes.signInAsGuestform]: SignInAsGuestFormComponent,
  [UITypes.formSelectGroup]: SelectGroupComponent,
  [UITypes.formSelectGroupItem]: SelectGroupItemComponent,
  // Form Auth
  [UITypes.loginform]: LoginFormEmailComponent,
  [UITypes.signUpform]: SignupFormEmailComponent,
  [UITypes.otpForm]: OtpFormEmailComponent,
  [UITypes.newPasswordForm]: NewPasswordForm,
  [UITypes.signout]: SignoutComponent,
  [UITypes.otpCodeValidation]: OtpCodeValidationComponent,
  // Update Profile
  [UITypes.updateProfileForm]: UpdateProfileFormComponent,
  // Address
  [UITypes.addAddressForm]: AddAddressFormComponent,
  [UITypes.updateAddressForm]: UpdateAddressFormComponent,
  [UITypes.discountBadge]: DiscountBadgeComponent,
  // Tenants
  [UITypes.selectTenantFormComponent]: SelectTenantFormComponent,
  // Product Detail
  [UITypes.productDetails]: ProductDetails,
  [UITypes.productName]: ProductDetailsNameComponent,
  [UITypes.productSellerName]: ProductDetailsSellerNameComponent,
  [UITypes.productDescription]: ProductDetailDescriptionComponent,
  [UITypes.productPrice]: ProductDetailsPriceComponent,
  [UITypes.productDiscount]: ProductDetailDiscountComponent,
  [UITypes.productImage]: ProductDetailImage,
  [UITypes.productSlider]: ProductDetailSliderComponent,
  [UITypes.productBrand]: ProductDetailBrand,
  [UITypes.productReference]: ProductDetailProductReference,
  [UITypes.ProductDetailsQuantity]: ProductDetailQuantity,
  [UITypes.proceedToCheckoutButton]: ProceedToCheckoutButton,
  [UITypes.productSpecifications]: ProductSpecifications,
  [UITypes.productTotal]: ProductSummaryTotal,
  [UITypes.productDetailsAddToCartButton]: ProductDetailsAddToCartButton,
  [UITypes.productMeasurementUnit]: ProductDetailMeasurementUnit,
  [UITypes.productUnitMultiplier]: ProductDetailUnitMultiplier,
  [UITypes.productDetailRestrictionBinFlag]:
    ProductDetailRestrictionBinFlagComponent,

  // Cart
  [UITypes.cartLayout]: CartLayoutComponent,
  [UITypes.cartRemoveButton]: CartItemRemoveButton,
  // Wishlist
  [UITypes.wishlistLayout]: WishlistLayoutComponent,
  // Addresses
  // Order
  [UITypes.ordersLayout]: OrdersLayoutComponent,
  [UITypes.ordersShowMore]: OrderShowMoreComponent,
  // Account
  [UITypes.myAccount]: MyAccountComponent,
  [UITypes.myAccounyFullname]: MyAccountFullnameComponent,
  [UITypes.myAccountEmail]: MyAccountEmailComponent,
  // Search
  [UITypes.searchInput]: SearchInputComponent,
  //
  [UITypes.myAddressesList]: MyAddressesListComponent,
  [UITypes.myAddressesSwitch]: MyAddressesSwitchComponent,
  [UITypes.myAddressesFormattedAddress]: MyAddressesAddressComponent,
  [UITypes.myAddressesMoreOptions]: AddressMoreOptionsComponent,
  [UITypes.myAddressSelectedAddressText]: SelectedAddressTextComponent,
  //
  [UITypes.storeLocatorShelf]: StoreLocatorShelfComponent,
  [UITypes.storeLocatorName]: StoreLocatorNameComponent,
  [UITypes.storeLocatorOpeningHours]: StoreLocatorOpeningHoursComponent,
  [UITypes.storeLocatorItems]: StoreLocatorItemComponent,
  [UITypes.storeLocatorAddress]: StoreLocatorAddressComponent,
  [UITypes.storeLocatorMap]: StoreLocatorMapComponent,

  [UITypes.toggleGroup]: ToggleGroup,
  [UITypes.toggleItem]: ToggleItem,
  //
  [UITypes.filterSelectedFilters]: FilterSelectedFiltersComponent,
  [UITypes.accordionFilterContainer]: AccordionFilterContainerComponent,
  [UITypes.accordionFilterItem]: AccordionFilterItemComponent,
  [UITypes.accordionFilterSummary]: AccordionFilterSummaryComponent,
  [UITypes.accordionFilterDetails]: AccordionFilterDetailsComponent,
  [UITypes.filterDeparment]: FilterDeparmentComponent,
  [UITypes.filterCategory]: FilterCategoryComponent,
  [UITypes.filterFacetItem]: FilterFacetItemComponent,
  [UITypes.filterShowMoreButton]: FilterShowMoreButtonComponent,
  [UITypes.filterTitleTag]: FilterTitleTagComponent,
  [UITypes.toggleButton]: ToggleButton,
  [UITypes.collapse]: CollapseComponent,
  [UITypes.topSearchesLayout]: TopSearchesLayoutComponent,
  [UITypes.shopSearchesLayout]: ShopSearchesLayoutComponent,
  [UITypes.myAddressSearchesLayout]: MyAddressSearchesLayoutComponent,
  [UITypes.searchHistoryComponent]: HistoryComponent,

  [UITypes.orderId]: OrderIdComponent,
  [UITypes.orderDate]: OrderDateComponent,
  [UITypes.orderStatus]: OrderStatusComponent,
  [UITypes.orderList]: OrderListComponent,
  [UITypes.orderDetailLayout]: OrderDetailLayoutComponent,
  [UITypes.orderDetailFullname]: OrderDetailFullnameComponent,
  [UITypes.orderDetailFormattedAddress]: OrderDetailFormattedAddressComponent,
  [UITypes.orderDetailPostalCode]: OrderDetailPostalCodeComponent,
  [UITypes.orderDetailOrderId]: OrderDetailOrderIdComponent,

  [UITypes.orderDetailTotalDiscounts]: OrderDetailTotalDiscountsComponent,
  [UITypes.orderDetailTotalItems]: OrderDetailTotalItemsComponent,
  [UITypes.orderDetailTotalShipping]: OrderDetailTotalShippingComponent,

  [UITypes.oAuthCodeValidation]: OauthCodeValidationComponent,
  [UITypes.wishlistName]: WishlistName,
  [UITypes.addWishlistForm]: AddWishlistFormComponent,
  [UITypes.wishlistShelf]: WishlistShelf,
  [UITypes.wishlistRemoveButton]: WishlistRemoveButton,
  [UITypes.wishlistDetailLayout]: WishlistDetailLayoutComponent,
  [UITypes.wishlistQuantity]: WishlistQuantity,
  [UITypes.addToWishlistButton]: AddToWishlistButton,
  [UITypes.wishlistRemoveItemButton]: WishlistItemRemoveButton,
  [UITypes.wishlistToCartButton]: WishlistToCartButton,
  // credit cards
  [UITypes.creditCardLayout]: CreditCardLayoutLayoutComponent,
  [UITypes.creditCardList]: CreditCardList,
  [UITypes.creditCardItem]: CreditCardItemComponent,

  [UITypes.tenantLayout]: TenantLayoutComponent,

  [UITypes.giftCardLayout]: GiftCardLayoutComponent,
  [UITypes.giftCardInitialValue]: GiftCardInitialValue,
  [UITypes.giftCardNumber]: GiftCardNumber,
  [UITypes.giftCardAvailableBalance]: GiftCardAvailableBalance,
  [UITypes.giftCardShelf]: GiftCardShelf,
  [UITypes.giftCardDetailLayout]: GiftCardDetailLayoutComponent,
  [UITypes.giftCardDetailConsumedValue]: GiftCardDetailConsumedValue,
  [UITypes.giftCardDetailStoreName]: GiftCardDetailStoreName,
  [UITypes.giftCardDetailTransactionNumber]: GiftCardDetailTransactionNumber,
  [UITypes.giftCardDetailTransactionDate]: GiftCardDetailTransactionDate,
  [UITypes.giftCardDetailShelf]: GiftCardDetailShelf,

  [UITypes.resendCodeLink]: ResendCodeLink,
  [UITypes.changeAddressComponent]: ChangeAddressComponent,

  [UITypes.orderDetailProductQuantity]: OrderDetailProductQuantityComponent,
  [UITypes.deviceInfoComponent]: DeviceInfoComponent,
  [UITypes.svgAnimation]: SvgAnimation,
  [UITypes.conditionCart]: ConditionCartComponent,
};

interface SpecializedObjectProps {
  baseObject: BasicInputReturnType;
}

export const SpecializedObject: FC<SpecializedObjectProps> = (props) => {
  const ComponentObject = useMemo(
    () => ObjectMap[props.baseObject.type],
    [props.baseObject.type]
  );

  if (!ComponentObject)
    throw new Error(
      `El componente "${props.baseObject.type}" no existe en el Styleguide`
    );

  return <ComponentObject inputObject={props.baseObject} />;
};
