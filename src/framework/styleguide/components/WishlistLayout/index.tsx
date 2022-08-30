import React, { FC } from 'react';
import { useStyleClass } from '../../styleContext';
import { ActivityIndicator, View } from 'react-native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../hooks/types';
import useWishlist from '$commerce/wishlist/use-wishlist';
import { WishlistSummaryHandlerProvider } from './context';

export const WishlistLayoutComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  //const { data, isLoading } = useCart();

  const { data, isLoading } = useWishlist();
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  
  return (
    <WishlistSummaryHandlerProvider config={{ list: data ?? [] }}>
      {isLoading && <ActivityIndicator color={'#000'} />}
      <View style={styles.container}>{blocks}</View>
    </WishlistSummaryHandlerProvider>
  );
};
