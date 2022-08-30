/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCallback } from 'react';
import { MutationHook } from '$core-commerce/utils/types';
import { CommerceError } from '$core-commerce/utils/errors';
import { createSessionQuery } from '$commerce/utils/queries/session/session';
import { setSession } from '$commerce/utils/customer-session';
import { useCheckout } from '$commerce/checkout';
import useUpdateCheckout from '$commerce/checkout/use-update-checkout';
import useSession from './use-session';
import useUpdateSession from '$core-commerce/session/use-update-session';

export default useUpdateSession;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: createSessionQuery,
  },
  async fetcher({ input, options, fetch }) {
    try {
      const data = await fetch({
        ...options,
        variables: {
          input: {
            public: {
              storeUserEmail: {
                value: input?.email,
              },
              country: {
                value: 'COL',
              },
              geoCoordinates: {
                value: `${input?.latitud}, ${input?.longitud}`,
              },
              postalCode: {
                value: input?.postalCode,
              },
            },
          },
        },
      });

      if (
        data?.createSession?.sessionToken &&
        data?.createSession?.segmentToken
      ) {
        const response = await setSession({
          token: data?.createSession?.sessionToken,
          segment: data?.createSession?.segmentToken,
        });
        return {
          success: true,
          data: response,
        };
      }
    } catch (e) {
      throw new CommerceError({
        message: e.message || 'Create Session Error',
      });
    }
  },
  useHook:
    ({ fetch }) =>
      () => {
        const { data: checkout, mutate } = useCheckout();
        const { setIsSignedIn } = useSession();

        return useCallback(
          async function updateSession(input) {
            const data = await fetch({ input });
            await mutate();
            setIsSignedIn(true);
            return data;
          },
          [checkout?.orderForm?.id]
        );
      },
};
