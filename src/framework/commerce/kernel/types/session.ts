export interface Session {
  id?: string;
}

export interface SessionFields {
  country?: string;
  email: string;
  firstName: string;
  lastName: string;
  document: string;
  longitud: string;
  latitud: string;
  postalCode: string;
}

export type CustomerCardTypes = {
  session?: Session;
  fields: SessionFields;
};

export type CreateSessionHook<T extends CustomerCardTypes = CustomerCardTypes> =
  {
    data: T['session'];
    input?: T['fields'];
    fetcherInput: T['fields'];
    body: { item: T['fields'] };
    actionInput: T['fields'];
  };

export type UpdateSessionHook<T extends CustomerCardTypes = CustomerCardTypes> =
  {
    data: T['session'] | null;
    input: { item?: T['fields']; wait?: number };
    fetcherInput: { itemId: string; item: T['fields'] };
    body: { itemId: string; item: T['fields'] };
    actionInput: T['fields'];
  };
