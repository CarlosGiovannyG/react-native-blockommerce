import Storage from './async-storage';

export const getOrderFormId = async () => await Storage.getData('orderFormId');

export const setOrderFormId = async (orderFormId: string | null) => {
  if (orderFormId) {
    return await Storage.storeData('orderFormId', orderFormId);
  }
  return await Storage.removeValue('orderFormId');
};
