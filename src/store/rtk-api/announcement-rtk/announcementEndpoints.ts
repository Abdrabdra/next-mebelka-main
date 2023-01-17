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
  }),
});

export const { useGetAnnouncementsQuery } = announcementEndpoints;
