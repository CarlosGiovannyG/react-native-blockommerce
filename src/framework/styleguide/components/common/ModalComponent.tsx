import useSlotBlock from '$engine/render/hooks/useSlotBlock';

import { useStyleClass } from '$styleguide/styleContext';
import React, { FC, useState } from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { useUI } from '../UIActionsHandler';

interface ButtonProps {
  onSubmit: (...args: any) => void;
}

interface AcceptAndCancelType {
  onAccept: (...args: any) => void;
  onCancel: (...args: any) => void;
  acceptText: string;
  cancelText: string;
  styles: string;
}
interface ContinueType extends ButtonProps {
  continueText: string;
  styles: string;
}
interface CancelType extends ButtonProps {
  cancelText: string;
  styles: string;
}

export const AcceptAndCancel: FC<AcceptAndCancelType> = (props) => {
  const { styles } = useStyleClass(
    [
      'buttonAcceptContainer',
      'buttonCancelContainer',
      'textAcceptContainer',
      'textCancelContainer',
      'buttonsWrapper',
    ],
    props.styles
  );
  return (
    <View style={[styles.buttonsWrapper, { flexDirection: 'row' }]}>
      <TouchableOpacity
        style={styles.buttonCancelContainer}
        onPress={props.onCancel}
      >
        <Text style={styles.textCancelContainer}>{props.cancelText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonAcceptContainer}
        onPress={props.onAccept}
      >
        <Text style={styles.textAcceptContainer}>{props.acceptText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Continue: FC<ContinueType> = (props) => {
  const { styles } = useStyleClass(
    ['buttonContinueContainer', 'textContinueContainer'],
    props.styles
  );
  return (
    <TouchableOpacity
      style={styles.buttonContinueContainer}
      onPress={props.onSubmit}
    >
      <Text style={styles.textContinueContainer}>{props.continueText}</Text>
    </TouchableOpacity>
  );
};

export const Cancel: FC<CancelType> = (props) => {
  const { styles } = useStyleClass(
    ['buttonCancelContainer', 'textCancelContainer'],
    props.styles
  );
  return (
    <TouchableOpacity
      style={styles.buttonCancelContainer}
      onPress={props.onSubmit}
    >
      <Text style={styles.textCancelContainer}>Cancel</Text>
    </TouchableOpacity>
  );
};

export enum ModalModes {
  acceptCancel = 'acceptCancel',
  continue = 'continue',
  cancel = 'cancel',
  custom = 'custom',
}

export type ModalModesType =
  | ModalModes.acceptCancel
  | ModalModes.cancel
  | ModalModes.continue
  | ModalModes.custom;

export const ModalComponent: FC = () => {
  const {
    displayModal,
    modalType,
    title,
    description,
    modalContentBlock,
    styleModal,
    closeModal,
    onAccept,
  } = useUI();

  const { styles } = useStyleClass(
    ['buttonCancelContainer', 'textCancelContainer'],
    styleModal
  );

  const children = useSlotBlock(modalContentBlock);

  const onAcceptHandler = () => {
    if (onAccept) onAccept();
    closeModal();
  };

  const onCancelHandler = () => {
    closeModal();
  };

  const onContinueHandler = () => {
    if (onAccept) onAccept();
    closeModal();
  };

  return (
    <Modal animationType="fade" visible={displayModal} transparent={true}>
      <TouchableWithoutFeedback onPress={onCancelHandler}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={[defaultStyles.modalWrapper, styles.modalWrapper]}>
            {children}
            <Text>{title}</Text>
            <Text style={{ textAlign: 'center' }}>{description}</Text>
            {modalType === ModalModes.acceptCancel ? (
              <AcceptAndCancel
                acceptText={'Aceptar'}
                cancelText={'Cancelar'}
                onAccept={onAcceptHandler}
                onCancel={onCancelHandler}
                styles={styleModal}
              />
            ) : modalType === ModalModes.continue ? (
              <Continue
                continueText="Aceptar"
                styles={styleModal}
                onSubmit={onContinueHandler}
              />
            ) : (
              modalType === ModalModes.cancel && (
                <Cancel
                  cancelText=""
                  styles={styleModal}
                  onSubmit={onCancelHandler}
                />
              )
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const defaultStyles = StyleSheet.create({
  modalWrapper: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 6,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowOpacity: 0.25,
    elevation: 10,
    width: '88%',
  },
});
