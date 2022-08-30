import fetcher from './fetcher';

import { handler as useCMSEvent } from './events/use-event';

export type Provider = typeof localProvider;
export const localProvider = {
  fetcher: fetcher,
  events: { useCMSEvent },
};
