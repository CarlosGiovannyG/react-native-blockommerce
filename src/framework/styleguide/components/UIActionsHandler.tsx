import React, { FC, useCallback, useMemo } from 'react';
import { ModalModes, ModalModesType } from './common/ModalComponent';

export interface State {
  displayActionSheet: boolean;
  displayModal: boolean;
  title?: string;
  description?: string;
  modalType: string;
  actionSheetContentBlock: string | null;
  modalContentBlock: string | null;
  params?: {
    [key: string]: unknown
  }
  styleModal: string | null;
  onAccept?: ((...args: any) => void) | null;
  onCancel?: ((...args: any) => void) | null;
  onSubmit?: ((...args: any) => void) | null;
}

export interface UIFNActions {
  openActionSheet: (props: ActionSheetFNProps) => void;
  closeActionSheet: () => void;
  openModal: (props: ModalFNProps) => void;
  closeModal: () => void;
}

const initialState: State = {
  displayActionSheet: false,
  actionSheetContentBlock: null,
  modalContentBlock: null,
  params: {},
  displayModal: false,
  modalType: ModalModes.continue,
  styleModal: null,
  title: '',
  description: '',
  onAccept: null,
  onCancel: null,
  onSubmit: null,
};

type Action =
  | {
      type: 'OPEN_ACTION_SHEET';
      payload: ActionSheetFNProps;
    }
  | {
      type: 'CLOSE_ACTION_SHEET';
    }
  | {
      type: 'OPEN_MODAL';
      payload: ModalFNProps;
    }
  | {
      type: 'CLOSE_MODAL';
    };

export const UIContext = React.createContext<State>(initialState);

UIContext.displayName = 'UIContext';

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'OPEN_ACTION_SHEET': {
      return {
        ...state,
        displayActionSheet: true,
        actionSheetContentBlock: action.payload,
        params: action.payload.params,
      };
    }
    case 'CLOSE_ACTION_SHEET': {
      return {
        ...state,
        displayActionSheet: false,
      };
    }
    case 'OPEN_MODAL': {
      const getFunctions = () => {
        let functions = {};
        if (action.payload.onAccept) {
          functions = {
            ...functions,
            onAccept: action.payload.onAccept,
          };
        }
        if (action.payload.onCancel) {
          functions = {
            ...functions,
            onCancel: action.payload.onCancel,
          };
        }
        if (action.payload.onSubmit) {
          functions = {
            ...functions,
            onSubmit: action.payload.onSubmit,
          };
        }
        return functions;
      };
      const functions = getFunctions();

      return {
        ...state,
        displayModal: true,
        title: action.payload.title,
        description: action.payload.description,
        modalType: action.payload.modalType,
        modalContentBlock: action.payload.content,
        params: action.payload.params,
        styleModal: action.payload.style,
        ...functions,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        displayModal: false,
      };
    }
    default:
      return state;
  }
}

type ActionSheetFNProps = {
  content: string;
  params?: {
    [key: string]: unknown
  }
};

type ModalFNProps = {
  content?: string;
  title?: string;
  description?: string;
  modalType: ModalModesType;
  modalContentBlock?: string;
  params?: {
    [key: string]: unknown
  }
  style?: string;
  onAccept?: (...args: any) => void;
  onCancel?: (...args: any) => void;
  onSubmit?: (...args: any) => void;
};

export const UIProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const openActionSheet = useCallback(
    (props: ActionSheetFNProps) =>
      dispatch({ type: 'OPEN_ACTION_SHEET', payload: props }),
    [dispatch]
  );
  const closeActionSheet = useCallback(
    () => dispatch({ type: 'CLOSE_ACTION_SHEET' }),
    [dispatch]
  );
  const openModal = useCallback(
    (props: ModalFNProps) => dispatch({ type: 'OPEN_MODAL', payload: props }),
    [dispatch]
  );
  const closeModal = useCallback(
    () => dispatch({ type: 'CLOSE_MODAL' }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      openActionSheet,
      closeActionSheet,
      openModal,
      closeModal,
    }),
    [closeActionSheet, closeModal, openActionSheet, openModal, state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context as State & UIFNActions;
};

export const ManagedUIContext: FC = ({ children }) => (
  <UIProvider>{children}</UIProvider>
);
