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
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../../../hooks/types';
import { useUI } from '../../../UIActionsHandler';
import { FormProvider, useForm } from 'react-hook-form';
import useOtpCodeValidation from '$commerce/auth/use-otp-code-validation';
import { OtpCodeValidationBody } from '$core-commerce/types/otp-code-validation';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createYupSchema } from '../../utils/buildSchemaValidation';

export const OtpCodeValidationComponent: FC<{
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
  const validateOtpCode = useOtpCodeValidation();

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
  
  const onSubmit = async (props: OtpCodeValidationBody) => {
    setLoading(true);

    try {
      const otpData = {
        // @ts-ignore
        email: route.params?.email,
        accesskey: props.code,
      };
      
      if (!subSchema.skipLogic) {
        await validateOtpCode(otpData);
      }
      const redirectTo = subSchema.redirectTo || '/auth';
      const url = redirectTo.replace(keysRegEx, (match: string) =>
        addSlugToUrl(match, otpData)
      );
      console.log(url);
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
