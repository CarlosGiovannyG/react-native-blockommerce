/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { useLinkTo, useNavigation, useRoute } from '@react-navigation/native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { useUI } from '$styleguide/components/UIActionsHandler';
import { createYupSchema } from '$styleguide/components/StoreForm/utils/buildSchemaValidation';
import { FormHandlerProvider } from '$styleguide/components/StoreForm/context';
import useStores from '$commerce/stores/use-stores';
import useUpdateItem from '$commerce/customer/address/use-update-item';
import { useAddresses } from '$commerce/customer/address';

export const UpdateAddressFormComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const [isLoading, setLoading] = useState(false);
  const subSchema = inputObject.getObject();
  const route = useRoute();
  const { styles } = useStyleClass(['formContainer'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  const { schemaValidation = [] } = subSchema;
  const yepSchema = schemaValidation.reduce(createYupSchema, {});

  const validateSchema = yup.object().shape(yepSchema);


  const { data: addresses } = useAddresses();

  const addressToEdit = addresses?.find((pred) => pred?.addressName === route?.params?.addressName)


  const methods = useForm({
    mode: subSchema.mode ? subSchema.mode : 'onSubmit',
    reValidateMode: subSchema.reValidateMode
      ? subSchema.reValidateMode
      : 'onChange',
    resolver: yupResolver(validateSchema),
    context: undefined,
    defaultValues: { "address": { "departments": { "label": addressToEdit?.city, "value": addressToEdit?.city }, "municipalicies": { "label": addressToEdit?.state, "value": addressToEdit?.state } }, "street": addressToEdit?.street },
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });
  const navigation = useNavigation();
  const linkTo = useLinkTo();
  const updateAddress = useUpdateItem();
  const { openModal } = useUI();

  const redirect = () =>
    subSchema.redirectTo && subSchema.redirectTo === 'goBack'
      ? navigation.goBack()
      : linkTo(subSchema.redirectTo ?? '/feed');

  const onSubmit = async (props: any) => {
    console.log(props)
    setLoading(true);
    try {
      await updateAddress({
        ...props,
        addressName: route?.params?.addressName,
      });
      if (subSchema.content && subSchema.modalType) {
        openModal({
          content: subSchema.content,
          modalType: subSchema.modalType,
          style: subSchema.blockClass,
          onAccept: () => {
            redirect();
          },
        });
      } else {
        redirect();
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  const { data } = useStores();

  return (
    <FormHandlerProvider
      config={{
        onSubmit,
        submitIsLoading: isLoading,
        defaultValues: data,
      }}
    >
      <FormProvider {...methods}>
        <View style={styles.formContainer}>{blocks}</View>
      </FormProvider>
    </FormHandlerProvider>
  );
};
