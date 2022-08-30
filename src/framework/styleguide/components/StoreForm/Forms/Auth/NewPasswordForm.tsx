/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { FC, useMemo, useState } from 'react';
import { useStyleClass } from '../../../../styleContext';
import { View } from 'react-native';
import { useLogin } from '$commerce/auth';
import { FormHandlerProvider, useFormHandler } from '../../context';
import { useLinkTo, useNavigation, useRoute } from '@react-navigation/native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { useUI } from '../../../UIActionsHandler';
import { BasicJSONSchemaType } from '$styleguide/JSONSchema';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createYupSchema } from '../../utils/buildSchemaValidation';
import useResetPassword from '$commerce/auth/use-reset-password';

export const NewPasswordForm: FC<{
  inputObject: BasicJSONSchemaType;
}> = (props) => {
  const { inputObject } = props;
  const route = useRoute();
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['formContainer'], subSchema.blockClass);
  const [isLoading, setLoading] = useState(false);
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
  const navigation = useNavigation();
  const linkTo = useLinkTo();
  const resetPassword = useResetPassword();

  const redirect = (mode: 'default' | 'onSuccess' | 'onError' = 'default') => {
    if (subSchema.redirectTo && subSchema.redirectTo === 'goBack')
      navigation.goBack();
    else if (subSchema.redirectTo && mode === 'default')
      linkTo(subSchema.redirectTo);
    else if (subSchema.onSuccessRedirectTo && mode === 'onSuccess')
      linkTo(subSchema.onSuccessRedirectTo);
    else if (subSchema.onErrorRedirect && mode === 'onError')
      linkTo(subSchema.onErrorRedirect);
  };

  const onSubmit = async (props: any) => {
    setLoading(true);   
    try {
      
      await resetPassword({
        // @ts-ignore
        email: route.params?.email,
        accesskey: props.code,
        newPassword: props.newPassword,
      });
      if (
        subSchema.content &&
        subSchema.modalType
      ) {
        openModal({
          content: subSchema.content,
          modalType: subSchema.modalType,
          style: subSchema.blockClass,
          onAccept: () => {
            redirect('onSuccess');
          },
        });
      } else {
        redirect('onSuccess');
      }
    } catch (e) {
      if (
        subSchema.contentError &&
        subSchema.modalType
      ) {
        openModal({
          content: subSchema.contentError,
          modalType: subSchema.modalType,
          style: subSchema.blockClass,
          onAccept: () => {
            closeModal();
          },
        });
      }
      redirect('onError');
    }
    setLoading(false);
  };

  return (
    <FormHandlerProvider
      config={{ onSubmit, defaultValues: {}, submitIsLoading: isLoading }}
    >
      <FormProvider {...methods}>
        <View style={styles.formContainer}>{blocks}</View>
      </FormProvider>
    </FormHandlerProvider>
  );
};
