/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useState } from 'react';
import { useStyleClass } from '../../../../styleContext';
import { TouchableOpacity } from 'react-native';
import { FormHandlerProvider, useFormHandler } from '../../context';
import { useLinkTo } from '@react-navigation/native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../../../hooks/types';
import { useUI } from '../../../UIActionsHandler';
import { FormProvider, useForm } from 'react-hook-form';
import useLogout from '$core-commerce/auth/use-logout';

export const SignoutComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['buttonContainer'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  const { openModal } = useUI();
  const { defaultValues } = useFormHandler();

  const [isLoading, setLoading] = useState(false);

  const methods = useForm({
    mode: subSchema.mode ? subSchema.mode : 'onSubmit',
    reValidateMode: subSchema.reValidateMode
      ? subSchema.reValidateMode
      : 'onChange',
    defaultValues: subSchema.defaultValues
      ? subSchema.defaultValues
      : defaultValues,
    resolver: undefined,
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const linkTo = useLinkTo();
  const logout = useLogout();

  const onSubmit = async () => {
    setLoading(true);

    try {
      openModal({
        content: subSchema.content,
        modalType: subSchema.modalType,
        style: subSchema.blockClass,
        onAccept: async () => {
          await logout();
          linkTo(subSchema.redirectTo ?? '/auth/login');
        },
      });
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };

  return (
    <FormHandlerProvider
      config={{ onSubmit, defaultValues: {}, submitIsLoading: isLoading }}
    >
      <FormProvider {...methods}>
        <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit}>
          {blocks}
        </TouchableOpacity>
      </FormProvider>
    </FormHandlerProvider>
  );
};
