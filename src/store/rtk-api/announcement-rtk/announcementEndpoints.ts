import announcementApi from "./announcementApi";

export const announcementEndpoints = announcementApi.injectEndpoints({
  endpoints: (builder) => ({
    getAnnouncements: builder.query<any, object>({
      query: (arg) => {
        return {
          url: `/announcement`,
          params: { ...arg },
        };
      },
      providesTags: ["announcements"],
    }),

    getFeedback: builder.query<any, object>({
      query: (arg) => {
        return {
          url: `/feedback`,
          params: { ...arg },
        };
      },
      providesTags: ["feedback"],
    }),
    createFeedback: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `/feedback`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["feedback"],
    }),
  }),
});

export const {
  useGetAnnouncementsQuery,

  useGetFeedbackQuery,
  useCreateFeedbackMutation,
} = announcementEndpoints;
