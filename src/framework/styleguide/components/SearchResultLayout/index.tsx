import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useStyleClass } from '../../styleContext';
import { View } from 'react-native';
import { ProductSummaryHandlerProvider } from '../ProductSummary/context';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../hooks/types';
import { FilterNavigatorContextProvider } from './components/context';
import { useSearchResult } from './hook';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';

export const SearchResultLayoutComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  const searchData = useSearchResult(props);

  const loadingComponent = useSlotBlock(subSchema?.loadingComponent);
  return (
    <FilterNavigatorContextProvider
      data={searchData.filterNavigatorProviderData}
    >
      <ProductSummaryHandlerProvider config={searchData}>
        <View style={styles.container}>
          {searchData.loadingProducts ? loadingComponent : blocks}
        </View>
      </ProductSummaryHandlerProvider>
    </FilterNavigatorContextProvider>
  );
};
