import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "announcementApi",
  baseQuery: baseQuery,
  tagTypes: [
    "announcements",
    "feedback",
    "cart",
    "product-info-color",
    "city",
    "category",
  ],
  endpoints: () => ({}),
});
