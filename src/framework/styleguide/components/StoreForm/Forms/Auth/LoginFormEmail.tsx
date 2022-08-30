/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useState, useMemo } from 'react';
import { useStyleClass } from '../../../../styleContext';
import { View } from 'react-native';
import { FormHandlerProvider, useFormHandler } from '../../context';
import { useLinkTo, useRoute } from '@react-navigation/native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { useLogin } from '$commerce/auth';
import { BasicInputReturnType } from '../../../../hooks/types';
import { useUI } from '../../../UIActionsHandler';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createYupSchema } from '../../utils/buildSchemaValidation';
import * as yup from 'yup';

export const LoginFormEmailComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const [isLoading, setLoading] = useState(false);

  const route = useRoute();
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
  const login = useLogin();

  const onSubmit = async (props: any) => {
    setLoading(true);
    try {
      await login({
        //@ts-ignore
        email: route?.params?.email,
        ...props,
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
            linkTo(subSchema.redirectTo ?? '/');
          },
        });
      } else {
        linkTo(subSchema.redirectTo ?? '/');
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
        defaultValues: { email: 'login' },
        submitIsLoading: isLoading,
      }}
    >
      <FormProvider {...methods}>
        <View style={styles.formContainer}>{blocks}</View>
      </FormProvider>
    </FormHandlerProvider>
  );
};
