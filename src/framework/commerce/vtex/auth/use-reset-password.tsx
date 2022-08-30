/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCallback } from 'react';
import { MutationHook } from '$core-commerce/utils/types';
import useResetPassword from '$core-commerce/auth/use-reset-password';
import { signUpWithEmailMutation } from '$commerce/utils/mutations/auth/signUpWithEmail';
import { CommerceError } from '$core-commerce/utils/errors';
import { ResetPasswordHook } from '$core-commerce/types/resetPassword';
import { resetPasswordMutation } from '$commerce/utils/mutations/auth/resetPassword';

export default useResetPassword;

type ResetPasswordResponse = {
  resetPassword: {
    token: string;
  };
};

export const handler: MutationHook<ResetPasswordHook> = {
  fetchOptions: {
    query: resetPasswordMutation,
  },
  async fetcher({ input: { email, newPassword, accesskey }, options, fetch }) {
    if (!(email && newPassword && accesskey)) {
      throw new CommerceError({
        message:
          'A email, newPassword, accesskey are required to reset password',
      });
    }
    try {
      const data = await fetch<ResetPasswordResponse>({
        ...options,
        variables: {
          data: {
            email,
            newPassword,
            accesskey,
            currentPassword: '',
          },
        },
      });
      if (data?.resetPassword?.token) {
        return {
          success: true,
        };
      } else {
        throw new CommerceError({
          message: 'Token not found',
        });
      }
    } catch (e) {
      throw new CommerceError(e);
    }
  },
  useHook:
    ({ fetch }) =>
    () => {
      return useCallback(async function resetPassword(input) {
        const data = await fetch({ input });
        return data;
      }, []);
    },
};
