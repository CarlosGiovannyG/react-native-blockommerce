export type TopSearchesBody = {};

export type TopSearchesTypes = {};

export type TopSearchesHook<T extends TopSearchesTypes = TopSearchesTypes> = {
  data: null;
  actionInput: TopSearchesBody;
  fetcherInput: TopSearchesBody;
  body: {};
};

export type TopSearchesSchema<T extends TopSearchesTypes = TopSearchesTypes> = {
  endpoint: {
    options: {};
    handlers: {
      login: TopSearchesHook<T>;
    };
  };
};

export type TopSearchesOperation = {
  data: { result?: string };
  variables: any;
};
