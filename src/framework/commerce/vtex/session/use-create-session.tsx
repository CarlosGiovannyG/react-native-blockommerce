/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCallback } from 'react';
import { MutationHook } from '$core-commerce/utils/types';
import { CommerceError } from '$core-commerce/utils/errors';
import useCreateSession, {
  UseCreateSession,
} from '$core-commerce/session/use-create-session';
import { createSessionQuery } from '$commerce/utils/queries/session/session';
import { setSession } from '$commerce/utils/customer-session';
import { useCheckout } from '$commerce/checkout';
import useUpdateCheckout from '$commerce/checkout/use-update-checkout';
import useSession from './use-session';

export default useCreateSession as UseCreateSession<typeof handler>;

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
                value: '0,0',
              },
              postalCode: {
                value: '',
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
      const { data: checkout, mutate: revalidateCheckout } = useCheckout();
      const updateCheckout = useUpdateCheckout();

      return useCallback(
        async function createSession(input) {
          const data = await fetch({ input });
          const mutatedCheckout = await revalidateCheckout();
          if (mutatedCheckout?.orderForm?.id) {
            await updateCheckout({
              orderFormId: mutatedCheckout?.orderForm?.id,
              input: {
                email: input?.email,
                firstName: input?.firstName,
                lastName: input?.lastName,
                document: input?.document,
                documentType: input?.documentType,
                phone: input?.phone,
              },
            });
          }

          return data;
        },
        [checkout?.orderForm?.id, updateCheckout]
      );
    },
};
