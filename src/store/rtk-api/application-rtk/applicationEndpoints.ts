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
  }),
});

export const { useCreateApplicationMutation } = applicationEndpoints;
