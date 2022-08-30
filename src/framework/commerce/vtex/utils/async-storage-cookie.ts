import Storage from './async-storage';

export const getCookieFromStorage = async (key: string) => {
  const cookies = await getAllCookie();
  if (cookies?.hasOwnProperty(key)) return cookies[key];
  return null;
};

export const getAllCookie = async () => await Storage.getData('cookie');

export const setCookieToStorage = async (key: string, value: string) => {
  const allCookies = await getAllCookie();
  if (key && value) {
    return await Storage.storeData('cookie', { ...allCookies, [key]: value });
  }
  return null;
};
export const removeCookieToStorage = async (key: string) => {
  const allCookies = await getAllCookie();
  delete allCookies[key];
  return await Storage.storeData('cookie', allCookies);
};

export const cleanCookies = async () => {
  return await Storage.removeValue('cookie');
};

