import { MutationHook } from '$core-commerce/utils/types';
import useRemoveItem, {
  UseRemoveItem,
} from '$core-commerce/cart/use-remove-item';

export default useRemoveItem as UseRemoveItem<typeof handler>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: '',
  },
  async fetcher({ input, options, fetch }) {},
  useHook:
    ({ fetch }) =>
      () => {
        return async function removeItem(input) {
          return {};
        };
      },
};
