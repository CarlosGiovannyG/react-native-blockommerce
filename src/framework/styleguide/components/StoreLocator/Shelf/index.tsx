/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC, useEffect, useState } from 'react';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { FlatList, View } from 'react-native';
import { StoreShelfContextProvider } from './context';
import useAddresses from '$core-commerce/customer/address/use-addresses';
import { useSelectAddress } from '$commerce/customer/address';
import { useCheckout } from '$commerce/checkout';
import { useTenantHandler } from '$styleguide/components/TenantLayout/context';

export const StoreLocatorShelfComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(
    ['switchStyles', 'container'],
    subSchema.blockClass
  );

  const selectAddress = useSelectAddress();
  const { data: checkout } = useCheckout();
  const [selectedItem, setSelectedItem] = useState(
    checkout?.orderForm?.shipping?.selectedAddress?.addressId || ''
  );
  const blocks = useChildrenBlocks(subSchema.blocks);
  const { list } = useTenantHandler();
  const selectedHandler = async (text: string) => {
    try {
      const selected = data?.find((pred) => pred.addressName === text);
      if (selected) {
        setSelectedItem(text);
        await selectAddress(selected);
      }
    } catch (e) {
      console.log('Store Locator', e);
    }
  };

  useEffect(() => {
    if (checkout?.orderForm?.shipping?.selectedAddress?.addressId) {
      setSelectedItem(
        checkout?.orderForm?.shipping?.selectedAddress?.addressId
      );
    }
  }, [checkout]);
  return (
    <View style={[styles.container]}>
      <FlatList
        horizontal={subSchema.horizontal}
        data={list} // renderItem={blocks}
        renderItem={({ item }) => {
          return (
            <StoreShelfContextProvider
              config={{
                data: item,
                item: item.name,
                setSelectedItem: selectedHandler,
                selectedItem: selectedItem,
              }}
            >
              <View>{blocks}</View>
            </StoreShelfContextProvider>
          );
        }}
        keyExtractor={(item) => item?.name}
      />
    </View>
  );
};
