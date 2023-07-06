import { ISmsCheck } from "@src/types/Sms/ISms";
import applicationApi from "./applicationApi";

export const applicationEndpoints = applicationApi.injectEndpoints({
  endpoints: (builder) => ({
    createApplication: builder.mutation<any, any>({
      query: (body) => ({
        url: "market",
        method: "POST",
        body,
      }),
      invalidatesTags: ["application"],
    }),

    // SMS
    sendSms: builder.mutation<any, { phone: string }>({
      query: (body) => ({
        url: `/sms/send-code`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["sms"],
    }),
    checkSms: builder.mutation<ISmsCheck, { phone: string; code: number }>({
      query: (body) => ({
        url: `/sms/check`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["sms"],
    }),
  }),
});

export const {
  useCreateApplicationMutation,
  useSendSmsMutation,
  useCheckSmsMutation,
} = applicationEndpoints;
