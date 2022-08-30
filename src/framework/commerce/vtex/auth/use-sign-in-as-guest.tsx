/* eslint-disable react-hooks/rules-of-hooks */
import { MutationHook } from '$core-commerce/utils/types';
import { useCallback } from 'react';
import { CommerceError } from '$core-commerce/utils/errors';
import { useCreateSession } from '$commerce/session';
import useSignInAsAGuest, {
  UseSignInAsAGuest,
} from '$core-commerce/auth/use-sign-in-as-guest';
import { useOtp } from '.';

export default useSignInAsAGuest as UseSignInAsAGuest<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: '',
  },
  async fetcher({ input }) {
    if (input?.email) {
      return {
        success: true,
      };
    } else {
      throw new CommerceError({
        message: 'Token not found',
      });
    }
  },
  useHook:
    ({ fetch }) =>
    () => {
      const createSession = useCreateSession();
      const sendOtp = useOtp()
      return useCallback(
        async function signInAsGuest(input) {
          const data = await fetch({ input });
          await createSession({
            email: input?.email,
            firstName: input?.firstName,
            lastName: input?.lastName,
            document: input?.document,
            documentType: input?.documentType || 'cedulaCOL',
            phone: input?.cellPhone
          });
          if(input?.validateEmail){
            await sendOtp({ email: input?.email })
          }
          return data;
        },
        [createSession]
      );
    },
};
