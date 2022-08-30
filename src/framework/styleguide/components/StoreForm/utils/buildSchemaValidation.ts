/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import * as yup from 'yup';

export function createYupSchema(
  schema: { [x: string]: any },
  config: { id: any; validationType: any; validations?: never[] | undefined }
) {
  const { id, validationType, validations = [] } = config;
  if (!yup[validationType]) {
    return schema;
  }

  let validator = yup[validationType]();
  validations.forEach((validation: { params: any; type: any }) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    const getParams = () => {
      return params?.map((param) => {
        if ((param?.type, param?.params)) {
          if (type === 'oneOf') return [yup[param?.type](...param.params)];
          else return yup[param?.type](...param.params);
        }
        return param;
      });
    };

    validator = validator[type](...getParams());
  });
  schema[id] = validator;
  return schema;
}
