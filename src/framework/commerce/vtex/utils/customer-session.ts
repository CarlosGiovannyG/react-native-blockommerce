import Storage from './async-storage';

export const getSession = async () => await Storage.getData('session');

export const setSession = async (
  session: {
    token: string;
    segment: string;
  } | null
) => {
  if (session?.token && session?.segment) {
    return await Storage.storeData('session', {
      token: session.token,
      segment: session.segment,
    });
  }
  return await Storage.removeValue('session');
};
