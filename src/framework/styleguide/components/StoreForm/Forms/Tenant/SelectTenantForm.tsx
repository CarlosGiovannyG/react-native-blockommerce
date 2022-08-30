/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { useLinkTo, useNavigation } from '@react-navigation/native';
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
import useAddItem from '$commerce/customer/address/use-add-item';
import { useSelectAddress } from '$commerce/customer/address';

export const SelectTenantFormComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const [isLoading, setLoading] = useState(false);
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['formContainer'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  const { schemaValidation = [] } = subSchema;
  const yepSchema = schemaValidation.reduce(createYupSchema, {});

  const validateSchema = yup.object().shape(yepSchema);

  const methods = useForm({
    mode: subSchema.mode ? subSchema.mode : 'onSubmit',
    reValidateMode: subSchema.reValidateMode
      ? subSchema.reValidateMode
      : 'onChange',
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
  const SelectTenant = useSelectAddress();
  const { openModal } = useUI();

  const redirect = () =>
    subSchema.redirectTo && subSchema.redirectTo === 'goBack'
      ? navigation.goBack()
      : linkTo(subSchema.redirectTo ?? '/feed');

  const onSubmit = async (props: any) => {
    setLoading(true);
    try {
      await SelectTenant({
        postalCode: props.tenants?.tenants?.postalCode,
        addressId: props.tenants?.tenants?.id || props.tenants?.tenants?.name,
        addressType: 'search',
        state: props.tenants?.departments?.State,
        complement: props.tenants?.tenants?.complement,
        country: props.tenants?.tenants?.country,
        geoCoordinate: [
          props.tenants?.tenants?.lon,
          props.tenants?.tenants?.lat,
        ],
        neighborhood: props.tenants?.tenants?.neighborhood,
        number: props.tenants?.tenants?.number,
        reference: props.tenants?.tenants?.reference,
        street: props.tenants?.tenants?.street,
        city: props.tenants?.departments?.value,
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
  const { data } = useStores({ storesAvailable: true });

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
