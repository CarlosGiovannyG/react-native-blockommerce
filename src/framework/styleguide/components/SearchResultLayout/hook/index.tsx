import { useSearch } from '$commerce/product';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { usePrevious } from '$styleguide/utils/usePrevious';
import { useNavigation, useRoute } from '@react-navigation/native';
import isEqual from 'lodash.isequal';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

const defaultSearchConfig = {
  perPage: 9,
};
const getSearchPath = (obj: Record<string, string>) => {
  let urlPath = '';
  if (obj?.department) {
    urlPath += `${obj?.department}`;
  }

  if (obj?.category && obj?.department) urlPath += `/${obj?.category}`;
  else if (obj?.category && !obj?.department) urlPath += `${obj?.category}`;

  if (obj?.subCategory) urlPath += `/${obj?.subCategory}`;

  return urlPath;
};

const getQuery = (obj: Record<string, string>) => {
  let query = '';
  if (obj?.term) query = obj.term;
  return query;
};

const getMap = (obj: Record<string, string>) => {
  let map = [];
  if (obj?.department) map.push('category-1');
  if (obj?.category) map.push('category-2');
  if (obj?.subCategory) map.push('category-3');
  if (obj?.collection) map.push('productClusterIds');
  return map.reduce((accum, currentValue) => {
    if (accum.length) accum += ',';
    accum += currentValue;
    return accum;
  }, '');
};

const getSelectedFacets = (obj: Record<string, string>) => {
  const selectedFacets = [];
  if (obj?.department)
    selectedFacets.push({ key: 'category-1', value: obj?.department });
  if (obj?.category)
    selectedFacets.push({ key: 'category-2', value: obj?.category });
  if (obj?.subCategory)
    selectedFacets.push({ key: 'category-3', value: obj?.subCategory });
  if (obj?.collection)
    selectedFacets.push({ key: 'productClusterIds', value: obj?.collection });

  return selectedFacets;
};

export const useSearchResult = (props: {
  inputObject: BasicInputReturnType;
  changeNavigatorTitle?: boolean;
}) => {
  const { inputObject, changeNavigatorTitle = true } = props;
  const subSchema = inputObject.getObject();
  const route = useRoute();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  const [recordsFiltered, setRecordsFiltered] = useState(0);
  const [products, setProducts] = useState<unknown[]>([]);
  const [filters, setFilters] = useState([]);
  const [loadingChunk, setLoadingChunk] = useState<boolean>(false);
  const navigation = useNavigation();

  const parseParamsData = useMemo(
    () => ({
      perPage: (subSchema.perPage as number) || defaultSearchConfig.perPage,
      query: getSearchPath(subSchema.params || (route.params as any)),
      map: getMap(subSchema.params || (route.params as any)),
      selectedFacets: getSelectedFacets(
        subSchema.params || (route.params as any)
      ),
      fullText: getQuery(subSchema.params || (route.params as any)),
    }),
    [route, subSchema.perPage]
  );

  const [selectedFacets, setSelectedFacets] = useState(
    parseParamsData.selectedFacets
  );

  const [searchQuery, setSearchQuery] = useState({
    from: 0,
    to: parseParamsData.perPage,
    query: parseParamsData.query,
    map: parseParamsData.map,
    selectedFacets: selectedFacets,
    fullText: parseParamsData.fullText,
  });

  const { data, isLoading, isValidating } = useSearch(searchQuery);
  const previousParamsData = usePrevious(parseParamsData);
  useEffect(() => {
    if (!isEqual(previousParamsData, parseParamsData)) {
      console.log('parse: ', parseParamsData);
      setRecordsFiltered(0);
      setProducts([]);
      setFilters([]);
      setLoadingChunk(false);
      setSelectedFacets(parseParamsData.selectedFacets);
      setSearchQuery((query) => {
        const state = {
          from: 0,
          to: parseParamsData.perPage,
          query: parseParamsData.query,
          map: parseParamsData.map,
          selectedFacets: parseParamsData.selectedFacets,
          fullText: parseParamsData.fullText,
        };
        return state;
      });
    }
  }, [parseParamsData]);

  const setNavigatorNavTitle = useCallback(() => {
    const querySplitted = searchQuery.query.split('/');
    if (querySplitted.length) {
      const url = querySplitted[querySplitted.length - 1];
      const result: any = data?.products.reduce((accum, product) => {
        const busqueda = product.categoryTree.find((pred) => {
          return pred.slug.toLowerCase() === url.toLowerCase();
        });
        if (busqueda) accum = busqueda;
        return accum;
      }, {});

      navigation.setOptions({
        title: result?.name || 'Búsqueda',
      });
    }
  }, [data?.products, navigation, searchQuery.query]);

  useEffect(() => {
    if (!isLoading) {
      if (data?.products?.length >= 0) {
        if (loadingChunk && products.length >= 0) {
          setProducts((p) => [...p].concat(data?.products));
        } else {
          setProducts(data?.products);
          if (changeNavigatorTitle) {
            setNavigatorNavTitle();
          }
          setRecordsFiltered(data.pagination.recordsFiltered);
        }
        setLoadingChunk(false);
      }
    }
  }, [data?.products]);

  const selectFacetHandler = useCallback(
    (args: any) => {
      const payloadFacets = [...selectedFacets];

      const exists = selectedFacets.find(
        (prev) => prev.value.toLowerCase() === args.value.toLowerCase()
      );
      if (exists) {
        const selectedIndex = selectedFacets.findIndex(
          (prev) => prev.value.toLowerCase() === exists.value.toLowerCase()
        );
        payloadFacets.splice(selectedIndex, 1);
      } else {
        payloadFacets.push({
          key: args.key,
          value: args.value,
        });
      }

      const queryParsed = payloadFacets.reduce((accum, currentValue) => {
        if (!accum.length) accum += `${currentValue.value}`;
        else if (accum.length) accum += `/${currentValue.value}`;
        return accum;
      }, '');

      const mapParsed = payloadFacets.reduce((accum, currentValue) => {
        if (!accum.length) accum += `${currentValue.key}`;
        else if (accum.length) accum += `,${currentValue.key}`;
        return accum;
      }, '');

      setProducts([]);
      setSearchQuery((query) => {
        const state = {
          ...query,
          from: 0,
          to: parseParamsData.perPage,
          query: queryParsed,
          map: mapParsed,
          selectedFacets: payloadFacets,
        };
        return state;
      });
      setSelectedFacets(payloadFacets);
    },
    [parseParamsData.perPage, selectedFacets]
  );

  useEffect(() => {
    if (data?.filters) {
      if (!isEqual(filters, data.filters)) {
        const allAvailableFilterValues = data?.filters.reduce(
          (accum, currentValue) => {
            currentValue.values.forEach((val) => {
              accum.push(val);
            });
            return accum;
          },
          []
        );

        const elementsToDelete = selectedFacets.reduce(
          (accum, currentValue) => {
            const selectedValue = currentValue.value;

            const selectedValueExistsOnAllFilterValues =
              allAvailableFilterValues.find(
                (pred) => pred.value === selectedValue
              );
            if (!selectedValueExistsOnAllFilterValues) {
              accum.push(currentValue);
            }
            return accum;
          },
          []
        );
        const payloadFacets = [...selectedFacets];
        elementsToDelete.forEach((element) => {
          const exists = selectedFacets.find(
            (prev) => prev.value.toLowerCase() === element.value.toLowerCase()
          );
          if (exists) {
            const selectedIndex = selectedFacets.findIndex(
              (prev) => prev.value.toLowerCase() === exists.value.toLowerCase()
            );
            payloadFacets.splice(selectedIndex, 1);
          }
        });
        setSelectedFacets(payloadFacets);
        setFilters(data.filters);
      }
    }
  }, [data?.filters]);

  const nextPage = useCallback(() => {
    if (!isValidating && !isLoading && !loadingChunk) {
      const endCursor = searchQuery.to + parseParamsData.perPage;
      // Omite la función si ya llego a su final.
      if (
        searchQuery.to ===
        searchQuery.to -
          1 +
          (data?.pagination?.recordsFiltered - searchQuery.to)
      )
        return;
      // Si sobrepasamos los registros filtrados del cursor entonces solo traeremos los restantes.
      if (endCursor > data?.pagination?.recordsFiltered) {
        setLoadingChunk(true);
        setSearchQuery((state) => ({
          ...state,
          from: searchQuery.to + 1,
          to:
            searchQuery.to -
            1 +
            (data?.pagination?.recordsFiltered - searchQuery.to),
        }));
      }
      // Si aun existen mas registros por traer entonces vamos añadiendo el valor de "perPage"
      else if (endCursor < data?.pagination?.recordsFiltered) {
        setLoadingChunk(true);
        setSearchQuery((state) => ({
          ...state,
          from: state.to + 1,
          to: state.to + 1 + parseParamsData.perPage,
        }));
      }
    }
  }, [
    data?.pagination?.recordsFiltered,
    isLoading,
    isValidating,
    loadingChunk,
    parseParamsData.perPage,
    searchQuery.to,
  ]);

  const filterNavigatorProviderData = useMemo(
    () => ({ facets: filters, selectedFacets, selectFacetHandler }),
    [filters, selectFacetHandler, selectedFacets]
  );

  const handlerProviderConfig = useMemo(() => {
    return {
      list: products,
      getNextPage: nextPage,
      loadingProducts: isLoading && !loadingChunk,
      filterNavigatorProviderData,
      recordsFiltered,
    };
  }, [isLoading, nextPage, products, recordsFiltered, loadingChunk]);

  return handlerProviderConfig;
};
