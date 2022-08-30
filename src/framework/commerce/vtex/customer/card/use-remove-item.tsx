import useRemoveItem, {
  UseRemoveItem,
} from '$core-commerce/customer/card/use-remove-item';
import { MutationHook } from '$core-commerce/utils/types';

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
