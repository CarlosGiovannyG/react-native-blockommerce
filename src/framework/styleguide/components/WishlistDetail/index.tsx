/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useStyleClass } from '../../styleContext';
import { ActivityIndicator, View } from 'react-native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../hooks/types';
import { WishlistDetailContextProvider } from './context';
import { useRoute } from '@react-navigation/native';
import { useGetProductsByIdentifier } from '$commerce/product';
import { ProductSummaryHandlerProvider } from '../ProductSummary/context';
import useWishlistDetail from '$commerce/wishlist/use-wishlist-detail';

export const WishlistDetailLayoutComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const route = useRoute();
  // @ts-ignore
  const { data, isLoading } = useWishlistDetail({ id: route?.params?.id });
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  const [loading, setLoading] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const getProductsByIdentifier = useGetProductsByIdentifier();

  const loadProducts = useCallback(async () => {
    setLoading(true);
    if (data?.length >= 1) {
      const value = await getProductsByIdentifier({
        values: data?.reduce(
          (accum: any[], currentValue: { skuId: string }) => {
            accum.push(currentValue.skuId);
            return accum;
          },
          []
        ),
      });
      setWishlistItems(value?.products);
    } else {
      setWishlistItems([]);
    }
  }, [data, getProductsByIdentifier]);

  useEffect(() => {
    loadProducts()
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, [data, loadProducts]);

  const DetailData = useMemo(() => {
    return {
      Wishlist: data,
    };
  }, [data?.items]);

  const ProductSummaryData = useMemo(() => {
    return {
      list: wishlistItems,
      loadingProducts: loading,
    };
  }, [loading, wishlistItems]);

  return (
    <WishlistDetailContextProvider data={DetailData}>
      <ProductSummaryHandlerProvider config={ProductSummaryData}>
        {loading && isLoading && <ActivityIndicator color={'#000'} />}
        <View style={styles.container}>{blocks}</View>
      </ProductSummaryHandlerProvider>
    </WishlistDetailContextProvider>
  );
};
