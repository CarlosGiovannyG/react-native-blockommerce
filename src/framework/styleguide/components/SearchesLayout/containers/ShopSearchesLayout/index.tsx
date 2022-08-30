import React, { FC, useMemo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';

import { useSearch } from '$commerce/product';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { SearchesHandlerProvider } from '../../context';
import { useStyleClass } from '$styleguide/styleContext';

export const ShopSearchesLayoutComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  //const { data, isLoading } = useSearchShop();

  const { data, isLoading } = useSearch({ from: 0, to: 50 });

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);

  const searchesData = useMemo(() => {
    let sData: any[] = [];
    if (data?.products && data?.products?.length) sData = data?.products;
    return sData;
  }, [data?.products]);

  return (
    <SearchesHandlerProvider config={{ data: searchesData, isLoading }}>
      {isLoading && <ActivityIndicator color={'#000'} />}
      <View style={styles.container}>{blocks}</View>
    </SearchesHandlerProvider>
  );
};
