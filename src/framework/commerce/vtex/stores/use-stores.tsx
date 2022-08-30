/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import parseMasterDataDocuments from '$commerce/utils/parseMasterDataDocuments';
import { getTenantsQuery } from '$commerce/utils/queries/tenant/getTenant';
import useStores from '$core-commerce/stores/use-stores';
import { SWRHook } from '$core-commerce/utils/types';
import { departments as data } from './../customer/address/temp/municipalicies';

export default useStores;

const getMunicipalicies = (departments: any) => {
  return Object.keys(departments).reduce(
    (accum, value) => ({
      ...accum,
      [value]: departments[value].municipalities,
    }),
    {}
  );
};

const getDepartments = (departments: any) => {
  return Object.keys(departments).map((value) => ({
    value: departments[value].value,
    label: departments[value].label,
  }));
};

const selectParser = (stores: Store[]) =>
  stores.map((value) => ({
    ...value,
    value: value.Name,
    label: value.Name,
  }));

interface Store {
  id: string;
  Name: string;
}

export const handler: SWRHook<any> = {
  fetchOptions: {
    query: getTenantsQuery,
  },
  /**
   * father: Cities [{ value: 'Bogota DC' }]
   * dependency: Municipalicies { "Bogota DC":  [{ value: 'Bogota DC' }]}
   */
  async fetcher({ input, options, fetch }) {
    if (input?.storesAvailable) {

      const citiesFetch = fetch({
        ...options,
        variables: {
          acronym: 'SA',
          where: 'isactive=true',
          fields: ['Name', 'State'],
        },
      });

      const municipaliciesFetch = fetch({
        ...options,
        variables: {
          acronym: 'ST',
          where: 'isactivePickup=true',
          fields: ['Name'],
        },
      });

      const tenantsFetch = fetch({
        ...options,
        variables: {
          acronym: 'WK',
          where: 'isactive=true',
          fields: [
            'city',
            'lat',
            'lon',
            'name',
            'neighborhood',
            'number',
            'pickupId',
            'postalCode',
            'street',
          ],
        },
      });

      const rawData = await Promise.all([citiesFetch, municipaliciesFetch,tenantsFetch]);

      const citiesRawData = rawData[0];
      const municipaliciesRawData = rawData[1];

      const tenantsRawData = rawData[2];

      const parsedCitiesData = parseMasterDataDocuments(
        citiesRawData?.documents
      );
      const parsedMunicipaliciesData = parseMasterDataDocuments(
        municipaliciesRawData?.documents
      );
      const parsedTenantsData = parseMasterDataDocuments(
        tenantsRawData?.documents
      );


      const municipalicies = parsedCitiesData.reduce((accum, value) => {
        const cityMinicipalicies = parsedMunicipaliciesData.filter(
          (pred) => pred.id === value.State
        );
        return {
          ...accum,
          [value.Name]: selectParser(cityMinicipalicies),
        };
      }, {});

      const tenants = parsedCitiesData.reduce((accum, value) => {
        const cityMinicipalicies = parsedTenantsData.filter(
          (pred) => pred.State === value.city
        );
        return {
          ...accum,
          [value.Name]: cityMinicipalicies.map((value) => ({
            ...value,
            value: value.name,
            label: value.name,  
          })),
        };
      }, {});


      return {
        departments: selectParser(parsedCitiesData),
        municipalicies,
        tenants
      };
    }

    return {
      departments: getDepartments(data),
      municipalicies: getMunicipalicies(data),
    };
  },
  useHook:
    ({ useData }) =>
    (input = {}) =>
      useData({
        input: [['storesAvailable', input?.storesAvailable]],
        swrOptions: {
          revalidateOnFocus: false,
          ...input.swrOptions,
        },
      }),
};
