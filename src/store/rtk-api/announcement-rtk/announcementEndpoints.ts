import { IAnnouncementsResponse } from "@src/types/Announcements/IAnnouncement";
import { IOneAnnouncement } from "@src/types/Announcements/IOneAnnouncement";
import announcementApi from "./announcementApi";

export const announcementEndpoints = announcementApi.injectEndpoints({
  endpoints: (builder) => ({
    getAnnouncements: builder.query<IAnnouncementsResponse, object>({
      query: (arg) => {
        return {
          url: `/product`,
          params: { ...arg },
        };
      },
      providesTags: ["announcements"],
    }),
    getOneProduct: builder.query<IOneAnnouncement, string>({
      query: (id) => ({
        url: `/product/${id}`,
      }),
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

    createCart: builder.mutation<any, { qty: number; productId: number }>({
      query: (body) => {
        return {
          url: `/cart`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["cart"],
    }),
    deleteCart: builder.mutation<any, number>({
      query: (arg) => {
        return {
          url: `/cart/${arg}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useGetAnnouncementsQuery,
  useGetOneProductQuery,

  useGetFeedbackQuery,
  useCreateFeedbackMutation,
  useCreateCartMutation,

  useDeleteCartMutation,
} = announcementEndpoints;
