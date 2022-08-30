// Index
export type Orders = any;
export type Order = {
  orderId: string;
  value: string;
  totals: any;
  clientProfileData: any;
  shippingData: any;
  items: any;
};

export type OrdersTypes = {
  orders?: Orders;
  order: Order;
  orderById: OrderByIdBody;
};

export type GetOrdersHook<T extends OrdersTypes = OrdersTypes> = {
  data: T['orders'] | null;
  fetchData: { getOrders: { list: T['orders'] } } | null;
  input: {};
  fetcherInput: { cartId?: string };
  swrState: { isEmpty?: boolean };
};

export type OrderByIdBody = {
  orderId: string;
};

export type GetOrderByIdHook<T extends OrdersTypes = OrdersTypes> = {
  data: T['order'] | null;
  fetchData: { getOrderById: T['order'] } | null;
  fetcherInput: T['orderById'];
  input: T['orderById'];
};

export type OrdersHooks<T extends OrdersTypes = OrdersTypes> = {
  getOrders: GetOrdersHook<T>;
  getOrderById: GetOrderByIdHook<T>;
};

export type GetOrdersHandler<T extends OrdersTypes = OrdersTypes> =
  GetOrdersHook<T> & {
    body: { cartId: string };
  };

export type OrdersHandlers<T extends OrdersTypes = OrdersTypes> = {
  getOrders: GetOrdersHandler<T>;
};
