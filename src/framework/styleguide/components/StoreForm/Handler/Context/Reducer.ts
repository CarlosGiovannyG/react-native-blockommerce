import { ObjectJSONSchemaType } from '$styleguide/JSONSchema';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export interface State {
  setSubmitFunction(...args: any): void;
  formSubmitFunctions: {
    [key: string]: {
      name: string;
      onSubmit: FN;
      schemaDocument: ObjectJSONSchemaType;
    };
  };
}

export type FN = (...args: any) => Promise<any>;

export const initialState: State = {
  formSubmitFunctions: {},
  setSubmitFunction: () => {},
};

type ReducerActions = {
  type: 'SET_SUBMIT_FUNCTION';
  payload: SetSubmitFunctionProps;
};

export type SetSubmitFunctionProps = {
  name: string;
  onSubmit: FN;
  schemaDocument: ObjectJSONSchemaType;
};

const storeFormHandlerReducer = (state: State, action: ReducerActions) => {
  switch (action.type) {
    case 'SET_SUBMIT_FUNCTION': {
      return {
        ...state,
        formSubmitFunctions: {
          ...state.formSubmitFunctions,
          [action.payload.name]: {
            name: action.payload.name,
            onSubmit: action.payload.onSubmit,
            schemaDocument: action.payload.schemaDocument,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default storeFormHandlerReducer;
