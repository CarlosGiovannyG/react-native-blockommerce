import React, { FC, useMemo } from 'react';
import { useStyleClass } from '../../../../styleContext';
import { ActivityIndicator, View } from 'react-native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../../../hooks/types';
import { useSearch } from '$commerce/product';
import { SearchesHandlerProvider } from '../../context';

export const MyAddressSearchesLayoutComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  //const { data, isLoading } = useSearchMyAddress();

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
