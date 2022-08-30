/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useMemo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';

import { useTopSearches } from '$commerce/product';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { SearchesHandlerProvider } from '../../context';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';

export const TopSearchesLayoutComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const { data, isLoading } = useTopSearches();

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container', 'loadingWrapper'], subSchema.blockClass);

  const blocks = useChildrenBlocks(subSchema.blocks);

  const searchesData = useMemo(() => {
    let sData: any[] = [];
    if (data?.topSearches) sData = data?.topSearches;
    return sData;
  }, [data?.topSearches]);

  const loadingComponent = useSlotBlock(subSchema?.loadingComponent);
  return (
    <SearchesHandlerProvider config={{ data: searchesData, isLoading }}>
      <View style={styles.container}>{blocks}</View>
      {isLoading && <View style={styles.loadingWrapper}>{loadingComponent}</View>}
    </SearchesHandlerProvider>
  );
};
