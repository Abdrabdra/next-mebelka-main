import { IAnnouncementsResponse } from "@src/types/Announcements/IAnnouncement";
import { IGetCategoryResponse } from "@src/types/Announcements/ICategory/ICategory";
import { IOneAnnouncement } from "@src/types/Announcements/IOneAnnouncement";
import { IProductColor } from "@src/types/Announcements/IProductInfo/IProductInfo";
import { IGetRegion } from "@src/types/Announcements/IRegion/Region";
import { ICreateCart, IGetCart } from "@src/types/Cart/ICart";
import { IFeedbackResponse } from "@src/types/Feedback/IFeedback";
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

    getFeedback: builder.query<IFeedbackResponse, object>({
      query: (arg) => {
        return {
          url: `/feedback`,
          params: { ...arg },
        };
      },
      providesTags: ["feedback"],
    }),
    createFeedback: builder.mutation<
      any,
      {
        comment: string;
        star: number;
        productId: number;
      }
    >({
      query: (body) => {
        return {
          url: `/feedback`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["feedback"],
    }),

    getCart: builder.query<IGetCart[], string>({
      query: () => {
        return {
          url: `/cart`,
          // params: { ...arg },
        };
      },
      providesTags: ["cart"],
    }),
    createCart: builder.mutation<any, ICreateCart>({
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
    plusCart: builder.mutation<any, number>({
      query: (arg) => {
        return {
          url: `/cart/plus/${arg}`,
          method: "PUT",
        };
      },
      invalidatesTags: ["cart"],
    }),
    minceCart: builder.mutation<any, number>({
      query: (arg) => {
        return {
          url: `/cart/mince/${arg}`,
          method: "PUT",
        };
      },
      invalidatesTags: ["cart"],
    }),

    getMarket: builder.query<IGetCart[], string>({
      query: () => {
        return {
          url: `/market`,
          params: {
            page: 1,
            limit: 200,
          },
          // params: { ...arg },
        };
      },
      providesTags: ["cart"],
    }),

    getProductColor: builder.query<IProductColor[], any>({
      query: () => ({
        url: `product-info/color`,
        method: "GET",
        params: {
          page: 1,
          limit: 200,
        },
      }),
      providesTags: ["product-info-color"],
    }),
    getCity: builder.query<IGetRegion[], any>({
      query: () => ({
        url: `region`,
        params: {
          page: 1,
          limit: 200,
        },
      }),
      providesTags: ["city"],
    }),
    getCategory: builder.query<IGetCategoryResponse, any>({
      query: (arg) => ({
        url: `category`,
        params: { parentId: arg?.parentId, page: 1, limit: 200 },
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});

export const {
  useGetAnnouncementsQuery,
  useGetOneProductQuery,

  useGetFeedbackQuery,
  useCreateFeedbackMutation,

  useGetCartQuery,
  useCreateCartMutation,
  useDeleteCartMutation,
  usePlusCartMutation,
  useMinceCartMutation,

  useGetProductColorQuery,
  useGetCityQuery,
  useGetCategoryQuery,
} = announcementEndpoints;
