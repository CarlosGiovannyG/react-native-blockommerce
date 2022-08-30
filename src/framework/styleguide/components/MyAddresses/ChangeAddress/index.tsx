/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, {
  FC,
  Fragment,
  memo,
  Suspense,
  useCallback,
  useMemo,
} from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useLinkTo, useNavigation } from '@react-navigation/native';

import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import { useStyleClass } from '$styleguide/styleContext';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useTheme } from '$styleguide/theme';
import { useUI } from '$styleguide/components/UIActionsHandler';
import useSession from '$commerce/session/use-session';
import { ModalModes } from '$styleguide/components/common/ModalComponent';

export const ChangeAddressComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const {
    theme: { palette },
  } = useTheme();

  const linkTo = useLinkTo();

  const navigation = useNavigation();
  const { openModal, closeModal, openActionSheet } = useUI();
  const { isSignedIn } = useSession();

  const block = useSlotBlock(subSchema.blockTitle);

  const existsContentProp = subSchema.content ? true : false;

  const typeAction = (typeAction: string) => {
    switch (subSchema.typeAction) {
      case 'action-sheet':
        openActionSheet({ content: subSchema.content });
        break;
      case 'modal':
        openModal({
          content: subSchema.content,
          modalType: subSchema.modalType,
          onAccept: () => {
            subSchema.redirectTo ? redirect() : closeModal();
          },
        });
        break;
      default:
        openActionSheet({ content: subSchema.content });
    }
  };

  const handleContent = () => {
    if (existsContentProp) {
      if (subSchema.isSignedInValidation && !isSignedIn) {
        openModal({
          content: subSchema.isSignedInValidationContent,
          modalType: ModalModes.acceptCancel,
          onAccept: () => {
            redirect();
          },
        });
      } else if (subSchema.typeAction) {
        typeAction(subSchema.typeAction);
      } else {
        redirect();
      }
    }
  };

  const Render = useCallback(() => {
    if (!subSchema.blockTitle)
      return <Text style={styles.textStyles}> Cambiar Dirección </Text>;
    return block;
  }, [subSchema.blockTitle]);

  const redirect = () =>
    subSchema.redirectTo && subSchema.redirectTo === 'goBack'
      ? navigation.goBack()
      : linkTo(subSchema.redirectTo ?? '/feed');

  return (
    <TouchableOpacity
      hitSlop={subSchema?.hitSlop}
      style={[styles.container]}
      onPress={handleContent}
    >
      {Render()}
    </TouchableOpacity>
  );
};
