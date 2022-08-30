/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCallback } from 'react';
import { MutationHook } from '$core-commerce/utils/types';
import { updateProfileMutation } from '$commerce/utils/mutations';
import useUpdateProfile from '$core-commerce/customer/use-update-profile';
import { CommerceError } from '$core-commerce/utils/errors';
import useCustomer from './use-customer';
import { useCreateSession, useUpdateSession } from '$commerce/session';
import { useCheckout, useUpdateCheckout } from '$commerce/checkout';

export default useUpdateProfile;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: updateProfileMutation,
  },
  async fetcher({
    input: { email, firstName, lastName, document, documentType, cellPhone,birthDate },
    options,
    fetch,
  }) {
    console.log(email, firstName, lastName, document, documentType, cellPhone, birthDate)
    if (
      !(email && firstName && lastName && document && documentType && cellPhone)
    ) {
      throw new CommerceError({
        message:
          'A first name, last name, email, document, documentType, phone are required to updateProfile',
      });
    }

    try {
      const data = await fetch({
        ...options,
        variables: {
          data: {
            email,
            firstName,
            lastName,
            document,
            documentType,
            phone: cellPhone,
            birthDate
          },
        },
      });
      if (data?.updateProfile?.success) {
        return {
          success: true,
        };
      } else {
        throw new Error('Update is not success');
      }
    } catch (e) {
      throw new CommerceError({
        message: e.message || 'Update Profile Error',
      });
    }
  },
  useHook:
    ({ fetch }) =>
    () => {
      const { mutate } = useCustomer();
      const createSession = useCreateSession();

      return useCallback(async function UpdateProfile(input) {
        const data = await fetch({ input });
        await createSession({
          email: input?.email,
          firstName: input?.firstName,
          lastName: input?.lastName,
          document: input?.document,
          documentType: input?.documentType || 'cedulaCOL',
          phone: input?.cellPhone
        });
        mutate();
        return data;
      }, []);
    },
};
