export type GiftCards = {};


export type GiftCardsTypes = {
  cards?: GiftCards;
};

export type GiftCardsHooks<T extends GiftCardsTypes = GiftCardsTypes> = {
  getGiftCards: GetGiftCardsHook<T>;
};

export type GetGiftCardsHook<T extends GiftCardsTypes = GiftCardsTypes> = {
  data: T['cards'] | null;
  input: {};
  fetcherInput: { orderFormId?: string };
  swrState: { isEmpty?: boolean };
};