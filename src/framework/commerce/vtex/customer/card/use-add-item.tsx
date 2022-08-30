import useAddItem, {
  UseAddItem,
} from '$core-commerce/customer/card/use-add-item';
import { MutationHook } from '$core-commerce/utils/types';

export default useAddItem as UseAddItem<typeof handler>;
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
