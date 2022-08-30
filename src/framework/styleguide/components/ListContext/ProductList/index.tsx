import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import useSearch from '$core-commerce/product/use-search';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { Product } from '$core-commerce/types/product';
import isEqual from 'lodash.isequal';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { ProductSummaryHandlerProvider } from '$styleguide/components/ProductSummary/context';
import { FilterNavigatorContextProvider } from '$styleguide/components/SearchResultLayout/components/context';
import { useSearchResult } from '$styleguide/components/SearchResultLayout/hook';


export const ListContextProductListComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  const searchData = useSearchResult({...props, changeNavigatorTitle: false})
  return (
    <FilterNavigatorContextProvider data={searchData.filterNavigatorProviderData}>
      <ProductSummaryHandlerProvider config={searchData}>
        <View style={styles.container}>{blocks}</View>
      </ProductSummaryHandlerProvider>
    </FilterNavigatorContextProvider>
  );
};
