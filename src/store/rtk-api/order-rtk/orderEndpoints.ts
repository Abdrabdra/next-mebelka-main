import { ICreateOrder } from "@src/types/Order/IOrder";
import orderApi from "./orderApi";

export const orderEndpoints = orderApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<any, ICreateOrder>({
      query: (body) => ({
        url: "order",
        method: "POST",
        body,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const { useCreateOrderMutation } = orderEndpoints;
