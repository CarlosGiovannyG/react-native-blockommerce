/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useState, useMemo } from 'react';
import { useStyleClass } from '../../../../styleContext';
import { View } from 'react-native';
import { FormHandlerProvider, useFormHandler } from '../../context';
import { useLinkTo } from '@react-navigation/native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../../../hooks/types';
import { useUI } from '../../../UIActionsHandler';
import useOtp from '$core-commerce/auth/use-otp';
import { OtpBody } from '$core-commerce/types/otp';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createYupSchema } from '../../utils/buildSchemaValidation';

export const OtpFormEmailComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['formContainer'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  const { openModal } = useUI();
  const { defaultValues } = useFormHandler();

  const [isLoading, setLoading] = useState(false);

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
  const sendOtp = useOtp();

  const addSlugToUrl = (match: string, item: any) =>
    item[match.replace('{', '').replace('}', '')];
  const keysRegEx = /\{(.*?)\}/gm;

  const onSubmit = async (
    props: OtpBody & { onlyRedirect: true; redirectTo: string }
  ) => {
    setLoading(true);
    if (props?.onlyRedirect && props?.redirectTo) {
      linkTo(
        props?.redirectTo?.replace(keysRegEx, (match: string) =>
          addSlugToUrl(match, props)
        ) ?? '/feed'
      );
      return;
    }
    if (subSchema.modalType) {
      try {
        await sendOtp(props);
        openModal({
          content: subSchema.content,
          title: subSchema.modalTitle,
          description: subSchema.modalDescription.replace(
            keysRegEx,
            (match: string) => addSlugToUrl(match, props)
          ),
          modalType: subSchema.modalType,
          style: subSchema.blockClass,
          onAccept: () => {
            linkTo(
              subSchema.redirectTo.replace(keysRegEx, (match: string) =>
                addSlugToUrl(match, props)
              ) ?? '/feed'
            );
          },
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        await sendOtp(props);

        linkTo(subSchema.redirectTo ?? '/feed');
      } catch (e) {
        console.log(e);
      }
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
