/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useStyleClass } from '../../../../styleContext';
import { View } from 'react-native';
import { useSignup } from '$commerce/auth';
import { FormHandlerProvider, useFormHandler } from '../../context';
import { useLinkTo, useRoute } from '@react-navigation/native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicJSONSchemaType } from '$styleguide/JSONSchema';
import { FormProvider, useForm } from 'react-hook-form';
import { useStoreFormHandler } from '../../Handler/Context/StoreFormContext';
import { createYupSchema } from '../../utils/buildSchemaValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useUI } from '$styleguide/components/UIActionsHandler';

const Modo1: FC<{
  inputObject: BasicJSONSchemaType;
  onSubmit: (props: any) => Promise<void>;
  isLoading: boolean;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['formContainer'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);

  const yepSchema = useMemo(
    () => subSchema.schemaValidation.reduce(createYupSchema, {}),
    []
  );

  const validateSchema = yup.object().shape(yepSchema);

  const { defaultValues } = useFormHandler();
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

  return (
    <FormHandlerProvider
      config={{
        onSubmit: props?.onSubmit,
        defaultValues: {},
        submitIsLoading: props?.isLoading,
      }}
    >
      <FormProvider {...methods}>
        <View style={styles.formContainer}>{blocks}</View>
      </FormProvider>
    </FormHandlerProvider>
  );
};

const Modo2: FC<{
  inputObject: BasicJSONSchemaType;
  onSubmit: (props: any) => Promise<void>;
}> = ({ onSubmit, inputObject }) => {
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['formContainer'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  const { setSubmitFunction } = useStoreFormHandler();

  useEffect(() => {
    setSubmitFunction({
      name: 'signup',
      onSubmit: onSubmit,
      schemaDocument: {
        title: 'onSubmitProperties',
        type: 'object',
        properties: {
          newPassword: {
            type: 'string',
          },
        },
      },
    });
  }, []);

  return <View style={styles.formContainer}>{blocks}</View>;
};

export const SignupFormEmailComponent: FC<{
  inputObject: BasicJSONSchemaType;
}> = (props) => {
  const { inputObject } = props;
  const route = useRoute();
  const [isLoading, setLoading] = useState(false);

  const subSchema = inputObject.getObject();
  const signup = useSignup();

  const addSlugToUrl = (match: string, item: any) =>
    item[match.replace('{', '').replace('}', '')];
  const keysRegEx = /\{(.*?)\}/gm;
  const { openModal } = useUI();

  const linkTo = useLinkTo();
  const redirect = (payload: unknown) =>
    subSchema.redirectTo
      ? linkTo(
          subSchema.redirectTo.replace(keysRegEx, (match: string) =>
            addSlugToUrl(match, payload)
          )
        )
      : null;

  const onSubmit = async (props: any) => {
    setLoading(true);
    const payload = {
      // @ts-ignore
      email: route.params?.email,
      // @ts-ignore
      accesskey: props?.code || route.params?.accessKey,
      ...props,
    };
    try {
      await signup(payload);
      if (subSchema.content && subSchema.modalType) {
        openModal({
          content: subSchema.content,
          title: subSchema.modalTitle,
          description: subSchema.modalDescription?.replace(
            keysRegEx,
            (match: string) => addSlugToUrl(match, payload)
          ),
          modalType: subSchema.modalType,
          style: subSchema.blockClass,
          onAccept: () => {
            redirect(payload);
          },
        });
      } else {
        redirect(payload);
      }
    } catch (e) {
      if (subSchema.contentError && subSchema.modalType) {
        openModal({
          content: subSchema.contentError,
          title: subSchema.modalTitle,
          description: subSchema.modalDescription?.replace(
            keysRegEx,
            (match: string) => addSlugToUrl(match, payload)
          ),
          modalType: subSchema.modalType,
          style: subSchema.blockClass,
          onAccept: () => {},
        });
      }
    }

    setLoading(false);
  };
  if (subSchema.nestedForm)
    return <Modo2 inputObject={inputObject} onSubmit={onSubmit} />;
  return (
    <Modo1
      inputObject={inputObject}
      isLoading={isLoading}
      onSubmit={onSubmit}
    />
  );
};
