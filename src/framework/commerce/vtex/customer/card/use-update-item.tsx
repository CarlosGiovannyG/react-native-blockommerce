import useUpdateItem, {
  UseUpdateItem,
} from '$core-commerce/customer/card/use-update-item';
import { MutationHook } from '$core-commerce/utils/types';

export default useUpdateItem as UseUpdateItem<any>;

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: '',
  },
  async fetcher({ input, options, fetch }) {},
  useHook:
    ({ fetch }) =>
      () => {
        return async function addItem() {
          return {};
        };
      },
};
