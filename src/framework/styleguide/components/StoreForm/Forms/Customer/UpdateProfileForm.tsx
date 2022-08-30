/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useStyleClass } from '../../../../styleContext';
import { View } from 'react-native';
import { FormHandlerProvider } from '../../context';
import { useLinkTo, useNavigation, useRoute } from '@react-navigation/native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../../../hooks/types';
import { useForm, FormProvider } from 'react-hook-form';
import { useStoreFormHandler } from '../../Handler/Context/StoreFormContext';
import { useCustomer, useUpdateProfile } from '$commerce/customer';
import { yupResolver } from '@hookform/resolvers/yup';
import { createYupSchema } from '../../utils/buildSchemaValidation';
import * as yup from 'yup';
import useSession from '$commerce/session/use-session';
import { JSONSchemaType } from '$styleguide/JSONSchema';
import { useUI } from '$styleguide/components/UIActionsHandler';

export const UpdateProfileFormComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const [isLoading, setLoading] = useState(false);
  const subSchema = inputObject.getObject();
  const route = useRoute();
  const updateProfile = useUpdateProfile();
  const { isSignedIn, setIsSignedIn } = useSession();
  const { data } = useCustomer();
  const { openModal } = useUI();
  const linkTo = useLinkTo();
  const navigation = useNavigation();

  const addSlugToUrl = (match: string, item: any) =>
    item[match.replace('{', '').replace('}', '')];
  const keysRegEx = /\{(.*?)\}/gm;

  const redirect = (payload: unknown) =>
    subSchema.redirectTo
      ? linkTo(
          subSchema.redirectTo.replace(keysRegEx, (match: string) =>
            addSlugToUrl(match, payload)
          )
        )
      : null;

  const revalidateSignInState = () =>
    subSchema?.revalidateSignIn && setIsSignedIn(true);

  const onSubmit = async (props: any) => {
    setLoading(true);
    let payload = {
      ...props,
    };
    if (isSignedIn && data?.email) {
      payload = {
        ...payload,
        email: data?.email,
      };
      // @ts-ignore
    } else if (route?.params?.email) {
      payload = {
        ...payload,
        // @ts-ignore
        email: route.params?.email,
      };
    }
    try {
      await updateProfile(payload);
      if (subSchema.content && subSchema.modalType) {
        openModal({
          content: subSchema.content,
          modalType: subSchema.modalType,
          style: subSchema.blockClass,
          onAccept: () => {
            redirect(payload);
            /**
             * revalidateSignInState ejecuta setSignedIn lo que causa el desmontaje de las pantallas que tengan
             * como propiedad: unmountIfIsAuthenticated
             */
            revalidateSignInState();
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

  return !subSchema.nestedForm ? (
    <Modo1 subSchema={subSchema} onSubmit={onSubmit} isLoading={isLoading} />
  ) : (
    <Modo2 subSchema={subSchema} onSubmit={onSubmit} />
  );
};

interface Props {
  subSchema: JSONSchemaType;
  onSubmit: (...args: any) => void;
}

interface IndependentModeProps extends Props {
  isLoading: boolean;
}

const Modo1: FC<IndependentModeProps> = ({
  subSchema,
  onSubmit,
  isLoading,
}) => {
  const { styles } = useStyleClass(['formContainer'], subSchema.blockClass);

  const { data } = useCustomer();
  const yepSchema = useMemo(
    () => subSchema.schemaValidation.reduce(createYupSchema, {}),
    [subSchema.schemaValidation]
  );

  const validateSchema = yup.object().shape(yepSchema);

  const methods = useForm({
    mode: subSchema.mode ? subSchema.mode : 'onSubmit',
    reValidateMode: subSchema.reValidateMode
      ? subSchema.reValidateMode
      : 'onChange',
    defaultValues: subSchema.defaultValues ? subSchema.defaultValues : data,
    resolver: yupResolver(validateSchema),
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const blocks = useChildrenBlocks(subSchema.blocks);

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

const Modo2: FC<Props> = ({ subSchema, onSubmit }) => {
  const { styles } = useStyleClass(['formContainer'], subSchema.blockClass);

  const blocks = useChildrenBlocks(subSchema.blocks);
  const { setSubmitFunction } = useStoreFormHandler();
  useEffect(() => {
    setSubmitFunction({
      name: 'updateProfile',
      onSubmit: onSubmit,
      schemaDocument: {
        title: 'onSubmitProperties',
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
          },
          lastName: {
            type: 'string',
          },
          documentType: {
            type: 'string',
          },
          document: {
            type: 'number',
          },
          cellPhone: {
            type: 'number',
          },
          birthDate: {
            type: 'string',
          },
        },
      },
    });
  }, [onSubmit, setSubmitFunction]);
  return <View style={styles.formContainer}>{blocks}</View>;
};
