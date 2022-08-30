import { Interface } from '$engine/typings';

const interfaces: Record<string, Interface> = {
  'rich-text': {
    component: 'text',
    contentSchema: {
      type: 'object',
      properties: {
        text: {
          type: 'string',
          title: 'Text',
        },
        textAlign: {
          type: 'string',
          title: 'Text Align',
        },
      },
    },
  },
};

export default interfaces;
