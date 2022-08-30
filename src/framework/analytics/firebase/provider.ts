import fetcher from './fetcher';

import { handler as useAnalyticsEvent } from './events/use-event';

export type Provider = typeof localProvider;
export const localProvider = {
  fetcher: fetcher,
  events: { useAnalyticsEvent },
};
