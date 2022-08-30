import React, { FC, useState, useMemo, useCallback } from 'react';
import { View } from 'react-native';
import { FormHandlerProvider, useFormHandler } from '../../context';
import { useLinkTo } from '@react-navigation/native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../../../hooks/types';
import { useUI } from '../../../UIActionsHandler';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createYupSchema } from '../../utils/buildSchemaValidation';
import * as yup from 'yup';
import useSignInAsAGuest from '$commerce/auth/use-sign-in-as-guest';
import { useStyleClass } from '../../../../styleContext';
import useSession from '$commerce/session/use-session';

export const SignInAsGuestFormComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const [isLoading, setLoading] = useState(false);
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['formContainer'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  const { openModal, closeModal } = useUI();
  const { defaultValues } = useFormHandler();

  const yepSchema = useMemo(
    () => subSchema.schemaValidation.reduce(createYupSchema, {}),
    []
  );

  const validateSchema = yup.object().shape(yepSchema);

  const methods = useForm({
    mode: subSchema.mode ? subSchema.mode : 'onSubmit',
    reValidateMode: subSchema.reValidateMode
      ? subSchema.reValidateMode
      : 'onChange',
    defaultValues: subSchema.defaultValues
      ? subSchema.defaultValues
      : defaultValues,
    resolver: yupResolver(validateSchema),
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const linkTo = useLinkTo();
  const signInAsGuest = useSignInAsAGuest();

  const { setIsSignedIn } = useSession();
  const addSlugToUrl = (match: string, item: any) =>
    item[match.replace('{', '').replace('}', '')];
  const keysRegEx = /\{(.*?)\}/gm;

  const redirectUrl = useCallback(
    (item: any) => {
      if (subSchema.redirectTo) {
        return subSchema.redirectTo.replace(keysRegEx, (match: string) =>
          addSlugToUrl(match, item)
        );
      } else {
        return '/';
      }
    },
    [keysRegEx, subSchema.redirectTo]
  );

  const revalidateSignInState = () =>
    subSchema?.revalidateSignIn && setIsSignedIn(true);

  const onSubmit = async (props: any) => {
    setLoading(true);
    try {
      await signInAsGuest({
        ...props,
        validateEmail: subSchema.validateEmail,
      });
      if (
        subSchema.content &&
        subSchema.modalType &&
        !subSchema.validationLogin
      ) {
        openModal({
          content: subSchema.content,
          modalType: subSchema.modalType,
          style: subSchema.blockClass,
          onAccept: () => {
            linkTo(redirectUrl(props));
            revalidateSignInState();
          },
        });
      } else {
        linkTo(redirectUrl(props));
        revalidateSignInState();
      }
    } catch (e) {
      console.log('error', e);
      if (
        subSchema.content &&
        subSchema.modalType &&
        subSchema.validationLogin
      ) {
        openModal({
          content: subSchema.content,
          modalType: subSchema.modalType,
          style: subSchema.blockClass,
          onAccept: () => {
            closeModal();
          },
        });
      }
    }
    setLoading(false);
  };

  return (
    <FormHandlerProvider
      config={{
        onSubmit,
        defaultValues: {},
        submitIsLoading: isLoading,
      }}
    >
      <FormProvider {...methods}>
        <View style={styles.formContainer}>{blocks}</View>
      </FormProvider>
    </FormHandlerProvider>
  );
};
