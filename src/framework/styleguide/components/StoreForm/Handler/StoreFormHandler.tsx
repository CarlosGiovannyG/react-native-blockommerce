/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useState, useMemo } from 'react';
import { useStyleClass } from '../../../styleContext';
import { View } from 'react-native';
import { FormHandlerProvider } from '../context';
import { useLinkTo } from '@react-navigation/native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../../hooks/types';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  StoreFormHandlerProvider,
  useStoreFormHandler,
} from './Context/StoreFormContext';
import { useUI } from '$styleguide/components/UIActionsHandler';
import { createYupSchema } from '../utils/buildSchemaValidation';

interface ComponentProps {
  inputObject: BasicInputReturnType;
}

export const StoreFormHandlerComponent: FC<ComponentProps> = (props) => {
  return (
    <StoreFormHandlerProvider>
      <Render {...props} />
    </StoreFormHandlerProvider>
  );
};

const Render: FC<ComponentProps> = ({ inputObject }) => {
  const subSchema = inputObject.getObject();
  const blocks = useChildrenBlocks(subSchema.blocks);
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const [isLoading, setLoading] = useState(false);
  const linkTo = useLinkTo();
  const yepSchema = useMemo(
    () => subSchema.schemaValidation.reduce(createYupSchema, {}),
    []
  );
  const { openModal, closeModal } = useUI();

  const validateSchema = yup.object().shape(yepSchema);
  const defaultValues = {};
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

  const { formSubmitFunctions } = useStoreFormHandler();
  const addSlugToUrl = (match: string, item: any) =>
    item[match.replace('{', '').replace('}', '')];
  const keysRegEx = /\{(.*?)\}/gm;

  const onSubmit = async (props: any) => {
    setLoading(true);
    const responses = [];
    // REVERSE HARDCODED!!!
    const formSubmitFunctionsKeys = Object.keys(formSubmitFunctions).reverse();
    for (let i = 0; i < formSubmitFunctionsKeys.length; i++) {
      const fnProp = Object.keys(
        formSubmitFunctions[formSubmitFunctionsKeys[i]].schemaDocument
          .properties
      ).reduce((accum, currentPropKey) => {
        const properties = Object.keys(props).reduce((accum, currentPKey) => {
          if (currentPropKey === currentPKey) {
            return {
              ...accum,
              [currentPKey]: props[currentPKey],
            };
          }
          return accum;
        }, {});
        return {
          ...accum,
          ...properties,
        };
      }, {});
      try {
        const functionsResponse = await formSubmitFunctions[
          formSubmitFunctionsKeys[i]
        ].onSubmit(fnProp);

        responses.push(functionsResponse);
      } catch (e) {
        console.log(e);

        if (
          subSchema.content &&
          subSchema.modalType &&
          subSchema.validationSignup
        ) {
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
    }

    linkTo(
      subSchema.redirectTo.replace(keysRegEx, (match: string) =>
        addSlugToUrl(match, props)
      ) ?? '/feed'
    );

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
