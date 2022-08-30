/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLinkTo, useRoute } from '@react-navigation/native';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import { useOtp } from '$commerce/auth';
import { OtpBody } from '$core-commerce/types/otp';
import { useStyleClass } from '$styleguide/styleContext';
import { useTheme } from '$styleguide/theme';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useUI } from '$styleguide/components/UIActionsHandler';
import reactStringReplace from '$styleguide/utils/reactStringReplace';

export const ResendCodeLink: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const linkTo = useLinkTo();
  const subSchema = props.inputObject.getObject();
  const { label, displayMode = 'anchor', url, blockClass } = subSchema;

  const { styles } = useStyleClass(['textStyles', 'container'], blockClass);
  const { theme, currentTheme } = useTheme();
  const RightIcon = useSlotBlock(subSchema.rightIcon);
  const LeftIcon = useSlotBlock(subSchema.leftIcon);
  const sendOtp = useOtp();
  const route = useRoute();
  const { openModal, closeModal } = useUI();
  const addSlugToUrl = (match: string, item: any) =>
    item[match.replace('{', '').replace('}', '')];
  const keysRegEx = /\{(.*?)\}/gm;

  const onSubmit = async (
    props: OtpBody & { onlyRedirect: true; redirectTo: string }
  ) => {
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
        await sendOtp({ email: props });
        openModal({
          content: subSchema.content,
          description: subSchema.modalDescription.replace(
            keysRegEx,
            (match: string) => addSlugToUrl(match, { email: props })
          ),
          modalType: subSchema.modalType,
          style: subSchema.blockClass,
          onAccept: () => {
            url
              ? linkTo(
                  url.replace(keysRegEx, (match: string) =>
                    addSlugToUrl(match, props)
                  ) ?? '/feed'
                )
              : closeModal();
          },
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        await sendOtp({ email: props });

        url && linkTo(url ?? '/feed');
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      {displayMode === 'button' ? (
        <TouchableOpacity
          style={[defaultStyles.buttonStyles, styles.container]}
          onPress={() => onSubmit(route.params?.email)}
        >
          {LeftIcon}
          <Text style={styles.textStyles}>{label}</Text>
          {RightIcon}
        </TouchableOpacity>
      ) : (
        <Text
          style={styles.textStyles}
          onPress={() => onSubmit(route.params?.email)}
        >
          {reactStringReplace(label, /\*\*(.*?)\*\*/gm, (match, i) => (
            <Text
              key={i}
              style={{
                fontWeight: 'bold',
                textDecorationLine: 'underline',
                color:
                  theme.palette[subSchema.variant ?? 'primary'][currentTheme],
              }}
            >
              {match}
            </Text>
          ))}
        </Text>
      )}
    </>
  );
};

const defaultStyles = StyleSheet.create({
  buttonStyles: {
    height: 48,
    borderRadius: 6,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
