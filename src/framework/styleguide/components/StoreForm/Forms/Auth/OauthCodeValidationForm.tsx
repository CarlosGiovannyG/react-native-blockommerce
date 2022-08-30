/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useState, useMemo } from 'react';
import { useStyleClass } from '../../../../styleContext';
import { View } from 'react-native';
import { FormHandlerProvider, useFormHandler } from '../../context';
import { useLinkTo, useRoute } from '@react-navigation/native';
import { BasicInputReturnType } from '../../../../hooks/types';
import { useUI } from '../../../UIActionsHandler';
import { FormProvider, useForm } from 'react-hook-form';
import { OtpCodeValidationBody } from '$core-commerce/types/otp-code-validation';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createYupSchema } from '../../utils/buildSchemaValidation';
import useOAuthValidation from '$commerce/auth/use-oauth-validation';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';

export const OauthCodeValidationComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['formContainer'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  const { openModal, closeModal } = useUI();
  const { defaultValues } = useFormHandler();
  const route = useRoute();
  const [isLoading, setLoading] = useState(false);

  const linkTo = useLinkTo();

  const addSlugToUrl = (match: string, item: any) =>
    item[match.replace('{', '').replace('}', '')];
  const keysRegEx = /\{(.*?)\}/gm;

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

  const oauth = useOAuthValidation();

  //@ts-ignore
  const lastName = route.params?.lastName.replace('%20', ' ');
  const onSubmit = async (props: OtpCodeValidationBody) => {
    setLoading(true);

    try {
      const otpData = {
        //@ts-ignore
        email: route.params?.email,
        accesskey: props.code,
        //@ts-ignore
        name: route.params?.name.replace('%20', ' '),
        lastName: lastName.replace('#', ''),
      };

      if (!subSchema.skipLogic) {
        await oauth(otpData);
      }

      const redirectTo = subSchema.redirectTo || '/auth';
      const url = redirectTo.replace(keysRegEx, (match: string) =>
        addSlugToUrl(match, otpData)
      );

      linkTo(url);
    } catch (e) {
      console.log(e);

      if (subSchema.content && subSchema.modalType && subSchema.validationOTP) {
        openModal({
          content: subSchema.content,
          modalType: subSchema.modalType,
          style: subSchema.blockClass,
          onAccept: () => {
            closeModal();
          },
        });
        setLoading(false);
      }
      return e;
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
