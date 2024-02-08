import type { QraftClientOptions } from '../createQraftClient.js';
import { RequestSchema } from '../QraftContext.js';
import {
  ServiceOperationInfiniteQueryKey,
  ServiceOperationQuery,
} from '../ServiceOperation.js';

export const getInfiniteQueryKey = (
  qraftOptions: QraftClientOptions | undefined,
  schema: RequestSchema,
  args: Parameters<
    ServiceOperationQuery<
      RequestSchema,
      unknown,
      unknown
    >['getInfiniteQueryKey']
  >
) => {
  return [
    { url: schema.url, infinite: true },
    args[0],
  ] satisfies ServiceOperationInfiniteQueryKey<RequestSchema, unknown>;
};