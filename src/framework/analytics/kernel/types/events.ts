export type EventsBody = {
};

export type EventsTypes = {
  body: EventsBody;
};

export type EventsHook<T extends EventsTypes = EventsTypes> = {
  data: null;
  actionInput: EventsBody;
  fetcherInput: EventsBody;
  body: T['body'];
};


export type EventsOperation = {
  data: { result?: string };
  variables: any;
};
