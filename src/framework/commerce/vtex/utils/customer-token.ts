import Storage from './async-storage';

export const getCustomerToken = async () => await Storage.getData('authToken');

export const setCustomerToken = async (token: string | null) => {
  if (!token) {
    return await Storage.removeValue('authToken');
  } else {
    return await Storage.storeData('authToken', token);
  }
};

export const checkToken = async () => {
  const token = await getCustomerToken();
  if (token) return true;
  else return false;
};
