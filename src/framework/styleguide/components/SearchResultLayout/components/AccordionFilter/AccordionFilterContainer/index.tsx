/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { slugify } from '$styleguide/utils/slugify';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { useFilterNavigator } from '../../context';
import { AccordionFilterContainerContextProvider } from './context';

export const AccordionFilterContainerComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const initialRender = 3;
  const perPage = 3;
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const children = useChildrenBlocks(subSchema.blocks);
  const { data } = useFilterNavigator();
  
  const [disableShowMore, setDisableShowMore] = useState(false);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(initialRender);
  const [filterList, setFilterList] = useState({
    values: [],
  });

  const filterData = useMemo(
    () =>
      data.facets?.find(
        (value) => slugify(value.name) === slugify(subSchema.filterBy)
      ),
    [data.facets]
  );

  useEffect(() => {
    if (filterData?.values?.length) {
      setFilterList({
        name: filterData?.name,
        values: filterData?.values?.slice(from, to),
      });
    }
    const totalCount = getTotalCount(filterData?.values);
    if (perPage > totalCount) {
      setDisableShowMore(true)
    }
  }, [filterData]);

  useEffect(() => {
    setFilterList({
      name: filterData?.name,
      values: filterData?.values?.slice(from, to),
    });
  }, [to]);

  const getTotalCount = (data: unknown[]) => data?.length;

  const loadMoreFilters = () => {
    const totalCount = getTotalCount(filterData?.values);
    const pointer = to + perPage;
    if (pointer > totalCount) {
      const rest = pointer - totalCount;
      setTo(pointer - rest);
      setDisableShowMore(true)
      return;
    }
    setTo((value) => value + perPage);
  };


  if (!filterList?.values?.length) return null;
  return (
    <AccordionFilterContainerContextProvider
      config={{ data: filterList, loadMore: loadMoreFilters, disableShowMore }}
    >
      <Animated.View style={[styles.container]}>{children}</Animated.View>
    </AccordionFilterContainerContextProvider>
  );
};
