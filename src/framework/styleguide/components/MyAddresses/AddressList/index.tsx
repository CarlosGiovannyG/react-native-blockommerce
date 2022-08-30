import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC, useEffect, useState } from 'react';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { FlatList, View } from 'react-native';
import { StoreShelfContextProvider } from './context';
import useAddresses from '$core-commerce/customer/address/use-addresses';
import { useRemoveItem, useSelectAddress } from '$commerce/customer/address';
import { useCheckout } from '$commerce/checkout';
import { Swipeable } from 'react-native-gesture-handler';
import { useLinkTo } from '@react-navigation/native';
import RightSwipeActions from '$styleguide/components/common/RightSwipeActions';
import { useUI } from '$styleguide/components/UIActionsHandler';
import { ModalModes } from '$styleguide/components/common/ModalComponent';

export const MyAddressesListComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(
    ['switchStyles', 'container'],
    subSchema.blockClass
  );
  const blocks = useChildrenBlocks(subSchema.blocks);
  const { data, isLoading } = useAddresses();

  const selectAddress = useSelectAddress();
  const removeAddress = useRemoveItem();
  const linkTo = useLinkTo();
  const { openModal, closeModal } = useUI();

  const { data: checkout } = useCheckout();
  const [selectedItem, setSelectedItem] = useState(
    checkout?.orderForm?.shipping?.selectedAddress?.addressId || ''
  );

  const selectedHandler = async (text: string) => {
    try {
      const selected = data?.find((pred) => pred?.addressName === text);
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

  if (isLoading) return null;

  const onDelete = async (addressName: any) => {
    try {
      if (subSchema.deleteConfirmationContent) {
        openModal({
          content: subSchema.deleteConfirmationContent,
          modalType: ModalModes.acceptCancel,
          style: subSchema.blockClass,
          onAccept: async () => {
            await removeAddress({ addressName: addressName });
            closeModal();
            if (subSchema.content && subSchema.modalType) {
              openModal({
                content: subSchema.content,
                modalType: subSchema.modalType,
                style: subSchema.blockClass,
                onAccept: () => {
                  closeModal();
                },
              });
            } else {
              console.log('se cerró');
            }
          },
          onCancel: () => {
            closeModal();
          },
        });
      } else {
        await removeAddress({ addressName: addressName });

      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={subSchema.horizontal}
        data={data} // renderItem={blocks}
        renderItem={({ item }) => (
          <StoreShelfContextProvider
            config={{
              data: item,
              item: item?.addressName,
              setSelectedItem: selectedHandler,
              selectedItem: selectedItem,
            }}
          >
            <Swipeable
              rightThreshold={30}
              renderRightActions={() => (
                <RightSwipeActions
                  onDeleteCallback={()=> onDelete(item?.addressName)}
                  onEditCallback={() => {
                    linkTo(
                      `/account/profile/address/edit/${item?.addressName}`
                    );
                  }}
                />
              )}
            >
              <View style={{ backgroundColor: '#fff' }}>{blocks}</View>
            </Swipeable>
          </StoreShelfContextProvider>
        )}
        keyExtractor={(item) => item?.addressName}
      />
    </View>
  );
};
